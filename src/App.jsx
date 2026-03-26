import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./Container/NavBar/NavBar";
import Footer from "./Container/Footer/Footer";
import Content from "./Container/Content/Content";
import Explore from "./Container/explore";
import Item1 from "./Container/item1";
import Item2 from "./Container/item2";
import Item3 from "./Container/item3";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <NavBar />
                <Content />
                <Footer />
              </>
            }
          />
          <Route
            path="/explore"
            element={
              <>
                <Explore />
              </>
            }
          />
          <Route
            path="/item1"
            element={
              <>
                <Item1 />
              </>
            }
          />
          <Route
            path="/item2"
            element={
              <>
                <Item2 />
              </>
            }
          />
          <Route
            path="/item3"
            element={
              <>
                <Item3 />
              </>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
