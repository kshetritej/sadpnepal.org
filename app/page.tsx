import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";

const HERO_BG =
  "https://images.unsplash.com/photo-1495528156639-3015d7e3ed97?w=1920&q=80&auto=format&fit=crop";

const VOLUNTEER_BG =
  "https://images.unsplash.com/photo-1763809678352-0f9ca8adb331?w=1200&q=80&auto=format&fit=crop";

const TESTIMONIAL_AVATAR =
  "https://images.unsplash.com/photo-1755011309874-b3c7120b6d5a?w=100&q=80&auto=format&fit=crop";

function HeroSection() {
  return (
    <section className="relative h-[921px] min-h-[600px] flex items-center overflow-hidden"
      style={{ clipPath: "polygon(0 0, 100% 0, 100% 90%, 0% 100%)" }}
    >
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full bg-cover bg-center scale-105"
          style={{ backgroundImage: `url(${HERO_BG})` }}
        />
        <div className="absolute inset-0 bg-brand-primary/40 mix-blend-multiply" />
      </div>
      <div className="relative z-10 w-full px-6 md:px-16 max-w-[1280px] mx-auto">
        <div className="max-w-3xl">
          <span className="inline-block px-3 py-1 bg-brand-yellow-green text-brand-primary text-sm font-bold rounded-full mb-4 uppercase tracking-widest">
            Est. 2004
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6 drop-shadow-sm">
            Cultivating Sustainable Futures in Nepal
          </h1>
          <p className="text-xl text-white/90 max-w-xl mb-10 leading-relaxed">
            Empowering rural communities through ecological farming, climate resilience, and food sovereignty. Join our journey towards a greener Nepal.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/volunteer"
              className="bg-brand-primary-container text-white px-10 py-5 rounded-lg text-lg font-semibold hover:bg-brand-primary transition-all shadow-lg text-center"
            >
              Join as Volunteer
            </Link>
            <Link
              href="/about"
              className="border-2 border-white text-white px-10 py-5 rounded-lg text-lg font-semibold hover:bg-white/10 transition-all text-center"
            >
              Explore Programs
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatsSection() {
  return (
    <section className="py-28 bg-brand-bg">
      <div className="px-6 md:px-16 max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {[
            { value: "500+", label: "Farmers Trained", desc: "Empowering local households with regenerative agriculture skills." },
            { value: "20+", label: "Communities Supported", desc: "Active projects across high-altitude and lowland districts." },
            { value: "15k", label: "Trees Planted", desc: "Restoring native biodiversity through agroforestry initiatives." },
          ].map((s, i) => (
            <div key={i} className="p-6 border-l border-brand-outline-variant">
              <div className={`text-6xl font-extrabold mb-4 ${i === 0 ? 'text-brand-primary' : i === 1 ? 'text-brand-blushed-brick' : 'text-brand-tertiary'}`}>
                {s.value}
              </div>
              <h3 className="text-lg font-semibold text-brand-secondary uppercase tracking-wider">{s.label}</h3>
              <p className="mt-4 text-brand-outline">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function GetInvolvedSection() {
  return (
    <section className="py-28 bg-brand-surface-container-low">
      <div className="px-6 md:px-16 max-w-[1280px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-5xl md:text-5xl font-bold text-brand-primary mb-4">Get Involved</h2>
            <p className="text-xl text-brand-outline">Transform lives and landscapes. Whether you&apos;re a student or a professional, we have a place for your passion.</p>
          </div>
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
              className="mt-10 border-2 border-brand-primary text-brand-primary px-6 py-3 rounded-lg text-sm font-bold hover:bg-brand-primary hover:text-white transition-all text-center"
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
  return (
    <section className="py-28 overflow-hidden">
      <div className="px-6 md:px-16 max-w-[1280px] mx-auto">
        <div className="bg-brand-tertiary-container rounded-3xl p-8 md:p-20 relative">
          <blockquote className="text-3xl md:text-5xl font-bold text-brand-on-tertiary-container italic mb-10 leading-tight">
            &ldquo;My experience with SADP-Nepal was truly incredible. The staff and host family were so welcoming and made me feel at home. The work we did was very fulfilling and I enjoyed every minute of it. It was amazing to live with a local family and learn about their culture, language, and way of life. I would highly recommend this program to anyone looking for a meaningful volunteer experience.&rdquo;
          </blockquote>
          <div className="flex items-center gap-6">
            <div
              className="w-16 h-16 rounded-full bg-cover bg-center border-2 border-brand-primary shrink-0"
              style={{ backgroundImage: `url(${TESTIMONIAL_AVATAR})` }}
            />
            <div>
              <cite className="not-italic text-xl font-semibold text-brand-primary block">Jon Gebbia</cite>
              <span className="text-brand-primary text-xs font-bold">Volunteer, USA</span>
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
        <div className="flex justify-between items-center mb-16">
          <h2 className="text-5xl font-bold text-brand-primary">Recent Updates</h2>
          <a href="#" className="text-brand-primary text-sm font-bold flex items-center gap-2 hover:translate-x-2 transition-transform">
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
            className="bg-brand-blushed-brick text-white px-12 py-5 rounded-lg text-lg font-semibold hover:scale-105 transition-transform"
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
      <StatsSection />
      <GetInvolvedSection />
      <TestimonialSection />
      <NewsSection />
      <CTASection />
    </>
  );
}
