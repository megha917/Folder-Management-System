import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolderPlus } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { shallowEqual, useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { changeFolder } from "../../../redux/actionCreators/folderActionCreator";

const SubBar = ({ setIsCreateFolderModalOpen }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { currentFolder, currentFolderData, userFolders } = useSelector(
    (state) => ({
      currentFolder: state.folders.currentFolder,
      currentFolderData: state.folders.userFolders.find(
        (folder) => folder.docId === state.folders.currentFolder
      ),
      userFolders: state.folders.userFolders,
    }),
    shallowEqual
  );

  const handleNavigate = (Link, id) => {
    navigate(Link);

    dispatch(changeFolder(id));
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg mt-2 navbar-light bg-white py-2 px-4 overflow-hidden">
        <nav className="ms-5" aria-label="breadcrumb">
          <ol className="breadcrumb d-flex align-items-center">
            <>
              <button
                onClick={() => handleNavigate("/dashboard", "root")}
                className="breadcrum-item btn btn-link text-decoration-none"
              >
                Root
              </button>
              {currentFolderData?.data.path.map((folder, index) => (
                <button
                  key={index}
                  className="breadcrum-item btn btn-link text-decoration-none"
                  onClick={() =>
                    handleNavigate(
                      `/dashboard/folder/${
                        userFolders.find((fldr) => folder === fldr.docId).docId
                      }`,
                      userFolders.find((fldr) => folder === fldr.docId).docId
                    )
                  }
                >
                  {userFolders.find((fldr) => folder === fldr.docId).data.name}
                </button>
              ))}
              <li className="breadcrum-item active ">
                {currentFolderData?.data.name}
              </li>
            </>
          </ol>
        </nav>

        <ul className="navbar-nav ms-auto me-5">
          <li className="nav-item ms-2">
            <button
              className="btn btn-outline-dark"
              onClick={() => setIsCreateFolderModalOpen(true)}
            >
              <FontAwesomeIcon icon={faFolderPlus} /> &nbsp; Create Folder
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default SubBar;
