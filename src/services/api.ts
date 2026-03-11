import axios from "axios";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:5000/api";

export const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json"
  }
});

export type Room = {
  id: number;
  title: string;
  description: string;
  price: number;
  occupancy: string;
  amenities: string[];
  images: string[];
};

export type Blog = {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  featuredImage?: string | null;
  createdAt: string;
};

export type EnquiryPayload = {
  name: string;
  email: string;
  phone: string;
  moveInDate: string;
  roomType?: string;
  message?: string;
};

export type ContactPayload = {
  name: string;
  email: string;
  phone?: string;
  message: string;
};

export const fetchRooms = async () => {
  const { data } = await api.get<{ data: Room[] }>("/rooms");
  return data.data;
};

export const fetchBlogs = async () => {
  const { data } = await api.get<{ data: Blog[] }>("/blogs");
  return data.data;
};

export const fetchBlogBySlug = async (slug: string) => {
  const { data } = await api.get<{ data: Blog }>(`/blogs/${slug}`);
  return data.data;
};

export const submitEnquiry = async (payload: EnquiryPayload) => {
  const { data } = await api.post("/enquiries", payload);
  return data;
};

export const submitContact = async (payload: ContactPayload) => {
  const { data } = await api.post("/contact", payload);
  return data;
};
