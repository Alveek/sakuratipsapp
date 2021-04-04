import { Container, Text, Icon } from "@chakra-ui/react";
import React from "react";

export default function Footer() {
	return (
		<Container
			as="footer"
			maxW="100wh"
			bg="gray.500"
			color="white"
			centerContent
			py={2}
			height="40px"
			justifyContent="center"
		>
			<Text mb={0}></Text>
		</Container>
	);
}
