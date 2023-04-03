import React from 'react';
import { List } from './ContactList.styled';
import { useSelector } from 'react-redux';
import { selectVisibleContacts } from 'redux/selectors';
import { ContactListItem } from './ContactListItem ';

export const ContactList = () => {
  const visibleContacts = useSelector(selectVisibleContacts);

  console.log(visibleContacts);
  return (
    <List>
      {visibleContacts.map(contact => (
        <ContactListItem key={contact.id} contact={contact} />
      ))}
    </List>
  );
};
