import { ElementType } from "react";
import { BaseProps } from "../../types";
import { colorStyles, spacingStyles, weightStyles } from "../../utils/constants";

type Props = BaseProps & {
  as?: ElementType; 
  color?: "solid" | "light" | "white" | "error" | "primary";
  weight?: "normal" | "medium" | "bold" | "semibold";
  spacing?: "normal" | "wide" | "wider" | "widest";
  className?: string;
}

export const Title = ({
  children,
  as: Component = "p",
  color = "solid",
  weight = "normal",
  spacing = "wide",
  className = "",
}: Props) => {
  const classes = `
    ${colorStyles[color]} 
    ${weightStyles[weight]}
    ${spacingStyles[spacing]}
    ${className}`
  ;
  const baseStyles = "text-xl md:text-2xl lg:text-3xl leading-tight";
  const combinedClassName = `${classes} ${baseStyles}`

  return (
    <Component 
      className={combinedClassName}
    >
      {children}
    </Component>
  )
};