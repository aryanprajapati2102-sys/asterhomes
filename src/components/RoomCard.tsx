"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Bed, IndianRupee } from "lucide-react";
import { Room } from "@/services/api";

type RoomCardProps = {
  room: Room;
};

export default function RoomCard({ room }: RoomCardProps) {
  const image = room.images?.[0] || "/images/rooms/placeholder-room.jpg";

  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25 }}
      className="overflow-hidden rounded-xl2 bg-white shadow-card"
    >
      <div className="relative h-52">
        <Image src={image} alt={room.title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
      </div>
      <div className="space-y-3 p-5">
        <h3 className="text-lg font-semibold text-slateInk">{room.title}</h3>
        <p className="line-clamp-2 text-sm text-slate-600">{room.description}</p>
        <div className="flex items-center justify-between text-sm">
          <p className="flex items-center gap-1 font-semibold text-primary">
            <IndianRupee size={15} /> {room.price.toLocaleString("en-IN")} / month
          </p>
          <p className="flex items-center gap-1 text-slate-600">
            <Bed size={15} /> {room.occupancy}
          </p>
        </div>
      </div>
    </motion.article>
  );
}
