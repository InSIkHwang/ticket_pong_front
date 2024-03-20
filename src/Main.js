import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./component/App";
import ViewAll from "./pages/ViewAll";
import Community from "./pages/Community";
// import Login from "./components/LoginPage";
// import MyPage from "./components/MyPage";
import Homepage from "./component/HomePage";

// App 에서 Header랑 Footer을 정의했기 때문에 따로 불러올 필요가 없음.
// header와 footer 사이에만 들어가야 하기 때문에

function Main() {
  return (
    <BrowserRouter>
      <App>
        <Routes>
          {/* 다중의 라우트를 감싸기 위해서  */}
          <Route path="/" element={<Homepage />} />
          <Route path="/viewall" element={<ViewAll />} />
          <Route path="/community" element={<Community />} />
          {/* <Route path="/write" element={<BoardWrite />} /> */}
          {/* <Route path="/update/:idx" element={<BoardUpdate />} /> */}
          {/* <Route path="/mypage" element={<MyPage />} /> */}
        </Routes>
      </App>
    </BrowserRouter>
  );
}

export default Main;
