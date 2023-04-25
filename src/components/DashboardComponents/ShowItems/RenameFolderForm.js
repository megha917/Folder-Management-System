import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { renameFolder } from "../../../redux/actionCreators/folderActionCreator";

const RenameFolderForm = ({ folderId, onSubmit }) => {
  const [newName, setNewName] = useState("");
  const dispatch = useDispatch();

  const submitHandler = (event) => {
    event.preventDefault();
    dispatch(renameFolder(folderId, newName));
    setNewName("");
    onSubmit("");
  };

  return (
    <div className="d-flex flex-column align-items-center">
      <form className="mt-3 w-100" onSubmit={submitHandler}>
        <div className="form-group">
          <input
            className="form-control"
            type="text"
            value={newName}
            onChange={(event) => setNewName(event.target.value)}
          />
        </div>
        <button className="btn btn-success mt-4 form-control " type="submit">
          Create
        </button>
      </form>
    </div>
  );
};

export default RenameFolderForm;
