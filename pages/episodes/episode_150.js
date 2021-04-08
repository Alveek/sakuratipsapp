import { transcript } from "../../transcripts/t_episode_150";
import PlayScreen from "../../components/PlayScreen";
import { Box, Heading, Text, Link } from "@chakra-ui/react";

export default function episode_150() {
	return (
		<Box>
			<PlayScreen
				audioSrc="/media/cycling.mp3"
				transcript={transcript}
				extLink="https://sakuratips.com/2021/03/27/150/"
				episodeName="150. サイクリング Cycling"
			/>
		</Box>
	);
}
