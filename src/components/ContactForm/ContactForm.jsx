import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addContact } from "../../redux/contactsSlice";
import {
  ContactFormButton,
  ContactFormError,
  ContactFormInput,
  ContactFormLabel,
  ContactFormWrapper,
  FormTitle,
} from "./ContactForm.styled";

export const ContactForm = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [error, setError] = useState("");
  const contacts = useSelector((state) => state.contacts.contacts);
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    const cleanName = name.trim();
    const cleanNumber = number.trim();

    if (!cleanName || !cleanNumber) {
      setError("Заповни ім'я та номер телефону.");
      return;
    }

    const duplicate = contacts.some(
      (contact) =>
        contact.name.trim().toLowerCase() === cleanName.toLowerCase() ||
        contact.number.replace(/\D/g, "") === cleanNumber.replace(/\D/g, ""),
    );

    if (duplicate) {
      setError("Такий контакт або номер вже існує.");
      return;
    }

    dispatch(addContact({ id: Date.now(), name: cleanName, number: cleanNumber }));
    setName("");
    setNumber("");
    setError("");
  };

  return (
    <ContactFormWrapper onSubmit={handleSubmit}>
      <FormTitle>
        <span>＋</span>
        Додати контакт
      </FormTitle>

      <ContactFormLabel>
        Ім'я
        <ContactFormInput
          type="text"
          placeholder="Наприклад, Олександр"
          value={name}
          onChange={(event) => {
            setName(event.target.value);
            setError("");
          }}
        />
      </ContactFormLabel>

      <ContactFormLabel>
        Номер телефону
        <ContactFormInput
          type="tel"
          placeholder="+380 67 123 45 67"
          value={number}
          onChange={(event) => {
            setNumber(event.target.value);
            setError("");
          }}
        />
      </ContactFormLabel>

      {error && <ContactFormError>{error}</ContactFormError>}

      <ContactFormButton type="submit">Додати контакт</ContactFormButton>
    </ContactFormWrapper>
  );
};
