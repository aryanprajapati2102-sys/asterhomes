import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Aster Homes PG management, resident-first approach, safety practices, and community standards."
};

export default function AboutPage() {
  return (
    <section className="px-4 py-14 md:px-6">
      <div className="mx-auto max-w-4xl rounded-xl2 bg-white p-8 shadow-card">
        <h1 className="text-4xl font-bold text-slateInk">About Aster Homes</h1>
        <p className="mt-4 text-slate-600">
          Aster Homes is built for students and working professionals who need a safe, well-managed
          PG with predictable monthly living. Our management team focuses on clean infrastructure,
          disciplined operations, and fast resident support.
        </p>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          <article className="rounded-xl2 bg-slate-50 p-5">
            <h2 className="text-lg font-semibold text-primary">Safety First</h2>
            <p className="mt-2 text-sm text-slate-600">
              CCTV surveillance, secure entry, and clear resident policies keep the environment
              safe and stable.
            </p>
          </article>
          <article className="rounded-xl2 bg-slate-50 p-5">
            <h2 className="text-lg font-semibold text-primary">Professional Operations</h2>
            <p className="mt-2 text-sm text-slate-600">
              Dedicated housekeeping, support team escalation, and transparent pricing with no hidden
              costs.
            </p>
          </article>
          <article className="rounded-xl2 bg-slate-50 p-5">
            <h2 className="text-lg font-semibold text-primary">Food & Hygiene</h2>
            <p className="mt-2 text-sm text-slate-600">
              Regularly supervised meal preparation and cleanliness checks for kitchen and dining areas.
            </p>
          </article>
          <article className="rounded-xl2 bg-slate-50 p-5">
            <h2 className="text-lg font-semibold text-primary">Resident Community</h2>
            <p className="mt-2 text-sm text-slate-600">
              Quiet study-friendly atmosphere and respectful shared-living standards.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
