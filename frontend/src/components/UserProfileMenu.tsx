import UserProfileMenuProps from "../types/UserProfileMenuProps";
import Anchor from "./Anchor";
import Button from "./Button";
import { IconX, IconLogout } from "@tabler/icons-react";

const UserProfileMenu = (props: UserProfileMenuProps) => {
  return (
    <div className="flex flex-col justify-between h-full">
      <div className="flex justify-between items-center">
        {props.children}
        <Button type="primary" onClick={props.toggleModal}>
          <IconX size={15} className="m-1" />
        </Button>
      </div>
      <div>
        <Anchor
          to="https://instagram.com"
          text="instagram"
          icon={<IconLogout size={16} />}
        />
      </div>
    </div>
  );
};

export default UserProfileMenu;
