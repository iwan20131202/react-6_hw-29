import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../../redux/contactsSlice";
import { SearchBoxInput, SearchBoxLabel, SearchBoxWrapper } from "./SearchBox.styled";

export const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.contacts.filter);
  const count = useSelector((state) => state.contacts.contacts.length);

  return (
    <SearchBoxWrapper>
      <SearchBoxLabel>
        <span>⌕</span>
        Пошук контактів
        <small>{count} всього</small>
      </SearchBoxLabel>
      <SearchBoxInput
        type="search"
        placeholder="Введи ім'я..."
        value={filter}
        onChange={(event) => dispatch(setFilter(event.target.value))}
      />
    </SearchBoxWrapper>
  );
};
