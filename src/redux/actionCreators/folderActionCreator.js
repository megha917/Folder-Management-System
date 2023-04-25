import * as types from "../actionTypes/folderActionTypes";
import fire from "../../config/firebase";

//actions

const addFolder = (payload) => ({
  type: types.CREATE_FOLDER,
  payload,
});

const addFolders = (payload) => ({
  type: types.ADD_FOLDERS,
  payload,
});

const setLoading = (payload) => ({
  type: types.SET_LOADING,
  payload,
});

const setaChangeFolder = (payload) => ({
  type: types.CHANGE_FOLDER,
  payload,
});

const renameFolderAction = (payload) => ({
  type: types.RENAME_FOLDER,
  payload,
});

const deleteFolderAction = (payload) => ({
  type: types.DELETE_FOLDER,
  payload,
});

//action creators

export const createFolder = (data) => (dispatch) => {
  const folderData = {
    ...data,
    userId: "test-user-id",
  };

  fire
    .firestore()
    .collection("folders")
    .add(folderData)
    .then(async (folder) => {
      const folderData = (await folder.get()).data();
      console.log(folderData);
      const folderId = folder.id;
      dispatch(addFolder({ data: folderData, docId: folderId }));
    });
};

export const getFolders = (userId) => (dispatch) => {
  dispatch(setLoading(true));
  fire
    .firestore()
    .collection("folders")
    .where("userId", "==", userId)
    .get()
    .then((querySnapshot) => {
      const foldersData = querySnapshot.docs.map((folder) => ({
        data: folder.data(),
        docId: folder.id,
      }));
      dispatch(addFolders(foldersData));
      dispatch(setLoading(false));
    });
};

export const changeFolder = (folderId) => (dispatch) => {
  dispatch(setaChangeFolder(folderId));
};

export const renameFolder = (folderId, newName) => (dispatch) => {
  fire
    .firestore()
    .collection("folders")
    .doc(folderId)
    .update({ name: newName })
    .then(() => {
      dispatch(renameFolderAction({ folderId, newName }));
    });
};

export const deleteFolder = (folderId) => (dispatch) => {
  fire
    .firestore()
    .collection("folders")
    .doc(folderId)
    .delete()
    .then(() => {
      dispatch(deleteFolderAction({ folderId }));
    });
};
