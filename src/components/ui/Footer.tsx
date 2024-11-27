import { ReactNode } from "react";
import { Text } from "../common";

const getYear = () => new Date().getFullYear();

const Container = ({children}: {children: ReactNode}) => (
  <footer
    className="flex justify-center items-center py-6 px-6"
  >
    {children}
  </footer>
)

export const Footer = () => (
  <Container>
    
      <Text>
        Developed by{" "}
        <span className="font-medium">Luis Carrasco</span>. All rights reserved © {getYear()}.
      </Text>

  </Container>
);

