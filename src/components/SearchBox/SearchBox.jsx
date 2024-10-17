import css from "./SearchBox.module.css";
import PropTypes from "prop-types";

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

SearchBox.propTypes = {
  setFilter: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};

export default SearchBox;
