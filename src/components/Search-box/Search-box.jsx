import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../../redux/contacts-slice";
import { SearchWrapper, SearchLabel, SearchField, SearchInput, ClearButton } from "./Search-box.styled";

export const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.contacts.filter);

  return (
    <SearchWrapper>
      <SearchLabel htmlFor="search">Find contacts by name</SearchLabel>
      <SearchField>
        <SearchInput
          id="search"
          type="search"
          value={filter}
          placeholder="Search..."
          onChange={(event) => dispatch(setFilter(event.target.value))}
        />
        {filter && (
          <ClearButton type="button" aria-label="Clear search" onClick={() => dispatch(setFilter(""))}>
            ×
          </ClearButton>
        )}
      </SearchField>
    </SearchWrapper>
  );
};
