"use client";

import { useEffect, useState } from "react";
import { Blog, fetchBlogs } from "@/services/api";

export const useBlogs = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;

    const run = async () => {
      try {
        const data = await fetchBlogs();
        if (mounted) setBlogs(data);
      } catch {
        if (mounted) setError("Unable to load blog posts right now.");
      } finally {
        if (mounted) setLoading(false);
      }
    };

    run();
    return () => {
      mounted = false;
    };
  }, []);

  return { blogs, loading, error };
};
