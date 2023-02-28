import { Flex, Box, Link } from "@chakra-ui/react";
import { Link as RouteLink } from "react-router-dom";
import { ThemeButton } from "./ThemeButton";

export const Navbar = () => {
  return (
    <Flex
      boxShadow="rgba(0, 0, 0, 0.16) 0px 1px 4px"
      justifyContent="flex-end"
      alignItems="center"
      pt="10px"
      pb="10px"
      pr="30px"
    >
      <Link as={RouteLink} to="/job/list" _hover={{ textDecoration: "none" }}>
        <Box
          bgColor="#5ececc"
          padding="8px 16px"
          fontWeight="bold"
          borderRadius="20px"
          color="#fff"
          mr="20px"
          _hover={{ bgColor: "#319795" }}
        >
          Job Listing
        </Box>
      </Link>
      <Link as={RouteLink} to="/job/post" _hover={{ textDecoration: "none" }}>
        <Box
          bgColor="#5ececc"
          padding="8px 16px"
          borderRadius="20px"
          fontWeight="bold"
          color="#fff"
          mr="20px"
          _hover={{ bgColor: "#319795" }}
        >
          Job Posting
        </Box>
      </Link>
      <ThemeButton />
    </Flex>
  );
};
