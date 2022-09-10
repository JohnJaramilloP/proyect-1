import React, { useEffect, useState } from "react";
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
import { DeleteForeverSharp, EditSharp, Visibility } from "@mui/icons-material";
import LoadingOverlay from "react-loading-overlay";
import { SeeCase } from "../components";
import ModalCreateCase from "../components/ModalCreateCase";
import ModalEditCase from "../components/ModalEditCase";
import { Link } from "react-router-dom";

const {
  cases,
  createCases,
  updateCases,
  deleteCases,
} = require("../components/servicesCases.js");

const texts = {
  exportAll: "Exportar todos los datos",
  exportSelectedRows: "Exportar filas seleccionadas",
  exportTo: "Export",
};

const texts2 = {
  confirmDeleteMessage: "Estas seguro de eliminar el caso?",
};

const allowedPageSizes = [5, 10, "Todos"];

export const Cases = () => {
  const [data, setData] = useState({});
  const [openModalCreate, setOpenModalCreate] = useState(false);
  const [openModalEdit, setOpenModalEdit] = useState(false);
  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    cases().then((cases) => {
      setData(cases);
      setShowLoading(false);
    });
  }, []);

 
  

  const renderGridCell = (row) => {
    return (
      <Link to={"/Ver_caso"} state={{ id: row.data.id }}>
        <Visibility sx={{ cursor: "pointer", color: "#337ab7" }} />
      </Link>
    );
  };

  console.log("data", data);

  return (
    <Grid container>
      <LoadingOverlay active={showLoading} spinner text="Cargando casos... ">
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <ModalCreateCase add={openModalCreate} setAdd={setOpenModalCreate} />
          <ModalEditCase add={openModalEdit} setAdd={setOpenModalEdit} />

          <Typography variant="h4">Casos</Typography>

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

          <Grid container>
            <Card
              style={{
                padding: 10,
                width: "100%",
              }}
            >
              <Box width="100%">
                <DataGrid
                  dataSource={data}
                  keyExpr="id"
                  showColumnLines={true}
                  // onRowClick={e => console.log(e)}
                  onExporting={(e) => {}}
                  showHeaderFilter={true}
                  showRowLines={true}
                  columnAutoWidth={true}
                  showBorders={true}
                  onRowRemoved={(row) => {}}
                  onRowInserted={(row) => {
                    let data = {
                      plaintiff: {
                        name: row.data.plaintiff.name,
                        lastName1: row.data.plaintiff.lastName1,
                        lastName2: row.data.plaintiff.lastName2,
                        idNUmber: row.data.plaintiff.idNumber,
                      },
                      socioeconomicLevel: row.data.socioeconomicLevel,
                    };
                    createCases(data);
                  }}
                  onInitialized={() => {}}
                  onRowUpdated={(row) => {}}
                  rowAlternationEnabled={true}
                >
                  <Editing
                    mode="popup"
                    allowUpdating={true}
                    allowAdding={true}
                    allowDeleting={true}
                    useIcons={true}
                    texts={texts2}
                  >
                    <Popup
                      title="LISTADO DE CASOS"
                      useIcons={true}
                      showTitle={true}
                      width={500}
                      height={380}
                    />
                    <Form>
                      <Item itemType="group" colCount={2} colSpan={2}>
                        <Item dataField="plaintiff.name" caption="Nombre" />
                        <Item
                          dataField="plaintiff.lastName1"
                          caption="Apellido1"
                        />
                        <Item
                          dataField="plaintiff.lastName2"
                          caption="Apellido2"
                        />
                        <Item dataField="plaintiff.idNumber" caption="Cédula" />
                        <Item
                          dataField="socioeconomicLevel"
                          caption="Estrato"
                        />
                      </Item>
                    </Form>
                  </Editing>
                  <HeaderFilter visible={true} />
                  <FilterRow visible={true} />
                  <Selection
                    mode="multiple"
                    deferred={true}
                    showCheckBoxesMode="always"
                  />
                  <Column dataField="id" caption="Número" />
                  <Column dataField="year" caption="Año" />
                  <Column dataField="plaintiff.name" caption="Nombre" />
                  <Column dataField="plaintiff.lastName1" caption="Apellido1" />
                  <Column dataField="plaintiff.lastName2" caption="Apellido2" />
                  <Column dataField="plaintiff.idNumber" caption="Cédula" />
                  <Column dataField="socioeconomicLevel" caption="Estrato" />
                  <Column caption="Ver Caso" cellRender={renderGridCell} />
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
        </Grid>
      </LoadingOverlay>
    </Grid>
  );
};
