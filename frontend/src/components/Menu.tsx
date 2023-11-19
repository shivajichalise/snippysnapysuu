import MenuProps from "../types/MenuProps";

const Menu = ({ image, text, showText, toggleModal }: MenuProps) => {
  return (
    <div
      className="flex justify-around items-center hover:cursor-pointer"
      onClick={toggleModal}
    >
      <img
        className="w-10 h-10 rounded-full object-cover"
        src={image}
        // src="https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=80"
      />
      <div className={`flex flex-col p-2 ${showText ? "block" : "hidden"}`}>
        <h4 className="text-xs text-accent-200">{text?.title}</h4>
        <h2 className="text-xs">{text?.description}</h2>
      </div>
    </div>
  );
};

export default Menu;
