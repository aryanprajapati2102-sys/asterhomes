import Link from "next/link";
import Image from "next/image";
import { Blog } from "@/services/api";

type BlogCardProps = {
  blog: Blog;
};

export default function BlogCard({ blog }: BlogCardProps) {
  return (
    <article className="overflow-hidden rounded-xl2 bg-white shadow-card">
      <div className="relative h-48">
        <Image
          src={blog.featuredImage || "/images/gallery/blog-default.jpg"}
          alt={blog.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>
      <div className="p-5">
        <p className="text-xs text-slate-500">{new Date(blog.createdAt).toDateString()}</p>
        <h3 className="mt-2 text-lg font-semibold text-slateInk">{blog.title}</h3>
        <p className="mt-2 line-clamp-3 text-sm text-slate-600">{blog.excerpt}</p>
        <Link href={`/blog/${blog.slug}`} className="mt-4 inline-block text-sm font-semibold text-primary">
          Read More
        </Link>
      </div>
    </article>
  );
}
