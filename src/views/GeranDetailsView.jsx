// import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import * as flowersApi from "../services/flovershelf-api";

export default function GeranDetailsView({ gerans }) {
  const { geranId } = useParams();
  const geran = gerans.find((geran) => geran.id === Number(geranId));
  // const [geran, setGeran] = useState(null);
  // useEffect(() => {
  //   flowersApi.getGeranById(geranId).then(setGeran);
  // }, [geranId]);
  return (
    <>
      <hr />
      <img src={geran.imgUrl} alt={geran.title} width={200} />
      <h2>{geran.title}</h2>
      <p>{geran.descr}</p>
    </>
  );
}
