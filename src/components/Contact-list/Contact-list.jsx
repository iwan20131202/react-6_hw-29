import { useSelector } from "react-redux";
import { Contact } from "../Contact/Contact";
import { ListHeader, ListTitle, ContactCount, EmptyState, ContactsList } from "./Contact-list.styled";

export const ContactList = () => {
  const contacts = useSelector((state) => state.contacts.contacts);
  const filter = useSelector((state) => state.contacts.filter);

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase()),
  );

  return (
    <>
      <ListHeader>
        <ListTitle>Contacts</ListTitle>
        <ContactCount>{contacts.length}</ContactCount>
      </ListHeader>

      {filteredContacts.length > 0 ? (
        <ContactsList>
          {filteredContacts.map((contact) => (
            <Contact key={contact.id} contact={contact} />
          ))}
        </ContactsList>
      ) : (
        <EmptyState>
          {contacts.length === 0 ? "Your phonebook is empty. Add your first contact!" : "No contacts found for this search."}
        </EmptyState>
      )}
    </>
  );
};
