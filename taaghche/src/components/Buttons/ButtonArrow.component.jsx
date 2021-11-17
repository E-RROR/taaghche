export function ButtonArrow({
    text,
    onClick,
}) {
  return (
    <div className="buttons">
      <button className="btn btn-primary" onClick={props.onClick}>
        {props.text}
      </button>
    </div>
  );
}