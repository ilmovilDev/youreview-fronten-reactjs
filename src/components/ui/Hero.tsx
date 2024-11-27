import { ReactNode } from "react";
import { baseGradient } from "../../utils/constants";
import { Highlight, Text, Title } from "../common";

const Container = ({children}: {children: ReactNode}) => (
  <section
    className={`bg-gradient-to-br ${baseGradient} py-10 px-2 w-full text-center rounded-xl shadow-lg space-y-6`}
  >
    {children}
  </section>
)

export const Hero = () => {
  return (
    <Container>
      <Title color="light">
        🎥 Analyze and Extract Audio from YouTube 🚀
      </Title>
      <Text color="light" className="text-base leading-relaxed">
        Our app lets you{" "}
        <Highlight text="analyze YouTube videos"/>{" "}
        or{" "}
        <Highlight text="download audio"/> in just
        a few clicks.
      </Text>
      <Text color="light" className="text-base leading-relaxed">
        Enter the video URL, and we'll handle the rest!
      </Text>
    </Container>
  );
};