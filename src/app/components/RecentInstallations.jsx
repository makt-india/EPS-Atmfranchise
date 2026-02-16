import { MapPin, Calendar, CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    id: 1,
    location: "Tiruchengode, Tamil Nadu",
    date: "Jan 24, 2026",
    status: "Live & Transacting",
    img: "/img/Eps1.webp",
  },
  {
    id: 2,
    location: "Tamil Nadu",
    date: "Jan 10, 2026",
    status: "Live & Transacting",
    img: "/img/Eps2.webp",
  },
  {
    id: 3,
    location: "Tamil Nadu",
    date: "Dec 15, 2025",
    status: "Live & Transacting",
    img: "/img/Eps3.webp",
  },
  {
    id: 4,
    location: "Tamil Nadu",
    date: "Nov 22, 2025",
    status: "Live & Transacting",
    img: "/img/Eps4.webp",
  },
];

export default function RecentInstallations() {
  return (
    <section id="recent-installations"
      className="py-20 bg-gradient-to-b from-[#0f0a2b] to-[#1d134c] relative overflow-hidden"
      aria-labelledby="recent-installations-heading"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2
            id="recent-installations-heading"
            className="text-3xl md:text-4xl font-bold text-white mb-6"
          >
            Recent{" "}
            <span className="text-emerald-400">
              EPS ATM Franchise Installations
            </span>{" "}
            in India
          </h2>

          <p className="text-slate-300 text-lg leading-relaxed">
            Explore live EPS White Label ATM franchise locations across India.
            These installations demonstrate active transaction performance and
            structured operational deployment.
          </p>
        </div>

        {/* GRID (Desktop Clean Layout) */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-[#151037] border border-white/5 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-56 w-full">
                <Image
                  src={project.img}
                  alt={`EPS ATM franchise installation in ${project.location}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />

                <div className="absolute top-3 right-3 bg-emerald-500/90 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" />
                  {project.status}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-2 text-emerald-400 mb-2">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm font-semibold uppercase tracking-wide">
                    {project.location}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-4">
                  EPS White Label ATM Franchise
                </h3>

                <div className="flex items-center justify-between text-slate-400 text-sm border-t border-white/5 pt-4">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {project.date}
                  </div>
                  <span className="text-emerald-400 font-medium">
                    Verified Location
                  </span>
                </div>
              </div>
            </div>
          ))}

        </div>

        {/* CTA BLOCK */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            Ready to Launch Your ATM Franchise in India?
          </h3>

          <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
            EPS supports installation, site evaluation, approval coordination,
            and centralized monitoring. Check availability in your location.
          </p>

          <Link
            href="/apply-now"
            className="inline-flex items-center gap-2 px-8 py-4 bg-emerald-500 text-white font-bold rounded-xl hover:bg-emerald-600 transition-colors"
          >
            Apply for EPS ATM Franchise
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

      </div>
    </section>
  );
}
