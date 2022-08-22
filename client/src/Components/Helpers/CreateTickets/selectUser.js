import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';
import { useGlobalContext } from '../../../Context/GlobalContext';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  'Ben',
  'Fede',
  'Cat',
  'Zacky'
];

function getStyles(name, assign, theme) {
  return {
    fontWeight:
      assign.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function MultipleSelectChip({ assign, setAssign }) {
  const theme = useTheme();
  // const [personName, setPersonName] = React.useState([]);

  const { user, users } = useGlobalContext();

//   const names =
//   <div>
//   {users.filter(currentUser => currentUser.includes(user)).map((filteredUsers) => (
//   [
//     // 'Benjamin E.',
//     // 'Federico P.',
//     // 'Catherine C.',
//     // 'Zacky V.'
//     {filteredUsers}
//   ]
//   )
//   )
// }
// </div>

  // const names = users;

  console.log(users);

  const names = 
  [
    (users.filter(currentUser => currentUser.includes(user)).map((filteredNames) => (
      // {filteredNames}
      console.log(filteredNames)
    )))
  ];


  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setAssign(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  return (
    <div>
      <FormControl sx={{ m: 1, width: 300 }} size='small'>
        <InputLabel required id="demo-multiple-chip-label">Assign Users</InputLabel>
        <Select
          labelId="demo-multiple-chip-label"
          id="demo-multiple-chip"
          multiple
          value={assign}
          onChange={handleChange}
          input={<OutlinedInput id="select-multiple-chip" label="Assign Users" />}
          renderValue={(selected) => (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
              {selected.map((value) => (
                <Chip key={value} label={value} />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {names.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, assign, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
