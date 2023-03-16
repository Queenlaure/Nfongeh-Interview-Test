import '../../searchForm.css';

interface SearchButtonProps {
  text: string;
}

const SearchButton = ({ text }: SearchButtonProps) => {
  return (
    <div className="buttonContainer">
      <p className="buttonText">{text}</p>
    </div>
  );
};

export default SearchButton;
