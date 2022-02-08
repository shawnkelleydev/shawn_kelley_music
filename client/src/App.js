import "./css/App.css";

import Home from "./components/Home";
import Store from "./components/Store";
import Cart from "./components/Cart";
import PieceFeature from "./components/PieceFeature";
import PieceMenu from "./components/PieceMenu";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  const [cart, setCart] = useState([]);

  return (
    <div className="App">
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="store" element={<Store cart={cart} setCart={setCart} />}>
            <Route index element={<PieceMenu />} />
            <Route
              path="cart"
              element={<Cart cart={cart} setCart={setCart} />}
            />
            <Route path=":piece" element={<PieceFeature />} />
          </Route>
        </Route>
      </Routes>
      <Footer />
      <Header cart={cart} />
    </div>
  );
}

export default App;
