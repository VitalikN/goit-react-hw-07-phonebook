import shortid from 'shortid';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import React, { useState } from 'react';
import { Form, Btn, Input, Label } from './ContactForm.styled';

import { BsFillPersonPlusFill } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { addContact } from 'redux/operations';
import * as selectors from '../../redux/selectors';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectors.selectContacts);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = evt => {
    evt.preventDefault();
    const newContact = {
      id: shortid(),
      name,
      phone,
    };
    if (
      contacts.find(contact => contact.name === newContact.name) ||
      contacts.find(contact => contact.phone === newContact.phone)
    ) {
      return Notify.failure(
        `${newContact.name} ${newContact.phone} is already in contacts.
        Please choose other name or phone.`,
        {
          position: 'center-center',
          timeout: 3000,
        }
      );
    }

    dispatch(addContact(newContact));
    setName('');
    setPhone('');
  };
  const handleChange = evt => {
    const { name, value } = evt.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'phone':
        setPhone(value);
        break;
      default:
        break;
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <div>
        <Label>
          Name
          <Input
            type="text"
            name="name"
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={handleChange}
          />
        </Label>
        <Label>
          Number
          <Input
            type="tel"
            name="phone"
            value={phone}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={handleChange}
          />
        </Label>
      </div>
      <div>
        <Btn type="submit">
          <BsFillPersonPlusFill />
        </Btn>
      </div>
    </Form>
  );
};
