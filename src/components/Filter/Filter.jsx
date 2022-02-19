import React from 'react';
import PropTypes from 'prop-types';
import s from './Filter.module.css';

const Filter = ({ value, onChange }) => {
  return (
    <label className={s.label}>
      Find contact's by name
      <input
        value={value}
        className={s.input}
        onChange={onChange}
        name="filter"
        type="text"
      />
    </label>
  );
};
Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
};
export default Filter;
