import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { client } from "../sanityClient";

const CreateBlogPage = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    date: new Date().toISOString().split("T")[0],
    readingTime: "5 min",
    summary: "",
    fullContent: "",
    tag: "Insights",
  });
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  useEffect(() => {
    console.log("CreateBlogPage mounted");
    window.scrollTo(0, 0);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.title || !formData.summary || !formData.fullContent) {
      alert("Please fill in all required fields.");
      return;
    }
    setLoading(true);

    try {
      let imageAsset;
      if (imageFile) {
        imageAsset = await client.assets.upload("image", imageFile);
      }

      const doc = {
        _type: "blog",
        title: formData.title,
        date: formData.date,
        readingTime: formData.readingTime,
        summary: formData.summary,
        fullContent: [
          {
            _type: "block",
            children: [{ _type: "span", text: formData.fullContent }],
            markDefs: [],
            style: "normal",
          },
        ],
        tag: formData.tag,
        image: imageAsset
          ? {
              _type: "image",
              asset: {
                _type: "reference",
                _ref: imageAsset._id,
              },
            }
          : undefined,
      };

      await client.create(doc);
      alert("Article Published Successfully!");
      navigate("/blog");
    } catch (err) {
      console.error("Creation error:", err);
      alert(`Failed to publish: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#FDFBF7] pt-24 pb-20 font-sans selection:bg-black selection:text-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-12 xl:px-24">
        {/* Header Section */}
        <div className="mb-12 flex flex-col md:flex-row justify-between items-end gap-6 border-b border-black/5 pb-8">
          <div className="max-w-2xl">
            <motion.span
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-gray-400 font-bold tracking-[0.3em] text-[10px] md:text-xs uppercase mb-3 block"
            >
              Studio / Editor
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-black italic tracking-tighter uppercase leading-none"
            >
              Create <br /> <span className="text-black/20">New Article</span>
            </motion.h1>
          </div>

          <div className="hidden md:flex gap-4">
            <button
              onClick={() => navigate("/blog")}
              className="px-8 py-3 rounded-full font-bold text-sm text-gray-500 hover:text-black transition-colors"
            >
              Discard
            </button>
            <button
              onClick={handleSubmit}
              disabled={loading}
              className="px-8 py-3 bg-black text-white rounded-full font-black uppercase italic tracking-tighter shadow-2xl hover:scale-105 active:scale-95 transition-all disabled:opacity-50"
            >
              {loading ? "Publishing..." : "Publish Insight"}
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-8">
          {/* Left Column: Form Inputs */}
          <div className="lg:col-span-12">
            <form
              onSubmit={handleSubmit}
              className="space-y-12 bg-white p-8 md:p-16 rounded-[3rem] shadow-sm border border-black/5"
            >
              {/* Media Upload */}
              <div className="space-y-4">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-black/30">
                  Header Image
                </label>
                <div
                  onClick={() =>
                    document.getElementById("image-upload").click()
                  }
                  className="relative aspect-[21/9] w-full bg-gray-50 rounded-[2rem] border-2 border-dashed border-black/5 flex flex-col items-center justify-center overflow-hidden cursor-pointer group hover:border-black/20 transition-all"
                >
                  {imagePreview ? (
                    <>
                      <img
                        src={imagePreview}
                        alt="Preview"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <div className="bg-white text-black px-6 py-2 rounded-full font-bold text-sm">
                          Change Media
                        </div>
                      </div>
                    </>
                  ) : (
                    <div className="text-center group-hover:scale-105 transition-transform duration-500">
                      <div className="w-16 h-16 bg-black/5 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                        >
                          <path
                            d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <p className="font-black uppercase italic tracking-widest text-xs">
                        Drop or Select Image
                      </p>
                    </div>
                  )}
                  <input
                    id="image-upload"
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="hidden"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-4">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-black/30">
                    Article Title
                  </label>
                  <input
                    required
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    placeholder="The Future of RCA..."
                    className="w-full text-2xl md:text-3xl font-black italic tracking-tighter bg-transparent border-b-2 border-black/5 focus:border-black outline-none pb-4 transition-all placeholder:text-black/10"
                  />
                </div>

                <div className="space-y-4">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-black/30">
                    Classification
                  </label>
                  <select
                    name="tag"
                    value={formData.tag}
                    onChange={handleInputChange}
                    className="w-full text-xl font-black italic tracking-tighter bg-transparent border-b-2 border-black/5 focus:border-black outline-none pb-4 transition-all appearance-none cursor-pointer"
                  >
                    <option>Insights</option>
                    <option>Protection</option>
                    <option>Community</option>
                    <option>Innovation</option>
                    <option>Events</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-4">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-black/30">
                    Reading Time
                  </label>
                  <input
                    name="readingTime"
                    value={formData.readingTime}
                    onChange={handleInputChange}
                    placeholder="5 min"
                    className="w-full text-xl font-black italic tracking-tighter bg-transparent border-b-2 border-black/5 focus:border-black outline-none pb-4 transition-all"
                  />
                </div>

                <div className="space-y-4">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-black/30">
                    Publish Date
                  </label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    className="w-full text-xl font-black italic tracking-tighter bg-transparent border-b-2 border-black/5 focus:border-black outline-none pb-4 transition-all font-sans"
                  />
                </div>
              </div>

              <div className="space-y-4">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-black/30">
                  Abstract / Summary
                </label>
                <textarea
                  required
                  name="summary"
                  value={formData.summary}
                  onChange={handleInputChange}
                  rows="2"
                  placeholder="A brief overview of your insight..."
                  className="w-full text-lg md:text-xl font-medium text-gray-400 bg-transparent border-b-2 border-black/5 focus:border-black outline-none pb-4 transition-all resize-none italic leading-relaxed"
                ></textarea>
              </div>

              <div className="space-y-4 pt-12">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-black/30">
                  Narrative Content
                </label>
                <textarea
                  required
                  name="fullContent"
                  value={formData.fullContent}
                  onChange={handleInputChange}
                  rows="15"
                  placeholder="Begin your story..."
                  className="w-full bg-[#f9f9f9] rounded-[2.5rem] p-8 md:p-12 text-xl font-medium text-black outline-none border border-black/5 focus:bg-white focus:shadow-inner transition-all leading-relaxed"
                ></textarea>
              </div>

              <div className="flex justify-center pt-8 md:hidden">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-5 bg-black text-white rounded-full font-black uppercase italic tracking-tighter shadow-2xl transition-all"
                >
                  {loading ? "Publishing..." : "Publish Insight"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateBlogPage;
