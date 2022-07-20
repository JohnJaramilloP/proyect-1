import React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { Button, Grid, IconButton } from "@mui/material";
import { DeleteForeverSharp, EditSharp } from "@mui/icons-material";
import { useState } from "react";
import { AiFillEye } from "react-icons/ai";
import { SeeEstudent } from "../components/SeeEstudent";

const columns = [
  { id: "nombre", label: "Nombre", minWidth: 120 },
  { id: "asesor", label: "Asesor", minWidth: 120 },
  {
    id: "casoRecep",
    label: "Casos Recepcionados",
    minWidth: 120,
    format: (value) => value.toLocaleString(),
  },
  { id: "casoAsig", label: "Casos Asignados", minWidth: 120 },
  { id: "estadoCaso", label: "Estado del Caso", minWidth: 120 },
  { id: "editar", label: "Editar", minWidth: 120 },
  { id: "eliminar", label: "Eliminar", minWidth: 120 },
];

function createData(
  nombre,
  asesor,
  casoRecep,
  casoAsig,
  estadoCaso,
  editar,
  eliminar
) {
  return {
    nombre,
    asesor,
    casoRecep,
    casoAsig,
    estadoCaso,
    editar,
    eliminar,
  };
}

const rows = [
  createData("01", "cod-123", 1324171354, 3287263),
  createData("China", "CN", "css", 9596961),
  createData("Italy", "IT", 60483973, 301340),
  createData("United States", "US", 327167434, 9833520),
  createData("Canada", "CA", 37602103, 9984670),
  createData("Australia", "AU", 25475400, 7692024),
  createData("Germany", "DE", 83019200, 357578),
  createData("Ireland", "IE", 4857000, 70273),
  createData("Mexico", "MX", 126577691, 1972550),
  createData("Japan", "JP", 126317000, 377973),
  createData("France", "FR", 67022000, 640679),
  createData("United Kingdom", "GB", 67545757, 242495),
  createData("Russia", "RU", 146793744, 17098246),
  createData("Nigeria", "NG", 200962417, 923768),
  createData("Brazil", "BR", 210147125, 8515767),
];

export const Estudents = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [view, setView] = useState(1);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const changeView = (number) => {
    setView(number)
  }

  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      {view === 1 && (
        <Paper sx={{ sm: { maxWidth: "90vw" }, overflow: "hidden" }}>
          <TableContainer sx={{ width: "80vw", maxHeight: 590 }}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      style={{ minWidth: column.minWidth }}
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {rows
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => {
                    return (
                      <TableRow
                        hover
                        role="checkbox"
                        tabIndex={-1}
                        key={row.nombre}
                      >
                        {columns.map((column) => {
                          const value = row[column.id];
                          return (
                            <TableCell key={column.id} align={column.align}>
                              {column.format && typeof value === "number" ? (
                                column.format(value)
                              ) : column.id !== "editar" ? (
                                value
                              ) : (
                                <IconButton>
                                  <EditSharp color="error" />
                                </IconButton>
                              )}
                              {column.id === "estadoCaso" && (
                                <IconButton color="error">
                                  <AiFillEye onClick={() => changeView(2)} />
                                </IconButton>
                              )}
                              {column.id === "eliminar" && (
                                <IconButton color="error">
                                  <DeleteForeverSharp />
                                </IconButton>
                              )}
                            </TableCell>
                          );
                        })}
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      )}

      {view === 2 && <SeeEstudent changeView={changeView}/>}
    </Grid>
  );
};
