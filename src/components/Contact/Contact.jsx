import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";
import { ContactAvatar, ContactButton, ContactItem, ContactInfo, ContactName, ContactNumber } from "./Contact.styled";

const getInitials = (name) =>
  name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0].toUpperCase())
    .join("");

export const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  return (
    <ContactItem>
      <ContactAvatar>{getInitials(contact.name) || "?"}</ContactAvatar>
      <ContactInfo>
        <ContactName>{contact.name}</ContactName>
        <ContactNumber>{contact.number}</ContactNumber>
      </ContactInfo>
      <ContactButton
        type="button"
        aria-label={`Видалити ${contact.name}`}
        title="Видалити контакт"
        onClick={() => dispatch(deleteContact(contact.id))}
      >
        ×
      </ContactButton>
    </ContactItem>
  );
};
