import React from 'react';
import { Alert, AlertTitle } from '@material-ui/lab';

const AlertBox = ({ type, title, message }) => (
  <Alert severity={type}>
    <AlertTitle>
      <strong>{title}</strong>
    </AlertTitle>
    {message}
  </Alert>
);

export default AlertBox;
