import DesktopHeader from "./Components/DesktopHeader";
import Header from "./Components/Header";
import { useMediaQuery } from "react-responsive";

function App() {
  const isDesktop = useMediaQuery({ minWidth: 1440 });
  return (
    <div className="flex flex-col">
      {isDesktop && <DesktopHeader />}
      <Header />
    </div>
  );
}

export default App;
