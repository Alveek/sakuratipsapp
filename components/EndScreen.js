import {
	Box,
	Button,
	Text,
	Link,
	Flex,
	Grid,
	SimpleGrid,
	Divider,
	Icon,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { FaTwitter, FaPatreon, FaInstagram, FaYoutube } from "react-icons/fa";

function EndScreen({ startAgain, extLink }) {
	return (
		<Box>
			<Text mt={6} fontSize="xl">
				You can listen to the whole episode with scripts in Japanese and English
				on my website.
			</Text>
			<SimpleGrid columns={{ base: 1, md: 3 }} gap={4} my={8}>
				<Button as="a" target="_blank" colorScheme="pink" href={extLink}>
					Go to the website
				</Button>

				<Button colorScheme="green">
					<NextLink href="/">
						<a>Choose other episode</a>
					</NextLink>
				</Button>

				<Button
					color="blue.700"
					onClick={() => {
						startAgain();
					}}
				>
					Start again
				</Button>
			</SimpleGrid>

			<Divider />
			<Box
				mt={{ base: 4, md: 14 }}
				textAlign="center"
				mx="auto"
				maxWidth="250px"
			>
				<Text
					bgGradient="linear(to-l, #7928CA,#FF0080)"
					bgClip="text"
					fontWeight="bold"
				>
					\ Follow me /
				</Text>
				<Button
					mr={2}
					colorScheme="twitter"
					as="a"
					target="_blank"
					href="https://twitter.com/sakura_tips_m"
				>
					<Icon w="6" h="6" as={FaTwitter} />
				</Button>
				<Button
					mr={2}
					fontSize="1.2em"
					bg="lightyellow"
					as="a"
					target="_blank"
					href="https://www.joinclubhouse.com/@sakuratips"
				>
					👋
				</Button>
				<Button
					mr={2}
					bgGradient="linear(to-l, #7928CA, #FF0080)"
					color="white"
					as="a"
					target="_blank"
					_hover={{ filter: "brightness(0.92)" }}
					href="https://www.instagram.com/sakura_tips_language/"
				>
					<Icon w="6" h="6" as={FaInstagram} />
				</Button>
				<Button
					colorScheme="red"
					as="a"
					target="_blank"
					href="https://www.youtube.com/channel/UCATjmRYXEN2lngFFHZ_v-aQ"
				>
					<Icon w="6" h="6" as={FaYoutube} />
				</Button>
				<Button
					mt="2"
					bg="rgb(255, 66, 77)"
					color="white"
					width="100%"
					as="a"
					target="_blank"
					_hover={{ filter: "brightness(0.92)" }}
					href="https://sakuratips.com/2021/05/01/donation/"
				>
					Donate
				</Button>
			</Box>
		</Box>
	);
}

export default EndScreen;
