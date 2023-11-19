import { ReactElement } from "react";

interface ModalProps {
  open: boolean;
  position: "right" | "left";
  onClose: () => void;
  children: ReactElement;
}

export default ModalProps;
