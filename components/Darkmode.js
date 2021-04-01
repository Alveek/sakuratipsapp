import React from "react";
import { IconButton, useColorMode } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

export default function DarkMode() {
	const { colorMode, toggleColorMode } = useColorMode();
	return (
		<header>
			<IconButton
				onClick={toggleColorMode}
				aria-label="Dark mode"
				icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
				outline="none"
			/>
		</header>
	);
}
