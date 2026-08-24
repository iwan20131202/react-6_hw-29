import { createSlice } from "@reduxjs/toolkit";

const STORAGE_KEY = "phonebook-contacts";

const loadContacts = () => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : [];
  } catch {
    return [];
  }
};

const initialState = {
  contacts: loadContacts(),
  filter: "",
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    addContact(state, action) {
      state.contacts.push(action.payload);
    },
    deleteContact(state, action) {
      state.contacts = state.contacts.filter(
        (contact) => contact.id !== action.payload,
      );
    },
    deleteAllContacts(state) {
      state.contacts = [];
    },
    setFilter(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { addContact, deleteContact, deleteAllContacts, setFilter } =
  contactsSlice.actions;
export { STORAGE_KEY };
export default contactsSlice.reducer;
