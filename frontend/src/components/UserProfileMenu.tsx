import UserProfileMenuProps from "../types/UserProfileMenuProps";
import Button from "./Button";
import { IconX } from "@tabler/icons-react";

const UserProfileMenu = (props: UserProfileMenuProps) => {
  return (
    <div className="flex flex-col justify-between">
      <div className="flex justify-between items-center">
        {props.children}
        <Button type="primary" onClick={props.toggleModal}>
          <IconX size={15} className="m-1" />
        </Button>
      </div>
      <div></div>
    </div>
  );
};

export default UserProfileMenu;
