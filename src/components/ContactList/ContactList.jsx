import { useSelector } from "react-redux";

import { Contact } from "../Contact/Contact";

import { ContactListTitle, ContactListWrapper } from "./ContactList.styled";

export const ContactList = () => {
  const contacts = useSelector((state) => state.contacts.contacts);
  const filter = useSelector((state) => state.contacts.filter);

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase()),
  );

  return (
    <>
      <ContactListTitle>Contacts</ContactListTitle>

      <ContactListWrapper>
        {filteredContacts.map((contact) => (
          <Contact key={contact.id} contact={contact} />
        ))}
      </ContactListWrapper>
    </>
  );
};