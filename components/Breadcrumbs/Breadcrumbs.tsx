import React from "react";
import Link from "next/link";
import { Post } from "../../shared/types";
import { Container } from "./style";

type BreacrumbsProps = {
  post: Post;
};

export const Breadcrumbs = ({ post }: BreacrumbsProps) => {
  return (
    <>
      <Container>
        <Link href="/">
          <a>Front</a>
        </Link>
        <span>▸</span>
        <Link href={`/category/${post.category}`}>
          <a>{post.category}</a>
        </Link>
      </Container>
    </>
  );
};
