import { ContactForm } from "./components/Сontact-form/Сontact-form";
import { ContactList } from "./components/Сontact-list/Сontact-list";
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
