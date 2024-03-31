import React, { useRef, useState } from "react";
import { Modal } from "../products__Modal/modal";
import { CSSTransition } from "react-transition-group";
import { useItems } from "./useItems";

export const Edit = React.forwardRef(
  (
    {
      obj,
      rows,
      setRows
    },
    ref
  ) => {

    const { showModal, setShowModal } = useItems()
    const modal = useRef();

    return (
      <>
        <button
          ref={ref}
          className="edit-button"
          onClick={() => setShowModal(true)}
        >
          Edit{" "}
          {
            <div style={{ margin: "10px 0 0 5px" }}>
              <svg width={20} height={20} viewBox="0 0 20 20" fill="none">
                <path
                  d="M 0 13 L 10 3 M 11 3 L 2 3 M 10 3 L 10 11"
                  fill="transparent"
                  stroke="#fff"
                  strokeWidth="2"
                />
              </svg>
            </div>
          }
        </button>
        <CSSTransition
          in={showModal}
          nodeRef={modal}
          timeout={200}
          classNames={"modal-trn"}
          unmountOnExit
          onEnter={() => (modal.current.style.display = "block")}
          onExited={() => (modal.current.style.display = "none")}
        >
          <Modal
            rows={rows}
            setRows={setRows}
            editObj={obj}
            ref={modal}
            setShowModal={setShowModal}
          />
        </CSSTransition>
      </>
    );
  }
);
