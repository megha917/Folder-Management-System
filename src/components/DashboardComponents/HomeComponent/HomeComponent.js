import ShowItems from "../ShowItems/ShowItems";
import { shallowEqual, useSelector } from "react-redux";

const HomeComponent = () => {
  const folders = [{ name: "New Folder 1" }, { name: "New Folder 2" }];

  const { isLoading, userFolders } = useSelector((state) => {
    return {
      isLoading: state.folders.isLoading,
      userFolders: state.folders.userFolders.filter(
        (folder) => folder.data.parent === "root"
      ),
    };
  }, shallowEqual);

  return (
    <div className="col-md-12 w-100">
      {isLoading ? (
        <h1 className="display-1 my-5 text-center"> Loading...</h1>
      ) : (
        <ShowItems title={"Created Folders"} items={userFolders} />
      )}
    </div>
  );
};

export default HomeComponent;
