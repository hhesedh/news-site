import React from "react";

import type { NextPage } from "next";
import Head from "next/head";
import { Feed } from "../components/Feed/Feed";

const Front: NextPage = () => {
  return (
    <>
      <Head>
        <title>Front page of the internet</title>
      </Head>
      <main>
        <Feed />
      </main>
    </>
  );
};

export default Front;
