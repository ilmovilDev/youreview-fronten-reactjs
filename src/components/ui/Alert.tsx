import { ReactNode } from "react";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { Text } from "../common";

const Container = ({children}: {children: ReactNode}) => (
  <aside
    className="flex flex-grow w-full items-center justify-center" aria-live="polite"
  >
    <section
      className="flex items-center p-4 border border-red-200 rounded-lg bg-red-50 shadow-md"
      role="alert"
    >
      {children}
    </section>
  </aside>
)

export const Alert = ({ message }: { message: string}) => (
  <Container>
    <AiOutlineInfoCircle
      className="w-5 h-5 me-3 text-red-500"
      aria-hidden="true"
    />
    <span className="sr-only">Info</span>
    <Text color="error" weight="medium">
      {message}
    </Text>
  </Container>
);
