import React from "react";
import NavigationComponent from "../../components/HomePageComponents/Navigation";
import SubBar from "../../components/DashboardComponents/SubBar/SubBar";
import HomeComponent from "../../components/DashboardComponents/HomeComponent/HomeComponent";
import { useState, useEffect } from "react";
import CreateFolder from "../../components/DashboardComponents/CreateFolder/CreateFolder";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { getFolders } from "../../redux/actionCreators/folderActionCreator";
import { Route, Routes } from "react-router-dom";
import FolderComponent from "../../components/DashboardComponents/FolderComponent/FolderComponent";

const DashBoardPage = () => {
  const [isCreateFolderModalOpen, setIsCreateFolderModalOpen] = useState(false);

  const { isLoading } = useSelector(
    (state) => ({
      isLoading: state.folders.isLoading,
    }),
    shallowEqual
  );

  const dispatch = useDispatch();

  useEffect(() => {
    if (isLoading) {
      dispatch(getFolders("userId"));
    }
  }, [isLoading, dispatch]);

  return (
    <div>
      {isCreateFolderModalOpen && (
        <CreateFolder setIsCreateFolderModalOpen={setIsCreateFolderModalOpen} />
      )}
      <NavigationComponent />
      <SubBar setIsCreateFolderModalOpen={setIsCreateFolderModalOpen} />

      <Routes>
        <Route path="" element={<HomeComponent />} />
        <Route path="folder/:folderId" element={<FolderComponent />} />
      </Routes>
    </div>
  );
};

export default DashBoardPage;
