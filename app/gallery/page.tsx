"use client";

import Link from "next/link";
import { useState } from "react";
import { Leaf, Heart, Star, ArrowRight } from "lucide-react";

const categories = ["All Works", "Farming", "Community", "Events", "Training"];

const GALLERY_HERO =
  "https://images.unsplash.com/photo-1763809678352-0f9ca8adb331?w=1200&q=80&auto=format&fit=crop";

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
      <section className="relative min-h-[50vh] overflow-hidden bg-brand-bg">
        <div className="max-w-[1280px] mx-auto px-6 md:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 min-h-[50vh] items-center">
            <div className="py-16 md:py-24">
              <span className="inline-flex items-center gap-2 bg-brand-primary text-primary-foreground text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded mb-6">
                <Leaf className="size-4" />
                Gallery
              </span>
              <h1 className="text-4xl md:text-6xl font-black text-brand-primary mb-6">
                Visual Journey<br />of Sustainable<br />Change<span className="text-brand-blushed-brick">.</span>
              </h1>
              <p className="text-xl md:text-2xl text-brand-on-surface-variant max-w-lg mb-8 leading-relaxed">
                Explore moments captured across our programs — from terraced fields
                to community gatherings, each image tells a story of resilience and
                hope in rural Nepal.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/volunteer"
                  className="bg-brand-primary text-white px-8 py-3.5 rounded-full text-sm font-bold shadow-sm hover:bg-brand-primary/90 transition-all duration-200 text-center"
                >
                  Join the Mission
                </Link>
                <Link
                  href="/donate"
                  className="border-2 border-brand-primary text-brand-primary px-8 py-3.5 rounded-full text-sm font-bold hover:bg-brand-primary hover:text-white transition-all duration-200 text-center"
                >
                  Support Us
                </Link>
              </div>
            </div>
            <div className="relative h-[300px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl rotate-[1.5deg]">
              <img
                src={GALLERY_HERO}
                alt="Gallery"
                className="w-full h-full object-cover scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      <section className="pb-16 px-6 md:px-16">
        <div className="max-w-[1280px] mx-auto">
          <div className="flex gap-3 overflow-x-auto pb-4 mb-12 scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`shrink-0 px-6 py-2.5 rounded-full text-sm font-bold transition-colors ${
                  activeCategory === cat
                    ? "bg-primary text-primary-foreground"
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

      <section className="py-28 bg-brand-yellow-green/15">
        <div className="max-w-[1280px] mx-auto px-6 md:px-16">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-brand-primary mb-4">
              Visitor&rsquo;s Feedback<span className="text-brand-blushed-brick">.</span>
            </h2>
            <p className="text-xl text-brand-outline max-w-2xl mx-auto">
              What our visitors say about their experience with SADP Nepal.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "Tine Sawssel & Jan Tholen",
                location: "Belgium",
                text: "We really enjoyed our short stay at your farm. The people are really friendly here on these mountains. We have seen a lot of motivated farmers and believe that your projects will succeed.",
              },
              {
                name: "Ingrid Duff & Toby Kilgreen",
                location: "Australia & Sweden",
                text: "We would just like to say a big thank-you to SADP for your kind hospitality. Although we were only here one night we enjoyed it thoroughly. The food was delicious, the room was cosy & the company was perfect.",
              },
              {
                name: "Amy Matthews",
                location: "USA",
                text: "I arrived at the farm from my 3 months journey and ready to hurry on home in a few days. However I leave today in a new spirit \u2014 inspired and hopeful! Thank you for your strategic and thoughtful work for the health of Nepal\u2019s people and soil.",
              },
              {
                name: "Isabelle Conus",
                location: "Switzerland",
                text: "If paradise should exist on the earth it could well be this place! The farm is beautiful. I participated in the preliminary survey of the farmers and it has been a wonderful and memorable experience. I will certainly never forget all the lovely people.",
              },
            ].map((f, i) => (
              <div key={i} className="bg-white rounded-xl p-6 border border-brand-outline-variant">
                  <div className="flex items-center gap-1 mb-3">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="size-5 fill-brand-yellow-green text-brand-yellow-green" />
                    ))}
                  </div>
                <p className="text-brand-on-surface-variant mb-4">&ldquo;{f.text}&rdquo;</p>
                <div>
                  <p className="text-sm font-bold text-brand-primary">{f.name}</p>
                  <p className="text-xs text-brand-outline">{f.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-primary-container py-28 px-6 md:px-16">
        <div className="max-w-[1280px] mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Be Part of the Story
          </h2>
          <p className="text-white/80 text-xl max-w-2xl mx-auto mb-10">
            Your support helps us capture more moments like these and create
            lasting change in rural Nepal.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/volunteer"
              className="inline-flex items-center gap-2 bg-white text-brand-primary px-8 py-3.5 rounded-full text-sm font-bold shadow-sm hover:bg-white/90 transition-all duration-200"
            >
              <Heart size={20} />
              Become a Volunteer
            </a>
            <a
              href="/donate"
              className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-3.5 rounded-full text-sm font-bold shadow-sm hover:bg-white hover:text-brand-primary transition-all duration-200"
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
