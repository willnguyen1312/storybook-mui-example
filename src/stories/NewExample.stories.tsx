import React from "react";
import { Chip } from "@mui/material";
import { ChipProps, SelectProps } from "@mui/material";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

type OmitOnActionProps<T> = Omit<T, `on${string}`>;

function isJestMockFn (func: any): func is jest.Mock {
  return func._isMockFunction
}

export const LiveChip1 = (props: ChipProps) => {
  // const { onDelete, ...rest } = props;
  // let finalOnDelete
  // if (!isJestMockFn(onDelete)) {
  //   finalOnDelete =  onDelete
  // }
  
  return <Chip color="primary" {...props} />;
};

// export function LiveChip2(props: OmitOnActionProps<SelectProps>) {
//   const [age, setAge] = React.useState('');

//   const handleChange = (event: SelectChangeEvent) => {
//     setAge(event.target.value as string);
//   };

//   return (
//     <Box sx={{ minWidth: 120 }}>
//       <FormControl fullWidth>
//         <InputLabel id="demo-simple-select-label">Age</InputLabel>
//         <Select
//           labelId="demo-simple-select-label"
//           id="demo-simple-select"
//           value={age}
//           label="Age"
//           // onChange={handleChange}
//           {...props}
//         >
//           <MenuItem value={10}>Ten</MenuItem>
//           <MenuItem value={20}>Twenty</MenuItem>
//           <MenuItem value={30}>Thirty</MenuItem>
//         </Select>
//       </FormControl>
//     </Box>
//   );
// }

export default {
  title: "NewExample",
  component: LiveChip1,
  argTypes: {
    label: {
      defaultValue: "Live",
    },
    size: {
      defaultValue: "medium",
    }
  },
};
