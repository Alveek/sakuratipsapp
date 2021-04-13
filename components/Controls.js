import {
	FormControl,
	FormLabel,
	Switch,
	Box,
	Button,
	Flex,
} from "@chakra-ui/react";
import VocabModal from "./VocabModal";
import { useEffect } from "react";

export default function Footer({
	showFurigana,
	setShowFurigana,
	quit,
	vocab,
	v_sentence,
}) {
	function enableFurigana(e) {
		if (e.target.checked) {
			Array.from(document.querySelectorAll("rt")).forEach((el) => {
				el.style.setProperty("--display-furigana", "block");
			});
		} else {
			Array.from(document.querySelectorAll("rt")).forEach((el) => {
				el.style.setProperty("--display-furigana", "none");
			});
		}
	}

	useEffect(() => {
		if (showFurigana) {
			Array.from(document.querySelectorAll("rt")).forEach((el) => {
				el.style.setProperty("--display-furigana", "block");
			});
		} else {
			Array.from(document.querySelectorAll("rt")).forEach((el) => {
				el.style.setProperty("--display-furigana", "none");
			});
		}
	});

	return (
		<Flex my={3}>
			<FormControl display="flex" alignItems="center">
				<FormLabel fontWeight="400" htmlFor="furigana-controls" mb="1">
					Furigana
				</FormLabel>
				<Switch
					id="furigana-controls"
					checked={showFurigana}
					onChange={(e) => {
						setShowFurigana(!showFurigana);
						enableFurigana(e);
					}}
				/>
			</FormControl>
			{vocab && <VocabModal vocab={vocab} v_sentence={v_sentence} />}
			<Button
				border="1px"
				fontWeight="400"
				borderColor="blue.500"
				size="sm"
				onClick={() => {
					quit();
				}}
			>
				Quit
			</Button>
		</Flex>
	);
}
