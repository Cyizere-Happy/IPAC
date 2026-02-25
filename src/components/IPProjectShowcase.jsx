import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { client, urlFor } from "../sanityClient";

const IPProjectShowcase = () => {
  const [projects, setProjects] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    client
      .fetch(`*[_type == "project"]`)
      .then((data) => {
        setProjects(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Projects fetch error:", err);
        setError(err);
        setLoading(false);
      });
  }, []);

  // Auto-cycling projects
  useEffect(() => {
    if (projects.length === 0) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % projects.length);
    }, 6000); // 6 second cycle
    return () => clearInterval(interval);
  }, [projects]);

  if (loading)
    return <div className="text-center py-20">Loading Projects...</div>;
  if (projects.length === 0)
    return <div className="text-center py-20">No projects found.</div>;

  const activeProject = projects[currentIndex];

  return (
    <section className="relative min-h-screen bg-white overflow-hidden font-sans border-b border-gray-100 flex items-center">
      {/* Split Background */}
      <div className="absolute inset-0 flex">
        <div className="w-1/2 bg-white" />
        <div className="w-1/2 bg-[#111111]" />
      </div>

      {/* Vertical Split Header */}
      <div className="absolute top-24 left-0 right-0 z-20 flex justify-center items-center pointer-events-none px-4">
        <div className="flex items-center gap-6 md:gap-12">
          <span className="text-4xl md:text-7xl font-black text-black opacity-100 tracking-tighter">
            INNOVATION
          </span>
          <span
            className="text-2xl md:text-4xl font-black text-yellow-400"
            style={{
              WebkitTextStroke: "2px black",
              textShadow: "0 0 15px rgba(250, 204, 21, 0.8)",
            }}
          >
            vs
          </span>
          <span className="text-4xl md:text-7xl font-black text-white opacity-100 tracking-tighter">
            PROTECTION
          </span>
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-6 pt-56 pb-12">
        {/* Project Navigation */}
        <div className="flex justify-center mb-10">
          <div className="bg-gray-100 p-1 rounded-full flex gap-1 items-center">
            {projects.map((p, i) => (
              <button
                key={p._id || i}
                onClick={() => setCurrentIndex(i)}
                className={`px-4 py-1 rounded-full text-xs font-bold transition-all ${
                  currentIndex === i
                    ? "bg-black text-white shadow-lg"
                    : "text-gray-500 hover:text-black"
                }`}
              >
                {p.title}
              </button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center"
          >
            <div className="relative w-full max-w-6xl mt-4">
              {/* Central Device/Mockup */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30">
                <motion.div
                  initial={{ scale: 0.9, rotateY: 10 }}
                  animate={{ scale: 1, rotateY: 0 }}
                  className="w-[280px] md:w-[320px] h-[420px] md:h-[500px] bg-white rounded-[32px] shadow-2xl border-[8px] border-black overflow-hidden relative"
                >
                  <img
                    src={urlFor(activeProject.image).url()}
                    alt={activeProject.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-6 text-white text-left">
                    <h2 className="text-xl font-black uppercase italic tracking-tighter mb-1">
                      {activeProject.title}
                    </h2>
                    <p className="text-[10px] text-gray-300 font-medium leading-relaxed opacity-80">
                      {activeProject.description}
                    </p>
                  </div>
                </motion.div>
              </div>

              {/* Left Side: Innovation Attributes */}
              <div className="grid grid-cols-1 gap-12 w-full pr-[50%] py-12">
                {activeProject.innovation.map((attr, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-center gap-6 group cursor-default self-end"
                  >
                    <div className="text-right">
                      <h4 className="text-sm md:text-base font-bold text-black group-hover:text-primary transition-colors">
                        {attr.label}
                      </h4>
                      <div className="w-8 h-0.5 bg-black ml-auto mt-0.5 opacity-30" />
                    </div>
                    <div className="w-10 h-10 bg-gray-50 rounded-xl flex items-center justify-center text-xl shadow-sm border border-gray-100">
                      {attr.icon}
                    </div>
                    {/* Artificial Connector Line */}
                    <div className="hidden md:block w-24 h-[1px] bg-gray-200 origin-left scale-x-150" />
                  </motion.div>
                ))}
              </div>

              {/* Right Side: Protection Attributes */}
              <div className="grid grid-cols-1 gap-12 w-full pl-[50%] py-12 absolute inset-0">
                {activeProject.protection.map((attr, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-center gap-6 group cursor-default flex-row-reverse text-left"
                  >
                    <div>
                      <h4 className="text-sm md:text-base font-bold text-white group-hover:text-primary transition-colors">
                        {attr.label}
                      </h4>
                      <div className="w-8 h-0.5 bg-white mr-auto mt-0.5 opacity-30" />
                    </div>
                    <div className="w-10 h-10 bg-[#1A1A1A] rounded-xl flex items-center justify-center text-xl shadow-sm border border-white/5 text-white">
                      {attr.icon}
                    </div>
                    {/* Artificial Connector Line */}
                    <div className="hidden md:block w-24 h-[1px] bg-white/10 origin-right scale-x-150" />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Subtitle / CTA */}
        <div className="mt-16 text-center relative z-20">
          <p className="text-gray-400 uppercase tracking-[0.3em] text-[9px] font-bold mb-2">
            IPAC RCA Showcase 2026
          </p>
          <h3 className="text-lg font-medium tracking-tight">
            <span className="text-black">Innovating with</span>{" "}
            <span className="text-white italic">Absolute Protection</span>
          </h3>
        </div>
      </div>
    </section>
  );
};

export default IPProjectShowcase;
