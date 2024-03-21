import Footer from "./Footer";
import Header from "./Header";
import style from "./App.Module.css";

function App({ children }) {
  return (
    <>
      <Header className={style.nav} />
      <div className={style.body}>{children}</div>
      <Footer className={style.footer} />
    </>
  );
}

export default App;
