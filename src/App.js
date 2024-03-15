import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Payment from "./component/Payment";
import Ticketing from "./component/Ticketing";
import LoadData from "./component/Axios";

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
