import { BrowserRouter } from "react-router-dom";
import "./styles/main.scss";
import { AppRoutes } from "./routes";
function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
