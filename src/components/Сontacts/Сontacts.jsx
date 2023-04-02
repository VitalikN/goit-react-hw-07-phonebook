import React from 'react';
import { List } from './ContactList.styled';

import { useSelector } from 'react-redux';
import { selectContacts, selectFilterValue } from 'redux/selectors';
import { ContactListItem } from './ContactListItem ';

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filterValue = useSelector(selectFilterValue);

  const filteredItems = filterValue
    ? contacts.filter(({ name }) =>
        name.toLowerCase().includes(filterValue.toLowerCase().trim())
      )
    : contacts;
  console.log(filteredItems);
  return (
    <List>
      {filteredItems.map(contact => (
        <ContactListItem key={contact.id} contact={contact} />
      ))}
    </List>
  );
};
