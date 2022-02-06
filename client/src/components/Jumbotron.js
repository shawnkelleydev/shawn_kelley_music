import headshot from "./img/headshot.png";
import Quote from "./Quote";
import { quotes } from "./data";
import { useEffect, useState } from "react";

export default function Jumbotron() {
  const [quote, setQuote] = useState(null);
  const [n, setN] = useState(null);
  const [prevN, setPrevN] = useState(null);

  useEffect(() => {
    let i = Math.floor(Math.random() * quotes.length);
    setN(i);
  }, []);

  useEffect(() => {
    if (n || n === 0) {
      setQuote(quotes[n]);
      setPrevN(n);
    }
  }, [n]);

  useEffect(() => {
    if (prevN || prevN === 0) {
      function newQ() {
        let ding = false;
        let i;
        while (!ding) {
          i = Math.floor(Math.random() * quotes.length);
          ding = i !== prevN ? true : false;
        }
        setN(i);
      }
      setTimeout(newQ, 5000);
    }
  }, [prevN]);

  return (
    <div className="Jumbotron">{quote ? <Quote quote={quote} /> : null}</div>
  );
}
