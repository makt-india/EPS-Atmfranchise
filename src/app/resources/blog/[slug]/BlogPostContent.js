"use client";

import Link from "next/link";
import { ArrowLeft, Calendar, Clock, Share2, Facebook, Twitter, Linkedin } from "lucide-react";
import { motion } from "framer-motion";

export default function BlogPostContent({ post }) {
  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Post Not Found</h1>
          <Link href="/resources/blog" className="text-blue-600 hover:underline">
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen pb-20">
      {/* HEADER */}
      <div className="bg-[#1d134c] text-white py-16 md:py-24 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/img/grid-pattern.svg')] opacity-10 pointer-events-none"></div>
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <Link
            href="/resources/blog"
            className="inline-flex items-center gap-2 text-blue-200 hover:text-white mb-8 transition-colors text-sm font-medium"
          >
            <ArrowLeft className="w-4 h-4" /> Back to All Articles
          </Link>

          <div className="flex items-center gap-3 mb-6">
            <span className="px-3 py-1 bg-blue-500 text-white text-xs font-bold rounded-full uppercase tracking-wide">
              {post.category}
            </span>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-extrabold leading-tight mb-6"
          >
            {post.title}
          </motion.h1>

          <div className="flex flex-wrap items-center gap-6 text-blue-100/80 text-sm">
            <span className="flex items-center gap-2">
              <Calendar className="w-4 h-4" /> {post.date}
            </span>
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4" /> {post.readTime}
            </span>
            <span className="flex items-center gap-2">
              By <span className="text-white font-semibold">EPS Editorial Team</span>
            </span>
          </div>
        </div>
      </div>

      {/* CONTENT */}
      <div className="max-w-4xl mx-auto px-6 -mt-10 relative z-20">
        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 md:p-12">
          {/* Share Sidebar (Desktop) */}
          <div className="hidden lg:flex flex-col gap-4 absolute -left-20 top-0">
            <div className="p-3 bg-gray-50 rounded-full text-gray-400 hover:text-[#1877F2] hover:bg-blue-50 transition cursor-pointer">
              <Facebook className="w-5 h-5" />
            </div>
            <div className="p-3 bg-gray-50 rounded-full text-gray-400 hover:text-[#1DA1F2] hover:bg-blue-50 transition cursor-pointer">
              <Twitter className="w-5 h-5" />
            </div>
            <div className="p-3 bg-gray-50 rounded-full text-gray-400 hover:text-[#0A66C2] hover:bg-blue-50 transition cursor-pointer">
              <Linkedin className="w-5 h-5" />
            </div>
            <div className="p-3 bg-gray-50 rounded-full text-gray-400 hover:text-gray-900 hover:bg-gray-100 transition cursor-pointer">
              <Share2 className="w-5 h-5" />
            </div>
          </div>

          <article className="prose prose-lg max-w-none prose-headings:text-[#1d134c] prose-a:text-blue-600 prose-img:rounded-xl">
            {/* We render HTML content safely here */}
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </article>

          {/* Bottom CTA */}
          <div className="mt-16 p-8 bg-blue-50 rounded-2xl border border-blue-100 text-center">
            <h3 className="text-2xl font-bold text-[#1d134c] mb-3">
              Want to start your own Franchise?
            </h3>
            <p className="text-gray-600 mb-6">
              Join 150+ successful partners in the EPS network today.
            </p>
            <Link
              href="/apply-now"
              className="inline-block bg-[#1d134c] text-white px-8 py-3 rounded-xl font-bold hover:bg-blue-900 transition shadow-lg"
            >
              Apply Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}