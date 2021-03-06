import fetch from "node-fetch";
import { Post, Category, EntityId } from "../shared/types";
import { config } from "./config";
export async function fetchPosts(): Promise<Post[]> {
  const res = await fetch(`${config.baseUrl}/posts`);
  return (await res.json()) as Post[];
}
export async function fetchCategories(): Promise<Category[]> {
  const res = await fetch(`${config.baseUrl}/categories`);
  return (await res.json()) as Category[];
}
