import { ContactForm } from "./components/Contact-form/Contact-form";
import { ContactList } from "./components/Contact-list/Contact-list";
import { SearchBox } from "./components/Search-box/Search-box";

import { Container, Title } from "./App.styled";

function App() {
  return (
    <Container>
      <Title>Phonebook</Title>

      <ContactForm />

      <SearchBox />

      <ContactList />
    </Container>
  );
}

export default App;
