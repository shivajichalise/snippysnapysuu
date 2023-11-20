import {
  IconFolderFilled,
  IconPlus,
  IconSourceCode,
  IconStarsFilled,
  IconTag,
} from "@tabler/icons-react";
import Anchor from "./Anchor";
import Button from "./Button";

const Sidebar = () => {
  return (
    <div className="flex flex-col p-4 w-60 h-[calc(100vh-(3.5rem))] overflow-y-auto bg-100 border-r border-t border-200 md:w-72">
      <div className="mb-4">
        <Anchor
          to="https://instagram.com"
          icon={<IconSourceCode size={16} />}
          text="Snippets"
        />
        <Anchor
          to="https://instagram.com"
          icon={<IconStarsFilled size={16} />}
          text="Favorites"
        />
      </div>
      <div className="mb-4">
        <div className="flex justify-between items-center">
          <label className="text-sm text-accent-200">Collections</label>
          <Button type="primary" onClick={() => console.log("new collectin")}>
            <IconPlus size={13} />
          </Button>
        </div>
        <Anchor
          to="https://instagram.com"
          icon={<IconFolderFilled size={16} />}
          text="DevOps"
        />
        <Anchor
          to="https://instagram.com"
          icon={<IconFolderFilled size={16} />}
          text="Frontend"
        />
      </div>
      <div className="mb-4">
        <label className="text-sm text-accent-200">Tags</label>
        <Anchor
          to="https://instagram.com"
          icon={<IconTag size={16} />}
          text="Reactjs"
        />
        <Anchor
          to="https://instagram.com"
          icon={<IconTag size={16} />}
          text="Bash"
        />
      </div>
    </div>
  );
};

export default Sidebar;
