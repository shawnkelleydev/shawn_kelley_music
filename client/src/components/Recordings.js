import { recordings } from "./data";

export default function Recordings() {
  return (
    <div className="Recordings">
      <h1>Recordings</h1>
      <div>
        {recordings.map((rec, i) => (
          <div key={i}>
            <img src={rec.img} />
            <h2>{rec.title}</h2>
            <h3>{rec.artist}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
