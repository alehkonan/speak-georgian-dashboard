import { Box } from "@mui/material";
import { Container } from "@mui/system";
import React, { PropsWithChildren } from "react";
import { HEADER_HEIGHT } from "./constants";
import { Header } from "./Header";

export const Layout = ({ children }: PropsWithChildren) => {
  return (
    <Box>
      <Header />
      <Container 
        sx={{ 
          height: `calc(100vh - ${HEADER_HEIGHT}px)`, 
          marginTop: `${HEADER_HEIGHT}px`,
          overflowY: 'auto' 
        }}
      >
        {children}
      </Container>
    </Box>
  )
}