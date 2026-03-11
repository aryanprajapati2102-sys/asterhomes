import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-20 bg-slateInk text-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-14 md:grid-cols-3 md:px-6">
        <div>
          <h3 className="text-xl font-semibold">Aster Homes PG</h3>
          <p className="mt-3 text-sm text-slate-300">
            Safe, clean, and premium PG accommodation in Gota, Ahmedabad for students and working
            professionals.
          </p>
        </div>

        <div>
          <h4 className="text-base font-semibold">Quick Links</h4>
          <div className="mt-3 flex flex-col gap-2 text-sm text-slate-300">
            <Link href="/rooms">Rooms & Facilities</Link>
            <Link href="/location">Location</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>

        <div className="space-y-2 text-sm text-slate-300">
          <h4 className="text-base font-semibold text-white">Contact</h4>
          <p className="flex items-center gap-2">
            <MapPin size={16} /> Gota, Ahmedabad, Gujarat
          </p>
          <p className="flex items-center gap-2">
            <Phone size={16} /> +91 7043306301
          </p>
          <p className="flex items-center gap-2">
            <Mail size={16} /> prajapatiaryan3103@gmail.com
          </p>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-slate-400">
        © {new Date().getFullYear()} Aster Homes PG. All rights reserved.
      </div>
    </footer>
  );
}
