import Link from "next/link";

export default function InternshipPage() {
  return (
    <>
      <section className="relative min-h-[50vh] overflow-hidden bg-brand-bg">
        <div className="max-w-[1280px] mx-auto px-6 md:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 min-h-[50vh] items-center">
            <div className="py-16 md:py-24">
              <span className="inline-block bg-brand-primary text-primary-foreground text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded mb-6">ENROLLING NOW</span>
              <h1 className="text-4xl md:text-6xl font-black text-brand-primary mb-6">
                2026 Global<br />Internship Program
              </h1>
              <p className="text-lg md:text-xl text-brand-on-surface-variant max-w-lg mb-8 leading-relaxed">
                A 6-week, field-based immersive program in Nepal focused on
                regenerative agriculture, water systems, and community-led
                development. Gain hands-on experience alongside local experts.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="#apply"
                  className="bg-primary text-primary-foreground px-6 py-3 rounded-lg text-sm font-semibold hover:opacity-90 transition-all shadow text-center"
                >
                  Apply Now
                </a>
                <Link
                  href="/volunteer"
                  className="border border-primary text-primary px-6 py-3 rounded-lg text-sm font-semibold hover:bg-primary hover:text-primary-foreground transition-all text-center"
                >
                  See Programs
                </Link>
              </div>
            </div>
            <div className="relative h-[300px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl rotate-[1.5deg]">
              <img
                src="https://images.unsplash.com/photo-1495528156639-3015d7e3ed97?w=1200&q=80&auto=format&fit=crop"
                alt="Internship program"
                className="w-full h-full object-cover scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-[1280px] mx-auto px-6 md:px-16 -mt-16 relative z-20">
        <div className="bg-white rounded-xl shadow-xl grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-100">
          {[
            { value: "6 Weeks", label: "Duration" },
            { value: "15", label: "Limited Seats" },
            { value: "100%", label: "Field Based" },
            { value: "Nepal", label: "Location" },
          ].map((item) => (
            <div key={item.label} className="p-8 text-center">
              <div className="text-3xl font-extrabold text-brand-primary">
                {item.value}
              </div>
              <div className="text-sm font-bold uppercase tracking-widest text-brand-on-surface-variant mt-1">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-28">
        <div className="max-w-[1280px] mx-auto px-6 md:px-16">
          <span className="text-sm font-bold uppercase tracking-widest text-brand-primary block mb-2">
            CURRICULUM
          </span>
          <h2 className="text-5xl font-extrabold text-brand-primary mb-12">
            What You&apos;ll Learn
          </h2>

          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 md:col-span-7 bg-brand-surface-container rounded-2xl p-8">
              <div className="w-12 h-12 bg-brand-primary rounded-xl flex items-center justify-center mb-4">
                <span className="text-brand-yellow-green text-2xl">🌱</span>
              </div>
              <h3 className="text-2xl font-semibold text-brand-primary mb-3">
                Regenerative Soil Management
              </h3>
              <p className="text-xl text-brand-on-surface-variant mb-6">
                Learn composting, vermiculture, biochar production, and
                no-till farming techniques that restore soil health and
                sequester carbon in the mid-hills of Nepal.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="bg-brand-secondary-container text-brand-secondary text-sm font-medium px-4 py-2 rounded-full">
                  Soil Science
                </span>
                <span className="bg-brand-secondary-container text-brand-secondary text-sm font-medium px-4 py-2 rounded-full">
                  Lab Research
                </span>
              </div>
            </div>

            <div className="col-span-12 md:col-span-5 bg-brand-surface-container rounded-2xl p-8">
              <div className="w-12 h-12 bg-brand-primary rounded-xl flex items-center justify-center mb-4">
                <span className="text-brand-yellow-green text-2xl">💧</span>
              </div>
              <h3 className="text-2xl font-semibold text-brand-primary mb-3">
                Water Systems &amp; Irrigation
              </h3>
              <p className="text-xl text-brand-on-surface-variant mb-6">
                Design and install gravity-fed drip irrigation, rainwater
                harvesting, and check-dam systems.
              </p>
              <ul className="space-y-3">
                {[
                  "Survey & site assessment",
                  "System design & material takeoff",
                  "Installation & testing",
                  "Community training",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="text-brand-primary mt-1 shrink-0">✓</span>
                    <span className="text-brand-on-surface-variant">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-span-12 md:col-span-4 bg-brand-surface-container rounded-2xl p-8">
              <div className="w-12 h-12 bg-brand-primary rounded-xl flex items-center justify-center mb-4">
                <span className="text-brand-yellow-green text-2xl">🤝</span>
              </div>
              <h3 className="text-2xl font-semibold text-brand-primary mb-3">
                Community Outreach
              </h3>
              <p className="text-xl text-brand-on-surface-variant">
                Facilitate participatory rural appraisals, lead farmer
                training workshops, and collaborate with local women&apos;s
                cooperatives on kitchen garden initiatives.
              </p>
            </div>

            <div className="col-span-12 md:col-span-8 rounded-2xl relative overflow-hidden min-h-[300px]">
              <img
                src="https://images.unsplash.com/photo-1681636052845-219e64b8024c?w=1200&q=80&auto=format&fit=crop"
                alt="Capstone project"
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              <div className="relative z-10 p-8 flex flex-col justify-end h-full min-h-[300px]">
                <div className="w-12 h-12 bg-brand-yellow-green rounded-xl flex items-center justify-center mb-4">
                  <span className="text-brand-primary text-2xl">🚀</span>
                </div>
                <h3 className="text-2xl font-semibold text-white mb-3">
                  Capstone Project
                </h3>
                <p className="text-xl text-white/80 max-w-xl">
                  Design and implement a community-driven project from
                  proposal to evaluation, mentored by SADP-Nepal field staff
                  and partner university faculty.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-28 bg-brand-tertiary">
        <div className="max-w-[1280px] mx-auto px-6 md:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <span className="text-sm font-bold uppercase tracking-widest text-brand-yellow-green block mb-2">
                REQUIREMENTS
              </span>
              <h2 className="text-5xl font-extrabold text-white mb-8">
                Who We&apos;re Looking For
              </h2>
              <div className="space-y-6">
                {[
                  {
                    icon: "🎓",
                    title: "Academic Background",
                    desc: "Currently enrolled in or recent graduate of agriculture, environmental science, engineering, or related fields.",
                  },
                  {
                    icon: "🤲",
                    title: "Commitment to Service",
                    desc: "Demonstrated interest in community development, food sovereignty, or global health equity.",
                  },
                  {
                    icon: "🌐",
                    title: "Language Skills",
                    desc: "English proficiency required; Nepali language skills are a strong plus — we provide language support.",
                  },
                ].map((req) => (
                  <div key={req.title} className="flex gap-4">
                    <div className="w-12 h-12 bg-brand-tertiary-container rounded-xl flex items-center justify-center shrink-0">
                      <span className="text-xl">{req.icon}</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white">
                        {req.title}
                      </h3>
                      <p className="text-white/70">{req.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-semibold text-brand-primary mb-6">
                Apply Now
              </h3>
              <form className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="first-name"
                      className="block text-sm font-medium text-brand-on-surface-variant mb-1"
                    >
                      First Name
                    </label>
                    <input
                      id="first-name"
                      type="text"
                      className="w-full border border-brand-outline-variant rounded-lg px-4 py-3 text-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="last-name"
                      className="block text-sm font-medium text-brand-on-surface-variant mb-1"
                    >
                      Last Name
                    </label>
                    <input
                      id="last-name"
                      type="text"
                      className="w-full border border-brand-outline-variant rounded-lg px-4 py-3 text-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-brand-on-surface-variant mb-1"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="w-full border border-brand-outline-variant rounded-lg px-4 py-3 text-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary"
                    placeholder="john@university.edu"
                  />
                </div>
                <div>
                  <label
                    htmlFor="university"
                    className="block text-sm font-medium text-brand-on-surface-variant mb-1"
                  >
                    University
                  </label>
                  <input
                    id="university"
                    type="text"
                    className="w-full border border-brand-outline-variant rounded-lg px-4 py-3 text-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary"
                    placeholder="Your university"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-brand-on-surface-variant mb-1"
                  >
                    Why do you want to join this program?
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full border border-brand-outline-variant rounded-lg px-4 py-3 text-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary resize-none"
                    placeholder="Tell us about your motivation..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground text-sm font-semibold uppercase tracking-widest px-6 py-3 rounded-lg hover:opacity-90 transition-opacity"
                >
                  Submit Application
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="py-28">
        <div className="max-w-[1280px] mx-auto px-6 md:px-16">
          <div className="bg-brand-surface-container rounded-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-5">
            <div className="lg:col-span-2 relative h-64 lg:h-auto">
              <img
                src="https://images.unsplash.com/photo-1592285896110-8d88b5b3a5d8?w=800&q=80&auto=format&fit=crop"
                alt="Alumna testimonial"
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="lg:col-span-3 p-8 md:p-12 flex flex-col justify-center">
              <span className="text-sm font-bold uppercase tracking-widest text-brand-primary block mb-4">
                TESTIMONIAL
              </span>
              <blockquote className="text-xl text-brand-on-surface-variant leading-relaxed mb-6">
                &ldquo;The SADP-Nepal internship completely transformed my
                understanding of what sustainable development looks like on
                the ground. Working alongside Nepali farmers and community
                leaders taught me more in 12 weeks than I learned in two
                years of coursework. This program doesn&rsquo;t just teach
                you — it changes how you see the world.&rdquo;
              </blockquote>
              <div>
                <div className="font-semibold text-brand-primary">
                  Sarah Mitchell
                </div>
                <div className="text-sm text-brand-on-surface-variant">
                  2024 Global Intern, University of California, Berkeley
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
