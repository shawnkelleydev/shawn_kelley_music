import { institutions } from "./data";
import Org from "./Org";

export default function Proof(props) {
  return (
    <div className="Proof">
      <h1>As heard at...</h1>
      <div>
        {institutions.map((org, i) => (
          <Org key={i} i={i + 1} height={props.height} org={org} y={props.y} />
        ))}
      </div>
    </div>
  );
}
