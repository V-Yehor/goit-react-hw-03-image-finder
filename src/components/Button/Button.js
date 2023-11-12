import { LoadMoreBtn } from './Button.styled';
export const Button = ({ onSerchClick }) => {
  return (
    <>
      <LoadMoreBtn type="submit" onClick={onSerchClick}>
        Load more
      </LoadMoreBtn>
    </>
  );
};
