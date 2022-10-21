import { Grid, TextField, Typography } from "@mui/material";

const Textfield = ({ data, name, label, onChangeValue, onlyread, buttonEdit = false }) => {
  return (
    <Grid
      container
      className="container"
      md={5}
      xs={11}
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Typography
        variant="p"
        className="title"
        style={{
          marginBottom: 5,
        }}
      >
        {label}
      </Typography>
      <TextField
        id="outlined-basic"
        label={label}
        variant="outlined"
        value={data}
        name={name}
        onChange={onChangeValue}
        inputProps={
					{ readOnly: onlyread, }
				}
      />
      {buttonEdit && <Typography
        variant="p"
        className="title"
        style={{
          marginBottom: 5,
        }}
      >
        {label}
      </Typography>}
    </Grid>
  );
};

export default Textfield;
