// import { useNavigate } from "react-router-dom";
import Action from "./Action";

export default function Piece(props) {
  // const navigate = useNavigate();

  return (
    <div
      className="Piece"
      // onClick={(e) => {
      //   if (e.target.tagName !== "BUTTON") {
      //     navigate(`/store/${props.piece.title}`);
      //   }
      // }}
    >
      <div>
        <h1>{props.piece.title}</h1>
        <div className="data">
          {props.piece.img ? (
            <img src={props.piece.img} alt={props.piece.title} />
          ) : null}
          <div>
            <ul>
              <li className="uppercase">{props.piece.instrumentation}</li>
              <li>ca {props.piece.duration}m</li>
              <li className="cap">{props.piece.difficulty}</li>
            </ul>
            {props.piece.externalBuyUrl ? (
              <Action
                text="buy"
                click={() => window.open(props.piece.externalBuyUrl, "_blank")}
              />
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
