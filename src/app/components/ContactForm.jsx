"use client";

import { motion } from "framer-motion";
import { CheckCircle, ArrowRight, Loader2 } from "lucide-react";
import { useState } from "react";

const indianStates = [
  "Andhra Pradesh","Arunachal Pradesh","Assam","Bihar","Chhattisgarh",
  "Goa","Gujarat","Haryana","Himachal Pradesh","Jharkhand",
  "Karnataka","Kerala","Madhya Pradesh","Maharashtra","Manipur",
  "Meghalaya","Mizoram","Nagaland","Odisha","Punjab",
  "Rajasthan","Sikkim","Tamil Nadu","Telangana","Tripura",
  "Uttar Pradesh","Uttarakhand","West Bengal"
];

const messageSuggestions = [
  "I want to apply for an ATM franchise.",
  "I need full details about investment and returns.",
  "I want to check if my location is eligible.",
  "Please call me and explain the process.",
  "I already have a shop and want to install an ATM."
];

export default function ContactForm() {

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    city: "",
    provider: "",
    language: "",
    message: "",
  });

  const indianMobileRegex = /^91[6-9]\d{9}$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const formatPhone = (phone) => {
    const digits = phone.replace(/\D/g, "");

    if (digits.length === 10 && /^[6-9]/.test(digits)) {
      return "91" + digits;
    }

    if (digits.length === 12 && digits.startsWith("91")) {
      return digits;
    }

    return "";
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;

    setError("");
    setIsSuccess(false);

    const cleanPhone = formatPhone(formData.phone);

    if (!indianMobileRegex.test(cleanPhone)) {
      setError("Enter valid 10-digit Indian mobile number.");
      return;
    }

    if (
      !formData.fullName.trim() ||
      !formData.city.trim() ||
      !formData.email.trim() ||
      !formData.provider ||
      !formData.language ||
      !formData.message.trim()
    ) {
      setError("Please fill all required fields.");
      return;
    }

    if (formData.message.trim().length < 10) {
      setError("Message must be at least 10 characters.");
      return;
    }

    if (!emailRegex.test(formData.email.trim())) {
      setError("Enter valid email address.");
      return;
    }

    setIsSubmitting(true);

    try {
      const formDataToSend = new FormData();
      formDataToSend.append("name", formData.fullName.trim());
      formDataToSend.append("phone", cleanPhone);
      formDataToSend.append("email", formData.email.trim());
      formDataToSend.append("city", formData.city.trim());
      formDataToSend.append("provider", formData.provider);
      formDataToSend.append("language", formData.language);
      formDataToSend.append("message", formData.message.trim());
      formDataToSend.append("source", "EPSAtmFranchise");
      formDataToSend.append("wa_status", "Pending");

    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbzMwI2gQAKJSHTSHKSi78wimhCvYfbMpOMcICWMw5cEetQWFnYT7vXqu5H-JPsegUy3/exec",
      
      {
        method: "POST",
        body: formDataToSend,
      }
    );

      if (!response.ok) throw new Error("Server error");

      const text = await response.text();
      const result = text.trim().toLowerCase();

      if (result.includes("success")) {
        setIsSuccess(true);
        setFormData({
          fullName: "",
          phone: "",
          email: "",
          city: "",
          provider: "",
          language: "",
          message: "",
        });
        window.scrollTo({ top: 0, behavior: "smooth" });
      } 
      else if (result.includes("duplicate")) {
        setError("This mobile number has already applied.");
      } 
      else {
        setError("Something went wrong. Please try again.");
      }

    } catch (err) {
      setError("Network error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <InputField label="Full Name" name="fullName" value={formData.fullName} onChange={handleChange} required placeholder="John Doe" />
        <InputField label="Phone Number" name="phone" type="tel" value={formData.phone} onChange={handleChange} required placeholder="+91 9876543210" />
      </div>

      <InputField label="Email Address" name="email" type="email" value={formData.email} onChange={handleChange} required placeholder="name@email.com" />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

        <InputField
          label="State"
          name="city"
          value={formData.city}
          onChange={handleChange}
          required
          placeholder="Type State"
          list="stateList"
        />

        <datalist id="stateList">
          {indianStates.map((state) => (
            <option key={state} value={state} />
          ))}
        </datalist>

        <SelectField
          label="Preferred Provider"
          name="provider"
          value={formData.provider}
          onChange={handleChange}
          required
          options={[
            "EPS ATM",
            "Hitachi Money Spot",
            "India1 (Indicash)",
            "Findi Payments",
            "Not Sure (Need Advice)"
          ]}
        />

        <SelectField
          label="Preferred Language"
          name="language"
          value={formData.language}
          onChange={handleChange}
          required
          options={[
            "English",
            "Hindi",
            "Kannada",
            "Telugu",
            "Tamil"
          ]}
        />
      </div>

      <InputField
        label="Message / Query"
        name="message"
        value={formData.message}
        onChange={handleChange}
        placeholder="Type your query..."
        list="messageOptions"
        required
      />

      <datalist id="messageOptions">
        {messageSuggestions.map((item) => (
          <option key={item} value={item} />
        ))}
      </datalist>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-4 bg-gradient-to-r from-[#1d134c] to-[#3f2aa3] text-white font-bold rounded-xl shadow-lg transition-all flex items-center justify-center gap-3"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="animate-spin w-5 h-5" />
            Submitting...
          </>
        ) : (
          <>
            Submit Application
            <ArrowRight className="w-5 h-5" />
          </>
        )}
      </button>

      {isSuccess && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="p-4 bg-emerald-50 border border-emerald-100 rounded-xl text-emerald-700 text-sm text-center font-bold flex items-center justify-center gap-2"
        >
          <CheckCircle className="w-5 h-5" />
          Submitted Successfully!
        </motion.div>
      )}

      {error && (
        <div className="p-4 bg-red-50 border border-red-100 rounded-xl text-red-600 text-sm text-center font-medium">
          {error}
        </div>
      )}
    </form>
  );
}

/* -------------------- Helper Components -------------------- */

function InputField({ label, name, value, onChange, required, type = "text", placeholder = "", list = null }) {
  return (
    <div className="space-y-1.5">
      <label htmlFor={name} className="text-[13px] font-bold text-slate-700 block ml-1">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        list={list}
        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-[#4F293D]/5 focus:border-[#4F293D] text-sm"
      />
    </div>
  );
}

function SelectField({ label, name, value, onChange, required, options = [] }) {
  return (
    <div className="space-y-1.5">
      <label htmlFor={name} className="text-[13px] font-bold text-slate-700 block ml-1">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <select
        id={name}
        name={name}
        required={required}
        value={value}
        onChange={onChange}
        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-[#4F293D]/5 focus:border-[#4F293D] text-sm"
      >
        <option value="">Select {label}</option>
        {options.map((option) => (
          <option key={option} value={option}>{option}</option>
        ))}
      </select>
    </div>
  );
}
