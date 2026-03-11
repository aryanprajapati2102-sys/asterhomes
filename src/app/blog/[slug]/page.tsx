import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Blog } from "@/services/api";

type Params = {
  params: Promise<{ slug: string }>;
};

async function getBlog(slug: string): Promise<Blog | null> {
  const base = process.env.NEXT_PUBLIC_API_BASE_URL;
  if (!base) return null;

  try {
    const response = await fetch(`${base}/blogs/${slug}`, {
      next: { revalidate: 120 }
    });

    if (!response.ok) return null;
    const json = await response.json();
    return json.data || null;
  } catch {
    return null;
  }
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const blog = await getBlog(slug);

  if (!blog) {
    return {
      title: "Blog Not Found"
    };
  }

  return {
    title: blog.title,
    description: blog.excerpt,
    openGraph: {
      title: blog.title,
      description: blog.excerpt,
      type: "article"
    }
  };
}

export default async function BlogDetailPage({ params }: Params) {
  const { slug } = await params;
  const blog = await getBlog(slug);

  if (!blog) notFound();

  return (
    <article className="px-4 py-14 md:px-6">
      <div className="mx-auto max-w-4xl rounded-xl2 bg-white p-8 shadow-card">
        <p className="text-xs text-slate-500">{new Date(blog.createdAt).toDateString()}</p>
        <h1 className="mt-2 text-4xl font-bold text-slateInk">{blog.title}</h1>
        <p className="mt-4 text-sm text-slate-600">{blog.excerpt}</p>
        <div className="prose prose-slate mt-7 max-w-none text-slate-700">
          <p>{blog.content}</p>
        </div>
      </div>
    </article>
  );
}
