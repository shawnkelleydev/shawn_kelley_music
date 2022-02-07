import { pieces } from "./data";
import Piece from "./Piece";

export default function Store() {
  return (
    <div className="Store">
      <h1>Store</h1>
      <div>
        {pieces.map((piece, i) => (
          <Piece key={i} piece={piece} />
        ))}
      </div>
    </div>
  );
}
