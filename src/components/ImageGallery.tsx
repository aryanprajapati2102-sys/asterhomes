import Image from "next/image";

const gallery = [
  "/images/gallery/gallery-1.jpg",
  "/images/gallery/gallery-2.jpg",
  "/images/gallery/gallery-3.jpg",
  "/images/gallery/gallery-4.jpg",
  "/images/gallery/gallery-5.jpg",
  "/images/gallery/gallery-6.jpg"
];

export default function ImageGallery() {
  return (
    <section className="px-4 py-12 md:px-6">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-3xl font-bold text-slateInk">Inside Aster Homes</h2>
        <div className="mt-7 grid grid-cols-2 gap-4 md:grid-cols-3">
          {gallery.map((src, index) => (
            <div key={src + index} className="relative h-36 overflow-hidden rounded-xl2 md:h-48">
              <Image
                src={src}
                alt={`Aster Homes gallery ${index + 1}`}
                fill
                className="object-cover transition-transform duration-300 hover:scale-105"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
