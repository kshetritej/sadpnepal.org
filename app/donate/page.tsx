"use client";

import Link from "next/link";
import { useState } from "react";
import { Heart, ShieldCheck, Lock, ArrowRight, CreditCard, School, Leaf } from "lucide-react";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1754665134859-7b5e4a71c570?w=1200&q=80&auto=format&fit=crop"
const PORTRAIT_1 =
  "https://images.unsplash.com/photo-1674788325730-25f58337b918?w=100&q=80&auto=format&fit=crop"
const PORTRAIT_2 =
  "https://images.unsplash.com/photo-1743587825782-a8877338cdc6?w=100&q=80&auto=format&fit=crop"
const PORTRAIT_3 =
  "https://images.unsplash.com/photo-1755011309874-b3c7120b6d5a?w=100&q=80&auto=format&fit=crop"
const IMPACT_IMAGE =
  "https://images.unsplash.com/photo-1763809678352-0f9ca8adb331?w=1200&q=80&auto=format&fit=crop"

const amounts = [
  { value: 25, label: "Seeds & Tools" },
  { value: 50, label: "Training" },
  { value: 100, label: "Irrigation" },
  { value: 500, label: "Community Hub" },
]

export default function DonatePage() {
  const [frequency, setFrequency] = useState<"monthly" | "once">("once")
  const [selectedAmount, setSelectedAmount] = useState(50)
  const [customAmount, setCustomAmount] = useState("")
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    await new Promise((r) => setTimeout(r, 1500))
    setLoading(false)
    alert("Thank you for your generosity!")
  }

  return (
    <div className="bg-brand-bg text-brand-primary">
      {/* Hero */}
      <section className="max-w-[1280px] mx-auto px-6 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 min-h-[50vh] items-center">
          <div className="py-16 md:py-24">
            <span className="inline-block bg-brand-yellow-green/10 text-brand-yellow-green text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded mb-6">
              Urgent Support Needed
            </span>
            <h1 className="text-4xl md:text-6xl font-black text-brand-primary mb-6">
              Empower<br />Nepal&apos;s Sustainable<br />Future.
            </h1>
            <p className="text-lg md:text-xl text-brand-on-surface-variant max-w-lg mb-8 leading-relaxed">
              Your donation provides agricultural tools, training, and
              infrastructure to rural Nepali communities, building resilience
              through sustainable farming and local leadership.
            </p>
            <div className="flex items-center gap-6 mb-8">
              <div className="flex -space-x-4">
                <img
                  src={PORTRAIT_1}
                  alt=""
                  className="w-12 h-12 rounded-full border-2 border-white"
                />
                <img
                  src={PORTRAIT_2}
                  alt=""
                  className="w-12 h-12 rounded-full border-2 border-white"
                />
                <img
                  src={PORTRAIT_3}
                  alt=""
                  className="w-12 h-12 rounded-full border-2 border-white"
                />
              </div>
              <div>
                <span className="font-bold text-xl">1,240+</span>
                <p className="text-sm text-brand-on-surface-variant">
                  Donors this month
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="#form"
                className="bg-primary text-primary-foreground px-6 py-3 rounded-lg text-sm font-semibold hover:opacity-90 transition-all shadow text-center"
              >
                Donate Now
              </a>
              <Link
                href="/about"
                className="border border-primary text-primary px-6 py-3 rounded-lg text-sm font-semibold hover:bg-primary hover:text-primary-foreground transition-all text-center"
              >
                See Our Impact
              </Link>
            </div>
          </div>
          <div className="relative h-[300px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
            <img
              src={HERO_IMAGE}
              alt=""
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
          </div>
        </div>
      </section>

      {/* Donation Form */}
      <section className="max-w-4xl mx-auto px-6 py-24">
        {/* Step indicator */}
        <div className="flex items-center justify-center gap-2 mb-16">
          {["Amount", "Details", "Payment"].map((step, i) => (
            <div key={step} className="flex items-center gap-2">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                  i === 0
                    ? "bg-primary text-primary-foreground"
                    : "bg-brand-surface-container-low text-brand-on-surface-variant"
                }`}
              >
                {i + 1}
              </div>
              <span
                className={`text-sm font-semibold ${
                  i === 0
                    ? "text-brand-primary"
                    : "text-brand-on-surface-variant"
                }`}
              >
                {step}
              </span>
              {i < 2 && (
                <div className="w-24 h-0.5 bg-brand-surface-container-low mx-2" />
              )}
            </div>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="space-y-10">
          {/* Frequency */}
          <div className="flex bg-brand-surface-container-low rounded-xl p-1 w-fit mx-auto">
            {(["monthly", "once"] as const).map((f) => (
              <button
                key={f}
                type="button"
                onClick={() => setFrequency(f)}
                className={`px-8 py-3 rounded-lg text-sm font-semibold transition-colors ${
                  frequency === f
                    ? "bg-primary text-primary-foreground"
                    : "text-brand-on-surface-variant"
                }`}
              >
                {f === "monthly" ? "Monthly Support" : "One-time Gift"}
              </button>
            ))}
          </div>

          {/* Amount presets */}
          <div className="grid grid-cols-4 gap-4">
            {amounts.map((a) => (
              <button
                key={a.value}
                type="button"
                onClick={() => {
                  setSelectedAmount(a.value)
                  setCustomAmount("")
                }}
                className={`rounded-lg p-6 text-center transition-all ${
                      selectedAmount === a.value && !customAmount
                        ? "bg-primary text-primary-foreground"
                        : "bg-brand-surface-container-low text-brand-primary hover:bg-brand-primary-container"
                }`}
              >
                <span className="text-2xl font-bold">${a.value}</span>
                <p className="text-xs mt-1 opacity-80">{a.label}</p>
              </button>
            ))}
          </div>

          {/* Custom amount */}
          <div className="relative w-full max-w-xs mx-auto">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-on-surface-variant text-lg font-semibold">
              $
            </span>
            <input
              type="number"
              placeholder="Custom amount"
              value={customAmount}
              onChange={(e) => {
                setCustomAmount(e.target.value)
                setSelectedAmount(0)
              }}
              className="w-full pl-8 pr-4 py-4 rounded-xl border border-brand-outline-variant bg-transparent text-brand-primary text-lg focus:outline-none focus:border-brand-primary"
            />
          </div>

          {/* Name & Email */}
          <div className="grid grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Full Name"
              required
              className="w-full px-4 py-4 rounded-xl border border-brand-outline-variant bg-transparent text-brand-primary focus:outline-none focus:border-brand-primary"
            />
            <input
              type="email"
              placeholder="Email Address"
              required
              className="w-full px-4 py-4 rounded-xl border border-brand-outline-variant bg-transparent text-brand-primary focus:outline-none focus:border-brand-primary"
            />
          </div>

          {/* Trust signals */}
          <div className="flex items-center justify-center gap-6 text-sm text-brand-on-surface-variant">
            <div className="flex items-center gap-2">
              <Lock size={16} />
              <span>256-bit SSL</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck size={16} />
              <span>PCI-DSS Compliant</span>
            </div>
            <div className="flex items-center gap-2">
              <CreditCard size={16} />
              <span>Secure Payments</span>
            </div>
          </div>

          {/* Submit */}
          <div className="text-center">
            <button
              type="submit"
              disabled={loading}
              className="inline-flex items-center gap-3 px-10 py-4 bg-primary text-primary-foreground rounded-lg text-lg font-bold hover:opacity-90 transition-opacity disabled:opacity-60"
            >
              <CreditCard size={20} />
              {loading ? "Processing..." : "Complete Secure Donation"}
              {!loading && <ArrowRight size={20} />}
            </button>
            <p className="text-sm text-brand-on-surface-variant mt-4">
              You&apos;ll be redirected to a secure payment page.
            </p>
          </div>
        </form>
      </section>

      {/* Impact Transparency */}
      <section className="bg-brand-surface-container-low py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-sm font-bold uppercase tracking-widest text-brand-secondary">
              Your Impact
            </span>
            <h2 className="text-5xl font-extrabold mt-4">
              Where Your Money Goes
            </h2>
            <p className="mt-4 text-lg text-brand-on-surface-variant max-w-2xl mx-auto">
              100% of donations go directly to programs. We publish every
              allocation publicly.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-6">
            {/* Main large card */}
            <div className="col-span-2 relative rounded-3xl overflow-hidden h-96">
              <img
                src={IMPACT_IMAGE}
                alt=""
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <span className="text-sm font-bold uppercase tracking-widest text-brand-yellow-green">
                  Major Project: 60% Allocation
                </span>
                <h3 className="text-2xl font-semibold text-white mt-2">
                  Sustainable Infrastructure
                </h3>
                <p className="text-white/70 mt-2">
                  Irrigation systems, water management, and renewable energy
                  installations.
                </p>
              </div>
            </div>

            {/* Smaller cards */}
            <div className="space-y-6">
              <div className="rounded-3xl bg-brand-secondary-container p-8 h-[180px] flex flex-col justify-center">
                <School size={40} className="text-brand-secondary" />
                <h3 className="text-2xl font-semibold text-brand-primary mt-4">
                  Education &amp; Training
                </h3>
                <p className="text-brand-on-surface-variant mt-1">25%</p>
              </div>
              <div className="rounded-3xl bg-brand-primary-container p-8 h-[180px] flex flex-col justify-center">
                <Leaf size={40} className="text-brand-primary" />
                <h3 className="text-2xl font-semibold text-brand-primary mt-4">
                  Seed Banks
                </h3>
                <p className="text-brand-on-surface-variant mt-1">15%</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-brand-primary py-24">
        <div className="max-w-2xl mx-auto text-center px-6">
          <h2 className="text-5xl font-extrabold text-white">
            Stay Connected
          </h2>
          <p className="mt-4 text-white/80 text-lg">
            Get monthly updates on our projects, impact stories, and community
            events.
          </p>
          <div className="flex gap-3 mt-10 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-5 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-white/40"
            />
            <button className="px-8 py-4 bg-brand-yellow-green text-brand-primary font-bold rounded-lg hover:opacity-90 transition-opacity">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <div className="bg-brand-primary py-4 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-center gap-2 text-white/60 text-sm">
          <Heart size={14} />
          <span>
            Every dollar stays in the community. SADP-Nepal is a registered
            non-profit.
          </span>
        </div>
      </div>
    </div>
  )
}
