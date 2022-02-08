import { pieces } from "./data";
import Piece from "./Piece";

export default function PieceMenu() {
  const tbr = [
    "the new school",
    "street songs",
    "i see",
    "china suite no. 1",
    "loud noises",
    "spring",
  ];

  return (
    <div className="PieceMenu">
      {pieces.map((piece, i) => (
        <Piece key={i} piece={piece} />
      ))}
      <div className="Piece" style={{ cursor: "default" }}>
        <h1>@Cimarron</h1>
        <h2>coming soon...</h2>
        <ul className="cap">
          {tbr.map((item, i) => (
            <li key={i}>
              <em>{item}</em>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
