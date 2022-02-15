import { useEffect, useState } from "react";

export default function Org(props) {
  // y position on document at top of viewport
  const [y, setY] = useState(null);
  // window height
  const [height, setHeight] = useState(null);
  // component window position relative to the top of the viewport
  const [compY, setCompY] = useState(null);
  const [compX, setCompX] = useState(null);
  // show / hide
  const [show, setShow] = useState(false);
  // i
  const [i, setI] = useState(null);
  // cleanup
  const [active, setActive] = useState(true);

  useEffect(() => {
    setY(window.pageYOffset);
    setHeight(window.innerHeight);
    return () => setActive(false);
  }, []);

  useEffect(() => {
    setY(props.y);
    setHeight(props.height);
    setI(props.i);
  }, [props]);

  useEffect(() => {
    if (y && i) {
      let id = `#Org-${i}`;
      let item = document.querySelector(id);
      let yFromViewportTop = parseInt(
        item.getBoundingClientRect().y.toFixed(0)
      );
      let xFromViewportLeft = parseInt(
        item.getBoundingClientRect().x.toFixed(0)
      );
      setCompY(yFromViewportTop);
      setCompX(xFromViewportLeft);
    }
  }, [y, i]);

  useEffect(() => {
    if (active) {
      if (compY <= height - 50) {
        function showTrue() {
          setShow(true);
        }
        setTimeout(showTrue, compX * 0.2);
      } else {
        setShow(false);
      }
    }
  }, [height, compY, compX, active]);

  return (
    <h2 className="Org" id={`Org-${props.i}`}>
      <span className={!show ? "hidden" : null}>{props.org}</span>
    </h2>
  );
}
