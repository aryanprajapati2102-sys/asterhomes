import type { Metadata } from "next";
import BlogCard from "@/components/BlogCard";
import { Blog } from "@/services/api";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Read SEO-focused guides about choosing the best PG in Gota and SG Highway area in Ahmedabad."
};

async function getBlogs(): Promise<Blog[]> {
  const base = process.env.NEXT_PUBLIC_API_BASE_URL;
  if (!base) return [];

  try {
    const response = await fetch(`${base}/blogs`, {
      next: { revalidate: 120 }
    });

    if (!response.ok) return [];
    const json = await response.json();
    return json.data || [];
  } catch {
    return [];
  }
}

export default async function BlogPage() {
  const blogs = await getBlogs();

  return (
    <section className="px-4 py-14 md:px-6">
      <div className="mx-auto max-w-7xl">
        <h1 className="text-4xl font-bold text-slateInk">Insights & Guides</h1>
        <p className="mt-3 max-w-3xl text-slate-600">
          Practical tips for selecting a comfortable, safe, and affordable PG accommodation in
          Ahmedabad.
        </p>

        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {blogs.length
            ? blogs.map((blog) => <BlogCard key={blog.id} blog={blog} />)
            : [1, 2, 3].map((item) => (
                <div key={item} className="h-80 rounded-xl2 bg-slate-200" />
              ))}
        </div>
      </div>
    </section>
  );
}
