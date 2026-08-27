import { useDispatch, useSelector } from "react-redux";

import { setFilter } from "../../redux/contacts-slice";

import { SearchWrapper, SearchLabel, SearchInput } from "./Search-box.styled";

export const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.contacts.filter);

  const handleChange = (event) => {
    dispatch(setFilter(event.target.value));
  };

  return (
    <SearchWrapper>
      <SearchLabel>Find contacts by name</SearchLabel>

      <SearchInput type="text" value={filter} onChange={handleChange} />
    </SearchWrapper>
  );
};
