import { transcript } from "../../transcripts/transcript_150";
import PlayScreen from "../../components/PlayScreen";
import { Box, Heading, Text, Link } from "@chakra-ui/react";
import NextLink from "next/link";

export default function episode_150_cycling() {
	return (
		<Box as="article">
			<Heading as="h1" mb={6} size="md" textAlign="center">
				150. サイクリング Cycling
			</Heading>

			<PlayScreen
				audioSrc="/media/cycling.mp3"
				transcript={transcript}
				extLink="https://sakuratips.com/2021/03/27/150/"
			/>
		</Box>
	);
}
