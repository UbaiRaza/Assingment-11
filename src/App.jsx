import { Router_App } from "./Config/Router_App";
import { Navbar } from "./components/Navbar";
import { Products } from "./components/Section/Product/Product";
import Section1 from "./components/Section/Section1";
import Footer from "./utils/Footer/Footer";

function App() {
  return (
    <div className="space-y-12">
      <Router_App />
      
    </div>
  );
}

export default App;
