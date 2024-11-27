import { ReactNode } from "react";
import { Text } from "../common";

const Container = ({children}: {children: ReactNode}) => (
  <section
    className="flex items-center flex-grow px-8 font-semibold text-center"
    aria-live="polite"
  >
    {children}
  </section>
)

export const EmptyStateMessage = () => (
  <Container>
    <Text weight="semibold" spacing="wider">
      No summary available. Enter a video URL to get started!
    </Text>
  </Container>
);
