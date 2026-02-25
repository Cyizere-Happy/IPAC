import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { client, urlFor } from "../sanityClient";

const Journey = () => {
  const [workshops, setWorkshops] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    client
      .fetch(`*[_type == "workshop"] | order(_createdAt asc)`)
      .then((data) => {
        setWorkshops(data);
        setLoading(false);
      })
      .catch(console.error);
  }, []);

  const staticMilestones = [
    {
      x: 100,
      y: 350,
      label: "The Spark",
      desc: "Ideas ignited",
      labelPos: "top",
    },
    {
      x: 300,
      y: 280,
      label: "Incubation",
      desc: "Refining concepts",
      labelPos: "bottom",
    },
    {
      x: 420,
      y: 200,
      label: "Launch Pad",
      desc: "Preparing for impact",
      labelPos: "top",
    },
    {
      x: 650,
      y: 120,
      label: "Scale-up",
      desc: "Broadening horizons",
      labelPos: "bottom",
    },
  ];

  // Static Path data
  const targetX = 880;
  const targetY = 100;
  const pathData = `M 40 380 Q 100 380 ${staticMilestones[0].x} ${staticMilestones[0].y} T ${staticMilestones[1].x} ${staticMilestones[1].y} T ${staticMilestones[2].x} ${staticMilestones[2].y} T ${staticMilestones[3].x} ${staticMilestones[3].y} L ${targetX} ${targetY}`;

  return (
    <div className="w-full bg-white py-20 px-4 md:px-6 lg:px-12 xl:px-24">
      {/* 1. Static Timeline Visualization */}
      <div className="mb-24">
        <div className="relative w-full aspect-[25/9] min-h-[350px]">
          {/* SVG Path */}
          <svg
            viewBox="0 0 1000 400"
            className="absolute inset-0 w-full h-full fill-none pointer-events-none"
          >
            <motion.path
              d={pathData}
              stroke="#E5E5E5"
              strokeWidth="12"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            />
            <motion.path
              d={pathData}
              stroke="#D1D5DB"
              strokeWidth="2"
              strokeDasharray="8 8"
            />
          </svg>

          {/* Static Milestones */}
          {staticMilestones.map((m, i) => {
            const leftPercent = (m.x / 1000) * 100;
            const topPercent = (m.y / 400) * 100;

            return (
              <div
                key={i}
                className="absolute transform -translate-x-1/2 -translate-y-1/2"
                style={{ left: `${leftPercent}%`, top: `${topPercent}%` }}
              >
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="relative z-10 w-12 h-12 flex items-center justify-center group"
                >
                  <div className="absolute inset-0 bg-primary/5 rounded-full blur-lg scale-125 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="w-full h-full bg-white rounded-full shadow-md border-2 border-white flex items-center justify-center transition-transform group-hover:scale-110">
                    <div className="w-2 h-2 bg-black rounded-full" />
                  </div>

                  <div
                    className={`absolute w-44 text-left ${m.labelPos === "top" ? "bottom-16" : "top-16"} left-6 pointer-events-none`}
                  >
                    <h4 className="text-xl font-bold text-black mb-1">
                      {m.label}
                    </h4>
                    <p className="text-sm text-gray-400 font-medium leading-relaxed">
                      {m.desc}
                    </p>
                  </div>
                </motion.div>
              </div>
            );
          })}

          {/* Final Target */}
          <div
            className="absolute transform -translate-x-1/2 -translate-y-1/2"
            style={{
              left: `${(targetX / 1000) * 100}%`,
              top: `${(targetY / 400) * 100}%`,
            }}
          >
            <div className="relative w-36 h-36 flex items-center justify-center">
              <div className="absolute inset-0 rounded-full border-2 border-primary opacity-20 animate-ping" />
              <div className="w-full h-full rounded-full border-[10px] border-black/5 flex items-center justify-center p-3 bg-white/40 backdrop-blur-md shadow-inner">
                <div className="w-full h-full rounded-full border-2 border-black/30 flex items-center justify-center">
                  <div className="w-8 h-8 bg-black rounded-full shadow-[0_0_25px_rgba(0,0,0,0.9)]" />
                </div>
              </div>
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-black text-white text-[10px] font-bold px-4 py-1.5 rounded-full shadow-2xl tracking-widest uppercase items-center flex gap-2">
                Destination
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Dynamic Impact Stories Section */}
      <div className="mt-20">
        <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-2">
              Impact Stories
            </h2>
            <p className="text-gray-500 font-medium">
              Hear directly from our student innovators and partners.
            </p>
          </div>
          <button className="text-black font-bold flex items-center gap-2 group hover:translate-x-1 transition-transform">
            Learn More
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="7" y1="17" x2="17" y2="7"></line>
              <polyline points="7 7 17 7 17 17"></polyline>
            </svg>
          </button>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((n) => (
              <div
                key={n}
                className="aspect-video bg-gray-100 rounded-3xl animate-pulse"
              />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {workshops.map((w, i) => (
              <motion.div
                key={w._id || i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="aspect-[16/9] rounded-[2rem] overflow-hidden mb-6 relative shadow-lg">
                  {w.image ? (
                    <img
                      src={urlFor(w.image).url()}
                      alt={w.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  ) : (
                    <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                      <span className="text-gray-400 font-bold tracking-widest">
                        IPAC STUDIO
                      </span>
                    </div>
                  )}
                </div>
                <h3 className="text-2xl font-black text-black mb-1 group-hover:text-primary transition-colors">
                  {w.title}
                </h3>
                <p className="text-gray-500 font-medium text-lg">
                  {w.location}
                </p>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Journey;
