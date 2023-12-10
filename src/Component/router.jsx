import { Routes, Route } from "react-router-dom";
import Main from "../Pages/Mainpage/Mainpage";
import NotFound from "../Pages/Notfound";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
};

export default Routers;
