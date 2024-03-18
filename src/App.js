import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import Ticketing from "./Pages/Ticketing";
import LoadData from "./Components/Axios";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoadData />}></Route>
          <Route path="/ticketing" element={<Ticketing />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
