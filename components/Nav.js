import React from "react";
import NextLink from "next/link";
import {
  Box,
  Container,
  Text,
  Button,
  IconButton,
  Stack,
  Flex
} from "@chakra-ui/react";

export default function Nav() {
  return (
    <Box
      as="nav"
      boxShadow="md"
      bg="gray.200"
      // position="fixed"
      // left="0"
      // right="0"
      // top="0"
    >
      <Container maxW="1090px" py={1}>
        <Flex
          height={{ base: "54px", md: "70px" }}
          justifyContent="center"
          alignItems="center"
        >
          <NextLink href="/">
            <Text
              as="a"
              color="pink.500"
              fontWeight="bold"
              fontSize={{ base: "xl", md: "3xl" }}
              margin={0}
              cursor="pointer"
            >
              SAKURA TIPS APP{" "}
              <span role="img" aria-label="cherry blossom image">
                &#127800;
              </span>{" "}
              (demo){" "}
            </Text>
          </NextLink>
        </Flex>
      </Container>
    </Box>
  );
}
