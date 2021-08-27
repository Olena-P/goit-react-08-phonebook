import React, {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as operations from '../../redux/todos/todos-operations';
import { getContacts } from '../../redux/todos/todos-selectors';
import { Form, Input, Label, Button, Name, Number } from './ContactForm.styled';
import { HiUser, HiPhone } from 'react-icons/hi';

export default function ContactForm() {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const onSubmit = (name, number) => dispatch(operations.addContact(name, number));

  const newContact = () => {
    const includeName = contacts.reduce(
      (acc, contact) => [...acc, contact.name],
      [],
    );
    const includeNumber = contacts.reduce(
      (acc, contact) => [...acc, contact.number],
      [],
    );

    if (name === '' || number === '') {
      alert('Please enter all fields!');
      return true;
    }

    if (includeName.includes(name)) {
      alert(`${name} is already in contacts`);
      return true;
    } else if (includeNumber.includes(number)) {
      alert(`${number} is already in contacts`);
      return true;
    }
  };

  const handleChangeName = event => {
    setName(event.currentTarget.value);
  };

  const handleChangeNumber = event => {
    setNumber(event.currentTarget.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    resetName();
    resetNumber();

    if (newContact()) {
      return;
    }

    onSubmit(name, number);
  };

  const resetName = () => {
    setName('');
  };

  const resetNumber = () => {
    setNumber('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label >
        <Name> <HiUser/> Name</Name>
        <Input
          type="text"
          name="name"
          value={name}
          placeholder="Patricia Manterola"
          onChange={handleChangeName}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        />
      </Label>

      <Label >
        <Number> <HiPhone/> Number</Number>
        <Input
          type="tel"
          name="number"
          value={number}
          placeholder="000-00-00"
          onChange={handleChangeNumber}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        />
      </Label>
      <Button  type="submit">
        Add contact
      </Button>
    </Form>
  );
}
