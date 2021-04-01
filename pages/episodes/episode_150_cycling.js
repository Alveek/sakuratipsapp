import { transcript } from "../../transcripts/transcript_150";
import PlayScreen from "../../components/PlayScreen";
import { Box, Heading, Text, Link } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import NextLink from "next/link";

export default function episode_150_cycling() {
  return (
    <Box as="article">
      <Heading as="h1" mb={4} size="lg" textAlign="center">
        150. サイクリング Cycling
      </Heading>
      <Link
        bgGradient="linear(to-l, #7928CA,#FF0080)"
        bgClip="text"
        fontSize={{ base: "16px", md: "18px" }}
        href="https://sakuratips.com/2021/03/27/150/"
        isExternal
      >
        There is the script in Japanese and English on my website (link).{" "}
        <ExternalLinkIcon mx="2px" />
      </Link>
      <PlayScreen audioSrc="/media/cycling.mp3" transcript={transcript} />
    </Box>
  );
}
