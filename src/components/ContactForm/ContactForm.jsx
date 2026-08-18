import { useState } from "react";
import { useDispatch } from "react-redux";

import { addContact } from "../../redux/contactsSlice";

import { ContactFormWrapper, ContactFormLabel, ContactFormInput, ContactFormButton } from "./ContactForm.styled";

export const ContactForm = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch(
      addContact({
        id: Date.now(),
        name,
        number,
      }),
    );

    setName("");
    setNumber("");
  };

  return (
    <ContactFormWrapper onSubmit={handleSubmit}>
      <ContactFormLabel>
        Name
        <ContactFormInput
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </ContactFormLabel>

      <ContactFormLabel>
        Number
        <ContactFormInput
          type="tel"
          value={number}
          onChange={(event) => setNumber(event.target.value)}
        />
      </ContactFormLabel>

      <ContactFormButton type="submit">Add contact</ContactFormButton>
    </ContactFormWrapper>
  );
};