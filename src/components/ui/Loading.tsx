import { ReactNode } from "react";
import { Text } from "../common";

const Container = ({children}: {children: ReactNode}) => (
  <section
    className="flex flex-col flex-grow items-center justify-center space-y-4"
  >
    {children}
  </section>
)

const Spinner = () => (
  <svg
    className="w-12  h-12 text-cyan-500 animate-spin"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
  >
    <circle
      className="opacity-10"
      cx="12"
      cy="12"
      r="10"
      stroke="currentColor"
      strokeWidth="4"
    ></circle>
    <path
      className="opacity-80"
      fill="currentColor"
      d="M4 12a8 8 0 018-8v8z"
    ></path>
  </svg>
);

export const Loading = () => (
  <Container>
    <Spinner />
    <Text weight="bold" spacing="widest" color="primary" className="animated">
      Loading, please wait...
    </Text>
  </Container>
);

