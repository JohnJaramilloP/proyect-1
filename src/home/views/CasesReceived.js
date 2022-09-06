import React, { useState } from "react";
import DataGrid, {
  Column,
  FilterRow,
  HeaderFilter,
  Pager,
  Paging,
  Export,
  Lookup,
  Editing,
  Item,
  Popup,
  Form,
  Selection,
  SearchPanel,
  RequiredRule,
} from "devextreme-react/data-grid";
import { Button, Grid, IconButton, Box, Card, Typography } from "@mui/material";
import { DeleteForeverSharp, EditSharp } from "@mui/icons-material";
import { AiFillEye } from "react-icons/ai";

import { SeeCase } from "../components";
import ModalCreateCase from "../components/ModalCreateCase";
import ModalEditCase from "../components/ModalEditCase";

const texts = {
  exportAll: "Exportar todos los datos",
  exportSelectedRows: "Exportar filas seleccionadas",
  exportTo: "Export",
};

const texts2 = {
  confirmDeleteMessage: "Estas seguro de eliminar la referencia?",
};

const allowedPageSizes = [5, 10, "Todos"];

const data = [
  {
    name: "John",
    lastName: "Jaramillo",
    identification: "12345678",
    socioeconomicLevel: "3",
  },
];

export const CasesReceived = () => {
  const [views, setViews] = useState(1);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [openModalCreate, setOpenModalCreate] = useState(false);
  const [openModalEdit, setOpenModalEdit] = useState(false);

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
          <ModalCreateCase add={openModalCreate} setAdd={setOpenModalCreate} />
          <ModalEditCase add={openModalEdit} setAdd={setOpenModalEdit} />

          <Typography variant="h4">Casos Recepcionados</Typography>

          <Grid
            container
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              margin: "10px 0",
            }}
          >
            <Button
              onClick={setOpenModalEdit}
              sx={{
                padding: 1,
                margin: 2,
                background: "#0275d8",
                "&:hover": {
                  background: "#369ffa",
                },
              }}
            >
              Editar caso
            </Button>

            <Button
              onClick={setOpenModalCreate}
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
          </Grid>

          <Card
            style={{
              padding: 10,
              width: "100%",
            }}
          >
            <Box width="100%">
              <DataGrid
                dataSource={data}
                keyExpr="identification"
                showColumnLines={true}
                // onRowClick={e => console.log(e)}
                onExporting={(e) => {}}
                showHeaderFilter={true}
                showRowLines={true}
                columnAutoWidth={true}
                showBorders={true}
                onRowRemoved={(row) => {}}
                onRowInserted={(row) => {}}
                onInitialized={() => {}}
                onRowUpdated={(row) => {}}
                rowAlternationEnabled={true}
              >
                <HeaderFilter visible={true} />
                <Selection
                  mode="multiple"
                  deferred={true}
                  showCheckBoxesMode="always"
                />
                <Column dataField="name" caption="Nombre" />
                <Column dataField="lastName" caption="Apellidos" />
                <Column dataField="identification" caption="Cédula" />
                <Column dataField="socioeconomicLevel" caption="Estrato" />
                <Paging defaultPageSize={10} />
                <Pager
                  visible={true}
                  allowedPageSizes={allowedPageSizes}
                  displayMode="full"
                  showPageSizeSelector={true}
                  showInfo={true}
                  showNavigationButtons={true}
                />
                <Export
                  enabled={true}
                  allowExportSelectedData={true}
                  texts={texts}
                />
              </DataGrid>
            </Box>
          </Card>
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
