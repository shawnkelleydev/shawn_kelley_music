import { recordings } from "./data";
import Recording from "./Recording";

export default function Recordings(props) {
  return (
    <div className="Recordings">
      <h1>Recordings</h1>
      <div>
        {recordings.map((rec, i) => (
          <Recording
            key={i}
            i={i + 1}
            rec={rec}
            y={props.y}
            height={props.height}
          />
        ))}
      </div>
    </div>
  );
}
