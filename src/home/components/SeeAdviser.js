import { Grid, Typography } from "@mui/material";
import React from "react";
import { CgClose } from "react-icons/cg";

export const SeeAdviser = ( {changeView} ) => {
  return (
    <Grid
      container
      sx={{
        display: "flex",
        flexDirection: "column",
        padding: "20px",
        position: "relative",
      }}
    >
      <CgClose
        onClick={() => changeView(1)}
        style={{
          fontSize: 35,
          position: "absolute",
          right: 15,
          top: 15,
          cursor: "pointer",
        }}
      />

      <Typography
        variant="h4"
        sx={{
          margin: "0 auto",
          marginBottom: "30px",
        }}
      >
        Asesor:
      </Typography>

      {/* fila1 */}

      <Grid
        container
        sx={{
          display: "flex",
          border: "2px solid #000",
          margin: "10px 0",
        }}
      >
        <Grid
          container
          className="container"
          style={{
            width: "30%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography variant="h6" className="title">
            Caso:
          </Typography>
          <Typography variant="p" className="text">
            1
          </Typography>
        </Grid>

        <Grid
          container
          className="container"
          style={{
            width: "30%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography variant="h6" className="title">
            Estudiante:
          </Typography>
          <Typography variant="p" className="text">
            Carolina Colorado
          </Typography>
        </Grid>

        <Grid
          container
          sx={{
            width: "30%",
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
            <a href="" download="filename">
              documento 1
            </a>
          </Grid>
          <Grid
            item
            sx={{
              fontSize: 20,
            }}
          >
            <a href="" download="filename">
              documento 2
            </a>
          </Grid>
          <Grid
            item
            sx={{
              fontSize: 20,
            }}
          >
            <a href="" download="filename">
              documento 3
            </a>
          </Grid>
          <Grid
            item
            sx={{
              fontSize: 20,
            }}
          >
            <a href="" download="filename">
              documento 4
            </a>
          </Grid>
        </Grid>
      </Grid>

      <Grid
        container
        sx={{
          display: "flex",
          border: "2px solid #000",
          margin: "10px 0",
        }}
      >
        <Grid
          container
          className="container"
          style={{
            width: "30%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography variant="h6" className="title">
            Caso:
          </Typography>
          <Typography variant="p" className="text">
            2
          </Typography>
        </Grid>

        <Grid
          container
          className="container"
          style={{
            width: "30%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography variant="h6" className="title">
            Estudiante:
          </Typography>
          <Typography variant="p" className="text">
            Carolina Colorado
          </Typography>
        </Grid>

        <Grid
          container
          sx={{
            width: "30%",
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
            <a href="" download="filename">
              documento 1
            </a>
          </Grid>
          <Grid
            item
            sx={{
              fontSize: 20,
            }}
          >
            <a href="" download="filename">
              documento 2
            </a>
          </Grid>
          <Grid
            item
            sx={{
              fontSize: 20,
            }}
          >
            <a href="" download="filename">
              documento 3
            </a>
          </Grid>
          <Grid
            item
            sx={{
              fontSize: 20,
            }}
          >
            <a href="" download="filename">
              documento 4
            </a>
          </Grid>
        </Grid>
      </Grid>

      <Grid
        container
        sx={{
          display: "flex",
          border: "2px solid #000",
          margin: "10px 0",
        }}
      >
        <Grid
          container
          className="container"
          style={{
            width: "30%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography variant="h6" className="title">
            Caso:
          </Typography>
          <Typography variant="p" className="text">
            3
          </Typography>
        </Grid>

        <Grid
          container
          className="container"
          style={{
            width: "30%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography variant="h6" className="title">
            Estudiante:
          </Typography>
          <Typography variant="p" className="text">
            Carolina Colorado
          </Typography>
        </Grid>

        <Grid
          container
          sx={{
            width: "30%",
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
            <a href="" download="filename">
              documento 1
            </a>
          </Grid>
          <Grid
            item
            sx={{
              fontSize: 20,
            }}
          >
            <a href="" download="filename">
              documento 2
            </a>
          </Grid>
          <Grid
            item
            sx={{
              fontSize: 20,
            }}
          >
            <a href="" download="filename">
              documento 3
            </a>
          </Grid>
          <Grid
            item
            sx={{
              fontSize: 20,
            }}
          >
            <a href="" download="filename">
              documento 4
            </a>
          </Grid>
        </Grid>
      </Grid>

      <Grid
        container
        sx={{
          display: "flex",
          border: "2px solid #000",
          margin: "10px 0",
        }}
      >
        <Grid
          container
          className="container"
          style={{
            width: "30%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography variant="h6" className="title">
            Caso:
          </Typography>
          <Typography variant="p" className="text">
            4
          </Typography>
        </Grid>

        <Grid
          container
          className="container"
          style={{
            width: "30%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography variant="h6" className="title">
            Estudiante:
          </Typography>
          <Typography variant="p" className="text">
            Carolina Colorado
          </Typography>
        </Grid>

        <Grid
          container
          sx={{
            width: "30%",
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
            <a href="" download="filename">
              documento 1
            </a>
          </Grid>
          <Grid
            item
            sx={{
              fontSize: 20,
            }}
          >
            <a href="" download="filename">
              documento 2
            </a>
          </Grid>
          <Grid
            item
            sx={{
              fontSize: 20,
            }}
          >
            <a href="" download="filename">
              documento 3
            </a>
          </Grid>
          <Grid
            item
            sx={{
              fontSize: 20,
            }}
          >
            <a href="" download="filename">
              documento 4
            </a>
          </Grid>
        </Grid>
      </Grid>

      <Grid
        container
        sx={{
          display: "flex",
          border: "2px solid #000",
          margin: "10px 0",
        }}
      >
        <Grid
          container
          className="container"
          style={{
            width: "30%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography variant="h6" className="title">
            Caso:
          </Typography>
          <Typography variant="p" className="text">
            5
          </Typography>
        </Grid>

        <Grid
          container
          className="container"
          style={{
            width: "30%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography variant="h6" className="title">
            Estudiante:
          </Typography>
          <Typography variant="p" className="text">
            Carolina Colorado
          </Typography>
        </Grid>

        <Grid
          container
          sx={{
            width: "30%",
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
            <a href="" download="filename">
              documento 1
            </a>
          </Grid>
          <Grid
            item
            sx={{
              fontSize: 20,
            }}
          >
            <a href="" download="filename">
              documento 2
            </a>
          </Grid>
          <Grid
            item
            sx={{
              fontSize: 20,
            }}
          >
            <a href="" download="filename">
              documento 3
            </a>
          </Grid>
          <Grid
            item
            sx={{
              fontSize: 20,
            }}
          >
            <a href="" download="filename">
              documento 4
            </a>
          </Grid>
        </Grid>
      </Grid>

      <Grid
        container
        sx={{
          display: "flex",
          border: "2px solid #000",
          margin: "10px 0",
        }}
      >
        <Grid
          container
          className="container"
          style={{
            width: "30%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography variant="h6" className="title">
            Caso:
          </Typography>
          <Typography variant="p" className="text">
            6
          </Typography>
        </Grid>

        <Grid
          container
          className="container"
          style={{
            width: "30%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography variant="h6" className="title">
            Estudiante:
          </Typography>
          <Typography variant="p" className="text">
            Carolina Colorado
          </Typography>
        </Grid>

        <Grid
          container
          sx={{
            width: "30%",
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
            <a href="" download="filename">
              documento 1
            </a>
          </Grid>
          <Grid
            item
            sx={{
              fontSize: 20,
            }}
          >
            <a href="" download="filename">
              documento 2
            </a>
          </Grid>
          <Grid
            item
            sx={{
              fontSize: 20,
            }}
          >
            <a href="" download="filename">
              documento 3
            </a>
          </Grid>
          <Grid
            item
            sx={{
              fontSize: 20,
            }}
          >
            <a href="" download="filename">
              documento 4
            </a>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
