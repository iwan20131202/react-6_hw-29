import { configureStore } from "@reduxjs/toolkit";

import contactsReducer from "./contacts-slice";
import { saveContacts } from "./local-storage";

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
});

let previousContacts = store.getState().contacts.contacts;

store.subscribe(() => {
  const currentContacts = store.getState().contacts.contacts;

  if (currentContacts !== previousContacts) {
    previousContacts = currentContacts;
    saveContacts(currentContacts);
  }
});
