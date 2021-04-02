import { Box, Button, Text, Link } from "@chakra-ui/react";
import NextLink from "next/link";
import { ExternalLinkIcon } from "@chakra-ui/icons";

function EndScreen({ startAgain, extLink }) {
	return (
		<Box>
			<Text mt={6} fontSize="xl">
				This is the end of this episode.
			</Text>
			<Link
				bgGradient="linear(to-l, #7928CA,#FF0080)"
				bgClip="text"
				fontSize={{ base: "16px", md: "18px" }}
				href={extLink}
				isExternal
			>
				There is the script in Japanese and English on my website.{" "}
				<ExternalLinkIcon mx="2px" />
			</Link>

			<Button
				display="block"
				mt={6}
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
