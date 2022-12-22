import { RouterProvider } from "react-router-dom";
import router from "./Component/Route/Router";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { useContext } from "react";
import { AuthContext } from "./Component/Context/UserContext";



function App() {
    const { darkMode} = useContext(AuthContext);
  return (
    <div className="md:mx-10" data-theme={darkMode ? "dark" : 'light'}>
      <ToastContainer
        position="top-center"
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
