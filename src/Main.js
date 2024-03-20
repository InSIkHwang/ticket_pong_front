import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./component/App";
import ViewAll from "./pages/ViewAll";
import Community from "./pages/Community";
import Homepage from "./component/HomePage";
import Ticketing from "./Pages/Ticketing";
import ShowListPage from "./Pages/ShowListPage";

function Main() {
  return (
    <BrowserRouter>
      <App>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/viewall" element={<ViewAll />} />
          <Route path="/community" element={<Community />} />
          <Route path="/ticketing" element={<Ticketing />} />
          <Route path="/showlist" element={<ShowListPage />} />
        </Routes>
      </App>
    </BrowserRouter>
  );
}

export default Main;
