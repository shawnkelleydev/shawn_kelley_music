import Quote from "./Quote";
import { quotes } from "./data";
import { useEffect, useState } from "react";

export default function Jumbotron() {
  const [quote, setQuote] = useState(null);
  const [n, setN] = useState(null);
  const [prevN, setPrevN] = useState(null);
  const [fade, setFade] = useState(false);

  const interval = 5000;
  let fadeInt = interval - 1000;

  useEffect(() => {
    let i = Math.floor(Math.random() * quotes.length);
    setN(i);
    return () => {
      setQuote(null);
      setN(null);
      setPrevN(null);
    };
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
        let i = n === quotes.length - 1 ? 0 : n + 1;
        setN(i);
      }
      setTimeout(newQ, interval);
      function fadeTrue() {
        setFade(true);
      }
      setTimeout(fadeTrue, fadeInt);
    }
  }, [prevN]);

  useEffect(() => {
    if (fade) {
      function fadeFalse() {
        setFade(false);
      }
      setTimeout(fadeFalse, 1000);
    }
  }, [fade]);

  return (
    <div className={!fade ? "Jumbotron" : "Jumbotron Jumbotron-fade"}>
      {quote ? <Quote quote={quote} interval={interval} /> : null}
    </div>
  );
}
