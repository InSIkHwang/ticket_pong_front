import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Payment from "./component/Payment";
import Ticketing from "./component/Ticketing";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/ticketing" element={<Ticketing />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
