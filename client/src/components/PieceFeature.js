import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { pieces } from "./data";

export default function PieceFeature() {
  const [piece, setPiece] = useState(null);

  const params = useParams();
  console.log(piece);

  useEffect(() => {
    if (params) {
      let p = params.piece;
      p = pieces.filter((item) => item.title === p)[0];
      setPiece(p);
    }
  }, [params]);

  return !piece ? null : (
    <div className="PieceFeature">
      {piece.img ? <img src={piece.img} alt={piece.title} /> : null}
    </div>
  );
}
