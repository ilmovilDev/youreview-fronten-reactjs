import { ReactNode } from "react";
import { Logo } from "../layout";

const Container = ({children}: {children: ReactNode}) => (
  <header
    className="flex justify-between items-center py-6 border-b border-gray-200"
  >
    {children}
  </header>
)

export const Header = ({onClick}: {onClick: () => void}) => {
  return (
    <Container>
      <Logo 
        text="Youreview" 
        onClick={onClick}
      />
    </Container>
  );
};
