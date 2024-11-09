import React, { useState } from "react";
import Modal from "./Modal";

type ModalTrggerProps = {
  content: React.ReactNode;
  children: React.ReactNode;
};

function ModalTrigger({ children, content }: ModalTrggerProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  return (
    <div>
      <div onClick={handleOpenModal}>{children}</div>
      {isOpen && (
        <Modal show={isOpen} onClose={handleCloseModal}>
          {content}
        </Modal>
      )}
    </div>
  );
}

export default ModalTrigger;
