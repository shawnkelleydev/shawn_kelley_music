import "./css/App.css";

import Home from "./components/Home";
import Store from "./components/Store";
import Cart from "./components/Cart";
import PieceFeature from "./components/PieceFeature";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="store">
            <Route index element={<Store />} />
            <Route path=":piece" element={<PieceFeature />} />
          </Route>
          <Route path="cart" element={<Cart />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
