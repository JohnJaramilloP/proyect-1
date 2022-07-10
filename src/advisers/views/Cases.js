import * as React from "react";
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
import { SearchCreate } from "../components";

const columns = [
  { id: "numero", label: "Número", minWidth: 200 },
  { id: "codigo", label: "Código", minWidth: 200 },
  {
    id: "papeleria",
    label: "Papelería",
    minWidth: 200,
    format: (value) => value.toLocaleString(),
  },
  { id: "fechaAten", label: "Fecha Atención", minWidth: 200 },
  { id: "fechaRecep", label: "Fecha Recepción", minWidth: 200 },
];

function createData(
  numero,
  codigo,
  papeleria,
  fechaAten,
  fechaRecep,
) {
  return {
    numero,
    codigo,
    papeleria,
    fechaAten,
    fechaRecep,
  };
}

const rows = [
  createData(
    "01",
    "cod-123",
    1324171354,
    3287263,
    "aa",
    "bb",
    "cc",
    "dd",
    "ee"
  ),
  createData("China", "CN", 1403500365, 9596961),
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

export const Cases = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      <Grid>
      <SearchCreate />
      </Grid>
      <Paper sx={{ sm: {maxWidth: "60vw"}, overflow: "hidden" }}>
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
                      key={row.codigo}
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
    </Grid>
  );
};
