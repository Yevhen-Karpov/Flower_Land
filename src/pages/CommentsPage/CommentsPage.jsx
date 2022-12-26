import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import moment from "moment";
import { getComments, addComment } from "../../services/ApiServices";
import { BsPerson } from "react-icons/bs";
import authSelectors from "../../redux/auth/auth-selectors";
import PaginationNew from "../../components/Pagination/PaginationNew";
import s from "./CommentsPage.module.css";

export default function CommentsPage() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [commentsPerPage] = useState(10);

  const values = {
    name: "",
    text: "",
  };
  const [valuesState, setValuesState] = useState(values);
  const handleChange = (e) => {
    setValuesState({ ...valuesState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addComment(
      valuesState,

      () => fetchComments()
    );

    reset();
  };

  const fetchComments = () => {
    getComments().then(setComments);
  };

  useEffect(() => {
    setLoading(true);
    fetchComments();
    setLoading(false);
  }, []);

  // const handleSubmit = () => {
  //   addComment(valuesState).then((newComment) => {
  //     console.log(newComment);
  //     setComments((prev) => [newComment, ...prev]);

  //     setValuesState(values);
  //   });
  // };

  const reset = () => {
    setValuesState({ name: "", text: "" });
  };

  const lastIndex = currentPage * commentsPerPage;
  const firstIndex = lastIndex - commentsPerPage;
  const reversedComments = [...comments].reverse();
  const currentComments = reversedComments.slice(firstIndex, lastIndex);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const nextPage = () => setCurrentPage((prev) => prev + 1);
  const prevPage = () => setCurrentPage((prev) => prev - 1);

  return (
    <div className={s.container}>
      <h1 className={s.title}>
        Якщо Ви бажаєте залишити тут свій коментар, будь ласка, зареєструйтесь.
      </h1>

      <ul className={s.wrapper}>
        {currentComments.map((comment) => (
          <li key={comment._id} className={s.list}>
            <p className={s.text}>
              <span className={s.span}>Ім'я: </span>
              {comment.name}
            </p>
            <p className={s.text}>
              <span className={s.span}>Коментар: </span>
              {comment.text}
            </p>
            <p className={s.text}>
              <span className={s.span}>Дата створення: </span>
              {moment(comment.createdAt).format("DD-MM-YYYY, HH:mm")}
            </p>
          </li>
        ))}
      </ul>

      <PaginationNew
        itemsPerPage={commentsPerPage}
        totalItems={comments.length}
        paginate={paginate}
        nextPage={nextPage}
        prevPage={prevPage}
      />
      {isLoggedIn && (
        <form className={s.form} onSubmit={handleSubmit}>
          <label htmlFor="name">Им'я</label>
          <div className="form-name-icon">
            <input
              type="text"
              id="name"
              name="name"
              value={valuesState.name}
              onChange={handleChange}
              className="modal-form-input"
              required
            />
            <BsPerson className="icon-form" />
          </div>

          <label htmlFor="comments">Коментар</label>
          <textarea
            name="text"
            id="comments"
            value={valuesState.text}
            onChange={handleChange}
            className="modal-form-comments"
            placeholder="Введіть текст"
          ></textarea>
          <button type="submit" className={s.btn}></button>
        </form>
      )}
    </div>
  );
}
