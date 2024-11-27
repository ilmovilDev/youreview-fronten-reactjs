import { ElementType } from "react";
import { BaseProps } from "../../types";

type Props = BaseProps & {
  as?: ElementType;
  justify?: "start" | "center" | "end" | "between" | "around" | "evenly"; 
  items?: "start" | "center" | "end" | "stretch" | "baseline"; 
  direction?: "row" | "col";
  className?: string;
};

export const FlexContainer = ({
  as: Component = "div",
  justify = "center",
  items = "center",
  direction = "row",
  className = "",
  children,
  ...rest
}: Props) => {
  const justifyClass = `justify-${justify}`;
  const itemsClass = `items-${items}`;
  const directionClass = `flex-${direction}`;

  return (
    <Component 
      className={`flex ${justifyClass} ${itemsClass} ${directionClass} ${className}`}
      {...rest}
    >
      {children}
    </Component>
  )
};
