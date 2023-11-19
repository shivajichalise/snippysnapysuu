import { Link } from "react-router-dom";
import AnchorProps from "../types/AnchorProps";

const Anchor = (props: AnchorProps) => {
  return (
    <Link
      to={props.to}
      className="block w-full p-2 rounded-md hover:bg-200 hover:cursor-pointer"
    >
      <div className="flex justify-start items-center">
        {props.icon}
        <label className="ml-2 text-sm"> {props.text} </label>
      </div>
    </Link>
  );
};

export default Anchor;
