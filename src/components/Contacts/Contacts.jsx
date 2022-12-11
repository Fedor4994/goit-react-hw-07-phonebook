import React from 'react';
import s from './Contacts.module.css';
import Contact from 'components/Contact/Contact';

import { deleteContact } from 'redux/contactsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';

const Contacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const onContactDelete = id => {
    dispatch(deleteContact(id));
  };

  return contacts.length ? (
    <ul className={s.contactsList}>
      {contacts.map(contact => (
        <li key={contact.id}>
          <Contact onContactDelete={onContactDelete} contact={contact} />
        </li>
      ))}
    </ul>
  ) : (
    'There are no contacts'
  );
};

export default Contacts;
