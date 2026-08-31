import { useSelector } from "react-redux";

import { Contact } from "../Contact/Contact";

import { ListTitle, ContactsList } from "./Contact-list.styled";

export const ContactList = () => {
  const contacts = useSelector((state) => state.contacts.contacts);
  const filter = useSelector((state) => state.contacts.filter);

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase()),
  );

  return (
    <>
      <ListTitle>Contacts</ListTitle>

      <ContactsList>
        {filteredContacts.map((contact) => (
          <Contact key={contact.id} contact={contact} />
        ))}
      </ContactsList>
    </>
  );
};
