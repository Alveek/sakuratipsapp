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
import {
	FaTwitter,
	FaFacebookSquare,
	FaInstagram,
	FaYoutube,
} from "react-icons/fa";

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
				<Text fontWeight="bold">\ Follow me /</Text>
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
					colorScheme="facebook"
					as="a"
					target="_blank"
					href="https://www.pinterest.jp/sakuratips/_created/"
				>
					<Icon w="6" h="6" as={FaFacebookSquare} />
				</Button>
				<Button
					mr={2}
					bgGradient="linear(to-l, #7928CA, #FF0080)"
					color="white"
					as="a"
					target="_blank"
					_hover={{ filter: "brightness(0.92)" }}
					href="https://www.instagram.com/sakura_tips/"
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
					href="https://www.patreon.com/bePatron?u=47302003&redirect_uri=https%3A%2F%2Fsakuratips.com%2F2021%2F03%2F29%2F152%2F&utm_medium=widget"
				>
					Support us on patreon
				</Button>
			</Box>
		</Box>
	);
}

export default EndScreen;
