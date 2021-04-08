import React from "react";
import NextLink from "next/link";
import Image from "next/image";
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
			// boxShadow="md"
			bg="#FFCDCB"
		>
			<Container maxW="960px" pt={1} px={{ base: 5, md: 8 }}>
				<Flex
					height={{ base: "55px", md: "60px" }}
					justifyContent="center"
					alignItems="center"
				>
					<Image
						width="60px"
						height="60px"
						src="/media/logo.png"
						alt="sakuratips logo"
						display="inline"
						ml="-13px"
					/>
					<NextLink href="/">
						<Text
							as="a"
							color="#F666B4"
							fontWeight="500"
							fontSize={{ base: "xl", md: "3xl" }}
							margin={0}
							cursor="pointer"
						>
							SAKURA TIPS APP
						</Text>
					</NextLink>
				</Flex>
			</Container>
		</Box>
	);
}
