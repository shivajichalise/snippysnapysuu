import { Link } from "react-router-dom";
import AnchorProps from "../types/AnchorProps";

const Anchor = (props: AnchorProps) => {
  return (
    <Link
      to={props.to}
      className="block w-full p-2 m-y text-text-200 rounded-md cursor-pointer hover:bg-200 hover:text-text"
    >
      <div className="flex justify-start items-center">
        {props.icon}
        <h1 className="ml-2 text-sm"> {props.text} </h1>
      </div>
    </Link>
  );
};

export default Anchor;