import { ContactForm } from "./components/ContactForm/ContactForm";
import { ContactList } from "./components/ContactList/ContactList";
import { SearchBox } from "./components/SearchBox/SearchBox";

import { AppContainer, AppTitle } from "./App.styled";

function App() {
  return (
    <AppContainer>
      <AppTitle>Phonebook</AppTitle>

      <ContactForm />

      <SearchBox />

      <ContactList />
    </AppContainer>
  );
}

export default App;
