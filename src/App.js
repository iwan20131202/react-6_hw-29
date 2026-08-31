import { useEffect, useState } from "react";

import { ContactForm } from "./components/Contact-form/Contact-form";
import { ContactList } from "./components/Contact-list/Contact-list";
import { SearchBox } from "./components/Search-box/Search-box";

import { Container, TopBar, Title, ThemeButton } from "./App.styled";

const THEME_KEY = "phonebook-theme";

const getInitialTheme = () => {
  const saved = localStorage.getItem(THEME_KEY);
  if (saved === "light" || saved === "dark") return saved;

  const prefersDark =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;

  return prefersDark ? "dark" : "light";
};

function App() {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem(THEME_KEY, theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <Container>
      <TopBar>
        <Title>Phonebook</Title>

        <ThemeButton
          type="button"
          onClick={toggleTheme}
          aria-label={
            theme === "light" ? "Switch to dark theme" : "Switch to light theme"
          }
          title={theme === "light" ? "Switch to dark theme" : "Switch to light theme"}
        >
          {theme === "light" ? "🌙" : "☀️"}
        </ThemeButton>
      </TopBar>

      <ContactForm />

      <SearchBox />

      <ContactList />
    </Container>
  );
}

export default App;
