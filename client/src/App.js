import "./css/App.css";

import Header from "./components/Header";
import Jumbotron from "./components/Jumbotron";
import Proof from "./components/Proof";
import Footer from "./components/Footer";
import Recordings from "./components/Recordings";

function App() {
  return (
    <div className="App">
      <Header />
      <Jumbotron />
      <Proof />
      <Recordings />
      <Footer />
    </div>
  );
}

export default App;
