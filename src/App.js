import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import Ticketing from "./Pages/Ticketing";
import Home from "./Pages/Home";
import ShowListPage from "./Pages/ShowListPage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/showlist" element={<ShowListPage />}></Route>
          <Route path="/ticketing" element={<Ticketing />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
