import React from "react";
import NextLink from "next/link";
import { Flex, Text, useDisclosure } from "@chakra-ui/react";
import DarkModeBtn from "./Darkmode";
import { HiMenu } from "react-icons/hi";

import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  IconButton,
  Button
} from "@chakra-ui/react";

export default function Menu() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
      <IconButton
        ref={btnRef}
        colorScheme="cyan"
        boxShadow="md"
        variant="outline"
        icon={<HiMenu />}
        size="lg"
        fontSize="46px"
        onClick={onOpen}
        display={{ base: "block", md: "none" }}
        position="fixed"
        bottom="60px"
        right="10px"
      >
        Open
      </IconButton>
      <Drawer
        isOpen={isOpen}
        placement="bottom"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay>
          <DrawerContent borderTopLeftRadius="16px" borderTopRightRadius="16px">
            <DrawerHeader>
              <Flex justifyContent="space-between">
                <NextLink mt={3} href="/">
                  <Button variant="ghost" onClick={onClose}>
                    На главную
                  </Button>
                </NextLink>
                <DarkModeBtn />
              </Flex>
            </DrawerHeader>
            <DrawerBody>
              <Text>Link 1</Text>
              <Text>Link 2</Text>
              <Text>Link 3</Text>
              <Text>Link 4</Text>
            </DrawerBody>

            <DrawerFooter></DrawerFooter>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  );
}
