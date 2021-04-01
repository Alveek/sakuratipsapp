import { Box, Button, Text } from "@chakra-ui/react";
import NextLink from "next/link";

function EndScreen({ startAgain }) {
  return (
    <Box>
      <Text mt={10} fontSize="xl">
        This is the end of this episode.
      </Text>
      <Button
        display="block"
        mb={4}
        onClick={() => {
          startAgain();
        }}
      >
        Start Again
      </Button>
      <Button colorScheme="green">
        <NextLink href="/">
          <a>Choose other episode</a>
        </NextLink>
      </Button>
    </Box>
  );
}

export default EndScreen;
