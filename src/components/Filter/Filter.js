import s from "./Filter.module.css";
import { useSelector, useDispatch } from "react-redux";
import { getFilter } from "../../redux/contacts/contacts-selectors";
import { changeFilter } from "../../redux/contacts/contacts-actions";

export default function Filter() {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();

  const onChange = (event) => dispatch(changeFilter(event.target.value));

  return (
    <div className={s.div}>
      <label className={s.filter}>
        Find contacts by name
        <input
          className={s.input}
          type="text"
          value={value}
          placeholder="Olena..."
          onChange={onChange}
        />
      </label>
    </div>
  );
}
