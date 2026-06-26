import Link from "next/link";
import { Globe, Mail, Share2 } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-brand-primary text-white">
      <div className="px-6 md:px-16 max-w-[1280px] mx-auto border-b border-white/10">
        <div className="py-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold text-white">Stay Connected</h3>
            <p className="text-sm text-white/70 mt-1">Get updates on our programs and impact.</p>
          </div>
          <div className="flex w-full md:w-auto gap-3">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 md:w-72 px-5 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 text-sm focus:outline-none focus:border-white/40"
            />
            <button className="px-8 py-3.5 bg-brand-yellow-green text-brand-primary text-sm font-bold rounded-full shadow-sm hover:bg-brand-yellow-green/90 transition-all duration-200 shrink-0">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 px-6 md:px-16 py-20 max-w-[1280px] mx-auto">
        <div>
          <div className="font-bold text-xl text-white mb-6">SADP-Nepal</div>
          <p className="text-sm text-white/70 leading-relaxed max-w-xs">
            Pioneering sustainable agriculture and rural empowerment in the heart of the Himalayas since 2002.
          </p>
          <div className="flex gap-4 mt-6">
            <span className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center hover:bg-brand-yellow-green hover:text-brand-primary transition-colors cursor-pointer">
              <Globe className="size-4" />
            </span>
            <span className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center hover:bg-brand-yellow-green hover:text-brand-primary transition-colors cursor-pointer">
              <Share2 className="size-4" />
            </span>
            <span className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center hover:bg-brand-yellow-green hover:text-brand-primary transition-colors cursor-pointer">
              <Mail className="size-4" />
            </span>
          </div>
        </div>
        <div>
          <h4 className="text-brand-yellow-green text-sm font-bold uppercase tracking-widest mb-6">Navigation</h4>
          <ul className="space-y-3 text-sm text-white/80">
            <li><Link href="/" className="hover:text-brand-yellow-green transition-colors">Home</Link></li>
            <li><Link href="/about" className="hover:text-brand-yellow-green transition-colors">About Us</Link></li>
            <li><Link href="/volunteer" className="hover:text-brand-yellow-green transition-colors">Volunteer</Link></li>
            <li><Link href="/internship" className="hover:text-brand-yellow-green transition-colors">Internships</Link></li>
            <li><Link href="/gallery" className="hover:text-brand-yellow-green transition-colors">Gallery</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-brand-yellow-green text-sm font-bold uppercase tracking-widest mb-6">Support</h4>
          <ul className="space-y-3 text-sm text-white/80">
            <li><Link href="/donate" className="hover:text-brand-yellow-green transition-colors">Donate</Link></li>
            <li><a href="#" className="hover:text-brand-yellow-green transition-colors">Partnerships</a></li>
            <li><a href="#" className="hover:text-brand-yellow-green transition-colors">News</a></li>
            <li><a href="#" className="hover:text-brand-yellow-green transition-colors">Privacy Policy</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-brand-yellow-green text-sm font-bold uppercase tracking-widest mb-6">Contact</h4>
          <p className="text-sm text-white/80 mb-4">
            Pokhara-15, Nayagau,<br />Kaski, Nepal
          </p>
          <p className="text-sm text-white/80">
            info@sadpnepal.org<br />+977-61-432243
          </p>
        </div>
      </div>
      <div className="max-w-[1280px] mx-auto px-6 md:px-16 py-6 border-t border-white/10 text-center text-sm text-white/50">
        &copy; {new Date().getFullYear()} Sustainable Agriculture Development Program (SADP) Nepal. All rights reserved.
      </div>
    </footer>
  );
}
