export default function Quote(props) {
  return (
    <div className={"Quote"}>
      <h2>"{props.quote.text}"</h2>
      <h3>{props.quote.speaker}</h3>
    </div>
  );
}
