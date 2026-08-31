import { useDispatch } from "react-redux";

import { deleteContact } from "../../redux/contacts-slice";

import { ContactCard, DeleteButton } from "./Contact.styled";

export const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
  };

  return (
    <ContactCard>
      <span>
        {contact.name}: {contact.number}
      </span>

      <DeleteButton type="button" onClick={handleDelete}>
        Delete
      </DeleteButton>
    </ContactCard>
  );
};
