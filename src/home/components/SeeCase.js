import React from "react";
import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Grid, Typography } from "@mui/material";
import { CgClose } from "react-icons/cg";
import { Button } from "reactstrap";

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
  "Oliver Hansen",
  "Van Henry",
  "April Tucker",
  "Ralph Hubbard",
  "Omar Alexander",
  "Carlos Abbott",
  "Miriam Wagner",
  "Bradley Wilkerson",
  "Virginia Andrews",
  "Kelly Snyder",
];

const nombres = [
  "Ricardo Vélez",
  "Carolina García",
  "Luis Pérez",
  "Carlos Mejía",
  "Eliana Marín",
  "Katherine Zapata",
  "John Hoyos",
  "Wilson Londoño",
  "Virginia Ramírez",
  "Pedro Cruz",
];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export const SeeCase = ({ setViews }) => {
  const handleView = () => {
    setViews(1);
  };

  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  return (
    <Grid
      container
      style={{
        width: "100%",
        padding: 10,
        position: "relative",
        // display: "flex",
        // flexDirection: "column",
        // justifyContent: "space-around"
      }}
    >
      <CgClose
        onClick={handleView}
        style={{
          fontSize: 25,
          position: "absolute",
          right: 15,
          top: 15,
          cursor: "pointer",
        }}
      />

      {/* titulo */}

      <Grid
        container
        className="container"
        style={{
          width: "100%",
          margin: "20px 0",
        }}
      >
        <Typography
          variant="h4"
          style={{
            margin: "0 auto",
          }}
        >
          Caso:
        </Typography>
      </Grid>

      {/* select asesor estudiante */}

      <Grid
        container
        sx={{
          padding: "20px 50px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Grid>
          <Typography variant="h4">Asignar estudiante</Typography>

          <FormControl sx={{ m: 1, width: 300 }}>
            <InputLabel id="demo-multiple-name-label">Nombre</InputLabel>
            <Select
              labelId="demo-multiple-name-label"
              id="demo-multiple-name"
              multiple
              value={personName}
              onChange={handleChange}
              input={<OutlinedInput label="Name" />}
              MenuProps={MenuProps}
            >
              {names.map((name) => (
                <MenuItem
                  key={name}
                  value={name}
                  style={getStyles(name, personName, theme)}
                >
                  {name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>

        <Grid>
          <Typography variant="h4">Asignar asesor</Typography>
          <FormControl sx={{ m: 1, width: 300 }}>
            <InputLabel id="demo-multiple-name-label">Nombre</InputLabel>
            <Select
              labelId="demo-multiple-name-label"
              id="demo-multiple-name"
              multiple
              value={personName}
              onChange={handleChange}
              input={<OutlinedInput label="Name" />}
              MenuProps={MenuProps}
            >
              {nombres.map((name) => (
                <MenuItem
                  key={name}
                  value={name}
                  style={getStyles(name, personName, theme)}
                >
                  {name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
      </Grid>

      {/* informacion caso */}

      <Grid
        container
        style={{
          display: "flex",
          padding: "15px 0",
          border: "2px solid #000",
        }}
      >
        <Grid
          container
          className="container"
          style={{
            width: "45%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography variant="h6" className="title">
            NÚMERO:
          </Typography>
          <Typography variant="p" className="text">
            1
          </Typography>
        </Grid>

        <Grid
          container
          className="container"
          style={{
            width: "45%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography variant="h6" className="title">
            AÑO:
          </Typography>
          <Typography variant="p" className="text">
            2022
          </Typography>
        </Grid>
      </Grid>

      <Grid
        container
        style={{
          display: "flex",
          padding: "15px 0",
          border: "2px solid #000",
        }}
      >
        <Grid
          container
          className="container"
          style={{
            width: "45%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography variant="h6" className="title">
            RADICADO INTERNO
          </Typography>
          <Typography variant="p" className="text">
            N/A
          </Typography>
        </Grid>

        <Grid
          container
          className="container"
          style={{
            width: "45%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography variant="h6" className="title">
            FECHA DE ATENCIÓN Y ASESORIA
          </Typography>
          <Typography variant="p" className="text">
            DD/MM/AAAA
          </Typography>
        </Grid>
      </Grid>

      <Grid
        container
        style={{
          display: "flex",
          padding: "15px 0",
          border: "2px solid #000",
        }}
      >
        <Grid
          container
          className="container"
          style={{
            width: "45%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography variant="h6" className="title">
            FECHA DE RECEPCION DE CASO
          </Typography>
          <Typography variant="p" className="text">
            DD/MM/AAAA
          </Typography>
        </Grid>

        <Grid
          container
          className="container"
          style={{
            width: "45%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography variant="h6" className="title">
            PARTE ACCIONANTE
          </Typography>
          <Typography variant="p" className="text">
            MAURICIO DE JESUS VILLAREAL MAZO
          </Typography>
        </Grid>
      </Grid>

      <Grid
        container
        style={{
          display: "flex",
          padding: "15px 0",
          border: "2px solid #000",
        }}
      >
        <Grid
          container
          className="container"
          style={{
            width: "45%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography variant="h6" className="title">
            PARTE ACCIONADA
          </Typography>
          <Typography
            variant="p"
            className="text"
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            DESCONOCIDA
          </Typography>
        </Grid>

        <Grid
          container
          className="container"
          style={{
            width: "45%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography variant="h6" className="title">
            Áre (CIVIL, FAMILIA, COMERCIAL, LABORAL, PENAL)
          </Typography>
          <Typography
            variant="p"
            className="text"
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            CIVIL Y COMERCIAL
          </Typography>
        </Grid>
      </Grid>

      <Grid
        container
        style={{
          display: "flex",
          padding: "15px 0",
          border: "2px solid #000",
        }}
      >
        <Grid
          container
          className="container"
          style={{
            width: "45%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography variant="h6" className="title">
            MATERIA
          </Typography>
          <Typography
            variant="p"
            className="text"
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            HURTO
          </Typography>
        </Grid>

        <Grid
          container
          className="container"
          style={{
            width: "45%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography variant="h6" className="title">
            ORIGEN (C.J. o EXT)
          </Typography>
          <Typography
            variant="p"
            className="text"
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            USUARIO INTERNO
          </Typography>
        </Grid>
      </Grid>

      <Grid
        container
        style={{
          display: "flex",
          padding: "15px 0",
          border: "2px solid #000",
        }}
      >
        <Grid
          container
          className="container"
          style={{
            width: "45%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography variant="h6" className="title">
            SE RECEPCIONO EL CASO
          </Typography>
          <Typography
            variant="p"
            className="text"
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            SI
          </Typography>
        </Grid>

        <Grid
          container
          className="container"
          style={{
            width: "45%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography variant="h6" className="title">
            NOMBRE DEL ESTUDIANTE QUE RECEPCIONO EL CASO
          </Typography>
          <Typography
            variant="p"
            className="text"
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            SAMANTA MARIA ARANGO JARAMILLO
          </Typography>
        </Grid>
      </Grid>

      <Grid
        container
        style={{
          display: "flex",
          padding: "15px 0",
          border: "2px solid #000",
        }}
      >
        <Grid
          container
          className="container"
          style={{
            width: "45%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography variant="h6" className="title">
            LUGAR DE ATENCIÓN
          </Typography>
          <Typography
            variant="p"
            className="text"
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          ></Typography>
        </Grid>

        <Grid
          container
          className="container"
          style={{
            width: "45%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography variant="h6" className="title">
            CALIDAD(E/A)
          </Typography>
          <Typography
            variant="p"
            className="text"
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            ESTUDIANTE
          </Typography>
        </Grid>
      </Grid>

      <Grid
        container
        style={{
          display: "flex",
          padding: "15px 0",
          border: "2px solid #000",
        }}
      >
        <Grid
          container
          className="container"
          style={{
            width: "45%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography variant="h6" className="title">
            ESTUDIANTE A QUIEN SE LE ASIGNO EL CASO
          </Typography>
          <Typography
            variant="p"
            className="text"
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            LAURA ALEJANDRA OLARTE VILLA
          </Typography>
        </Grid>

        <Grid
          container
          className="container"
          style={{
            width: "45%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography variant="h6" className="title">
            CALIDAD (E/A)
          </Typography>
          <Typography variant="p" className="text">
            ESTUDIANTE
          </Typography>
        </Grid>
      </Grid>

      <Grid
        container
        style={{
          display: "flex",
          padding: "15px 0",
          border: "2px solid #000",
        }}
      >
        <Grid
          container
          className="container"
          style={{
            width: "45%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography variant="h6" className="title">
            FECHA DE CITACION DE PARTE USUARIO (MARCAR SI O NO)
          </Typography>
          <Typography
            variant="p"
            className="text"
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            NO
          </Typography>
        </Grid>

        <Grid
          container
          className="container"
          style={{
            width: "45%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography variant="h6" className="title">
            TUVO PARTICIPACIÓN INDIVIDUAL
          </Typography>
          <Typography variant="p" className="text">
            NO
          </Typography>
        </Grid>
      </Grid>

      <Grid
        container
        style={{
          display: "flex",
          padding: "15px 0",
          border: "2px solid #000",
        }}
      >
        <Grid
          container
          className="container"
          style={{
            width: "45%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography variant="h6" className="title">
            NOMBRE DEL ASESOR
          </Typography>
          <Typography
            variant="p"
            className="text"
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            MARIA ESTELA DIAZ SANIN
          </Typography>
        </Grid>

        <Grid
          container
          className="container"
          style={{
            width: "45%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography variant="h6" className="title">
            REALIZÓ REPRESENTACION DE TERCEROS
          </Typography>
          <Typography variant="p" className="text">
            ASESORIA
          </Typography>
        </Grid>
      </Grid>

      <Grid
        container
        style={{
          display: "flex",
          padding: "15px 0",
          border: "2px solid #000",
        }}
      >
        <Grid
          container
          className="container"
          style={{
            width: "45%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography variant="h6" className="title">
            FECHA DE AUDIENCIA
          </Typography>
          <Typography
            variant="p"
            className="text"
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          ></Typography>
        </Grid>

        <Grid
          container
          className="container"
          style={{
            width: "45%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography variant="h6" className="title">
            HORA DE AUDIENCIA
          </Typography>
          <Typography variant="p" className="text"></Typography>
        </Grid>
      </Grid>

      <Grid
        container
        style={{
          display: "flex",
          padding: "15px 0",
          border: "2px solid #000",
        }}
      >
        <Grid
          container
          className="container"
          style={{
            width: "45%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography variant="h6" className="title">
            RESULTADO DE LA AUDIENCIA
          </Typography>
          <Typography
            variant="p"
            className="text"
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            RESULTADO DE LA AUDIENCIA
          </Typography>
        </Grid>

        <Grid
          container
          className="container"
          style={{
            width: "45%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography variant="h6" className="title">
            ESTADO DEL PROCESO O RESULTADO DEL PROCESO
          </Typography>
          <Typography variant="p" className="text">
            SE RECIBE ACTA 3506 DE LA RESPECTIVA DEMANDA
          </Typography>
        </Grid>
      </Grid>

      <Grid
        container
        style={{
          display: "flex",
          padding: "15px 0",
          border: "2px solid #000",
        }}
      >
        <Grid
          container
          className="container"
          style={{
            width: "45%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography variant="h6" className="title">
            ESTUDIANTE QUE RECIBE EL CASO
          </Typography>
          <Typography
            variant="p"
            className="text"
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            SEBASTIAN TABARES VALENCIA
          </Typography>
        </Grid>

        <Grid
          container
          className="container"
          style={{
            width: "45%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography variant="h6" className="title">
            PAZ Y SALVO DE ESTUDIANTE EN CONSULTORIO
          </Typography>
          <Typography variant="p" className="text">
            SI
          </Typography>
        </Grid>
      </Grid>

      <Grid
        container
        style={{
          display: "flex",
          padding: "15px 0",
          border: "2px solid #000",
        }}
      >
        <Grid
          container
          className="container"
          style={{
            width: "45%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography variant="h6" className="title">
            APOYO GRAFICAR
          </Typography>
          <Typography
            variant="p"
            className="text"
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            CIVIL Y COMERCIALACTA DE ACUERDO PARCIAL
          </Typography>
        </Grid>

        <Grid
          container
          className="container"
          style={{
            width: "45%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography variant="h6" className="title"></Typography>
          <Typography variant="p" className="text"></Typography>
        </Grid>
      </Grid>

      {/* docimentacion del caso */}

      <Grid
        container
        sx={{
          margin: "20px 0",
          padding: "20px",
          width: "100%",
          border: "2px solid #000",
        }}
      >
        <Typography variant="h6">Documentacion del caso:</Typography>

        <Grid
          container
          sx={{
            marginTop: 5,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Grid
            item
            sx={{
              fontSize: 20,
            }}
          >
            <a href="" download="filename">documento 1</a>
            <Button style={{ marginLeft: 10 }}>Editar documento 1</Button>
          </Grid>
          <Grid
            item
            sx={{
              fontSize: 20,
            }}
          >
            <a href="" download="filename">documento 2</a>
            <Button style={{ marginLeft: 10 }}>Editar documento 2</Button>
          </Grid>
          <Grid
            item
            sx={{
              fontSize: 20,
            }}
          >
            <a href="" download="filename">documento 3</a>
            <Button style={{ marginLeft: 10 }}>Editar documento 3</Button>
          </Grid>
          <Grid
            item
            sx={{
              fontSize: 20,
            }}
          >
            <a href="" download="filename">documento 4</a>
            <Button style={{ marginLeft: 10 }}>Editar documento 4</Button>
          </Grid>
        </Grid>
      </Grid>

      <Button
        onClick={handleView}
        style={{
          width: "200px",
          height: "50px",
          margin: "10px auto",
          borderRadius: "50px",
          fontSize: 22,
        }}
      >
        Salir
      </Button>
    </Grid>
  );
};
