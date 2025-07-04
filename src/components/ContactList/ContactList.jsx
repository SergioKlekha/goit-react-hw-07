import React, { useEffect } from 'react';
import s from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectFilteredContacts,
  selectLoading,
} from '../../redux/contactsSlice';
import Contact from '../Contact/Contact';
import { fetchContactsThunk } from '../../redux/contactsOps';

const ContactList = () => {
  const loading = useSelector(selectLoading);
  const contacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContactsThunk());
  }, [dispatch]);

  return (
    <ul className={s.contactsList}>
      {contacts.length ? (
        contacts.map((item) => (
          <li key={item.id}>
            <Contact item={item} />
          </li>
        ))
      ) : (
        <h2>No contacts added</h2>
      )}
      {loading && <h2>Loading...</h2>}
    </ul>
  );
};

export default ContactList;