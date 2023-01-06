import React from 'react';
import { PropTypes } from 'prop-types';
import { TextField } from '@mui/material';

export const TextInput = ({ name, value, onChange }) => {
  return <TextField variant="outlined" name={name} value={value} onChange={onChange} />;
};

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func,
};
