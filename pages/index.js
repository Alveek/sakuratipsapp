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
					content="Learn Japanese with shadowing method"
				></meta>
			</Head>

			<Heading align="center" as="h2" size="lg">
				Podcast Episodes:
			</Heading>

			{episode_list.map((episode) => (
				<NextLink href={"/episodes/episode_" + episode.number}>
					<Link p={2} display="block" fontSize={{ base: "20px", md: "20px" }}>
						{episode.number}. {episode.name}
					</Link>
				</NextLink>
			))}
		</Box>
	);
}
