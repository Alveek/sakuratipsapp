import { useState, useEffect } from "react";

import {
	Box,
	Text,
	Button,
	Progress,
	Flex,
	Spacer,
	Divider,
	Heading,
} from "@chakra-ui/react";
import Controls from "./Controls";
import EndScreen from "./EndScreen";

function PlayScreen({ transcript, audioSrc, extLink, episodeName }) {
	let [sentence, setSentence] = useState(0);
	let [disablePlayButton, setDisablePlayButton] = useState(false);
	let [showJap, setShowJap] = useState(false);
	let [showEng, setShowEng] = useState(false);
	let [showFurigana, setShowFurigana] = useState(false);

	let [played, setPlayed] = useState(false);
	let playLabel = played ? "Repeat" : "Play";

	const [audio, setAudio] = useState(null);
	useEffect(() => {
		setAudio(new Audio(audioSrc));
		// only run once on the first render on the client
	}, []);

	// audio.playbackRate = 1.4;

	let startFrom =
		transcript[sentence].start.min * 60 + transcript[sentence].start.sec;
	let finishAt =
		transcript[sentence].finish.min * 60 +
		transcript[sentence].finish.sec -
		(transcript[sentence].start.min * 60 + transcript[sentence].start.sec);

	function playAudio(start, finish) {
		// "start" - start position to play in seconds
		// "finish" - how long to play in seconds
		audio.pause();
		audio.currentTime = start;
		audio.play();
		audio.onplay = () => {
			setDisablePlayButton(true);
			setTimeout(() => {
				audio.pause();
				setDisablePlayButton(false);
			}, finish * 1000);
		};
	}

	function next() {
		setSentence(sentence + 1);
		setShowJap(false);
		setShowEng(false);

		// setPlayed(false);

		startFrom =
			transcript[sentence + 1].start.min * 60 +
			transcript[sentence + 1].start.sec;
		finishAt =
			transcript[sentence + 1].finish.min * 60 +
			transcript[sentence + 1].finish.sec -
			(transcript[sentence + 1].start.min * 60 +
				transcript[sentence + 1].start.sec);
		playAudio(startFrom, finishAt);
	}

	return (
		<Box bg="rgba(255, 255, 255, .3)" p={2} mt={{ base: "30px", md: "150px" }}>
			<Heading
				bg="rgba(255, 255, 255, 0.2)"
				color="blue.800"
				fontWeight="600"
				as="h1"
				mb={6}
				size="lg"
				textAlign="center"
			>
				{episodeName}
			</Heading>
			{sentence !== transcript.length - 1 ? (
				<>
					<Progress
						size="sm"
						colorScheme="pink"
						mt={5}
						value={sentence}
						max={transcript.length - 2}
					/>
					<Controls
						showFurigana={showFurigana}
						setShowFurigana={setShowFurigana}
						quit={() => setSentence(transcript.length - 1)}
					/>
					<Divider />
					<Box mt={5} mx="auto" maxWidth="960px" textAlign="center">
						{showJap ? (
							<Text
								fontSize="3xl"
								color="blue.700"
								onClick={() => setShowJap(false)}
							>
								<div
									dangerouslySetInnerHTML={{ __html: transcript[sentence].jap }}
								/>
							</Text>
						) : (
							<Text
								fontSize="2xl"
								cursor="pointer"
								border="2px solid #38A169"
								bg="green.100"
								color="blue.400"
								py={4}
								px={10}
								onClick={() => setShowJap(true)}
							>
								Show Japanese
							</Text>
						)}
						{showEng ? (
							<Text
								fontSize="xl"
								color="teal.500"
								fontWeight="500"
								onClick={() => setShowEng(false)}
							>
								<div
									dangerouslySetInnerHTML={{ __html: transcript[sentence].eng }}
								/>
							</Text>
						) : (
							<Text
								fontSize="2xl"
								cursor="pointer"
								bg="purple.100"
								color="blue.400"
								border="2px solid #6B46C1"
								py={4}
								px={10}
								onClick={() => setShowEng(true)}
							>
								Translation
							</Text>
						)}
					</Box>

					<Box
						mt="90px"
						position={{ base: "absolute", md: "static" }}
						bottom={{ base: "50px" }}
						right={{ base: "0px" }}
						width={{ base: "100%" }}
						display="flex"
						direction="row"
						alignContent="space-between"
						justifyContent="center"
					>
						<Button
							width={{ base: "40%", md: "150px" }}
							fontSize="xl"
							py={6}
							colorScheme="pink"
							onClick={() => {
								playAudio(startFrom, finishAt);
								setPlayed(true);
							}}
							disabled={disablePlayButton}
						>
							{!disablePlayButton ? (
								playLabel
							) : (
								<img
									width="40"
									src="/media/loading.gif"
									alt="loading indicator"
								/>
							)}
						</Button>
						<Button
							width={{ base: "40%", md: "150px" }}
							fontSize="xl"
							py={6}
							colorScheme="orange"
							disabled={disablePlayButton}
							ml={3}
							onClick={() => {
								next();
							}}
						>
							{sentence === transcript.length - 2 ? "Finish" : "Next"}
						</Button>
					</Box>
				</>
			) : (
				<EndScreen
					startAgain={() => {
						setSentence(0);
					}}
					extLink={extLink}
				/>
			)}
		</Box>
	);
}

export default PlayScreen;
