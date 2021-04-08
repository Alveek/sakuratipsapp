import { transcript } from "../../transcripts/t_episode_151";
import PlayScreen from "../../components/PlayScreen";
import { Box, Heading, Text, Link } from "@chakra-ui/react";

export default function episode_151() {
	return (
		<Box>
			<PlayScreen
				audioSrc="/media/episode_151.mp3"
				transcript={transcript}
				extLink="https://sakuratips.com/2021/03/28/151/"
				episodeName="コロッケ Croquette"
			/>
		</Box>
	);
}
