import Footer from "./Pages/Footer";
import Navbar from "./Pages/Navbar";
import Dashboard from "./Pages/Dashboard/Dashboard";




function App() {
  return (
    <div className="md:mx-10">
      <Navbar></Navbar>
      <Dashboard></Dashboard>
      <Footer></Footer>
    </div>
  );
}

export default App;
