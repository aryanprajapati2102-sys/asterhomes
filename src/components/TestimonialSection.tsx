"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Riya S.",
    role: "Student",
    quote: "The security and cleanliness are excellent. Commute to university is easy from here."
  },
  {
    name: "Smit P.",
    role: "Software Engineer",
    quote: "Fast WiFi, peaceful rooms, and meals are consistent. Good value near SG Highway."
  },
  {
    name: "Harsh M.",
    role: "MBA Student",
    quote: "Management is responsive and the environment is professional and safe."
  }
];

export default function TestimonialSection() {
  return (
    <section className="px-4 py-12 md:px-6">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-3xl font-bold text-slateInk">What Residents Say</h2>
        <div className="mt-7 grid gap-4 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.07 }}
              className="rounded-xl2 bg-white p-5 shadow-card"
            >
              <p className="text-sm text-slate-700">&quot;{item.quote}&quot;</p>
              <p className="mt-4 text-sm font-semibold text-primary">{item.name}</p>
              <p className="text-xs text-slate-500">{item.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
