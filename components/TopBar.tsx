import React from "react";
import { Heading } from '@chakra-ui/react'

const TopBar = (props) => {
    return (
      <Heading
        fontSize={{ base: "4xl", sm: "5xl", md: "6xl" }}
        fontWeight="bold"
        textAlign="center"
        bgColor="#020024"
        bgClip="text"
        mt={4}
      >
        Hello this is my Kanban Challenge
      </Heading>
    );
}

export default TopBar;