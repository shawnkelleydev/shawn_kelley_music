import Jumbotron from "./Jumbotron";
import Proof from "./Proof";

import Recordings from "./Recordings";
import Action from "./Action";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <>
      <Jumbotron />
      <Action text="browse music" click={() => navigate("/store")} />
      <Proof />
      <Recordings />
    </>
  );
}
