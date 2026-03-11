"use client";

import { useEffect, useState } from "react";
import { Room, fetchRooms } from "@/services/api";

export const useRooms = () => {
  const [rooms, setRooms] = useState<Room[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;

    const run = async () => {
      try {
        const data = await fetchRooms();
        if (mounted) setRooms(data);
      } catch (_error) {
        if (mounted) setError("Unable to load rooms right now.");
      } finally {
        if (mounted) setLoading(false);
      }
    };

    run();
    return () => {
      mounted = false;
    };
  }, []);

  return { rooms, loading, error };
};
