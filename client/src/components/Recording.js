export default function Recording(props) {
  return (
    <div>
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
