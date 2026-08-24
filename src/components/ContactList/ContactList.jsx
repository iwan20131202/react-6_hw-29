import { useDispatch, useSelector } from "react-redux";
import { deleteAllContacts } from "../../redux/contactsSlice";
import { Contact } from "../Contact/Contact";
import {
  ContactListHeader,
  ContactListTitle,
  ContactListWrapper,
  DeleteAllButton,
  EmptyState,
  ListCard,
} from "./ContactList.styled";

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts.contacts);
  const filter = useSelector((state) => state.contacts.filter);

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase().trim()),
  );

  const handleDeleteAll = () => {
    if (window.confirm("Видалити всі контакти?")) {
      dispatch(deleteAllContacts());
    }
  };

  return (
    <ListCard>
      <ContactListHeader>
        <div>
          <ContactListTitle>Мої контакти</ContactListTitle>
          <p style={{ margin: "6px 0 0", color: "#999caf", fontSize: 12 }}>
            {filter
              ? `Знайдено: ${filteredContacts.length}`
              : `${contacts.length} ${contacts.length === 1 ? "контакт" : "контактів"}`}
          </p>
        </div>
        {contacts.length > 0 && (
          <DeleteAllButton type="button" onClick={handleDeleteAll}>
            Очистити все
          </DeleteAllButton>
        )}
      </ContactListHeader>

      {filteredContacts.length > 0 ? (
        <ContactListWrapper>
          {filteredContacts.map((contact) => (
            <Contact key={contact.id} contact={contact} />
          ))}
        </ContactListWrapper>
      ) : (
        <EmptyState>
          <div>{contacts.length === 0 ? "♡" : "⌕"}</div>
          <strong>{contacts.length === 0 ? "Контактів поки немає" : "Нічого не знайдено"}</strong>
          <span>
            {contacts.length === 0
              ? "Додай свій перший контакт у формі зліва."
              : "Спробуй змінити пошуковий запит."}
          </span>
        </EmptyState>
      )}
    </ListCard>
  );
};
