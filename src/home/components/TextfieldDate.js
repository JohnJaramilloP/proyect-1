import { Grid, TextField, Typography } from "@mui/material";

const TextfieldDate = ({ data, name, label, onChangeValue, type = "date" }) => {

  const fechaDeAyer = () => {
    let hoy = new Date();
    let DIA_EN_MILISEGUNDOS = 24 * 60 * 60 * 1000;
    let ayer = new Date(hoy.getTime() - DIA_EN_MILISEGUNDOS);
    return ayer;
}

let dateNow = fechaDeAyer().toISOString().slice(0, 10);

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
        id="filled-basic"
        variant="filled"
        value={data}
        name={name}
        onChange={onChangeValue}
        type={type}
        inputProps={{ min: dateNow }}
      />
    </Grid>
  );
};

export default TextfieldDate;
