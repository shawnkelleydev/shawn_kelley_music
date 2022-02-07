import { recordings } from "./data";
import Recording from "./Recording";

export default function Recordings() {
  return (
    <div className="Recordings">
      <h1>Recordings</h1>
      <div>
        {recordings.map((rec, i) => (
          <Recording key={i} rec={rec} />
        ))}
      </div>
    </div>
  );
}
