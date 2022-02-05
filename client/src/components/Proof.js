import { institutions } from "./data";

export default function Proof() {
  return (
    <div className="Proof">
      <h1>Performances By</h1>
      <div>
        {institutions.map((org, i) => (
          <h3 key={i}>{org}</h3>
        ))}
      </div>
    </div>
  );
}
