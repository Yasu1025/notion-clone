import { BrowserRouter } from "react-router-dom";
import "./styles/main.scss";
import { AppRoutes } from "./routes";
import useDarkMode from "./hook/common/useTheme";
function App() {
  const { isDarkMode } = useDarkMode();

  return (
    <BrowserRouter>
      <div
        className={`min-h-screen ${
          isDarkMode ? "bg-gray-800 text-white" : "bg-white text-black"
        }`}
      >
        <AppRoutes />
      </div>
    </BrowserRouter>
  );
}

export default App;
