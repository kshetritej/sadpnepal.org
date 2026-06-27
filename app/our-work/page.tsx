import type { Metadata } from "next";
import Link from "next/link";
import { TreePine, Store, Heart, Building2, Sprout, BookOpen, Utensils, FlaskConical, Scale, Apple, Droplets, Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Work",
  description: "Projects and programs implemented by SADP Nepal across Nepal.",
};

const HERO_BG =
  "https://images.unsplash.com/photo-1731491435516-566d6d1e3141?w=1200&q=80&auto=format&fit=crop";

const PROJECTS = [
  {
    icon: TreePine,
    title: "Climate Change & Coffee Production",
    subtitle: "Panchkhal, Kavre district (2025–2026)",
    donor: "Supported by UNCON, USA",
    body: `SADP Nepal completed climate change and coffee production orientation program to farmers of Panchkhal in presence of Deputy Mayor of Panchkhal Municipality on November 2, 2025. The program was successfully conducted and effectively met its objectives. Active participation, practical knowledge sharing, and strong cooperation among stakeholders contributed to the program's success. Follow-up activities such as field demonstrations and additional training sessions are recommended. Very soon, SADP is going to conduct 2 days coffee production training to 25 farmers.`,
  },
  {
    icon: Store,
    title: "Marketing of Organic Products",
    subtitle: "KOSELI GHAR Project, Sanga, Kavre (2022–2023)",
    donor: null,
    body: `The project was implemented from 2022 to 2023 in Sanga, Kavre for the installation of organic shop in concept of promotion of Eco-tourism. The training on grading, packaging was provided to the women for the employment generation and supported with seed money to start the organic shop. The seed money was returned back to another woman for initiating such business.`,
  },
  {
    icon: Heart,
    title: "Livelihood Generation Project",
    subtitle: "Sanga, Kavre district (2020–2021)",
    donor: "Funded by UNCON, USA",
    body: `An income generation project initiated from Sanga, Kavre district of Nepal recognizing the importance of women through economic empowerment in agriculture. 10 women were benefitted by the project by farming goat and poultry.`,
  },
  {
    icon: FlaskConical,
    title: "Zero Energy Cool Chamber",
    subtitle: "Kavre district (2017–2018)",
    donor: "Trellis Fund, USAID",
    body: `Project funded by USAID, Trellis Fund for the construction of Zero Energy Cool Chamber (ZECC) in Kavre district for extending shelf-life and quality of vegetables through cost-effective storage unit for marketing purpose. Benefitted more than 100 families to store and extend the shelf-life.`,
  },
  {
    icon: Shield,
    title: "Earthquake Victim Relief Programs",
    subtitle: "Tanahun & Kavre districts (2015)",
    donor: "Bumblebee Foundation, Australia / URI",
    body: `Earthquake that hit on 25th April, 2015 destroyed most of the part of Nepal. Team of SADP concentrated on supporting victims of Tanahun district and Kavre district in collaboration with Bumblebee Foundation of Australia, United Religions Initiatives (URI) and individual donors around the world.`,
  },
];

const OTHER_WORKS = [
  { icon: BookOpen, text: "Research and support to Organic Agriculture supported by Agriculture Institute of Canada (AIC), 2009–2011" },
  { icon: Apple, text: "Promoting Organic Agriculture for Nutrition, Food Security and Economic Sustainability funded by World Food Program (WFP), 2011" },
  { icon: Sprout, text: "Rural School gardening program of Tanahu district funded by Food and Agriculture Organization (FAO), 2011–2012" },
  { icon: Droplets, text: "Economic Enhancement of ethnic community of Tanahu district supported by Trellis fund, USAID, 2011–2012" },
  { icon: Scale, text: "Soil fertility improvement and increasing yield of organically grown tomatoes in Kavre district funded by Trellis Fund, USAID, 2012–2013" },
  { icon: Heart, text: "Economic Empowerment of marginalized indigenous women of Tanahu district, 2014 funded by USAID" },
];

export default function OurWork() {
  return (
    <>
      <section className="relative min-h-[50vh] overflow-hidden bg-brand-bg">
        <div className="max-w-[1280px] mx-auto px-6 md:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 min-h-[50vh] items-center">
            <div className="py-16 md:py-24">
              <span className="inline-block bg-brand-primary text-primary-foreground text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded mb-6">PROJECTS</span>
              <h1 className="text-4xl md:text-6xl font-black text-brand-primary mb-6">
                Our Work<span className="text-brand-blushed-brick">.</span>
              </h1>
              <p className="text-xl md:text-2xl text-brand-on-surface-variant max-w-lg mb-8 leading-relaxed">
                We have accomplished lots of works at small scales across different parts of Nepal. Our members have been making impacts to plenty of farmer&apos;s growth and livelihood.
              </p>
            </div>
            <div className="relative h-[300px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl rotate-[1.5deg]">
              <img
                src={HERO_BG}
                alt="Our work in Nepal"
                className="w-full h-full object-cover scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-28">
        <div className="px-6 md:px-16 max-w-[1280px] mx-auto">
          <div className="space-y-12">
            {PROJECTS.map((project, i) => {
              const Icon = project.icon;
              return (
                <article key={i} className="grid grid-cols-1 md:grid-cols-5 gap-8 items-start bg-white rounded-2xl p-8 md:p-12 border border-brand-outline-variant">
                  <div className="md:col-span-1">
                    <div className="w-14 h-14 bg-brand-yellow-green rounded-xl flex items-center justify-center">
                      <Icon className="size-7 text-brand-primary" />
                    </div>
                  </div>
                  <div className="md:col-span-4">
                    <h2 className="text-2xl font-bold text-brand-primary mb-1">{project.title}</h2>
                    <p className="text-sm text-brand-outline mb-1">{project.subtitle}</p>
                    {project.donor && (
                      <p className="text-xs font-bold text-brand-blushed-brick uppercase tracking-wider mb-4">{project.donor}</p>
                    )}
                    <p className="text-xl text-brand-on-surface-variant leading-relaxed">{project.body}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-28 bg-brand-surface-container-low">
        <div className="px-6 md:px-16 max-w-[1280px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-brand-primary mb-6">
              Other Notable Works<span className="text-brand-blushed-brick">.</span>
            </h2>
            <p className="text-xl text-brand-on-surface-variant max-w-3xl mx-auto">
              SADP Nepal has been continuously working on multiple projects across Nepal since its establishment.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {OTHER_WORKS.map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="flex gap-4 items-start bg-white rounded-xl p-6 border border-brand-outline-variant">
                  <div className="w-10 h-10 bg-brand-primary/10 rounded-lg flex items-center justify-center shrink-0">
                    <Icon className="size-5 text-brand-primary" />
                  </div>
                  <p className="text-xl text-brand-on-surface-variant leading-relaxed">{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-28 px-6 md:px-16">
        <div className="bg-brand-yellow-green rounded-xl p-12 md:p-24 text-center max-w-[1280px] mx-auto relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-5xl font-black text-brand-primary mb-8">Support Our Mission<span className="text-brand-blushed-brick">.</span></h2>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link href="/donate" className="bg-white text-brand-primary px-8 py-3.5 text-sm font-bold rounded-full shadow-sm hover:bg-white/90 transition-all duration-200">
                Donate Now
              </Link>
              <Link href="/volunteer" className="border-2 border-brand-primary text-brand-primary px-8 py-3.5 text-sm font-bold rounded-full hover:bg-brand-primary hover:text-white transition-all duration-200">
                Join Our Mission
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
