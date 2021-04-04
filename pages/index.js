import Head from "next/head";
import NextLink from "next/link";
import { Box, Heading, Link } from "@chakra-ui/react";

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
			<NextLink href="/episodes/episode_150_cycling">
				<Link p={2} display="block" fontSize={{ base: "20px", md: "20px" }}>
					150. サイクリング Cycling
				</Link>
			</NextLink>
			<NextLink href="/episodes/episode_151">
				<Link p={2} display="block" fontSize={{ base: "20px", md: "20px" }}>
					151. コロッケ Croquette
				</Link>
			</NextLink>
			<NextLink href="/episodes/episode_152">
				<Link p={2} display="block" fontSize={{ base: "20px", md: "20px" }}>
					152. イケア IKEA
				</Link>
			</NextLink>
		</Box>
	);
}
