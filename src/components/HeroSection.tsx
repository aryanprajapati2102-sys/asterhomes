"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@mui/material";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden px-4 pb-16 pt-14 md:px-6 md:pt-20">
      <div className="mx-auto grid max-w-7xl items-center gap-10 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
        >
          <p className="inline-flex rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-primary">
            Premium PG in Gota, Ahmedabad
          </p>
          <h1 className="mt-4 text-4xl font-bold leading-tight text-slateInk md:text-6xl">
            Comfortable Living for Students and Professionals
          </h1>
          <p className="mt-5 max-w-xl text-base text-slate-600 md:text-lg">
            Fully managed PG with hygienic meals, high-speed WiFi, security, and great access to
            SG Highway, universities, and office hubs.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button
              component={Link}
              href="/contact"
              variant="contained"
              endIcon={<ArrowRight size={16} />}
              sx={{
                backgroundColor: "#0B3C6D",
                textTransform: "none",
                borderRadius: "12px",
                px: 2.2
              }}
            >
              Check Availability
            </Button>
            <Button
              component={Link}
              href="/rooms"
              variant="outlined"
              sx={{
                borderColor: "#0B3C6D",
                color: "#0B3C6D",
                textTransform: "none",
                borderRadius: "12px",
                px: 2.2
              }}
            >
              Explore Rooms
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="rounded-xl2 bg-gradient-to-br from-primary to-[#1D5E98] p-7 text-white shadow-card"
        >
          <h2 className="text-2xl font-semibold">Why Aster Homes?</h2>
          <ul className="mt-4 space-y-3 text-sm text-slate-100">
            <li>24/7 security and access control</li>
            <li>Daily housekeeping and laundry support</li>
            <li>Nutritious vegetarian meals</li>
            <li>Fast commute to SG Highway and Gota Circle</li>
            <li>Community-focused and peaceful environment</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
