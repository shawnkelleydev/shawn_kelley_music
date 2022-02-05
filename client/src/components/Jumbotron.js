import headshot from "./img/headshot.png";
import Quote from "./Quote";
import { quotes } from "./data";
import { useEffect, useState } from "react";

export default function Jumbotron() {
  const [quote, setQuote] = useState(null);

  useEffect(() => {
    let n = Math.floor(Math.random() * quotes.length);
    let q = quotes[n];
    setQuote(q);
  }, []);

  return (
    <div className="Jumbotron">
      <img src={headshot} alt="shawn kelley head and top of shoulders" />
      <div>
        {quote ? <Quote quote={quote} /> : null}
        <button>Browse Music</button>
      </div>
    </div>
  );
}
