export function ButtonDisabled({
    text,
    onClick,
}) {
  return (
    <button className="btn-disabled" onClick={onClick}>
      {text}
    </button>
  );
}