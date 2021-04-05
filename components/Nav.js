import React from "react";
import NextLink from "next/link";
import {
	Box,
	Container,
	Text,
	Button,
	IconButton,
	Stack,
	Flex,
} from "@chakra-ui/react";

export default function Nav() {
	return (
		<Box
			as="nav"
			boxShadow="md"
			bg="gray.200"
			// position="fixed"
			// left="0"
			// right="0"
			// top="0"
		>
			<Container maxW="960px" py={1} px={{ base: 5, md: 8 }}>
				<Flex
					height={{ base: "54px", md: "60px" }}
					justifyContent="start"
					alignItems="center"
				>
					<NextLink href="/">
						<Text
							as="a"
							// color="pink.500"
							bgGradient="linear(to-l, #7928CA,#FF0080)"
							bgClip="text"
							fontWeight="bold"
							fontSize={{ base: "xl", md: "3xl" }}
							margin={0}
							cursor="pointer"
						>
							SAKURA TIPS APP{" "}
							{/* <span role="img" aria-label="cherry blossom image">
								&#127800;
							</span>{" "} */}
						</Text>
					</NextLink>
				</Flex>
			</Container>
		</Box>
	);
}
