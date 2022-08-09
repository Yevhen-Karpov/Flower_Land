import { useParams } from "react-router-dom";

export default function AchimenesDetailsView({ achimenes }) {
  const { achimeneId } = useParams();
  const achimen = achimenes.find(
    (achimen) => achimen.id === Number(achimeneId)
  );

  return (
    <>
      <hr />
      <h2>{achimen.title}</h2>
      <img src={achimen.imgUrl} alt={achimen.title} width={300} />
      <p>{achimen.descr}</p>
    </>
  );
}
