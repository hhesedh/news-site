import React from "react";
import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { Feed } from "../components/Feed";
import { Category, Post } from "../shared/types";
import { fetchCategories, fetchPosts } from "../api/summary";

type FrontProps = {
  posts: Post[];
  categories: Category[];
};
const Front: NextPage<FrontProps> = ({ posts, categories }) => {
  return (
    <>
      <Head>
        <title>Front page of the internet</title>
      </Head>
      <main>
        <Feed posts={posts} categories={categories} />
      </main>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const categories = await fetchCategories();
  const posts = await fetchPosts();
  return { props: { posts, categories } };
};

export default Front;
