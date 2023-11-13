import {
  SearchbarHeader,
  SearchForm,
  SearchFormBtn,
  SearchBtnLabel,
  SearchFormInput,
} from './Searchbar.styled';
export const Searchbar = ({ onSubmit }) => {
  return (
    <SearchbarHeader>
      <SearchForm onSubmit={onSubmit}>
        <SearchFormBtn type="submit">
          <SearchBtnLabel>Search</SearchBtnLabel>
        </SearchFormBtn>

        <SearchFormInput
          type="text"
          name="search"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </SearchForm>
    </SearchbarHeader>
  );
};
