import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import style from "./ContactList.module.css";
import {
  getContacts,
  removeContact,
} from '../../redux/contacts/contactsOperations.js';
import { getFilteredContacts } from 'redux/contacts/contactsSelectors';


const ContactList = () => {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(getFilteredContacts);
  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);
  return (
    <ul>
      {filteredContacts.map(({ name, number, id }) => (
        <li key={id} className={style.Item}>
          <p>
            {name}: {number}
          </p>
          <button type="button" onClick={() => {
            dispatch(removeContact(id));
          }}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};


export default ContactList;