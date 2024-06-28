import "./Ranking.css";

export default function Ranking(props) {
  const { imageSrc, subtitle, title, amount, rankingIndex } = props;
  return (
    <div className="rankingItem">
      <img className="imgSrc" src={imageSrc} />
      <p className="subtitle">{subtitle}</p>
      <p className="title">{title}</p>
      <p className="amount">₩ {amount} 원</p>
    </div>
  );
}