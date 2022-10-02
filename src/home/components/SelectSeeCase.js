import {
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  Typography,
} from "@mui/material";
import PropTypes from "prop-types";

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
      <FormControl sx={{ m: 1, width: "100%" }}>
        <InputLabel id="demo-simple-select-label">{label}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select-label"
          value={value}
          onChange={onChangeValue}
          input={<OutlinedInput label="Name" />}
          MenuProps={menuProp}
          name={name}
        >
          {data.map((option) => (
            <MenuItem key={option.id} value={option.id}>
              {option.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Grid>
  );
};

export default SelectSeeCase;
