import { bio } from "./data";
import hs from "./img/headshot.png";
import ReactMarkdown from "react-markdown";

export default function About() {
  return (
    <div className="About">
      <div className="grid">
        <div>
          <img src={hs} alt="shawn kelley headshot" />
        </div>
        <div>
          <h1>About Shawn</h1>
          {bio.map((item, i) => (
            <ReactMarkdown key={i} children={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
