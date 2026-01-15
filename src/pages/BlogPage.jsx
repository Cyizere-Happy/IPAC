import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { blogPosts } from '../data/blogData';

const BlogPage = () => {
    // Featured post is the first one, others are the rest
    const featuredPost = blogPosts[0];
    const otherPosts = blogPosts.slice(1);

    return (
        <div className="min-h-screen bg-[#FDFBF7] pt-24 pb-20 font-sans">
            <div className="container mx-auto px-6 md:px-12 lg:px-24">

                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
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
                            className="text-4xl md:text-5xl font-black text-black"
                        >
                            Insights & Stories
                        </motion.h1>
                    </div>
                </div>

                {/* Featured Post */}
                <Link to={`/blog/${featuredPost.id}`} className="block group mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="bg-white p-5 rounded-3xl shadow-sm hover:shadow-lg transition-all duration-300 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
                    >
                        <div className="h-64 md:h-96 rounded-3xl overflow-hidden relative w-full">
                            <img
                                src={featuredPost.image}
                                alt={featuredPost.title}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                                Featured
                            </div>
                        </div>
                        <div className="pr-4">
                            <div className="flex gap-4 text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">
                                <span>{featuredPost.date}</span>
                                <span>•</span>
                                <span>{featuredPost.readTime} Read</span>
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-4 group-hover:text-primary transition-colors leading-tight">
                                {featuredPost.title}
                            </h2>
                            <p className="text-gray-500 leading-relaxed mb-8 text-lg line-clamp-3">
                                {featuredPost.summary}
                            </p>
                            <span className="inline-flex items-center gap-2 font-bold text-black border-b-2 border-black pb-1 group-hover:text-primary group-hover:border-primary transition-colors">
                                Read Article
                                <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </span>
                        </div>
                    </motion.div>
                </Link>

                {/* Post Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {otherPosts.map((post, i) => (
                        <motion.div
                            key={post.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                        >
                            <Link to={`/blog/${post.id}`} className="block group h-full">
                                <div className="bg-white p-5 rounded-3xl h-full flex flex-col shadow-sm hover:shadow-lg transition-all duration-300">
                                    <div className="h-56 rounded-2xl overflow-hidden mb-6 relative">
                                        <img
                                            src={post.image}
                                            alt={post.title}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                        <div className="absolute top-3 left-3 bg-black/50 backdrop-blur text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">
                                            {post.category}
                                        </div>
                                    </div>
                                    <div className="flex-1 flex flex-col">
                                        <div className="flex justify-between items-center text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">
                                            <span>{post.date}</span>
                                            <span>{post.readTime}</span>
                                        </div>
                                        <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors leading-snug">
                                            {post.title}
                                        </h3>
                                        <p className="text-gray-500 text-sm leading-relaxed line-clamp-3 mb-4 flex-1">
                                            {post.summary}
                                        </p>
                                        <div className="flex items-center gap-2 text-sm font-bold text-black group-hover:text-primary transition-colors">
                                            Read More
                                            <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
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
