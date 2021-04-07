import Head from "next/head";
import NextLink from "next/link";
import { Box, Heading, Link } from "@chakra-ui/react";
import { episode_list } from "../transcripts/episodes_list";

export default function Home() {
	return (
		<Box>
			<Head>
				<title>SAKURA TIPS APP</title>
				<meta
					name="description"
					content="Practice Japanese by shadowing"
				></meta>
			</Head>

			{/* <Heading align="center" as="h2" size="lg">
				Podcast Episodes:
			</Heading> */}
			<Box
				bg="rgba(255,255,255, 0.4);"
				mx="auto"
				mt={{ base: "70px", md: "200px" }}
				maxWidth="max-content"
			>
				{episode_list.map((episode, index) => (
					<NextLink key={index} href={"/episodes/episode_" + episode.number}>
						<Link
							fontWeight="500"
							pb={3}
							display="block"
							fontSize={{ base: "18px", md: "20px", lg: "24px" }}
						>
							{episode.number}. {episode.name}
						</Link>
					</NextLink>
				))}
			</Box>
		</Box>
	);
}
