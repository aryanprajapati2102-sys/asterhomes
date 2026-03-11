"use client";

import Link from "next/link";
import { Button } from "@mui/material";
import HeroSection from "@/components/HeroSection";
import FacilityList from "@/components/FacilityList";
import ImageGallery from "@/components/ImageGallery";
import MapSection from "@/components/MapSection";
import RoomCard from "@/components/RoomCard";
import TestimonialSection from "@/components/TestimonialSection";
import ContactForm from "@/components/ContactForm";
import { useRooms } from "@/hooks/useRooms";

export default function HomePage() {
  const { rooms, loading } = useRooms();

  return (
    <>
      <HeroSection />
      <FacilityList />

      <section className="px-4 py-12 md:px-6">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <h2 className="text-3xl font-bold text-slateInk">Room Options</h2>
            <Button
              component={Link}
              href="/rooms"
              variant="outlined"
              sx={{ borderColor: "#0B3C6D", color: "#0B3C6D", textTransform: "none" }}
            >
              View All Rooms
            </Button>
          </div>
          <div className="mt-7 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {loading
              ? [1, 2, 3].map((item) => (
                  <div key={item} className="h-80 animate-pulse rounded-xl2 bg-slate-200" />
                ))
              : rooms.slice(0, 3).map((room) => <RoomCard key={room.id} room={room} />)}
          </div>
        </div>
      </section>

      <ImageGallery />
      <TestimonialSection />
      <MapSection />

      <section className="px-4 py-14 md:px-6">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2">
          <div className="rounded-xl2 bg-gradient-to-br from-primary to-[#1B5C94] p-8 text-white shadow-card">
            <h2 className="text-3xl font-bold">Ready to Move In?</h2>
            <p className="mt-3 text-sm text-slate-100 md:text-base">
              Share your preferred move-in date and room type. Our team will confirm availability
              quickly.
            </p>
          </div>
          <ContactForm mode="enquiry" />
        </div>
      </section>
    </>
  );
}
