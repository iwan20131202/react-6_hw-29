import { useState } from "react";
import { useDispatch } from "react-redux";

import { addContact } from "../../redux/contacts-slice";

import { FormWrapper, FieldLabel, FieldInput, SubmitButton } from "./Сontact-form.styled";

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
    <FormWrapper onSubmit={handleSubmit}>
      <FieldLabel>
        Name
        <FieldInput
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </FieldLabel>

      <FieldLabel>
        Number
        <FieldInput
          type="tel"
          value={number}
          onChange={(event) => setNumber(event.target.value)}
        />
      </FieldLabel>

      <SubmitButton type="submit">Add contact</SubmitButton>
    </FormWrapper>
  );
};
