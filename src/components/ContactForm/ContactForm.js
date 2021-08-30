import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import * as operations from "../../redux/contacts/contacts-operations";
import { getContacts } from "../../redux/contacts/contacts-selectors";
import s from "./ContactForm.module.css";
import { MdPerson } from "react-icons/md";
import { MdStayPrimaryPortrait } from "react-icons/md";

export default function ContactForm() {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const onSubmit = (name, number) =>
    dispatch(operations.addContact({ name, number }));

  const newContact = () => {
    const includeName = contacts.reduce(
      (acc, contact) => [...acc, contact.name],
      []
    );
    const includeNumber = contacts.reduce(
      (acc, contact) => [...acc, contact.number],
      []
    );

    if (name === "" || number === "") {
      toast.warn("Please enter all fields!");
      return true;
    }

    if (includeName.includes(name)) {
      toast.info(`${name} is already in contacts`);
      return true;
    } else if (includeNumber.includes(number)) {
      toast.info(`${number} is already in contacts`);
      return true;
    }
  };

  const handleChangeName = (event) => {
    setName(event.currentTarget.value);
  };

  const handleChangeNumber = (event) => {
    setNumber(event.currentTarget.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    resetName();
    resetNumber();

    if (newContact()) {
      return;
    }

    onSubmit(name, number);
  };

  const resetName = () => {
    setName("");
  };
  const resetNumber = () => {
    setNumber("");
  };

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <label className={s.label}>
        <MdPerson></MdPerson>
        Name
        <input
          className={s.input}
          type="text"
          name="name"
          value={name}
          placeholder="Oleksandr Vasylchuk"
          onChange={handleChangeName}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          maxLength="33"
        />
      </label>

      <label className={s.label}>
        <MdStayPrimaryPortrait></MdStayPrimaryPortrait>
        Number
        <input
          type="tel"
          name="number"
          value={number}
          placeholder="000-00-00"
          onChange={handleChangeNumber}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          maxLength="20"
        />
      </label>
      <button className={s.btn} type="submit">
        Add contact
      </button>
    </form>
  );
}
