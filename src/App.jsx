import { Outlet } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { useGlobalContext } from "./Components/utils/global.context";


function App() {

  const { state } = useGlobalContext();

  return (
      <div className={`App ${state.theme}`}>
          <Navbar/>
          <Outlet/>
          <Footer/>
      </div>
  );
}

export default App;
