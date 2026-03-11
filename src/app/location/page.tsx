import type { Metadata } from "next";
import MapSection from "@/components/MapSection";

export const metadata: Metadata = {
  title: "Location",
  description:
    "Aster Homes PG is located in Gota, Ahmedabad with quick access to SG Highway, universities, and office hubs."
};

const landmarks = [
  { place: "Nirma University", distance: "Approx. 10 mins" },
  { place: "Silver Oak University", distance: "Approx. 5 mins" },
  { place: "SG Highway", distance: "Approx. 2 mins" },
  { place: "Gota Circle", distance: "Approx. 2 mins" }
];

export default function LocationPage() {
  return (
    <>
      <section className="px-4 pb-2 pt-14 md:px-6">
        <div className="mx-auto max-w-7xl">
          <h1 className="text-4xl font-bold text-slateInk">Prime Location Advantage</h1>
          <p className="mt-3 max-w-2xl text-slate-600">
            Stay close to educational institutes, workplaces, and daily commuting corridors.
          </p>
        </div>
      </section>

      <section className="px-4 py-8 md:px-6">
        <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-2">
          {landmarks.map((item) => (
            <article key={item.place} className="rounded-xl2 bg-white p-5 shadow-card">
              <h2 className="text-lg font-semibold text-primary">{item.place}</h2>
              <p className="mt-1 text-sm text-slate-600">{item.distance}</p>
            </article>
          ))}
        </div>
      </section>

      <MapSection />
    </>
  );
}
