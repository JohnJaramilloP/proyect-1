import {
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  Typography,
} from "@mui/material";

const SelectSeeCase = ({
  label,
  name,
  value,
  onChangeValue,
  menuProp,
  data,
}) => {
  return (
    <Grid>
      <Typography variant="p">{label}</Typography>
      <FormControl variant="filled" sx={{ m: 1, width: "100%" }}>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={value}
          onChange={onChangeValue}
          // input={<OutlinedInput label="Name" />}
          MenuProps={menuProp}
          name={name}
        >
          {data.map((option) => (
            <MenuItem key={option.id} value={option.id}>
              {option.name + " " + (option.lastName1 ? option.lastName1 : "") + " " + (option.lastName2 ? option.lastName2 : "")}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Grid>
  );
};

export default SelectSeeCase;
