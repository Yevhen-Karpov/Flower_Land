// import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import * as flowersApi from "../services/flovershelf-api";

export default function VioletsDetailsView({ violets }) {
  const { violetId } = useParams();
  const violet = violets.find((violet) => violet.id === Number(violetId));
  // const [violet, setViolet] = useState(null);
  // useEffect(() => {
  //   flowersApi.getVioletById(violetId).then(setViolet);
  // }, [violetId]);
  return (
    <>
      <hr />
      <img src={violet.imgUrl} alt={violet.title} width={200} />
      <h2>{violet.title}</h2>
      <p>{violet.descr}</p>
    </>
  );
}
