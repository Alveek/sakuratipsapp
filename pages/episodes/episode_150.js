import { transcript } from "../../transcripts/t_episode_150";
import PlayScreen from "../../components/PlayScreen";
import { Box, Heading, Text, Link } from "@chakra-ui/react";

export default function episode_150() {
	return (
		<Box as="article">
			<Heading
				bg="rgba(255, 255, 255, 0.2)"
				color="gray.700"
				fontWeight="600"
				as="h1"
				mb={6}
				size="md"
				textAlign="center"
			>
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
