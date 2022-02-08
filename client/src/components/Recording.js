import { useEffect, useState } from "react";

export default function Recording(props) {
  const [height, setHeight] = useState(null);
  const [y, setY] = useState(null);
  const [i, setI] = useState(null);
  const [compY, setCompY] = useState(null);
  const [id, setId] = useState(null);
  const [show, setShow] = useState(false);
  const [active, setActive] = useState(true);

  // cleanup
  useEffect(() => {
    return () => setActive(false);
  }, []);

  // sets data in state
  useEffect(() => {
    setY(props.y);
    setHeight(props.height);
    setI(props.i);
  }, [props]);

  // establishes component id
  useEffect(() => {
    if (i) {
      setId(`Recording-${i}`);
    }
  }, [i]);

  useEffect(() => {
    if (y && i && id) {
      let newId = `#${id}`;
      let item = document.querySelector(newId);
      let yFromViewportTop = parseInt(
        item.getBoundingClientRect().y.toFixed(0)
      );
      setCompY(yFromViewportTop);
    }
  }, [y, i, id]);

  useEffect(() => {
    if (active) {
      if (compY <= height - 100) {
        setShow(true);
      } else {
        setShow(false);
      }
    }
  }, [height, compY, active]);

  return (
    <div className={show ? "Recording" : "Recording hidden"} id={id}>
      {props.rec.img ? (
        <img src={props.rec.img} alt={`${props.rec.title} album cover`} />
      ) : props.rec.vid ? (
        <iframe
          src={props.rec.vid}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : null}
      <div>
        <h2>{props.rec.title}</h2>
        <h3>{props.rec.artist}</h3>
      </div>
    </div>
  );
}
