import type { Metadata } from "next";
import Link from "next/link";
import { Target, Eye, Clock, Leaf, Sprout, Apple, Store, FlaskConical, Scale, Globe, TreePine, Briefcase, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Dedicated to empowering local communities through regenerative agriculture and environmental stewardship in Nepal.",
};

const HERO_BG =
  "https://images.unsplash.com/photo-1755010212818-9f08974a9664?w=1200&q=80&auto=format&fit=crop";

export default function About() {
  return (
    <>
      <section className="relative min-h-[50vh] overflow-hidden bg-brand-bg">
        <div className="max-w-[1280px] mx-auto px-6 md:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 min-h-[50vh] items-center">
            <div className="py-16 md:py-24">
              <span className="inline-block bg-brand-primary text-primary-foreground text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded mb-6">ABOUT US</span>
              <h1 className="text-4xl md:text-6xl font-black text-brand-primary mb-6">
                Cultivating<br />Change in Nepal<span className="text-brand-blushed-brick">.</span>
              </h1>
              <p className="text-xl md:text-xl text-brand-on-surface-variant max-w-lg mb-8 leading-relaxed">
                Everything else can wait, agriculture can&apos;t. For over two decades, SADP Nepal has been empowering farmers through sustainable, regenerative farming.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/volunteer"
                  className="bg-brand-primary text-white px-8 py-3.5 rounded-full text-sm font-bold shadow-sm hover:bg-brand-primary/90 transition-all duration-200 text-center"
                >
                  Join Our Mission
                </Link>
                <Link
                  href="/our-work"
                  className="border-2 border-brand-primary text-brand-primary px-8 py-3.5 rounded-full text-sm font-bold hover:bg-brand-primary hover:text-white transition-all duration-200 text-center"
                >
                  See Our Work
                </Link>
              </div>
            </div>
            <div className="relative h-[300px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl rotate-[1.5deg]">
              <img
                src={HERO_BG}
                alt="Nepal sustainable agriculture"
                className="w-full h-full object-cover scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-28">
        <div className="px-6 md:px-16 max-w-[1280px] mx-auto">
          <div className="max-w-4xl mx-auto text-center mb-20">
            <span className="inline-block bg-brand-primary text-primary-foreground text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded mb-6">INTRODUCTION</span>
            <p className="text-xl md:text-2xl text-brand-on-surface leading-relaxed mb-8">
              Sustainable Agriculture Development Program, Nepal (SADP Nepal) is a non-profit Non-Governmental Organization (NGO). Established in 2004, SADP is committed to improving the livelihood of underprivileged and under resourced farmers through research, development, and the promotion of sustainable agricultural systems in the country.
            </p>
            <p className="text-xl text-brand-on-surface-variant leading-relaxed">
              To achieve its objective SADP puts major emphasis on its partnership and collaboration with farmers, farming communities, academia and other organizations at local, national, regional and international levels. SADP Nepal has broadened its networking in the national and international level. Networking, lobbying and advocating in the favor of organic agriculture is another major focus of SADP Nepal.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
            <div className="bg-brand-surface-container rounded-2xl p-10 md:p-12 border border-brand-outline-variant">
              <div className="w-12 h-12 bg-brand-primary rounded-xl flex items-center justify-center mb-4">
                <Eye className="size-6 text-brand-yellow-green" />
              </div>
              <h2 className="text-2xl font-bold text-brand-primary mb-4">Our Vision</h2>
              <p className="text-xl text-brand-on-surface-variant leading-relaxed">
                To improve the livelihood of Nepalese farmers with diverse agro-ecological, socio-economic, and cultural settings by offering a basic understanding of the development and promotion of sustainable farming practices (Organic Agriculture), which ultimately creates an environmentally friendly society.
              </p>
            </div>
            <div className="bg-brand-surface-container rounded-2xl p-10 md:p-12 border border-brand-outline-variant">
              <div className="w-12 h-12 bg-brand-primary rounded-xl flex items-center justify-center mb-4">
                <Target className="size-6 text-brand-yellow-green" />
              </div>
              <h2 className="text-2xl font-bold text-brand-primary mb-4">Our Goal</h2>
              <p className="text-xl text-brand-on-surface-variant leading-relaxed">
                To extensively promote sustainable use of natural resources in agriculture through participatory research and development in organic agriculture. The alternative renewable resources will be utilized with proper care and technique for the long term effect.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-28 bg-brand-surface-container-low">
        <div className="px-6 md:px-16 max-w-[1280px] mx-auto">
          <div className="text-center mb-16">
            <span className="text-sm font-bold uppercase tracking-widest text-brand-blushed-brick mb-4 block">Timeline</span>
            <h2 className="text-5xl font-black text-brand-primary mb-6">
              Goals by Timeline<span className="text-brand-blushed-brick">.</span>
            </h2>
            <p className="text-xl text-brand-on-surface-variant max-w-3xl mx-auto">
              SADP Nepal has carefully designed its goals for different time frames, considering immediate priorities of farmers, required funding, and long-term impact.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 md:p-10 border border-brand-outline-variant">
              <div className="w-12 h-12 bg-brand-yellow-green rounded-xl flex items-center justify-center mb-4">
                <Clock className="size-6 text-brand-primary" />
              </div>
              <h3 className="text-xl font-bold text-brand-primary mb-3">Short Term (6 mo – 2 yr)</h3>
              <p className="text-xl text-brand-on-surface-variant leading-relaxed">
                Create consumer and farmer forums, linking them so organic food products get easy access at farmer-friendly prices. Train and work with farmers to encourage organic farming, cultivate soil-friendly crops, and value-add harvests with simple research-backed techniques to prolong shelf life.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 md:p-10 border border-brand-outline-variant">
              <div className="w-12 h-12 bg-brand-yellow-green rounded-xl flex items-center justify-center mb-4">
                <Briefcase className="size-6 text-brand-primary" />
              </div>
              <h3 className="text-xl font-bold text-brand-primary mb-3">Mid Term (2 – 5 yr)</h3>
              <p className="text-xl text-brand-on-surface-variant leading-relaxed">
                Create dozens of agro-tourism destinations where travelers can visit, volunteer, experience cultural exchanges, and enjoy peaceful escapades — boosting village livelihoods. Expand technical support for higher-value products and train communities on environmental conservation.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 md:p-10 border border-brand-outline-variant">
              <div className="w-12 h-12 bg-brand-yellow-green rounded-xl flex items-center justify-center mb-4">
                <Globe className="size-6 text-brand-primary" />
              </div>
              <h3 className="text-xl font-bold text-brand-primary mb-3">Long Term (by 2035)</h3>
              <p className="text-xl text-brand-on-surface-variant leading-relaxed">
                Create clusters of organic farming societies across Nepal, develop cost-friendly technologies for value addition and extended shelf life, build travel destinations based on organic farming, and conserve land and water bodies through sustainable methods — preserved for as long as possible.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-28">
        <div className="px-6 md:px-16 max-w-[1280px] mx-auto">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-5xl font-black text-brand-primary mb-8">
              Our Focus Areas<span className="text-brand-blushed-brick">.</span>
            </h2>
            <p className="text-xl text-brand-on-surface-variant leading-relaxed">
              SADP Nepal has outlined the overall goals covering every aspect that encourages us to work tirelessly to make a huge positive impact across Nepal.
            </p>
          </div>
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-brand-primary flex items-center gap-3"><Leaf className="size-7 text-brand-primary" /> Promote Organic & Regenerative Agriculture</h3>
              <p className="text-xl text-brand-on-surface-variant leading-relaxed">Promote organic, regenerative, and agroecological farming systems that enhance soil health, conserve biodiversity, boost ecosystem resilience, and create sustainable food production throughout Nepal. We offer training, technical support, and practical demonstrations to farmers, youth, women, and agricultural entrepreneurs on organic and regenerative farming practices.</p>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-brand-primary flex items-center gap-3"><Sprout className="size-7 text-brand-primary" /> Improve Soil Health & Natural Resource Management</h3>
              <p className="text-xl text-brand-on-surface-variant leading-relaxed">Work with farmers for sustainable management of soil, water, forests, and other natural resources through environmentally friendly agricultural practices. Support climate-smart and regenerative farming approaches that help regenerate top soil health, ecosystem and suppress carbon emission into the environment.</p>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-brand-primary flex items-center gap-3"><Apple className="size-7 text-brand-primary" /> Conserve Indigenous Seeds & Agricultural Biodiversity</h3>
              <p className="text-xl text-brand-on-surface-variant leading-relaxed">Preserve, multiply, and promote indigenous seeds and animal species, local crop varieties, traditional livestock breeds, and agricultural biodiversity. Improve household food security and nutritional outcomes through diversified organic farming systems and healthy food production.</p>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-brand-primary flex items-center gap-3"><Store className="size-7 text-brand-primary" /> Develop Organic Value Chains & Market Access</h3>
              <p className="text-xl text-brand-on-surface-variant leading-relaxed">Facilitate market linkages, organic certification, value addition, branding, and fair trade opportunities for organic producers and farmer groups. Create economic opportunities for women and youth through sustainable agriculture, agribusiness development, leadership training, and entrepreneurship programs.</p>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-brand-primary flex items-center gap-3"><FlaskConical className="size-7 text-brand-primary" /> Support Research, Innovation & Learning Centers</h3>
              <p className="text-xl text-brand-on-surface-variant leading-relaxed">Collaborate with academicians and scholars to conduct participatory research, document best practices, and promote innovation in organic and regenerative agriculture. Develop community-based resource centers and demonstration farms that serve as hubs for learning, innovation, and farmer-to-farmer knowledge exchange.</p>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-brand-primary flex items-center gap-3"><Scale className="size-7 text-brand-primary" /> Advocate for Organic Agriculture Policies</h3>
              <p className="text-xl text-brand-on-surface-variant leading-relaxed">Collaborate with government agencies, civil societies, and international partners to promote policies, standards, and investments that support organic and regenerative agriculture. Promote sustainable rural livelihoods by working with farmers together from planting to harvesting to ultimately selling with the application of organic regenerative farming methods.</p>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-brand-primary flex items-center gap-3"><Globe className="size-7 text-brand-primary" /> Encourage Agro-Tourism & Eco-Tourism</h3>
              <p className="text-xl text-brand-on-surface-variant leading-relaxed">Promote rural tourism blended with authentic culture and agriculture to support the earning of rural farmers and promote this segment of tourism in Nepal. Build partnerships and networks with farmers, cooperatives, universities, NGOs, government agencies, donors, and international organizations working in sustainable agriculture. Support Nepal&apos;s efforts in achieving the Sustainable Development Goals, particularly those related to poverty reduction, food security, climate action, environmental conservation, and sustainable livelihoods.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-28 bg-brand-surface-container-low">
        <div className="px-6 md:px-16 max-w-[1280px] mx-auto">
          <div className="text-center mb-16">
            <span className="text-sm font-bold uppercase tracking-widest text-brand-blushed-brick mb-4 block">Our Principles</span>
            <h2 className="text-5xl font-black text-brand-primary mb-6">
              Objectives<span className="text-brand-blushed-brick">.</span>
            </h2>
            <p className="text-xl text-brand-on-surface-variant max-w-3xl mx-auto">
              Our objectives are our work ethics from which we will never deviate. They will always boost us to get closer to all our goals achieved in different timelines.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {[
              { icon: Leaf, text: "To promote organic agriculture by creating awareness through demonstration, action, research, and development." },
              { icon: Sprout, text: "Practice of regenerative agriculture so that the soil gets restored with more carbon captured, making farms more resilient to climate change while improving food security." },
              { icon: TreePine, text: "Focus on Climate Smart Agriculture by aiming to boost productivity, increase resilience against climate change and decrease greenhouse gas emission." },
              { icon: Users, text: "Encouraging youths and women to seek career paths in organic farming by setting examples of successful lives financially, ethically and emotionally." },
              { icon: FlaskConical, text: "Provide farming communities with relevant skills and technology for better food production and income generation in a sustainable way." },
              { icon: Globe, text: "Create a forum for researchers, development professionals, farming communities, funding organizations, and academia for research and development in sustainable agriculture." },
              { icon: Store, text: "Provide training and professional services to organizations and individuals involved in sustainable agriculture development." },
              { icon: Scale, text: "Empower rural communities, improving their access to resources, information, and markets by establishing organic agriculture resource centers." },
              { icon: Leaf, text: "Advocate in favor of organic agriculture and its importance at national and international levels." },
              { icon: Globe, text: "Link tourism with organic agriculture systems to popularize organic farming through agro (eco) tourism." },
            ].map((obj, i) => {
              const Icon = obj.icon;
              return (
                <div key={i} className="flex gap-4 items-start bg-white rounded-xl p-6 border border-brand-outline-variant">
                  <div className="w-10 h-10 bg-brand-primary/10 rounded-lg flex items-center justify-center shrink-0">
                    <Icon className="size-5 text-brand-primary" />
                  </div>
                  <p className="text-xl text-brand-on-surface-variant leading-relaxed">{obj.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-28">
        <div className="px-6 md:px-16 max-w-[1280px] mx-auto">
          <div className="bg-brand-surface-container rounded-2xl p-10 md:p-16 border border-brand-outline-variant">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-black text-brand-primary mb-8">
                Agro (Eco) Tourism<span className="text-brand-blushed-brick">.</span>
              </h2>
              <p className="text-xl text-brand-on-surface-variant leading-relaxed mb-6">
                Nepal&apos;s combination of stunning natural environment and strong cultural heritage make it a truly remarkable country for the development of tourism. Our concern is to link tourism with the organic agriculture system through which the message gets widespread to popularize organic agriculture.
              </p>
              <p className="text-xl text-brand-on-surface-variant leading-relaxed mb-6">
                When a group of tourists visit, we manage logistics like food, accommodation and recreation. Organic food produced in the farm itself, cozy accommodation within the farm, and recreational activities with pure farming activities and nature is what our farmlands provide. It is a win-win scenario for both guests and hosts.
              </p>
              <p className="text-xl text-brand-on-surface-variant leading-relaxed">
                Local organic food and handicrafts prepared by local people gain value, creating income generation. Beside this, the organization is also committed to preserve and protect the culture of different ethnic groups in its project areas, transmitting cultural values and customs that promote tourism.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-28 px-6 md:px-16">
        <div className="bg-brand-yellow-green rounded-xl p-12 md:p-24 text-center max-w-[1280px] mx-auto relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-5xl font-black text-brand-primary mb-8">Join Our Growing Community<span className="text-brand-blushed-brick">.</span></h2>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link href="/volunteer" className="bg-white text-brand-primary px-8 py-3.5 text-sm font-bold rounded-full shadow-sm hover:bg-white/90 transition-all duration-200">
                Become a Volunteer
              </Link>
              <Link href="/donate" className="border-2 border-brand-primary text-brand-primary px-8 py-3.5 text-sm font-bold rounded-full hover:bg-brand-primary hover:text-white transition-all duration-200">
                Support Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
