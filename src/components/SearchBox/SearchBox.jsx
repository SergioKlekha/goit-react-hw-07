import React from 'react';
import s from './SearchBox.module.css';
import { FiSearch } from 'react-icons/fi';
import { useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/filtersSlice';

const SearchBox = () => {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div className={s.boxWraper}>
      <form className={s.form} onSubmit={(e) => e.preventDefault()}>
        <input
          className={s.input}
          type="text"
          name="filter"
          placeholder="Search for..."
          onChange={handleChange}
        />
        <button type="submit" className={s.searchBtn}>
          <FiSearch />
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBox;
