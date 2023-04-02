import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './Сontacts/Сontacts';

import { Filter } from './Filter/filter';
import { Container, Title } from './App.styled';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { selectError, selectIsLoading } from 'redux/selectors';
export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <Title>Phonebook</Title>
      <ContactForm />
      {isLoading && !error && <b>Request in progress...</b>}

      <Title>Contacts</Title>
      <Filter />
      <ContactList />
    </Container>
  );
};
