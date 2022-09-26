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


// function getStyles(people, assign, theme) {
//   return {
//     fontWeight:
//       personName.indexOf(people) === -1
//         ? theme.typography.fontWeightRegular
//         : theme.typography.fontWeightMedium,
//   };
// }

export default function MultipleSelectChip({ assignList, setAssign }) {

  // console.log(assign.map((assign) => assign[0]))
  // const assignList = assign[0][0].map((item) => item);
  // console.log(assignList);

  const theme = useTheme();

  const { users } = useGlobalContext();

  const USERS = users.users || []

  const [personName, setPersonName] = React.useState(assignList);

  // console.log(personName);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );


    setAssign(value);

  };

  // if(users === null){
  //    window.location.reload();
  // }
// return fetchingUsers ? (null) :
// (
  return (
    <div>
      <FormControl sx={{ m: 1, width: 300 }} size='small'>
        <InputLabel required id="demo-multiple-chip-label">Assign Users</InputLabel>
        <Select
          labelId="demo-multiple-chip-label"
          id="demo-multiple-chip"
          multiple
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput id="select-multiple-chip" label="Assign Users" />}
          renderValue={(selected) => (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
              {selected.map((value) => (
                <Chip key={value} label={USERS.filter(({_id}) => _id === value).map((person) => person.firstName + ' ' + person.lastName.substring(0, 1) + '.')} />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {USERS.map((people) => (
            <MenuItem
              value={people._id}
            >
              {people.firstName + ' ' + people.lastName.substring(0, 1) + '.'}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
// )
}



















// import * as React from 'react';
// import { useTheme } from '@mui/material/styles';
// import Box from '@mui/material/Box';
// import OutlinedInput from '@mui/material/OutlinedInput';
// import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
// import Select from '@mui/material/Select';
// import Chip from '@mui/material/Chip';

// const ITEM_HEIGHT = 48;
// const ITEM_PADDING_TOP = 8;
// const MenuProps = {
//   PaperProps: {
//     style: {
//       maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
//       width: 250,
//     },
//   },
// };

// const names = [
//   'Benjamin',
//   'Zacky',
//   'Fede',
//   'Steve',
// ];

// function getStyles(name, personName, theme) {
//   return {
//     fontWeight:
//       personName.indexOf(name) === -1
//         ? theme.typography.fontWeightRegular
//         : theme.typography.fontWeightMedium,
//   };
// }

// export default function MultipleSelectChip({assign, setAssign}) {
//   const theme = useTheme();
//   const [personName, setPersonName] = React.useState([]);

//   console.log(assign);

//   const handleChange = (event) => {
//     const {
//       target: { value },
//     } = event;
//     setPersonName(
//       // On autofill we get a stringified value.
//       typeof value === 'string' ? value.split(',') : value,
//     );
//   };

//   return (
//     <div>
//       <FormControl sx={{ m: 1, width: 300 }} size='small'>
//         <InputLabel required id="demo-multiple-chip-label">Assign Users</InputLabel>
//         <Select
//           labelId="demo-multiple-chip-label"
//           id="demo-multiple-chip"
//           multiple
//           value={personName}
//         defaultValue={'Benjamin'}
//           onChange={handleChange}
//           input={<OutlinedInput id="select-multiple-chip" label="Assign Users*" />}
//           renderValue={(selected) => (
//             <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
//               {selected.map((value) => (
//                 <Chip key={value} label={value} />
//               ))}
//             </Box>
//           )}
//           MenuProps={MenuProps}
//         >
//           {names.map((name) => (
//             <MenuItem
//               key={name}
//               value={name}
//               style={getStyles(name, personName, theme)}
//             >
//               {name}
//             </MenuItem>
//           ))}
//         </Select>
//       </FormControl>
//     </div>
//   );
// }