import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { blogPosts } from '../data/blogData';

const BlogPostPage = () => {
    const { id } = useParams();
    const post = blogPosts.find(p => p.id === parseInt(id));
    // Show up to 6 related posts
    const relatedPosts = blogPosts.filter(p => p.id !== parseInt(id)).slice(0, 6);

    // Like state
    const [likes, setLikes] = useState(0);
    const [liked, setLiked] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
        if (post) setLikes(post.likes);
        setLiked(false);
    }, [id, post]);

    const handleLike = () => {
        if (!liked) {
            setLikes(prev => prev + 1);
            setLiked(true);
        }
    };

    const handleScrollTo = (e, id) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            const offset = 100; // Adjust for fixed header if needed
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = element.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    if (!post) return <div className="text-center py-20">Post not found</div>;

    return (
        <div className="min-h-screen bg-[#FDFBF7] font-sans">
            {/* Hero Section with Overlay */}
            <div className="relative h-[60vh] md:h-[70vh] w-full overflow-hidden">
                <div className="absolute inset-0 bg-black/40 z-10" />
                <img
                    src={post.image}
                    alt={post.title}
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 z-20 flex items-center justify-center text-center px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl"
                    >
                        <span className="inline-block px-4 py-1 rounded-full border border-white/30 bg-white/10 backdrop-blur text-white text-xs font-bold uppercase tracking-widest mb-6">
                            {post.category}
                        </span>
                        <h1 className="text-4xl md:text-6xl font-black text-white leading-tight mb-8">
                            {post.title}
                        </h1>
                    </motion.div>
                </div>
            </div>

            {/* Main Content Layout */}
            <div className="container mx-auto px-6 md:px-12 lg:px-24 py-16">
                <style>{`
                    .blog-content h3 {
                        font-size: 2rem;
                        line-height: 1.2;
                        font-weight: 900;
                        color: #000;
                        margin-top: 4rem;
                        margin-bottom: 1.5rem;
                        padding-left: 1.5rem;
                        border-left: 6px solid #FF6B00; /* Resonate Orange */
                        position: relative;
                    }
                    .blog-content p {
                        margin-bottom: 1.5rem;
                        line-height: 1.8;
                        font-size: 1.125rem;
                        color: #4B5563;
                    }
                    .blog-content ul {
                        list-style-type: disc;
                        padding-left: 1.5rem;
                        margin-bottom: 1.5rem;
                    }
                    .blog-content li {
                        margin-bottom: 0.5rem;
                        color: #4B5563;
                    }
                    .blog-content a {
                        color: #FF6B00;
                        text-decoration: underline;
                        text-underline-offset: 4px;
                    }
                `}</style>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

                    {/* Left Column: Content (8/12) */}
                    <div className="lg:col-span-8">
                        {/* Intro / Summary */}
                        <div className="mb-10 text-xl md:text-2xl text-gray-500 font-medium leading-relaxed font-serif italic border-l-4 border-primary pl-6">
                            {post.summary}
                        </div>

                        {/* Article Body */}
                        <div
                            className="blog-content"
                            dangerouslySetInnerHTML={{ __html: post.content }}
                        />
                    </div>

                    {/* Right Column: Sidebar (4/12) */}
                    <div className="lg:col-span-4">
                        <div className="sticky top-32 space-y-8">

                            {/* Meta Card */}
                            <div className="bg-white p-8 rounded-3xl border border-primary shadow-sm">
                                <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-6">Article Info</h3>

                                <div className="space-y-6">
                                    <div className="flex items-center gap-4">
                                        <div className="w-14 h-14 rounded-full bg-gray-200 overflow-hidden border-2 border-primary/20">
                                            {/* Generic Author Image for realism */}
                                            <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop" alt={post.author} className="w-full h-full object-cover" />
                                        </div>
                                        <div>
                                            <div className="text-xs text-gray-400 font-bold uppercase">Author</div>
                                            <div className="font-bold text-black text-lg">{post.author}</div>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-2 gap-4 pt-6 border-t border-gray-100">
                                        <div>
                                            <div className="text-xs text-gray-400 font-bold uppercase mb-1">Date</div>
                                            <div className="font-semibold text-sm">{post.date}</div>
                                        </div>
                                        <div>
                                            <div className="text-xs text-gray-400 font-bold uppercase mb-1">Time</div>
                                            <div className="font-semibold text-sm">{post.readTime} Read</div>
                                        </div>
                                    </div>

                                    <div className="flex gap-4 pt-6 border-t border-gray-100">
                                        <button
                                            onClick={handleLike}
                                            className={`flex items-center gap-2 text-sm font-bold transition-all duration-300 ${liked ? 'text-red-500 scale-110' : 'text-gray-500 hover:text-red-500'}`}
                                        >
                                            <svg width="24" height="24" fill={liked ? "currentColor" : "none"} stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                            </svg>
                                            {likes} Likes
                                        </button>
                                        <div className="flex items-center gap-2 text-sm font-bold text-gray-500">
                                            <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                                            {post.views} Views
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Table of Contents */}
                            {post.toc && (
                                <div className="hidden lg:block bg-[#F9F9F9] p-8 rounded-3xl">
                                    <h3 className="text-sm font-bold text-black mb-6 flex items-center gap-2">
                                        <span className="w-1.5 h-6 bg-primary rounded-full"></span>
                                        Table of Contents
                                    </h3>
                                    <ul className="space-y-4 relative border-l-2 border-gray-200 ml-1 pl-6">
                                        {post.toc.map((item, i) => (
                                            <li key={i}>
                                                <a
                                                    href={`#${item.id}`}
                                                    onClick={(e) => handleScrollTo(e, item.id)}
                                                    className="text-sm text-gray-500 hover:text-primary hover:font-bold transition-all block"
                                                >
                                                    {item.text}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Similar News Section - White Theme */}
            <div className="bg-white py-20 border-t border-gray-100">
                <div className="container mx-auto px-6 md:px-12 lg:px-24">
                    <div className="flex justify-between items-center mb-12">
                        <h2 className="text-3xl font-black text-black">Similar Insights</h2>
                        <Link to="/blog" className="text-sm font-bold text-primary hover:text-black transition-colors flex items-center gap-2">
                            View All Stories
                            <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {relatedPosts.map((related, i) => (
                            <Link to={`/blog/${related.id}`} key={i} className="group block">
                                <div className="h-60 rounded-3xl overflow-hidden mb-6 relative shadow-sm group-hover:shadow-xl transition-all duration-300">
                                    <img src={related.image} alt={related.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur text-black px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider shadow-sm">
                                        {related.category}
                                    </div>
                                </div>
                                <div className="flex items-center justify-between text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">
                                    <span>{related.date}</span>
                                    <span>{related.readTime}</span>
                                </div>
                                <h3 className="font-bold text-xl mb-3 text-black group-hover:text-primary transition-colors leading-tight">
                                    {related.title}
                                </h3>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogPostPage;
