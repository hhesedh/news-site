import React from "react";
import Link from "next/link";
import { Center } from "../Center";
import { Container } from "./style";

export const Header = () => {
  return (
    <Container>
      <Center>
        <Link href="/">
          <a>What&apos;s Next?!</a>
        </Link>
      </Center>
    </Container>
  );
};
