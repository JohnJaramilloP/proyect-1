import { Grid, TextField, Typography } from "@mui/material";

const TextfieldDate = ({ data, name, label, onChangeValue, type = "date" }) => {
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
        variant="outlined"
        value={data}
        name={name}
        onChange={onChangeValue}
        type={type}
      />
    </Grid>
  );
};

export default TextfieldDate;
