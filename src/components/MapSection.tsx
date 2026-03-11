export default function MapSection() {
  return (
    <section className="px-4 py-12 md:px-6">
      <div className="mx-auto max-w-7xl rounded-xl2 bg-white p-6 shadow-card">
        <h2 className="text-2xl font-bold text-slateInk">Find Us in Gota, Ahmedabad</h2>
        <p className="mt-2 text-sm text-slate-600">
          Royal Lakend Gota - Jagatpur Road, Sarkhej - Gandhinagar Hwy, behind Gota Lake, opposite
          Royal Heights, Ahmedabad, Gujarat 382481.
        </p>
        <div className="mt-5 overflow-hidden rounded-xl2">
          <iframe
            title="Aster Homes location"
            src="https://www.google.com/maps?q=Royal%20Lakend%20Gota%20Jagatpur%20Road%20Sarkhej%20Gandhinagar%20Hwy%20behind%20Gota%20Lake%20opposite%20Royal%20Heights%20Ahmedabad%20Gujarat%20382481&output=embed"
            width="100%"
            height="360"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="border-0"
          />
        </div>
      </div>
    </section>
  );
}
