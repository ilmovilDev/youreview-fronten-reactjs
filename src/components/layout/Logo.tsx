import { baseGradient } from "../../utils/constants";

type Props =  {
    text: string;
    onClick: () => void;
}

export const Logo = ({text, onClick}: Props) => {
  return (
    <button
        onClick={onClick}
        className={`
            text-3xl 
            md:text-4xl 
            font-bold 
            tracking-wider 
            bg-clip-text 
            text-transparent
            bg-gradient-to-l 
            ${baseGradient}
          `}
    >
      {text}
    </button>
  )
}

