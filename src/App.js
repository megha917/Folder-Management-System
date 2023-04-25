import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import DashBoardPage from "./pages/DashboardPage/DashboardPage";
import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getFolders } from "./redux/actionCreators/folderActionCreator";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const dispatch = useDispatch();
  const userId = "test-user-id";

  useEffect(() => {
    dispatch(getFolders(userId));
  }, [dispatch]);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard/*" element={<DashBoardPage />} />
      </Routes>

      <ToastContainer />
    </div>
  );
};

export default App;
