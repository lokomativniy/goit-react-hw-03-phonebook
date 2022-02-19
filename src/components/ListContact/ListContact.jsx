import React from 'react';
import PropTypes from 'prop-types';
import s from './ListContact.module.css';

export default function ListContact({ contacts, deleteContact }) {
  return (
    <ul className={s.list}>
      {contacts.map(contact => {
        return (
          <li key={contact.id} className={s.item}>
            {contact.name}: {contact.number}
            <button className={s.btn} onClick={() => deleteContact(contact.id)}>
              {' '}
              Delete{' '}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
ListContact.propTypes = {
  contacts: PropTypes.array.isRequired,
  deleteContact: PropTypes.func.isRequired,
};
