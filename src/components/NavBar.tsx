import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.svg";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

const NavBar = () => {
  return (
    <HStack padding="10px">
      <Image src={logo} boxSize="60px" borderRadius="10px" />
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
