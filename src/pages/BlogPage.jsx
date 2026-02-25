import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { client, urlFor } from "../sanityClient";

const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log("Fetching blogs from Sanity...");
    const timeout = setTimeout(() => {
      if (loading) {
        console.warn(
          "Fetch is taking longer than expected. Possible CORS or network issue.",
        );
      }
    }, 5000);

    client
      .fetch(`*[_type == "blog"] | order(date desc)`)
      .then((data) => {
        console.log("Fetched blogs successfully:", data.length);
        setBlogs(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Sanity fetch error:", err);
        setError(err);
        setLoading(false);
      })
      .finally(() => clearTimeout(timeout));
  }, [loading]);

  if (loading)
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4">
        <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
        <p className="font-bold text-gray-500">Loading Insights...</p>
      </div>
    );

  if (error)
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4 px-4 text-center">
        <p className="text-red-500 font-bold text-xl">Connection Error</p>
        <p className="text-gray-500 max-w-md">
          Could not connect to Sanity CMS. Please ensure your project ID is
          correct and CORS origins are configured in Sanity Manage.
        </p>
        <button
          onClick={() => window.location.reload()}
          className="bg-black text-white px-6 py-2 rounded-full font-bold"
        >
          Retry
        </button>
      </div>
    );

  if (blogs.length === 0)
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4">
        <p className="text-gray-500 font-bold text-xl">No blogs found.</p>
        <p className="text-gray-400">
          Please add some blog posts in your Sanity Studio.
        </p>
      </div>
    );

  const featuredPost = blogs[0];
  const otherPosts = blogs.slice(1);

  return (
    <div className="min-h-screen bg-[#FDFBF7] pt-20 md:pt-24 pb-16 md:pb-20 font-sans">
      <div className="container mx-auto px-4 md:px-6 lg:px-12 xl:px-24">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-8 md:mb-12 gap-4 md:gap-6">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-primary font-bold tracking-widest text-xs uppercase mb-2 block"
            >
              Our Blog
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl lg:text-5xl font-black text-black"
            >
              Insights & Stories
            </motion.h1>
          </div>
        </div>

        {/* Featured Post */}
        <Link
          to={`/blog/${featuredPost._id}`}
          className="block group mb-12 md:mb-16"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white p-3 md:p-5 rounded-2xl md:rounded-3xl shadow-sm hover:shadow-lg transition-all duration-300 grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 items-center"
          >
            <div className="h-48 md:h-64 lg:h-96 rounded-2xl md:rounded-3xl overflow-hidden relative w-full">
              <img
                src={urlFor(featuredPost.image).url()}
                alt={featuredPost.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute top-3 md:top-4 left-3 md:left-4 bg-white/90 backdrop-blur px-3 md:px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                Featured
              </div>
            </div>
            <div className="px-2 md:pr-4">
              <div className="flex gap-3 md:gap-4 text-xs font-bold text-gray-400 uppercase tracking-widest mb-3 md:mb-4">
                <span>{new Date(featuredPost.date).toLocaleDateString()}</span>
                <span>•</span>
                <span>{featuredPost.readingTime} Read</span>
              </div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4 group-hover:text-primary transition-colors leading-tight">
                {featuredPost.title}
              </h2>
              <p className="text-gray-500 leading-relaxed mb-6 md:mb-8 text-sm md:text-base lg:text-lg line-clamp-3">
                {featuredPost.summary}
              </p>
              <span className="inline-flex items-center gap-2 font-bold text-sm md:text-base text-black border-b-2 border-black pb-1 group-hover:text-primary group-hover:border-primary transition-colors">
                Read Article
                <svg
                  width="20"
                  height="20"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </span>
            </div>
          </motion.div>
        </Link>

        {/* Post Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {otherPosts.map((post, i) => (
            <motion.div
              key={post._id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Link to={`/blog/${post._id}`} className="block group h-full">
                <div className="bg-white p-3 md:p-5 rounded-2xl md:rounded-3xl h-full flex flex-col shadow-sm hover:shadow-lg transition-all duration-300">
                  <div className="h-48 md:h-56 rounded-xl md:rounded-2xl overflow-hidden mb-4 md:mb-6 relative">
                    <img
                      src={urlFor(post.image).url()}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-2 md:top-3 left-2 md:left-3 bg-black/50 backdrop-blur text-white px-2 md:px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">
                      {post.tag}
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col">
                    <div className="flex justify-between items-center text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 md:mb-3">
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                      <span>{post.readingTime}</span>
                    </div>
                    <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 group-hover:text-primary transition-colors leading-snug">
                      {post.title}
                    </h3>
                    <p className="text-gray-500 text-xs md:text-sm leading-relaxed line-clamp-3 mb-3 md:mb-4 flex-1">
                      {post.summary}
                    </p>
                    <div className="flex items-center gap-2 text-xs md:text-sm font-bold text-black group-hover:text-primary transition-colors">
                      Read More
                      <svg
                        width="16"
                        height="16"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
