import React, { useContext, useEffect, useState } from "react";
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
import Swal from "sweetalert2";
import { Button, Grid, IconButton, Box, Card, Typography } from "@mui/material";
import {
  DeleteForeverSharp,
  EditSharp,
  Rocket,
  Visibility,
  PostAdd,
  Delete,
} from "@mui/icons-material";
import LoadingOverlay from "react-loading-overlay";
import { SeeCase } from "../components";
import { Link } from "react-router-dom";
import "../components/ModalFile.css";
import AuthContext from "../../auth/context/AuthContext";

const { idTypes, people } = require("../components/services.js");

const { assignedCasesEstudent } = require("../components/servicesCases.js");

const texts = {
  exportAll: "Exportar todos los datos",
  exportSelectedRows: "Exportar filas seleccionadas",
  exportTo: "Export",
};

const texts2 = {
  confirmDeleteMessage: "Estas seguro de eliminar el caso?",
};

const allowedPageSizes = [5, 10, 15, 20];

export const CasesAssigned = () => {
  const [data, setData] = useState({});
  const [showLoading, setShowLoading] = useState(true);
  const [personsSelect, setPersonsSelect] = useState([]);
  const [fileUp, setFileUp] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [idCase, setIdCase] = useState("");
  const [files, setFiles] = useState([]);
  const [load, setLoad] = useState(false);

  const { auth, handleAuth } = useContext(AuthContext);

  useEffect(() => {
    assignedCasesEstudent(auth.tokken).then((cases) => {
      console.log("assigned cases", cases);
      setData(cases);
      setShowLoading(false);
    });
  }, [load]);

  const alert = (icon, text) => {
    Swal.fire({
      position: "center",
      icon: icon,
      title: text,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  const saveFile = (e) => {
    setFileUp([...fileUp, e.target.files[0]]);
  };

  const renderGridCell = (row) => {
    return (
      <Link to={`/Casos_en_progreso/${row.data.id}`}>
        <Visibility sx={{ cursor: "pointer", color: "#009929" }} />
      </Link>
    );
  };

  let positionEditorOptions = {
    items: personsSelect,
    searchEnabled: true,
    value: "",
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
          <Typography variant="h4">Casos Asignados</Typography>

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
                  onRowInserted={(row) => {}}
                  onInitialized={() => {}}
                  onRowUpdated={(row) => {}}
                  rowAlternationEnabled={true}
                >
                  <Editing
                    mode="popup"
                    allowUpdating={false}
                    allowAdding={false}
                    allowDeleting={false}
                    useIcons={true}
                    deleteIconColor={"#009929"}
                    texts={texts2}
                  >
                    <Popup
                      title="LISTADO DE CASOS"
                      useIcons={true}
                      showTitle={true}
                      // width={600}
                      height={280}
                    />
                    <Form>
                      <Item itemType="group" colCount={2} colSpan={2}>
                        <Item
                          dataField="plaintiff.name"
                          editorType="dxSelectBox"
                          editorOptions={positionEditorOptions}
                        >
                          <RequiredRule message="Este campo es requerido" />
                        </Item>
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
                  <Column dataField="id" caption="Número" alignment="center" />
                  <Column dataField="year" caption="Año" alignment="center" />
                  <Column
                    dataField="plaintiff.name"
                    caption="Nombre"
                    alignment="center"
                  />
                  <Column
                    dataField="plaintiff.lastName1"
                    caption="Apellido1"
                    alignment="center"
                  />
                  <Column
                    dataField="plaintiff.lastName2"
                    caption="Apellido2"
                    alignment="center"
                  />
                  <Column
                    dataField="plaintiff.idNumber"
                    caption="Cédula"
                    alignment="center"
                  />
                  <Column
                    dataField="socioeconomicLevel"
                    caption="Estrato"
                    alignment="center"
                  />
                  <Column
                    caption="Ver Caso"
                    cellRender={renderGridCell}
                    alignment="center"
                  />
                  <Paging defaultPageSize={15} />
                  <Pager
                    visible={true}
                    allowedPageSizes={allowedPageSizes}
                    displayMode="full"
                    showPageSizeSelector={true}
                    showInfo={true}
                    showNavigationButtons={true}
                    infoText="Página {0} de {1} ({2} Registros)"
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
