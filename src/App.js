import { RouterProvider } from "react-router-dom";
import router from "./Component/Route/Router";




function App() {
  return (
    <div className="md:mx-10">
     <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
