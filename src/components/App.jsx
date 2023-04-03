import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './Сontacts/Сontacts';

import { Filter } from './Filter/filter';
import { Container, Title } from './App.styled';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { selectContacts, selectError, selectIsLoading } from 'redux/selectors';

export function App() {
  const dispatch = useDispatch();
  const contacts = useDispatch(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <Title>Phonebook</Title>
      <ContactForm />
      <Title>Contacts</Title>
      {contacts.length ? (
        <>
          <Filter />
          <ContactList />
        </>
      ) : (
        <p>sorry</p>
      )}

      {isLoading && !error && <b>Request in progress...</b>}
    </Container>
  );
}
