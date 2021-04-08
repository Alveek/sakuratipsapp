import { transcript } from "../../transcripts/t_episode_153";
import PlayScreen from "../../components/PlayScreen";
import { Box, Heading, Text, Link } from "@chakra-ui/react";

export default function episode_153() {
	return (
		<Box>
			<PlayScreen
				audioSrc="/media/episode_153.mp3"
				transcript={transcript}
				extLink="https://sakuratips.com/2021/03/30/153/"
				episodeName="筋肉痛 Muscles Pain"
			/>
		</Box>
	);
}
