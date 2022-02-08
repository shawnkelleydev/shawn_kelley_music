import { useState, useRef, useEffect } from "react";

export default function Action(props) {
  const bgspan = useRef(null);

  const [hover, setHover] = useState(false);

  const [height, setHeight] = useState(null);
  const [width, setWidth] = useState(null);

  useEffect(() => {
    let ref = bgspan.current;
    let w = ref.clientWidth;
    let h = ref.clientHeight;
    setWidth(w);
    setHeight(h);
  }, []);

  return (
    <div
      className="Action"
      onMouseOver={() => setHover(true)}
      onMouseOut={() => setHover(false)}
      style={{ width, height }}
    >
      <span ref={bgspan} onClick={props.click}>
        {props.text}
      </span>
      <button
        onClick={props.click}
        className={!hover ? "button hidden" : "button"}
        style={{ width, height }}
      >
        {props.text}
      </button>
    </div>
  );
}
