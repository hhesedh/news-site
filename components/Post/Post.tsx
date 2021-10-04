import Link from "next/link";
import React from "react";
import { Post as PostType } from "../../shared/types";
import { Card, Figure, Lead, Title } from "./style";

type PostProps = {
  post: PostType;
};

/* TODO: REMOVER FIGURA */
export const Post = ({ post }: PostProps) => {
  return (
    <Link href={`/post/${post.id}`} passHref>
      <Card>
        <Figure>
          <img alt={post.title} src={post.image} />
        </Figure>
        <Title>{post.title}</Title>
        <Lead>{post.lead}</Lead>
      </Card>
    </Link>
  );
};
