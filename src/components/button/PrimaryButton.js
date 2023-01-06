import React from 'react';
import { PropTypes } from 'prop-types';
import { Button } from '@mui/material';

export const PrimaryButton = ({ children, onClick }) => {
  return (
    <Button variant="contained" color="primary" onClick={onClick}>
      {children}
    </Button>
  );
};

PrimaryButton.propTypes = {
  children: PropTypes.any,
  onClick: PropTypes.func,
};
