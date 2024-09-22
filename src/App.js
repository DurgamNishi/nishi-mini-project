import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./components/AppRoutes/AppRoutes.jsx";

import "./App.css";
function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
