
import React, { useEffect } from 'react';
import Container from "./Components/Container/Container";
import ContactForm from "./Components/ContactForm/ContactForm";
import ContactList from "./Components/ContactList/ContactList";
import Filter from "./Components/Filter/Filter";
import { useSelector, useDispatch } from 'react-redux';
import { fetchContacts } from './redux/operations';
import { getLoading } from './redux/selectors';

export default function App() {
  const loadingContacts = useSelector(getLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Container>
        <h1>Phonebook</h1>
        <ContactForm />

        {loadingContacts && <p>Loading...</p>}
        <h2>Contacts</h2>
        <Filter />
        <ContactList/>
      </Container>
    </>
  );
}
