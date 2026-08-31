const CONTACTS_KEY = "phonebook-contacts";

export const loadContacts = () => {
  try {
    const raw = localStorage.getItem(CONTACTS_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch (error) {
    console.warn("Failed to load contacts from localStorage:", error);
    return [];
  }
};

export const saveContacts = (contacts) => {
  try {
    localStorage.setItem(CONTACTS_KEY, JSON.stringify(contacts));
  } catch (error) {
    console.warn("Failed to save contacts to localStorage:", error);
  }
};
