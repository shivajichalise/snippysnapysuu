import { useState } from "react";
import Menu from "./Menu";
import Modal from "../components/Modal";
import UserProfileMenu from "./UserProfileMenu";
import logo from "../assets/logo.png";
import AppMenu from "./AppMenu";

const Navbar = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [modalPosition, setModalPosition] = useState<"right" | "left">("right");

  const toggleModal = (position: "right" | "left") => {
    setModalPosition(position);
    setOpenModal(!openModal);
  };

  const image =
    "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=80";

  const text = {
    title: "shivajichalise",
    description: "Shivaji Chalise",
  };

  return (
    <>
      <Modal
        open={openModal}
        position={modalPosition}
        onClose={() => toggleModal("right")}
      >
        {modalPosition === "right" ? (
          <UserProfileMenu toggleModal={() => toggleModal(modalPosition)}>
            <Menu
              image={image}
              text={text}
              showText={true}
              toggleModal={() => null}
            />
          </UserProfileMenu>
        ) : (
          <AppMenu toggleModal={() => toggleModal(modalPosition)}>
            <Menu
              image={logo}
              text={null}
              showText={false}
              toggleModal={() => null}
            />
          </AppMenu>
        )}
      </Modal>

      <nav className="flex justify-between items-center p-3 bg-100">
        <Menu
          image={logo}
          text={null}
          showText={false}
          toggleModal={() => toggleModal("left")}
        />
        <Menu
          image={image}
          text={text}
          showText={false}
          toggleModal={() => toggleModal("right")}
        />
      </nav>
    </>
  );
};

export default Navbar;
