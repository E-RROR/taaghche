import ArrowImg from "../../images/arrowGreen.png";

export function ButtonArrow({
    text,
    onClick,
}) {
  return (
    <a className="btn-arrow" onClick={onClick}>
      {text}
      <span>
        <img src={ArrowImg} alt="arrow" width="25" />
      </span>
    </a>
  );
}