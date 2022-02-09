import { bio } from "./data";
import hs from "./img/headshot.png";
import ReactMarkdown from "react-markdown";

export default function About() {
  return (
    <div className="About">
      <div>
        <img src={hs} alt="headshot of Shawn Kelley" />
      </div>
      <div>
        <span>
          <h1>About Shawn</h1>
          {bio.map((par, i) => (
            <ReactMarkdown children={par} key={i} />
          ))}
        </span>
      </div>
    </div>
  );
}
