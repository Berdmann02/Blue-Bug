import * as React from 'react';
import { FormLabel, FormControl, FormControlLabel, Radio, RadioGroup, Box } from '@mui/material'

function ColorRadioButtons() {

  return (
    <FormControl sx={{ mt: 3}}>
      <FormLabel required id="demo-row-radio-buttons-group-label">Severity:</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        color='primary'
      >
        
        <FormControlLabel value="Low" control={<Radio sx={{ '&.Mui-checked': { color: '#388e3c' } }} />} label="Low" />
        <FormControlLabel value="Medium" control={<Radio sx={{ '&.Mui-checked': { color: '#eed202' } }} />} label="Medium" />
        <FormControlLabel value="High" control={<Radio sx={{ '&.Mui-checked': { color: '#FF6C4D' } }} />} label="High" />
        <FormControlLabel value="Critical" control={<Radio sx={{ '&.Mui-checked': { color: '#f44336' } }} />} label="Critical" />
      </RadioGroup>
    </FormControl>
  );
}

export default ColorRadioButtons;
