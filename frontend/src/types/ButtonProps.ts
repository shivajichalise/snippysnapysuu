import { ReactElement } from "react";

interface ButtonProps {
  type: "primary" | "secondary" | "accent" | "error" | "warning" | "info";
  onClick: () => void;
  children: ReactElement;
}

export default ButtonProps;
