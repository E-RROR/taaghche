export function ButtonOutlined({
    text,
    onClick,
}) {
  return (
    <div className="buttons">
      <button className="btn btn-primary" onClick={onClick}>
        {text}
      </button>
    </div>
  );
}