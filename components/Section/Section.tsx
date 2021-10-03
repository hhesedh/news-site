import React from "react";
import { Post } from "../Post/Post";
import { Grid, Title } from "./style";

type SectionProps = {
  title: string;
};

export const Section = ({ title }: SectionProps) => {
  return (
    <section>
      <Title>{title}</Title>
      <Grid>
        <Post />
        <Post />
        <Post />
      </Grid>
    </section>
  );
};
