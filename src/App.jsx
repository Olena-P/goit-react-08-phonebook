
import React, { useEffect } from 'react';
import Container from "./Components/Container/Container";
import { Switch, Route } from 'react-router-dom';
import ContactForm from "./Components/ContactForm/ContactForm";
import ContactList from "./Components/ContactList/ContactList";
import Filter from "./Components/Filter/Filter";
import { useSelector, useDispatch } from 'react-redux';
import { fetchContacts } from './redux/todos/todos-operations';
import { getLoading } from './redux/todos/todos-selectors';
import HomeView from './views/HomeView';
import RegisterView from './views/RegisterView';
import LoginView from './views/LoginView';
import ContactsView from './views/ContactsView';

export default function App() {
  const loadingContacts = useSelector(getLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Container>
        {/* <AppBar /> */}
        
        <Switch>
          <Route exact path="/" component={HomeView} />
          <Route path="/register" component={RegisterView} />
          <Route path="/login" component={LoginView} />
          <Route path="/contacts" component={ContactsView} />
        </Switch>

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
