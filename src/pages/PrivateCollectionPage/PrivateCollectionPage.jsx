import { useEffect, useState } from "react";
import { getCollection, deleteCollection } from "../../services/ApiServices";
import s from "./PrivateCollection.module.css";

export default function PrivateCollectionPage() {
  const [privateCollections, setPrivateCollections] = useState(null);
  useEffect(() => {
    getCollection().then(setPrivateCollections);
  }, []);

  const onDeleteCollection = (id) => {
    deleteCollection(id).then(() => {
      getCollection().then(setPrivateCollections);
    });
  };

  return (
    <div className={s.container}>
      {privateCollections ? (
        <ul className={s.wrapper}>
          {privateCollections.map((privateCollection) => (
            <li
              key={privateCollection._id}
              className={s.card}
              onClick={() => onDeleteCollection(privateCollection._id)}
            >
              <img
                src={privateCollection.imgUrl}
                alt={privateCollection.title}
                className={s.img}
              />

              <div className={s.name}>
                <p className={s.cardOverlay}>{privateCollection.title}</p>
                <p className={s.overlay}>Видалити</p>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <div>
          <p className={s.text}>There is private collection.</p>
          <p className={s.text}>Це ваша приватна колекція квітів.</p>
          <p className={s.text}>
            Тут поки що нічого немає, але ви можете створити її власноруч.
          </p>
        </div>
      )}
    </div>
  );
}
