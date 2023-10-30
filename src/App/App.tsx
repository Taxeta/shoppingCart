import ShopPage from "../pages/ShopPage";
import { Route, Routes, Navigate } from "react-router-dom";
import paths from "../paths/paths";

const App = (): React.ReactElement => {
  return (
    <Routes>
      <Route path={paths.phones} element={<ShopPage />} />
      <Route path={"/"} element={<Navigate to={paths.phones} />} />
    </Routes>
  );
};

export default App;
