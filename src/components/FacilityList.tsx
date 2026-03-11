"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Utensils, Wifi, Shirt, Tv, Sparkles } from "lucide-react";

const facilities = [
  { icon: Wifi, title: "High-Speed WiFi", desc: "Reliable internet for classes and work calls." },
  { icon: Utensils, title: "Daily Meals", desc: "Fresh breakfast, lunch, and dinner with hygiene." },
  { icon: Shirt, title: "Laundry Service", desc: "Regular washing support for residents." },
  { icon: ShieldCheck, title: "24/7 Security", desc: "CCTV, gated access, and safety checks." },
  { icon: Sparkles, title: "Housekeeping", desc: "Clean rooms and shared spaces every day." },
  { icon: Tv, title: "Common Lounge", desc: "Comfortable social area for downtime." }
];

export default function FacilityList() {
  return (
    <section className="px-4 py-12 md:px-6">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-3xl font-bold text-slateInk">Facilities Designed for Daily Comfort</h2>
        <div className="mt-7 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {facilities.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
              className="rounded-xl2 bg-white p-5 shadow-card"
            >
              <item.icon size={22} className="text-accent" />
              <h3 className="mt-3 text-base font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
