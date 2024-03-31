import React from "react";
import { ModalContainer } from "./modal-container";

export const Modal = React.forwardRef(
  (
    {
      rows,
      setRows,
      editObj,
      setShowModal
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className="modal-item"
        onClick={(e) => {
          e.stopPropagation();
          setShowModal(false);
        }}
      >
        <ModalContainer
          editObj={editObj}
          setRows={setRows}
          rows={rows}
          setShowModal={setShowModal}
        />
      </div>
    );
  }
);
