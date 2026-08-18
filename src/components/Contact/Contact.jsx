import { useDispatch } from "react-redux";

import { deleteContact } from "../../redux/contactsSlice";

import { ContactItem, ContactButton } from "./Contact.styled";

export const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
  };

  return (
    <ContactItem>
      <span>
        {contact.name}: {contact.number}
      </span>

      <ContactButton type="button" onClick={handleDelete}>
        Delete
      </ContactButton>
    </ContactItem>
  );
};