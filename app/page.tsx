"use client";

import Link from "next/link";
import { ArrowRight, ArrowLeft, Quote, Check, CheckCircle } from "lucide-react";
import { useState } from "react";

const HERO_BG =
  "https://images.unsplash.com/photo-1763809678352-0f9ca8adb331?w=1920&q=80&auto=format&fit=crop";

const VOLUNTEER_BG =
  "https://images.unsplash.com/photo-1763809678352-0f9ca8adb331?w=1200&q=80&auto=format&fit=crop";

const TESTIMONIAL_AVATAR =
  "https://images.unsplash.com/photo-1755011309874-b3c7120b6d5a?w=100&q=80&auto=format&fit=crop";

function HeroSection() {
  return (
    <section className="relative min-h-[50vh] overflow-hidden bg-brand-bg">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[220px] md:text-[400px] font-black text-brand-yellow-green/15 select-none pointer-events-none whitespace-nowrap leading-none">
        GROW
      </div>
      <div className="relative z-10 max-w-[1280px] mx-auto px-6 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 min-h-[50vh] items-center">
          <div className="py-16 md:py-24">
            <h1 className="text-4xl md:text-6xl font-black leading-[0.9] text-brand-primary mb-6" style={{ fontFamily: "var(--font-syne)" }}>
              Cultivate<br />Change in Nepal
            </h1>
            <p className="text-lg md:text-xl text-brand-on-surface-variant max-w-lg mb-8 leading-relaxed">
              Join 500+ volunteers in Nepal&apos;s sustainable farming movement — no experience required, just a passion for making a difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/volunteer"
                className="bg-primary text-primary-foreground px-6 py-3 rounded-lg text-sm font-semibold hover:opacity-90 transition-all shadow text-center"
              >
                Start Your Journey
              </Link>
              <Link
                href="/about"
                className="border border-primary text-primary px-6 py-3 rounded-lg text-sm font-semibold hover:bg-primary hover:text-primary-foreground transition-all text-center"
              >
                See Programs
              </Link>
            </div>
            <p className="text-sm text-brand-outline mt-4">
              Flexible durations. Full support. No farming experience needed.
            </p>
          </div>
          <div className="relative h-[300px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
            <img
              src={HERO_BG}
              alt="Nepal sustainable agriculture"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
          </div>
        </div>
        <div className="py-4">
          <div className="flex items-center justify-center gap-8 md:gap-16">
            {[
              { value: "500+", label: "Farmers Trained" },
              { value: "20+", label: "Communities Supported" },
              { value: "15k", label: "Trees Planted" },
            ].map((s, i) => (
              <div key={i} className="flex items-center gap-2">
                <Check className="size-4 text-brand-primary shrink-0" />
                <div>
                  <span className="text-lg font-bold text-brand-primary">{s.value}</span>
                  <span className="text-xs text-brand-outline ml-1">{s.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function GetInvolvedSection() {
  return (
    <section className="py-28 bg-brand-surface-container-low">
      <div className="px-6 md:px-16 max-w-[1280px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-5xl font-bold text-brand-primary mb-4">Get Involved</h2>
          <p className="text-xl text-brand-outline max-w-2xl mx-auto">Transform lives and landscapes. Whether you&apos;re a student or a professional, we have a place for your passion.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-7 group relative overflow-hidden rounded-xl bg-brand-primary h-[500px]">
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 opacity-60"
              style={{ backgroundImage: `url(${VOLUNTEER_BG})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-primary via-brand-primary/20 to-transparent" />
            <div className="absolute bottom-0 left-0 p-8 md:p-16">
              <span className="bg-brand-yellow-green text-brand-primary px-3 py-1 rounded text-xs font-bold mb-4 inline-block">ON-SITE & REMOTE</span>
              <h3 className="text-5xl font-bold text-white mb-4">Volunteer Program</h3>
              <p className="text-white/80 max-w-md mb-6">Join our field teams or help with digital advocacy. We welcome diverse skills to scale our impact.</p>
              <Link
                href="/volunteer"
                className="inline-block bg-white text-brand-primary px-6 py-3 rounded-lg text-sm font-bold hover:bg-brand-yellow-green transition-colors"
              >
                Apply Now
              </Link>
            </div>
          </div>
          <div className="md:col-span-5 bg-brand-secondary-container p-8 md:p-16 rounded-xl flex flex-col justify-between border border-brand-outline-variant">
            <div>
              <span className="text-brand-primary text-xs font-bold uppercase tracking-widest block mb-4">Education</span>
              <h3 className="text-5xl font-bold text-brand-on-surface-variant mb-4">Internships</h3>
              <p className="text-brand-secondary mb-6">
                Gain hands-on experience in sustainable agriculture, NGO management, and rural development in Nepal&apos;s diverse geography.
              </p>
              <ul className="space-y-3">
                {["Field Research Ops", "Project Management", "Community Outreach"].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-brand-on-surface-variant">
                    <CheckCircle className="size-5 text-brand-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <Link
              href="/internship"
              className="mt-10 border border-primary text-primary px-6 py-3 rounded-lg text-sm font-bold hover:bg-primary hover:text-primary-foreground transition-all text-center"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function TestimonialSection() {
  const testimonials = [
    {
      quote: "My experience with SADP-Nepal was truly incredible. The staff and host family were so welcoming and made me feel at home. The work we did was very fulfilling and I enjoyed every minute of it.",
      name: "Jon Gebbia",
      location: "Volunteer, USA",
      img: TESTIMONIAL_AVATAR,
    },
    {
      quote: "The permaculture training completely changed how I think about farming. The knowledge I gained is something I'll carry with me forever. An unforgettable experience.",
      name: "Sarah Chen",
      location: "Intern, Singapore",
      img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80&auto=format&fit=crop",
    },
    {
      quote: "Living with a host family and working alongside local farmers gave me a perspective no textbook could ever provide. Truly life-changing.",
      name: "James Wilson",
      location: "Volunteer, UK",
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80&auto=format&fit=crop",
    },
  ];

  const [active, setActive] = useState(0);

  const prev = () => setActive((a) => (a === 0 ? testimonials.length - 1 : a - 1));
  const next = () => setActive((a) => (a === testimonials.length - 1 ? 0 : a + 1));

  const t = testimonials[active];

  return (
    <section className="py-20 overflow-hidden bg-brand-yellow-green/15">
      <div className="px-6 md:px-16 max-w-[1280px] mx-auto">
        <div className="max-w-2xl mx-auto">
          {/* ticket card */}
          <div className="bg-white rounded-2xl border-2 border-dashed border-brand-primary/30 relative">
            {/* perforation circles */}
            <div className="absolute -left-3 top-1/2 -translate-y-1/2 size-6 rounded-full bg-brand-yellow-green/15" />
            <div className="absolute -right-3 top-1/2 -translate-y-1/2 size-6 rounded-full bg-brand-yellow-green/15" />

            <div className="p-8 md:p-10">
              <Quote className="size-8 text-brand-primary/20 mb-4" />
              <blockquote className="text-base md:text-lg text-brand-on-surface leading-relaxed mb-6">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <div className="flex items-center gap-4">
                <div
                  className="w-10 h-10 rounded-full bg-cover bg-center shrink-0 border border-brand-primary/30"
                  style={{ backgroundImage: `url(${t.img})` }}
                />
                <div>
                  <cite className="not-italic text-sm font-semibold text-brand-primary block">{t.name}</cite>
                  <span className="text-xs text-brand-outline">{t.location}</span>
                </div>
              </div>
            </div>

            {/* tear-off line */}
            <div className="border-t-2 border-dashed border-brand-primary/30 mx-8" />

            <div className="p-4 flex items-center justify-between">
              <button
                onClick={prev}
                className="size-9 rounded-full border border-brand-primary/30 text-brand-primary hover:bg-brand-primary hover:text-primary-foreground transition-colors flex items-center justify-center"
                aria-label="Previous testimonial"
              >
                <ArrowLeft className="size-4" />
              </button>
              <div className="flex gap-1.5">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    className={`size-2 rounded-full transition-colors ${
                      i === active ? "bg-brand-primary" : "bg-brand-primary/20"
                    }`}
                    aria-label={`Go to testimonial ${i + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={next}
                className="size-9 rounded-full border border-brand-primary/30 text-brand-primary hover:bg-brand-primary hover:text-primary-foreground transition-colors flex items-center justify-center"
                aria-label="Next testimonial"
              >
                <ArrowRight className="size-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function NewsSection() {
  const news = [
    {
      img: "https://images.unsplash.com/photo-1545662618-66de187bbf69?w=800&q=80&auto=format&fit=crop",
      tag: "Community",
      title: "Permaculture Workshop in Lamjung",
      desc: "Over 40 local farmers gathered this week to master the art of swales and biological pest control...",
    },
    {
      img: "https://images.unsplash.com/photo-1731491435516-566d6d1e3141?w=800&q=80&auto=format&fit=crop",
      tag: "Sustainability",
      title: "Impact of the 2024 Seed Bank",
      desc: "How our indigenous seed preservation program secured the harvest for 300 families this season...",
    },
    {
      img: "https://images.unsplash.com/photo-1617099388313-dc7b6d51c029?w=800&q=80&auto=format&fit=crop",
      tag: "Infrastructure",
      title: "Low-Cost Greenhouses for High Altitude",
      desc: "Scaling winter production through innovative greenhouse designs made from locally sourced materials...",
    },
  ];

  return (
    <section className="py-28">
      <div className="px-6 md:px-16 max-w-[1280px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-brand-primary mb-4">Recent Updates</h2>
          <a href="#" className="inline-flex items-center gap-2 text-brand-primary text-sm font-bold hover:translate-x-2 transition-transform">
            View All News <ArrowRight className="size-4" />
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {news.map((item, i) => (
            <article key={i} className="group">
              <div className="aspect-video overflow-hidden rounded-lg mb-6">
                <img
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  src={item.img}
                  alt={item.title}
                  loading="lazy"
                />
              </div>
              <span className="text-brand-blushed-brick text-xs font-bold mb-2 block uppercase tracking-wide">{item.tag}</span>
              <h3 className="text-2xl font-semibold mb-3 group-hover:text-brand-primary transition-colors">{item.title}</h3>
              <p className="text-brand-outline line-clamp-2">{item.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="py-28 bg-brand-primary relative overflow-hidden">
      <div className="relative z-10 px-6 md:px-16 max-w-[1280px] mx-auto text-center">
        <h2 className="text-5xl md:text-7xl font-extrabold text-white mb-6">Make a Difference Today</h2>
        <p className="text-xl text-white/80 max-w-2xl mx-auto mb-10">
          Your support directly funds agricultural training and ecological restoration in Nepal&apos;s most vulnerable regions.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <Link
            href="/donate"
            className="bg-primary text-primary-foreground px-12 py-5 rounded-lg text-lg font-semibold hover:scale-105 transition-transform"
          >
            Donate Now
          </Link>
          <a
            href="#"
            className="bg-brand-yellow-green text-brand-primary px-12 py-5 rounded-lg text-lg font-semibold hover:scale-105 transition-transform inline-block"
          >
            Join Our Newsletter
          </a>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <HeroSection />
      <GetInvolvedSection />
      <TestimonialSection />
      <NewsSection />
      <CTASection />
    </>
  );
}
