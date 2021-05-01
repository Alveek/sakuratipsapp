import { useDisclosure } from "@chakra-ui/react";
import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	Button,
	Text,
	Box,
	Divider,
} from "@chakra-ui/react";

export default function VocabModal({ vocab, v_sentence }) {
	const { isOpen, onOpen, onClose } = useDisclosure();
	return (
		<>
			<Button
				border="1px"
				fontWeight="400"
				borderColor="blue.500"
				size="sm"
				mr="2"
				px="6"
				onClick={onOpen}
			>
				Vocabulary
			</Button>

			<Modal isOpen={isOpen} onClose={onClose} mx="6">
				<ModalOverlay />
				<ModalContent>
					<ModalHeader color="blue.700">
						<div dangerouslySetInnerHTML={{ __html: v_sentence }} />
					</ModalHeader>
					<Divider />
					<ModalBody>
						{vocab &&
							vocab.map((word, index) => {
								return (
									<Box key={index}>
										<Text>
											<span style={{ fontWeight: "bold", color: "hotpink" }}>
												{word.v_jap}
											</span>{" "}
											- {word.v_eng}
										</Text>
									</Box>
								);
							})}
					</ModalBody>
					<ModalFooter>
						<Button colorScheme="blue" mr={3} onClick={onClose}>
							Close
						</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	);
}
