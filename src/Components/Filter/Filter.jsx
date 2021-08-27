import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from '../../redux/selectors';
import * as actions from '../../redux/actions';
import { InputFilter, LabelFilter } from "./Filter.styled";

export default function Filter() {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();

  const onChange = event => dispatch(actions.changeFilter(event.target.value));

  return (
    <>
      <LabelFilter>
        Find contacts by name
        <InputFilter type="text" value={value} placeholder="Patric..." onChange={onChange} />
     </LabelFilter>
    </>
  );
}
