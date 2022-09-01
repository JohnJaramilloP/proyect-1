import React, { useState } from "react";
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
import { AiFillEye } from "react-icons/ai";

import { SeeCase } from "../components";
import ModalCreateCase from "../components/ModalCreateCase";

const columns = [
  { id: "numero", label: "Número", minWidth: 180 },
  { id: "ano", label: "Año", minWidth: 180 },
  {
    id: "radicado_interno",
    label: "Radicado Interno",
    minWidth: 180,
    format: (value) => value.toLocaleString(),
  },
  { id: "fecha_atencion", label: "Fecha Atención Asesoría", minWidth: 180 },
  { id: "fecha_recepcion", label: "Fecha Recepción de Caso", minWidth: 180 },
  { id: "parte_accionante", label: "Parte Accionante", minWidth: 180 },
  { id: "ver_caso", label: "Ver caso", minWidth: 180 },
];

function createData(
  numero,
  ano,
  radicado_interno,
  fecha_atencion,
  fecha_recepcion,
  parte_accionante,
  ver_caso
) {
  return {
    numero,
    ano,
    radicado_interno,
    fecha_atencion,
    fecha_recepcion,
    parte_accionante,
    ver_caso,
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
  const [views, setViews] = useState(1);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [openModal, setOpenModal] = useState(false);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Grid container>
      {views === 1 && (
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <ModalCreateCase add={openModal} setAdd={setOpenModal} />

          <Button
            onClick={setOpenModal}
            sx={{
              padding: 1,
              margin: 2,
              background: "#0275d8",
              "&:hover": {
                background: "#369ffa",
              },
            }}
          >
            Agregar caso
          </Button>

          <Paper sx={{ sm: { maxWidth: "60vw" }, overflow: "hidden" }}>
            <TableContainer sx={{ maxHeight: 590 }}>
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
                                ) : column.id !== "ver_caso" ? (
                                  value
                                ) : (
                                  <IconButton onClick={() => setViews(2)}>
                                    <AiFillEye />
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
      )}

      {views === 2 && (
        <Grid>
          <SeeCase setViews={setViews} />
        </Grid>
      )}
    </Grid>
  );
};
