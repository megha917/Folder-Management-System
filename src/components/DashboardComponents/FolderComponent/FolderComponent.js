import { useParams } from "react-router-dom";
import { shallowEqual, useSelector } from "react-redux";
import ShowItems from "../ShowItems/ShowItems";

const FolderComponent = () => {
  const { folderId } = useParams();

  const { currentFolderData, childFolders } = useSelector(
    (state) => ({
      currentFolderData: state.userFolders
        ? state.userFolders.find((folder) => folder.docId === folderId)?.data
        : undefined,
      childFolders: state.folders.userFolders.filter(
        (folder) => folder.data.parent === folderId
      ),
    }),
    shallowEqual
  );

  return (
    <div>
      {childFolders.length > 0 ? (
        <ShowItems title={"Created Folders"} items={childFolders} />
      ) : (
        <p className="text-center my-5">Empty Folder</p>
      )}
    </div>
  );
};

export default FolderComponent;
