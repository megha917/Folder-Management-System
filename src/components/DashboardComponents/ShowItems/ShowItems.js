import { deleteFolder } from "../../../redux/actionCreators/folderActionCreator";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolder } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { changeFolder } from "../../../redux/actionCreators/folderActionCreator";
import { toast } from "react-toastify";
import { useState } from "react";
import RenameFolderModal from "./RenameFolderModal";
import "./ShowItems.css";

const ShowItems = ({ title, items }) => {
  const [folderIdToRename, setFolderIdToRename] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  const doubleClickHandler = (itemId) => {
    dispatch(changeFolder(itemId));
    navigate(`/dashboard/folder/${itemId}`);
  };

  const deleteHandler = (folderId) => {
    dispatch(deleteFolder(folderId));
    toast.success("Folder Deleted!", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  return (
    <div className="w-100">
      <h3 className="text-center p-3 my-2 display-6 fw-normal">{title}</h3>
      <div className="row gap-4 p-5 flex-wrap">
        {Array.isArray(items) && items.length > 0 ? (
          items.map((item, index) => {
            if (item && item.data) {
              return (
                <div
                  key={index * 55}
                  className="col-md-2 py-6 text-center d-flex flex-column border  border-black border-4 rounded-4 hover-folder"
                >
                  <FontAwesomeIcon
                    icon={faFolder}
                    size="3x"
                    className="mb-3 "
                    style={{
                      float: "none",
                      marginTop: "20px",
                      color: "GoldenRod",
                    }}
                  />{" "}
                  <p
                    className=" text-wrap folder-text-style "
                    onDoubleClick={() => doubleClickHandler(item.docId)}
                  >
                    {item.data.name}{" "}
                  </p>
                  <div className="d-flex flex-column">
                    <div className="mt-auto">
                      <button
                        className="btn btn-outline-success btn-sm me-4"
                        onClick={() => {
                          setFolderIdToRename(item.docId);
                          handleShow();
                        }}
                      >
                        Rename
                      </button>

                      <button
                        className="btn btn-outline-danger btn-sm "
                        onClick={() => deleteHandler(item.docId)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              );
            }
          })
        ) : (
          <p>No folders found</p>
        )}
      </div>

      <RenameFolderModal
        show={showModal}
        handleClose={handleClose}
        folderIdToRename={folderIdToRename}
      />
    </div>
  );
};

export default ShowItems;
