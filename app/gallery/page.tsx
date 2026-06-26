"use client";

import { useState } from "react";
import { Leaf, Heart, ArrowRight } from "lucide-react";

const categories = ["All Works", "Farming", "Community", "Events", "Training"];

const galleryItems = [
  {
    title: "Seasonal Rice Plantation",
    category: "Farming",
    span: "md:row-span-2 min-h-[400px]",
    bg: "https://images.unsplash.com/photo-1763809678352-0f9ca8adb331?w=800&q=80&auto=format&fit=crop",
  },
  {
    title: "Village Meeting",
    category: "Community",
    span: "min-h-[250px]",
    bg: "https://images.unsplash.com/photo-1731491435516-566d6d1e3141?w=800&q=80&auto=format&fit=crop",
  },
  {
    title: "Harvest Celebration 2024",
    category: "Events",
    span: "md:col-span-2 min-h-[250px]",
    bg: "https://images.unsplash.com/photo-1782211589058-78f2a3cced2e?w=800&q=80&auto=format&fit=crop",
  },
  {
    title: "Organic Composting Workshop",
    category: "Training",
    span: "md:row-span-2 min-h-[400px]",
    bg: "https://images.unsplash.com/photo-1674788325730-25f58337b918?w=800&q=80&auto=format&fit=crop",
  },
  {
    title: "Terrace Engineering",
    category: "Farming",
    span: "min-h-[250px]",
    bg: "https://images.unsplash.com/photo-1495528156639-3015d7e3ed97?w=800&q=80&auto=format&fit=crop",
  },
  {
    title: "Local Empowerment",
    category: "Community",
    span: "min-h-[250px]",
    bg: "https://images.unsplash.com/photo-1681636052845-219e64b8024c?w=800&q=80&auto=format&fit=crop",
  },
  {
    title: "Internship Experience 2024",
    category: "Training",
    span: "md:col-span-2 min-h-[250px]",
    bg: "https://images.unsplash.com/photo-1743587825782-a8877338cdc6?w=800&q=80&auto=format&fit=crop",
    isVideo: true,
  },
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All Works");

  const filteredItems =
    activeCategory === "All Works"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <main className="bg-brand-bg">
      <section className="py-28 px-6 md:px-16">
        <div className="max-w-[1280px] mx-auto text-center">
          <Leaf className="inline-block text-brand-primary mb-6" size={40} />
          <h1 className="text-5xl md:text-7xl font-extrabold text-brand-primary mb-6">
            Visual Journey of Sustainable Change
          </h1>
          <p className="text-brand-secondary text-lg md:text-xl max-w-3xl mx-auto">
            Explore moments captured across our programs — from terraced fields
            to community gatherings, each image tells a story of resilience and
            hope in rural Nepal.
          </p>
        </div>
      </section>

      <section className="pb-16 px-6 md:px-16">
        <div className="max-w-[1280px] mx-auto">
          <div className="flex gap-3 overflow-x-auto pb-4 mb-12 scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`shrink-0 px-6 py-2.5 rounded-full text-sm font-semibold transition-colors ${
                  activeCategory === cat
                    ? "bg-brand-primary text-white"
                    : "border border-brand-primary text-brand-primary"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 auto-rows-auto">
            {filteredItems.map((item, i) => (
              <div
                key={i}
                data-category={item.category}
                className={`relative overflow-hidden rounded-lg group cursor-pointer ${item.span}`}
                style={{
                  backgroundImage: `url(${item.bg})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute inset-0 bg-brand-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <span className="text-brand-yellow-green text-xs font-bold uppercase tracking-wider mb-2">
                    {item.category}
                  </span>
                  <h3 className="text-white text-xl font-bold">{item.title}</h3>
                  {item.isVideo && (
                    <div className="mt-3 flex items-center gap-2 text-white text-sm font-semibold">
                      <Heart size={16} className="text-brand-blushed-brick" />
                      Watch Documentary
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-primary-container py-28 px-6 md:px-16">
        <div className="max-w-[1280px] mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Be Part of the Story
          </h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto mb-10">
            Your support helps us capture more moments like these and create
            lasting change in rural Nepal.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/volunteer"
              className="inline-flex items-center gap-2 bg-brand-blushed-brick text-white font-bold px-8 py-4 rounded-full hover:opacity-90 transition-opacity"
            >
              <Heart size={20} />
              Become a Volunteer
            </a>
            <a
              href="/donate"
              className="inline-flex items-center gap-2 border border-white text-white font-bold px-8 py-4 rounded-full hover:bg-white/10 transition-colors"
            >
              Support Our Mission
              <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
