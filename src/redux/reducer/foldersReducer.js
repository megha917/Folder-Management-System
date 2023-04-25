import * as types from "../actionTypes/folderActionTypes";

const initialState = {
  isLoading: true,
  currentFolder: "root",
  userFolders: [],
  adminFolders: [],
};

const foldersReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.CREATE_FOLDER:
      return {
        ...state,
        userFolders: [...state.userFolders, action.payload],
      };

    case types.ADD_FOLDERS:
      return {
        ...state,
        userFolders: action.payload,
      };

    case types.SET_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };

    case types.CHANGE_FOLDER:
      return {
        ...state,
        currentFolder: action.payload,
      };

    case types.RENAME_FOLDER:
      return {
        ...state,
        userFolders: state.userFolders.map((folder) =>
          folder.docId === action.payload.folderId
            ? {
                ...folder,
                data: { ...folder.data, name: action.payload.newName },
              }
            : folder
        ),
      };

    case types.DELETE_FOLDER:
      return {
        ...state,
        userFolders: state.userFolders.filter(
          (folder) => folder.docId !== action.payload.folderId
        ),
      };

    default:
      return state;
  }
};

export default foldersReducer;
