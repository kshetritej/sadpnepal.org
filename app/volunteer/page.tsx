import Link from "next/link";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1782211589058-78f2a3cced2e?w=1200&q=80&auto=format&fit=crop";

export default function VolunteerPage() {
  return (
    <>
      <section className="relative min-h-[50vh] overflow-hidden bg-brand-bg">
        <div className="max-w-[1280px] mx-auto px-6 md:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 min-h-[50vh] items-center">
            <div className="py-16 md:py-24">
              <span className="inline-block bg-brand-primary text-primary-foreground text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded mb-6">VOLUNTEER</span>
              <h1 className="text-4xl md:text-6xl font-black text-brand-primary mb-6">
                Sow the seeds<br />of change<span className="text-brand-blushed-brick">.</span>
              </h1>
              <p className="text-lg md:text-xl text-brand-on-surface-variant max-w-lg mb-8 leading-relaxed">
                Join SADP-Nepal and contribute to sustainable agriculture and
                community-led development in rural Nepal.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="#apply"
                  className="bg-brand-primary text-white px-8 py-3.5 rounded-full text-sm font-bold shadow-sm hover:bg-brand-primary/90 transition-all duration-200 text-center"
                >
                  Apply Now
                </a>
                <Link
                  href="/about"
                  className="border-2 border-brand-primary text-brand-primary px-8 py-3.5 rounded-full text-sm font-bold hover:bg-brand-primary hover:text-white transition-all duration-200 text-center"
                >
                  Learn More
                </Link>
              </div>
            </div>
            <div className="relative h-[300px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl rotate-[1.5deg]">
              <img
                src={HERO_IMAGE}
                alt="Volunteer in Nepal"
                className="w-full h-full object-cover scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-28">
        <div className="max-w-[1280px] mx-auto px-6 md:px-16">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 lg:col-span-8">
              <p className="text-sm font-bold uppercase tracking-widest text-brand-blushed-brick mb-4">
                Why Volunteer
              </p>
              <h2 className="text-5xl font-extrabold text-brand-primary mb-6">
                Cultivate Impact, Cultivate Self
              </h2>
              <p className="text-xl text-brand-on-surface-variant mb-8">
                Volunteering with SADP-Nepal is more than service — it is a
                chance to grow alongside the communities we work with. You will
                gain hands-on experience in permaculture, regenerative
                agriculture, and grassroots organising while living simply in
                some of Nepal&rsquo;s most beautiful regions.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
                <div className="bg-brand-surface-container rounded-xl p-8">
                  <h3 className="text-2xl font-semibold text-brand-primary mb-3">
                    Sustainable Farming
                  </h3>
                  <p className="text-brand-on-surface-variant">
                    Work alongside local farmers to restore soil health,
                    implement water-harvesting systems, and establish
                    food-forest plots using permaculture principles.
                  </p>
                </div>
                <div className="bg-brand-surface-container rounded-xl p-8">
                  <h3 className="text-2xl font-semibold text-brand-primary mb-3">
                    Community Building
                  </h3>
                  <p className="text-brand-on-surface-variant">
                    Co-facilitate workshops, support women-led cooperatives, and
                    help document indigenous knowledge so it can be shared with
                    future generations.
                  </p>
                </div>
              </div>

              <div className="bg-brand-primary-container rounded-xl p-10 mb-16">
                <h3 className="text-2xl font-semibold text-brand-yellow-green mb-6">
                  What We Look For
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3 text-brand-yellow-green/90">
                    <svg
                      className="w-6 h-6 shrink-0 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-xl">
                      <strong className="text-brand-yellow-green">
                        Commitment to Sustainability
                      </strong>{" "}
                      — a genuine interest in ecological farming and low-impact
                      living.
                    </span>
                  </li>
                  <li className="flex items-start gap-3 text-brand-yellow-green/90">
                    <svg
                      className="w-6 h-6 shrink-0 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-xl">
                      <strong className="text-brand-yellow-green">
                        Adaptability
                      </strong>{" "}
                      — you will live in a rural setting with limited
                      connectivity and basic amenities.
                    </span>
                  </li>
                  <li className="flex items-start gap-3 text-brand-yellow-green/90">
                    <svg
                      className="w-6 h-6 shrink-0 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-xl">
                      <strong className="text-brand-yellow-green">
                        Communication
                      </strong>{" "}
                      — willingness to navigate cross-cultural contexts with
                      patience and curiosity.
                    </span>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-5xl font-extrabold text-brand-primary mb-6">
                  Local Living Experience
                </h2>
                <p className="text-xl text-brand-on-surface-variant mb-8">
                  Volunteers stay with host families in the communities they
                  serve, sharing meals, learning local languages, and
                  experiencing daily life in rural Nepal. This immersion is the
                  heart of the programme — you do not just visit, you belong.
                </p>
                <img
                  src="https://images.unsplash.com/photo-1763809678352-0f9ca8adb331?w=1200&q=80&auto=format&fit=crop"
                  alt="Volunteers in rural Nepal"
                  className="w-full rounded-xl"
                  loading="lazy"
                />
              </div>
            </div>

            <aside className="col-span-12 lg:col-span-4">
              <div className="sticky top-24 space-y-8">
                <div className="bg-brand-surface-container-high rounded-xl p-8">
                  <h3 className="text-2xl font-semibold text-brand-primary mb-6">
                    Quick Facts
                  </h3>
                  <dl className="space-y-5">
                    <div>
                      <dt className="text-sm font-bold uppercase tracking-widest text-brand-on-surface-variant mb-1">
                        Duration
                      </dt>
                      <dd className="text-lg text-brand-primary">
                        Min 2 weeks up to 6 months
                      </dd>
                    </div>
                    <div>
                      <dt className="text-sm font-bold uppercase tracking-widest text-brand-on-surface-variant mb-1">
                        Language
                      </dt>
                      <dd className="text-lg text-brand-primary">
                        English required
                      </dd>
                    </div>
                    <div>
                      <dt className="text-sm font-bold uppercase tracking-widest text-brand-on-surface-variant mb-1">
                        Location
                      </dt>
                      <dd className="text-lg text-brand-primary">
                        Lalitpur, Kaski, Kavre
                      </dd>
                    </div>
                  </dl>
                </div>

                <div className="bg-brand-secondary-container rounded-xl p-8">
                  <h3 className="text-2xl font-semibold text-brand-secondary mb-6">
                    Why SADP?
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <svg
                        className="w-6 h-6 shrink-0 mt-0.5 text-brand-secondary"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                        />
                      </svg>
                      <span className="text-brand-secondary">
                        <strong>Registered NGO</strong> — officially recognised
                        by the Government of Nepal.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg
                        className="w-6 h-6 shrink-0 mt-0.5 text-brand-secondary"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      <span className="text-brand-secondary">
                        <strong>Community-led</strong> — projects are designed
                        and driven by local communities, not external agendas.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section id="apply" className="py-28 bg-brand-surface-container">
        <div className="max-w-4xl mx-auto px-6 md:px-16">
          <p className="text-sm font-bold uppercase tracking-widest text-brand-blushed-brick mb-4 text-center">
            Get Involved
          </p>
          <h2 className="text-5xl font-extrabold text-brand-primary mb-12 text-center">
            Volunteer Application
          </h2>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="fullName"
                  className="block text-sm font-bold uppercase tracking-widest text-brand-on-surface-variant mb-2"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-brand-surface-container-low border border-brand-outline-variant text-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-bold uppercase tracking-widest text-brand-on-surface-variant mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-brand-surface-container-low border border-brand-outline-variant text-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="skills"
                  className="block text-sm font-bold uppercase tracking-widest text-brand-on-surface-variant mb-2"
                >
                  Primary Skills
                </label>
                <select
                  id="skills"
                  name="skills"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-brand-surface-container-low border border-brand-outline-variant text-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary"
                >
                  <option value="">Select a skill</option>
                  <option value="farming">Farming / Agriculture</option>
                  <option value="teaching">Teaching / Education</option>
                  <option value="construction">Construction</option>
                  <option value="healthcare">Healthcare</option>
                  <option value="communications">
                    Communications / Media
                  </option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="duration"
                  className="block text-sm font-bold uppercase tracking-widest text-brand-on-surface-variant mb-2"
                >
                  Preferred Duration
                </label>
                <select
                  id="duration"
                  name="duration"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-brand-surface-container-low border border-brand-outline-variant text-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary"
                >
                  <option value="">Select duration</option>
                  <option value="2-weeks">2 weeks</option>
                  <option value="1-month">1 month</option>
                  <option value="3-months">3 months</option>
                  <option value="6-months">6 months</option>
                </select>
              </div>
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-bold uppercase tracking-widest text-brand-on-surface-variant mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="w-full px-4 py-3 rounded-lg bg-brand-surface-container-low border border-brand-outline-variant text-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary"
                placeholder="Tell us about yourself and why you want to volunteer..."
              />
            </div>

            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                id="terms"
                name="terms"
                required
                className="mt-1 h-5 w-5 rounded border-brand-outline-variant text-brand-primary focus:ring-brand-primary"
              />
              <label htmlFor="terms" className="text-brand-on-surface-variant">
                I confirm that the information provided is accurate and I agree
                to the terms and conditions of the volunteer programme.
              </label>
            </div>

            <div>
              <button
                type="submit"
                className="w-full bg-brand-primary text-white text-sm font-bold px-8 py-3.5 rounded-full shadow-sm hover:bg-brand-primary/90 transition-all duration-200"
              >
                Submit Application
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
