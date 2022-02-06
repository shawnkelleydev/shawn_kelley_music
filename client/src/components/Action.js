export default function Action(props) {
  return (
    <button className="Action" onClick={props.click}>
      {props.text}
    </button>
  );
}
