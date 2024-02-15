import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.svg";

const NavBar = () => {
  return (
    <HStack>
      <Image src={logo} boxSize="60px" borderRadius="10px" background="white" />
      <Text>NavBar</Text>
    </HStack>
  );
};

export default NavBar;
