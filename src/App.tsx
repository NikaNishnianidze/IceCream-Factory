import DesktopHeader from "./Components/DesktopHeader";
import Header from "./Components/Header";
import { useMediaQuery } from "react-responsive";
import LoginSystem from "./Components/LoginSystem";
import BlackBox from "./Components/BlackBox";
import Catalogue from "./Components/Catalogue";

function App() {
  const isDesktop = useMediaQuery({ minWidth: 1440 });
  return (
    <div className="flex flex-col">
      {isDesktop && <DesktopHeader />}
      <Header />
      <LoginSystem />
      <BlackBox />
      <Catalogue />
    </div>
  );
}

export default App;
