import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { client, urlFor } from "../sanityClient";

const GalleryPage = () => {
  const [galleryImages, setGalleryImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log("Fetching gallery images...");
    client
      .fetch(`*[_type == "gallery"]`)
      .then((data) => {
        setGalleryImages(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Gallery fetch error:", err);
        setError(err);
        setLoading(false);
      });
  }, []);

  if (loading)
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading Gallery...
      </div>
    );
  if (error)
    return (
      <div className="min-h-screen flex items-center justify-center text-red-500">
        Error loading gallery. Check console.
      </div>
    );
  if (galleryImages.length === 0)
    return (
      <div className="min-h-screen flex items-center justify-center">
        No images found in gallery.
      </div>
    );
  return (
    <div className="min-h-screen bg-white overflow-x-hidden pt-8 md:pt-12">
      {/* Header / Intro */}
      <div className="container mx-auto px-4 md:px-6 text-center mb-12 md:mb-16">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl lg:text-5xl font-black text-black mb-4 md:mb-6 tracking-tight"
        >
          Moments of <span className="text-primary">Impact</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-base md:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto px-4"
        >
          Capturing the stories, the drive, and the transformative journey of
          our members and partners.
        </motion.p>
      </div>

      {/* 3D Curved Carousel Container */}
      <div className="w-full relative py-12 md:py-20 perspective-1000">
        <CurvedMarquee images={galleryImages} />
      </div>

      {/* Grid Gallery for "All Images" */}
      <div className="container mx-auto px-4 md:px-6 pb-16 md:pb-24">
        <div className="flex items-center gap-3 md:gap-4 mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl font-bold">Full Collection</h2>
          <div className="h-px flex-1 bg-gray-200"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {galleryImages.map((item, i) => (
            <motion.div
              key={item._id || i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="bg-white p-2 md:p-3 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 group"
            >
              <div className="aspect-[4/5] rounded-xl overflow-hidden relative">
                <img
                  src={urlFor(item.image).url()}
                  alt={`Gallery item ${i}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                {/* Story Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4 md:p-6">
                  <p className="text-white text-xs md:text-sm lg:text-base font-medium leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

const CurvedMarquee = ({ images }) => {
  // Duplicate images for seamless loop
  const marqueeImages = [...images, ...images, ...images];

  return (
    <div className="flex justify-center overflow-hidden w-full">
      <div className="relative w-full max-w-[120%] flex gap-4 md:gap-8 py-6 md:py-10 items-center justify-center">
        {/*
                   We simulate the curve by applying individual rotations to cards
                   scrolling horizontally.
                   Actually, a simpler "fake" 3D curve is often just scaling the sides down
                   and rotating them inwards.
                */}
        <div
          className="flex animate-marquee gap-4 md:gap-8 items-center"
          style={{ width: "max-content" }}
        >
          {marqueeImages.map((item, idx) => (
            <Card key={idx} item={item} />
          ))}
        </div>
        <div
          className="flex animate-marquee gap-4 md:gap-8 items-center absolute left-full top-6 md:top-10 pl-4 md:pl-8"
          aria-hidden="true"
          style={{ width: "max-content" }}
        >
          {marqueeImages.map((item, idx) => (
            <Card key={`clone-${idx}`} item={item} />
          ))}
        </div>
      </div>
      <style>{`
                .perspective-1000 {
                    perspective: 2000px;
                }
                @keyframes marquee {
                    0% { transform: translateX(0%); }
                    100% { transform: translateX(-100%); }
                }
                .animate-marquee {
                    animation: marquee 120s linear infinite;
                }
                .curved-card {
                     transform-style: preserve-3d;
                     transition: transform 0.3s;
                }
            `}</style>
    </div>
  );
};

const Card = ({ item }) => {
  return (
    <div className="w-[220px] h-[300px] md:w-[300px] md:h-[400px] flex-shrink-0 relative group perspective-origin-center transform transition-transform hover:-translate-y-4 duration-300">
      <div className="w-full h-full rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl bg-gray-900 border-2 md:border-4 border-white/50 relative">
        <img
          src={urlFor(item.image).url()}
          alt="Gallery"
          className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-4 md:bottom-6 left-4 md:left-6 right-4 md:right-6 text-white">
          <p className="font-bold text-base md:text-lg mb-1 md:mb-2">
            IPAC Moments
          </p>
          <p className="text-[10px] md:text-xs text-white/90 leading-relaxed line-clamp-2">
            {item.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default GalleryPage;
