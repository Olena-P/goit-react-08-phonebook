import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getVisibleContacts } from '../../redux/selectors';
import { List, Item, Button } from "./ContactList.styled";
import { HiTrash } from 'react-icons/hi';
import { deleteContact } from '../../redux/operations';

export default function ContactList() {
  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();

  const onDeleteContact = id => dispatch(deleteContact(id));

  return (
    <List>
      {contacts.map(({ name, number, id }) => (
        <Item key={id}>
          {name}: {number}
          <Button type="button" onClick={() => onDeleteContact(id)}>
            <HiTrash/>
          </Button>
        </Item>
      ))}
    </List>
  );
}
