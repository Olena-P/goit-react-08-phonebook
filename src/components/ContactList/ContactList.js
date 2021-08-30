import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/contacts-operations";
import { getVisibleContacts } from "../../redux/contacts/contacts-selectors";
import s from "./ContactList.module.css";
import { FiPhone } from "react-icons/fi";
import { MdDelete } from "react-icons/md";

export default function ContactList() {
  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();

  const onDeleteContact = (id) => dispatch(deleteContact(id));

  return (
    contacts.length > 0 && (
      <ul className={s.list}>
        {contacts.map(({ name, number, id }) => (
          <li key={id} className={s.item}>
            <span className={s.span}>
              <FiPhone size="15" />
            </span>
            {name}: {number}
            <button
              className={s.button}
              type="button"
              onClick={() => onDeleteContact(id)}
            >
              <MdDelete size="20"></MdDelete>
            </button>
          </li>
        ))}
      </ul>
    )
  );
}
