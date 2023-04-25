import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { createFolder } from "../../../redux/actionCreators/folderActionCreator";
import { toast } from "react-toastify";

const CreateFolder = ({ setIsCreateFolderModalOpen }) => {
  const [folderName, setFolderName] = useState("");

  const { userFolders, currentFolder, currentFolderData } = useSelector(
    (state) => {
      if (state.folders) {
        return {
          userFolders: state.folders.userFolders,
          currentFolder: state.folders.currentFolder,
          currentFolderData: state.folders.userFolders.find(
            (folder) => folder.docId === state.folders.currentFolder
          )?.data,
        };
      } else {
        return {
          userFolders: undefined,
          currentFolder: undefined,
        };
      }
    },
    shallowEqual
  );

  const dispatch = useDispatch();

  const checkFolderAlreadyPresent = (name) => {
    const folderPresent = userFolders
      .filter((folder) => folder.data.parent === currentFolder)
      .find((fldr) => fldr.data.name === name);
    if (folderPresent) {
      return true;
    } else {
      return false;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (folderName) {
      if (folderName.length > 3) {
        if (!checkFolderAlreadyPresent(folderName)) {
          const data = {
            createdAt: new Date(),
            name: folderName,

            path:
              currentFolder === "root"
                ? []
                : currentFolder && currentFolder.data
                ? [...currentFolder.data.path, currentFolder]
                : [],
            parent: currentFolder,
            lastAccessed: null,
            updatedAt: new Date(),
          };

          dispatch(createFolder(data));
          setIsCreateFolderModalOpen(false);
          console.log(data);
        } else {
          toast.error("Folder Already Present!", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        }
      } else {
        toast.error("Folder must be atleast 3 characters!", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    }
  };

  return (
    <div
      className="col-md-12 position-fixed top-0 left-0 w-100 h-100"
      style={{ background: "rgba(0,0,0,0.6)", zIndex: 9999 }}
    >
      <div className="row align-items-center justify-content-center">
        <div className=" col-md-4 mt-5 bg-white rounded p-4">
          <div className="d-flex justify-content-between">
            <h4>Create Folder</h4>
            <button
              className="btn"
              onClick={() => setIsCreateFolderModalOpen(false)}
            >
              <FontAwesomeIcon
                icon={faTimes}
                className="text-black"
                size="sm"
              />
            </button>
          </div>

          <br />

          <div className="d-flex flex-column align-items-center">
            <form className="mt-3 w-100" onClick={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  id="Folder-name"
                  value={folderName}
                  onChange={(event) => setFolderName(event.target.value)}
                />
              </div>

              <button className="btn btn-info mt-5 form-control" type="submit">
                Create Folder
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateFolder;
