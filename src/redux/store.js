import { configureStore } from "@reduxjs/toolkit";
import contactsReducer, { STORAGE_KEY } from "./contactsSlice";

export const store = configureStore({
  reducer: { contacts: contactsReducer },
});

store.subscribe(() => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(store.getState().contacts.contacts));
  } catch {
    // Ignore storage errors (for example, private browsing restrictions).
  }
});
