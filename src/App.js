import { lazy, Suspense } from "react";
import {
  AppContainer,
  AppHeader,
  AppSubtitle,
  AppTitle,
  ContentGrid,
  HeroIcon,
} from "./App.styled";

const ContactForm = lazy(() => import("./components/ContactForm/ContactForm"));
const SearchBox = lazy(() => import("./components/SearchBox/SearchBox"));
const ContactList = lazy(() => import("./components/ContactList/ContactList"));

function App() {
  return (
    <main>
      <AppContainer>
        <AppHeader>
          <HeroIcon>☎</HeroIcon>
          <div>
            <AppTitle>Phonebook</AppTitle>
            <AppSubtitle>Твої контакти — завжди під рукою</AppSubtitle>
          </div>
        </AppHeader>

        <Suspense fallback={<div>Завантаження...</div>}>
          <ContentGrid>
            <section>
              <ContactForm />
              <SearchBox />
            </section>
            <ContactList />
          </ContentGrid>
        </Suspense>
      </AppContainer>
    </main>
  );
}

export default App;
