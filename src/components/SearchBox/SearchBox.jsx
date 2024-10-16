import css from "./SearchBox.module.css";

const SearchBox = ({ setFilter, filter }) => {
  const handleChange = (evt) => {
    setFilter(evt.target.value);
  };

  return (
    <div className={css.serchBoxContainer}>
      <p>Find contacts by name</p>
      <input type="text" value={filter} onChange={handleChange} />
    </div>
  );
};

export default SearchBox;
