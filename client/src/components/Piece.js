import { useNavigate } from "react-router-dom";
import Action from "./Action";

export default function Piece(props) {
  const navigate = useNavigate();

  return (
    <div
      className="Piece"
      onClick={(e) => {
        if (e.target.tagName !== "BUTTON") {
          navigate(`/store/${props.piece.title}`);
        }
      }}
    >
      <div>
        <h1>{props.piece.title}</h1>
        <ul>
          <li>Completed {props.piece.completionYear}</li>
          <li className="uppercase">{props.piece.instrumentation}</li>
          <li className="cap">{props.piece.publisher.name}</li>
        </ul>
      </div>
      {props.piece.externalBuyUrl ? (
        <Action
          text="buy piece"
          click={() => window.open(props.piece.externalBuyUrl, "_blank")}
        />
      ) : null}
    </div>
  );
}
