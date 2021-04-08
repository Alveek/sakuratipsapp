import { transcript } from "../../transcripts/t_episode_152";
import PlayScreen from "../../components/PlayScreen";
import { Box, Heading, Text, Link } from "@chakra-ui/react";

export default function episode_152() {
	return (
		<Box>
			<PlayScreen
				audioSrc="/media/episode_152.mp3"
				transcript={transcript}
				extLink="https://sakuratips.com/2021/03/29/152/"
				episodeName="イケア IKEA"
			/>
		</Box>
	);
}
