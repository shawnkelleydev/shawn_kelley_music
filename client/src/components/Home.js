import { useState, useEffect } from "react";

import Jumbotron from "./Jumbotron";
import Proof from "./Proof";

import Recordings from "./Recordings";
import Action from "./Action";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  // window monitoring for animation effects
  const [y, setY] = useState(0);
  const [height, setHeight] = useState(null);

  useEffect(() => {
    const handleY = () => setY(window.pageYOffset);
    const handleHeight = () => setHeight(window.innerHeight);

    setHeight(window.innerHeight);

    window.addEventListener("scroll", handleY, { passive: true });
    window.addEventListener("resize", handleHeight, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleY);
      window.removeEventListener("resize", handleHeight);
      setY(null);
      setHeight(null);
    };
  }, []);

  return (
    <div className="Home">
      <Jumbotron />
      <Action text="browse music" click={() => navigate("/store")} />
      <Proof y={y} height={height} />
      <Recordings y={y} height={height} />
    </div>
  );
}
