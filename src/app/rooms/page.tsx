import type { Metadata } from "next";
import FacilityList from "@/components/FacilityList";
import RoomCard from "@/components/RoomCard";
import { Room } from "@/services/api";

export const metadata: Metadata = {
  title: "Rooms & Facilities",
  description:
    "Explore room types at Aster Homes PG including single, double, and triple sharing options with premium amenities."
};

async function getRooms(): Promise<Room[]> {
  const base = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:5000/api";
  const response = await fetch(`${base}/rooms`, {
    next: { revalidate: 60 }
  });

  if (!response.ok) return [];
  const json = await response.json();
  return json.data || [];
}

export default async function RoomsPage() {
  const rooms = await getRooms();

  return (
    <>
      <section className="px-4 pb-4 pt-14 md:px-6">
        <div className="mx-auto max-w-7xl">
          <h1 className="text-4xl font-bold text-slateInk">Rooms & Facilities</h1>
          <p className="mt-3 max-w-3xl text-slate-600">
            Choose from flexible room-sharing options with all essentials for a comfortable and
            productive stay.
          </p>
        </div>
      </section>

      <section className="px-4 py-10 md:px-6">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {rooms.length
              ? rooms.map((room) => <RoomCard key={room.id} room={room} />)
              
              : [1, 2, 3].map((item) => (
                  <div key={item} className="h-80 rounded-xl2 bg-slate-200" />
                ))}
          </div>
        </div>
      </section>

      <FacilityList />
    </>
  );
}
