import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Leaf, Droplets, School } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Dedicated to empowering local communities through regenerative agriculture and environmental stewardship in Nepal.",
};

const HERO_BG =
  "https://images.unsplash.com/photo-1755010212818-9f08974a9664?w=1200&q=80&auto=format&fit=crop";

const leaders = [
  {
    name: "Dr. Sunita Sharma",
    role: "Executive Director",
    bio: "20+ years of experience in Himalayan biodiversity conservation and sustainable policy.",
  },
  {
    name: "Rajesh Adhikari",
    role: "Lead Agronomist",
    bio: "Specialist in organic pest management and soil health restoration in mountain terrains.",
  },
  {
    name: "Maya Gurung",
    role: "Community Outreach",
    bio: "Connecting over 200 women-led cooperatives with sustainable market opportunities.",
  },
  {
    name: "Bishnu Thapa",
    role: "Technical Advisor",
    bio: "Pioneer of organic seed banking in Nepal and former government consultant.",
  },
];

export default function About() {
  return (
    <>
      <section className="relative min-h-[40vh] overflow-hidden bg-brand-bg">
        <div className="max-w-[1280px] mx-auto px-6 md:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 min-h-[40vh] items-center">
            <div className="py-16 md:py-24">
              <span className="inline-block bg-brand-primary text-primary-foreground text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded mb-6">OUR MISSION</span>
              <h1 className="text-4xl md:text-6xl font-black leading-[0.9] text-brand-primary mb-6" style={{ fontFamily: "var(--font-syne)" }}>
                Cultivating<br />Sustainable Futures<br />in Nepal.
              </h1>
              <p className="text-lg md:text-xl text-brand-on-surface-variant max-w-lg mb-8 leading-relaxed">
                Dedicated to empowering local communities through regenerative agriculture and environmental stewardship since 2004.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/volunteer"
                  className="bg-primary text-primary-foreground px-6 py-3 rounded-lg text-sm font-semibold hover:opacity-90 transition-all shadow text-center"
                >
                  Become a Volunteer
                </Link>
                <Link
                  href="/donate"
                  className="border border-primary text-primary px-6 py-3 rounded-lg text-sm font-semibold hover:bg-primary hover:text-primary-foreground transition-all text-center"
                >
                  Support Our Work
                </Link>
              </div>
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
        </div>
      </section>

      <section className="py-28 px-6 md:px-16 max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-4">
            <h2 className="text-5xl font-bold text-brand-primary sticky top-24">The Seeds of Our Vision</h2>
          </div>
          <div className="lg:col-span-8 space-y-12">
            <p className="text-xl leading-relaxed mb-8">
              Founded in the wake of the millennium, the Sustainable Agriculture Development Program (SADP) Nepal emerged from a simple yet profound observation: the traditional farming systems of Nepal, while resilient, were under threat from climate volatility and modern chemical dependency.
            </p>
            <p className="leading-relaxed mb-8">
              Our journey began in the Kaski district with a handful of dedicated agronomists and local elders. We sought to bridge the gap between ancestral wisdom and contemporary ecological science. What started as a local pilot for composting and seed saving has blossomed into a nationwide network of sustainable farms, training centers, and community collectives.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
              <div className="bg-brand-surface-container p-6 border-l-4 border-brand-blushed-brick">
                <h4 className="text-2xl font-semibold mb-2">Our Vision</h4>
                <p>A Nepal where every farmer is a steward of the earth, and every community is food-secure and climate-resilient.</p>
              </div>
              <div className="bg-brand-surface-container p-6 border-l-4 border-brand-primary">
                <h4 className="text-2xl font-semibold mb-2">Our Values</h4>
                <p>Integrity, ecological justice, community-led innovation, and radical transparency in all our development efforts.</p>
              </div>
            </div>
            <p className="leading-relaxed">
              Today, SADP-Nepal stands as a beacon for regenerative practices in the Himalayas. We don&apos;t just teach farming; we cultivate ecosystems of knowledge that allow families to thrive without compromising the health of their land for future generations.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-brand-primary py-28">
        <div className="px-6 md:px-16 max-w-[1280px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white">Strategic Agriculture Goals</h2>
            <p className="text-xl text-white/70 mt-4 max-w-2xl mx-auto">Measuring our impact through clear, actionable pillars of sustainable development.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Leaf, title: "Biodiversity Restoration", desc: "Reintroducing over 150 indigenous crop varieties and protecting native pollinators to ensure ecological balance across 50 districts." },
              { icon: Droplets, title: "Water Sovereignty", desc: "Implementing micro-irrigation and rainwater harvesting systems that decrease agricultural water waste by 40% in rain-shadow regions." },
              { icon: School, title: "Farmer Education", desc: "Establishing regional Farming Schools to train 10,000 lead farmers annually in permaculture and organic certification standards." },
            ].map((g, i) => {
              const Icon = g.icon;
              return (
                <div key={i} className="bg-brand-primary-container p-6 rounded-lg border border-white/10 hover:border-brand-yellow-green transition-colors group">
                  <div className="w-12 h-12 bg-brand-yellow-green rounded-full flex items-center justify-center mb-6 text-brand-primary">
                    <Icon className="size-6" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-4">{g.title}</h3>
                  <p className="text-white/80">{g.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-28 px-6 md:px-16 max-w-[1280px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-5xl font-bold text-brand-primary mb-4">Our Leadership</h2>
            <p className="text-xl text-brand-secondary">A diverse team of agronomists, community organizers, and sustainability experts dedicated to change.</p>
          </div>
          <a href="#" className="text-brand-primary text-sm font-bold flex items-center gap-2 group">
            VIEW ALL STAFF <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {leaders.map((l, i) => (
            <div key={i} className="bg-brand-surface-container p-6 rounded-xl border border-brand-outline-variant">
              <h4 className="text-2xl font-semibold text-brand-primary">{l.name}</h4>
              <p className="text-brand-blushed-brick text-xs font-bold uppercase tracking-wider mb-3">{l.role}</p>
              <p className="text-brand-on-surface/70">{l.bio}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-28 px-6 md:px-16">
        <div className="bg-brand-yellow-green rounded-xl p-12 md:p-24 text-center max-w-[1280px] mx-auto relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-5xl md:text-5xl font-bold text-brand-primary mb-8">Join Our Growing Community.</h2>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link href="/volunteer" className="bg-primary text-primary-foreground px-10 py-4 text-sm font-bold rounded hover:opacity-90 transition-all shadow">
                Become a Volunteer
              </Link>
              <Link href="/donate" className="border border-primary text-primary px-10 py-4 text-sm font-bold rounded hover:bg-primary hover:text-primary-foreground transition-all">
                Support Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
