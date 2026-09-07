import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addContact } from "../../redux/contacts-slice";
import { FormWrapper, FieldLabel, FieldInput, SubmitButton } from "./Contact-form.styled";

export const ContactForm = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const contacts = useSelector((state) => state.contacts.contacts);
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    const cleanName = name.trim();
    const cleanNumber = number.trim();
    if (!cleanName || !cleanNumber) return;
    if (contacts.some((contact) => contact.name.toLowerCase() === cleanName.toLowerCase())) {
      alert("A contact with this name already exists.");
      return;
    }

    dispatch(addContact({ id: Date.now(), name: cleanName, number: cleanNumber }));
    setName("");
    setNumber("");
  };

  return (
    <FormWrapper onSubmit={handleSubmit}>
      <FieldLabel>
        Name
        <FieldInput required type="text" value={name} onChange={(event) => setName(event.target.value)} placeholder="John Smith" />
      </FieldLabel>
      <FieldLabel>
        Number
        <FieldInput required type="tel" value={number} onChange={(event) => setNumber(event.target.value)} placeholder="+380 00 000 00 00" />
      </FieldLabel>
      <SubmitButton type="submit">＋ Add contact</SubmitButton>
    </FormWrapper>
  );
};
