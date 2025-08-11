import DesktopHeader from "./Components/DesktopHeader";
import Header from "./Components/Header";
import { useMediaQuery } from "react-responsive";
import LoginSystem from "./Components/LoginSystem";

function App() {
  const isDesktop = useMediaQuery({ minWidth: 1440 });
  return (
    <div className="flex flex-col">
      {isDesktop && <DesktopHeader />}
      <Header />
      <LoginSystem />
    </div>
  );
}

export default App;
