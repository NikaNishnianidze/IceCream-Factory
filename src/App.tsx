import DesktopHeader from "./Components/DesktopHeader";
import Header from "./Components/Header";
import { useMediaQuery } from "react-responsive";
import LoginSystem from "./Components/LoginSystem";
import BlackBox from "./Components/BlackBox";
import Catalogue from "./Components/Catalogue";
import History from "./Components/History";
import Locations from "./Components/Locations";
import Footer from "./Components/Footer";

function App() {
  const isDesktop = useMediaQuery({ minWidth: 1440 });
  return (
    <div className="flex flex-col">
      {isDesktop && <DesktopHeader />}
      <Header />
      <LoginSystem />
      <BlackBox />
      <Catalogue />
      <History />
      <Locations />
      <Footer />
    </div>
  );
}

export default App;
