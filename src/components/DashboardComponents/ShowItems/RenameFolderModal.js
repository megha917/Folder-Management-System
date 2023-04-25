import React from "react";
import Modal from "react-bootstrap/Modal";
import RenameFolderForm from "./RenameFolderForm";

const RenameFolderModal = ({ show, handleClose, folderIdToRename }) => {
  return (
    <Modal
      className="modal fade"
      id="staticBackdrop"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabindex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
      show={show}
      onHide={handleClose}
    >
      <Modal.Header className="modal-header" closeButton>
        <Modal.Title className="modal-title fs-5" id="staticBackdropLabel">
          Rename Folder
        </Modal.Title>
      </Modal.Header>

      <Modal.Body className="modal-body">
        <RenameFolderForm folderId={folderIdToRename} onSubmit={handleClose} />
      </Modal.Body>
      <Modal.Footer className="modal-footer"></Modal.Footer>
    </Modal>
  );
};

export default RenameFolderModal;
