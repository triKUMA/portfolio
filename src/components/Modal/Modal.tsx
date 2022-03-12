import { createContext, ReactNode, useEffect, useState } from "react";
import "./styles/Modal.css";
import { IoClose } from "react-icons/io5";

const ModalContext = createContext({ closeModal: () => {} });

interface ModalProps {
  active: boolean;
  handleDisable: () => void;
  children?: ReactNode;
}

function Modal(props: ModalProps) {
  const [modalActive, setModalActive] = useState(false);

  useEffect(() => {
    if (props.active && !modalActive) {
      setModalActive(true);
    }
  }, [props.active]);

  function disableModal() {
    props.handleDisable && props.handleDisable();
    setTimeout(() => {
      setModalActive(false);
    }, 75);
  }

  return modalActive ? (
    <div
      className={
        "modal-background" + (!props.active && modalActive ? " disable" : "")
      }
      onClick={() => {
        disableModal();
      }}
    >
      <div
        className="modal"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <ModalContext.Provider value={{ closeModal: () => disableModal() }}>
          {props.children}
        </ModalContext.Provider>
        <IoClose
          className="close"
          onClick={() => {
            disableModal();
          }}
        />
      </div>
    </div>
  ) : null;
}

export default Modal;

export const ModalCtx = ModalContext.Consumer;
