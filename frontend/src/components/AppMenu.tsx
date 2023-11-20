import { Link } from "react-router-dom";
import AppMenuProps from "../types/AppMenuProps";
import Anchor from "./Anchor";
import Button from "./Button";
import { IconX, IconTelescope, IconHome } from "@tabler/icons-react";

const AppMenu = (props: AppMenuProps) => {
  return (
    <div className="flex flex-col justify-between h-full">
      <div className="flex flex-col">
        <div className="flex justify-between items-center">
          {props.children}
          <Button type="primary" onClick={props.toggleModal}>
            <IconX size={15} className="m-1" />
          </Button>
        </div>
        <hr className="w-full h-px my-3 border-0 bg-300 rounded-lg" />
        <div>
          <Anchor
            to="https://instagram.com"
            text="Home"
            icon={<IconHome size={16} />}
          />
          <Anchor
            to="https://instagram.com"
            text="Explore"
            icon={<IconTelescope size={16} />}
          />
        </div>
      </div>
      <div className="flex flex-col justify-between">
        <div>
          <p className="text-accent-200 text-xs">
            &copy; {new Date().getFullYear()} Snippy Snapy Suu
          </p>
        </div>
        <div>
          <Link
            to="https://instagram.com"
            className="mr-3 text-xs text-primary-200 hover:underline"
          >
            About
          </Link>
          <Link
            to="https://instagram.com"
            className="mr-3 text-xs text-primary-200 hover:underline"
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AppMenu;
