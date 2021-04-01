import Head from "next/head";
import NextLink from "next/link";
import {
	Button,
	Box,
	Heading,
	Link,
	Code,
	Icon,
	Container,
} from "@chakra-ui/react";

export default function Home() {
	return (
		<Box>
			<Head>
				<title>SAKURA TIPS APP</title>
				<meta
					name="description"
					content="Learn Japanese with shadowing method"
				></meta>
				<meta property="og:title" content=""></meta>
				<meta property="og:description" content=""></meta>
				<meta property="og:type" content="article"></meta>
			</Head>

			<Heading align="center" as="h2" size="lg">
				Podcast Episodes:
			</Heading>
			<NextLink href="/episodes/episode_150_cycling">
				<Link fontSize={{ base: "18px", md: "20px" }}>
					150. サイクリング (Cycling)
				</Link>
			</NextLink>
		</Box>
	);
}
