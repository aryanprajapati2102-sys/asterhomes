import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import MapSection from "@/components/MapSection";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Aster Homes PG for room availability, visit scheduling, and accommodation enquiries."
};

export default function ContactPage() {
  return (
    <>
      <section className="px-4 pb-4 pt-14 md:px-6">
        <div className="mx-auto max-w-7xl">
          <h1 className="text-4xl font-bold text-slateInk">Contact Aster Homes</h1>
          <p className="mt-3 max-w-2xl text-slate-600">
            Share your requirements and our team will help you with available options.
          </p>
        </div>
      </section>

      <section className="px-4 py-8 md:px-6">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2">
          <ContactForm mode="contact" />
          <div className="rounded-xl2 bg-white p-6 shadow-card">
            <h2 className="text-xl font-semibold text-slateInk">Direct Reach</h2>
            <p className="mt-3 text-sm text-slate-600">Phone: +91 7043306301</p>
            <p className="mt-2 text-sm text-slate-600">WhatsApp: +91 7043306301</p>
            <p className="mt-2 text-sm text-slate-600">Email: prajapatiaryan3103@gmail.com</p>
            <p className="mt-5 text-sm text-slate-600">
              Visiting Hours: Monday to Sunday, 9:00 AM - 8:00 PM
            </p>
          </div>
        </div>
      </section>

      <MapSection />
    </>
  );
}
