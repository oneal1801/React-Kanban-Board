import React from "react";
import TopBar from "./TopBar";
import { Container } from "@chakra-ui/react";

const Layout = ({children}) => {
    return (
      <div>
        <TopBar />
        <Container maxWidth="container.lg" px={4} py={10}>
          <main>{children}</main>
        </Container>
      </div>
    );
}

export default Layout;