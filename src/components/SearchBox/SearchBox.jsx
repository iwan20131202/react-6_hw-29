import { useDispatch, useSelector } from "react-redux";

import { setFilter } from "../../redux/contactsSlice";

import { SearchBoxWrapper, SearchBoxLabel, SearchBoxInput } from "./SearchBox.styled";

export const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.contacts.filter);

  const handleChange = (event) => {
    dispatch(setFilter(event.target.value));
  };

  return (
    <SearchBoxWrapper>
      <SearchBoxLabel>Find contacts by name</SearchBoxLabel>

      <SearchBoxInput type="text" value={filter} onChange={handleChange} />
    </SearchBoxWrapper>
  );
};