import "./css/App.css";

import Home from "./components/Home";
import Store from "./components/Store";
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
          <Route path="store" element={<Store />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
