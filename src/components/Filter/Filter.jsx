import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../../redux/contacts/contactsActions';
import { getFilter } from 'redux/contacts/contactsSelectors';
import style from './Filter.module.css';

const Filter = () => {
  const isLoading = useSelector(state => state.contacts.isLoading);
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);
  return (
    <section>
      <h2 className={style.Title}>Find contacts by name</h2>
      <input
        type="text"
        value={filter}
        onChange={e => dispatch(changeFilter(e))}
      />
      {isLoading && <h1>Please wait data is Loading...</h1>}
    </section>
  );
};

export default Filter;
