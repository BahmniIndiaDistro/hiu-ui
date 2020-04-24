import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import RequestTypeStyles from './RequestType.style';

const RequestType = ({ requestTypes, handleChange }) => (
  <RequestTypeStyles>
    <FormControl component="fieldset" className="formControl">
      <FormGroup>
        {requestTypes.map((type) => (
          <FormControlLabel
            control={(
              <Checkbox
                className="check-box"
                checked={RequestType.checked}
                onChange={handleChange(type.value)}
                value={type.value}
                color="primary"
              />
                )}
            label={type.label}
            key={type.value}
          />
        ))}
      </FormGroup>
    </FormControl>
  </RequestTypeStyles>
);

export default RequestType;
