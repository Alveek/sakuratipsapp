import { FormControl, FormLabel, Switch, Box } from "@chakra-ui/react";
import { useEffect } from "react";

export default function Footer({ showFurigana, setShowFurigana }) {
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
		<Box my={3}>
			<FormControl display="flex" alignItems="center">
				<FormLabel htmlFor="furigana-controls" mb="1">
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
		</Box>
	);
}
