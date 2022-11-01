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
  ToolbarItem,
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
import { Link, Navigate } from "react-router-dom";
import "../components/ModalFile.css";
import AuthContext from "../../auth/context/AuthContext";
import SimpleFileUpload from "react-simple-file-upload";

const { idTypes, people } = require("../components/services.js");

const {
  cases,
  createCases,
  updateCases,
  deleteCases,
  casesId,
  deleteFile,
  uploadFile,
  loginRefresh,
  checkUrl,
  uploadFileSimple,
} = require("../components/servicesCases.js");

const texts = {
  exportAll: "Exportar todos los datos",
  exportSelectedRows: "Exportar filas seleccionadas",
  exportTo: "Export",
};

const texts2 = {
  confirmDeleteMessage: "Estas seguro de eliminar el caso?",
  saveRowChanges: "Guardar",
  cancelRowChanges: "Cancelar",
};

const allowedPageSizes = [5, 10, 15, 20];

export const Cases = () => {
  const [data, setData] = useState({});
  const [showLoading, setShowLoading] = useState(true);
  const [persons, setPersons] = useState([]);
  const [personsSelect, setPersonsSelect] = useState([]);
  const [fileUp, setFileUp] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [idCase, setIdCase] = useState("");
  const [files, setFiles] = useState([]);
  const [load, setLoad] = useState(false);

  const { auth, handleAuth } = useContext(AuthContext);

  console.log("global estate", auth.tokken);

  useEffect(() => {
    cases(auth.tokken).then((cases) => {
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

  function handleFile(url) {
    console.log("The URL of the file is " + url);
    let body = {
      url: url,
      caseId: idCase,
    };
    uploadFileSimple(body, auth.tokken);
  }

  const saveFile = (e) => {
    setFileUp([...fileUp, e.target.files[0]]);
  };

  const renderGridCell = (row) => {
    return (
      <Link to={`/Ver_caso/${row.data.id}`}>
        <Visibility sx={{ cursor: "pointer", color: "#009929" }} />
      </Link>
    );
  };

  const renderGridCell1 = (row) => {
    return (
      <PostAdd
        sx={{ cursor: "pointer", color: "#009929" }}
        onClick={() => {
          let caseId = row.data.id;
          setIdCase(row.data.id);
          console.log("rowdata", row.data);
          casesId(caseId, auth.tokken).then(
            (_case) => setFiles(_case.files),
            setShowModal(!showModal)
          );
        }}
      />
    );
  };

  const renderGridCell2 = (row) => {
    return (
      <Delete
        sx={{ cursor: "pointer", color: "#009929" }}
        onClick={() => {
          Swal.fire({
            title: "Estás seguro de eliminar el caso?",
            text: "Esto será de forma permanente!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            cancelButtonText: "Cancelar",
            confirmButtonText: "Sí",
            confirmButtonColor: "#009929",
          }).then((result) => {
            if (result.isConfirmed) {
              deleteCases(row.data.id, auth.tokken).then((res) => {
                if (res.status === 204) {
                  setLoad(!load);
                  alert("success", "Caso Eliminado");
                } else {
                  alert("error", "Error al eliminar el caso");
                }
              });
            }
          });
        }}
      />
    );
  };

  useEffect(() => {
    people(auth.tokken).then((people) => {
      setPersons(people);
      setPersonsSelect(
        people.map(
          (e) =>
            e.name +
            " " +
            (e.lastName1 === null ? "" : e.lastName1) +
            " " +
            (e.lastName2 === null ? "" : e.lastName2)
        )
      );
    });
  }, []);

  let positionEditorOptions = {
    items: personsSelect,
    searchEnabled: true,
    value: "",
  };

  let positionEditorOptions1 = {
    min: new Date(),
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
          <Typography variant="h4">Casos</Typography>

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
                    setShowLoading(true);
                    let person = [];
                    persons.filter((e) => {
                      if (
                        e.name +
                          " " +
                          (e.lastName1 === null ? "" : e.lastName1) +
                          " " +
                          (e.lastName2 === null ? "" : e.lastName2) ===
                        row.data.plaintiff.name
                      ) {
                        person.push(e.id);
                      }
                    });

                    let data = {
                      plaintiffId: person,
                      socioeconomicLevel: row.data.socioeconomicLevel,
                      attentionConsultantDate: row.data.attentionConsultantDate,
                    };
                    createCases(data, auth.tokken).then(
                      (res) =>
                        res.plaintiffId &&
                        (alert("success", "Caso creado"), setLoad(!load))
                    );
                  }}
                  onInitialized={() => {}}
                  onRowUpdated={(row) => {}}
                  rowAlternationEnabled={true}
                >
                  <Editing
                    mode="popup"
                    allowUpdating={false}
                    allowAdding={true}
                    allowDeleting={false}
                    useIcons={true}
                    texts={texts2}
                  >
                    <Popup
                      title="Crear Caso"
                      useIcons={true}
                      showTitle={true}
                      // width="70%"
                      height={300}
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
                        <Item
                          dataField="attentionConsultantDate"
                          caption="Fecha de Recepción"
                          editorType="dxDateBox"
                          editorOptions={positionEditorOptions1}
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
                  <Column dataField="id" caption="Número" alignment="center"/>
                  <Column dataField="year" caption="Año" alignment="center"/>
                  <Column dataField="plaintiff.name" caption="Nombre" alignment="center"/>
                  <Column dataField="plaintiff.lastName1" caption="Apellido1" alignment="center"/>
                  <Column dataField="plaintiff.lastName2" caption="Apellido2" alignment="center"/>
                  <Column dataField="plaintiff.idNumber" caption="Cédula" alignment="center"/>
                  <Column dataField="socioeconomicLevel" caption="Estrato" alignment="center"/>
                  <Column
                    dataField="attentionConsultantDate"
                    caption="Fecha de Atención"
                    alignment="center"
                  />
                  <Column caption="Ver Caso" cellRender={renderGridCell} alignment="center"/>
                  <Column
                    caption="Cargar Documento"
                    cellRender={renderGridCell1}
                    alignment="center"
                  />
                  <Column caption="Eliminar" cellRender={renderGridCell2} alignment="center"/>
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

        {/* modal */}

        {showModal && (
          <Grid
            style={{
              width: "100%",
              height: "100%",
              position: "absolute",
              top: 0,
              background: "#00000050",
              zIndex: 1000,
            }}
          >
            <Grid
              container
              style={{
                position: "relative",
                top: "10%",
                margin: "20px auto",
                borderRadius: "10px",
                border: "1px solid transparent",
                background: "#ffffff",
                width: "50%",
              }}
            >
              <Grid
                container
                style={{
                  margin: "0 auto",
                  padding: "20px",
                  borderRadius: "10px",
                  color: "#000000",
                  background:
                    "linear-gradient(152.97deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 100%)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <Typography
                  variant="h6"
                  style={{
                    borderBottom: "2px solid rgba(5, 243, 246, 0.3)",
                    padding: "5px 0",
                    textAlign: "center",
                    marginBottom: "20px",
                  }}
                >
                  Subir Documentos - caso: {idCase}
                </Typography>

                <form
                  style={{
                    textAlign: "center",
                  }}
                  action="../../form-result.php"
                  method="post"
                  enctype="multipart/form-data"
                  target="_blank"
                >
                  {/* <input
                    type="file"
                    name="archivosubido"
                    onChange={saveFile}
                    style={{
                      marginBottom: "10px",
                      width: "240px",
                    }}
                  /> */}
                  <SimpleFileUpload
                    apiKey="81696e288998403763177caa00915951"
                    onSuccess={handleFile}
                    width="60"
                    height="60"
                  />
                </form>

                <Box
                  // md={5}
                  // xs={11}
                  item
                  sx={{
                    maxHeight: "40vh",
                    overflow: "auto",
                    fontSize: 16,
                    margin: " 5px 0",
                    border: "1px solid #00000050",
                    borderRadius: "5px",
                    padding: "10px",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  {files &&
                    files.map((e) => (
                      <Grid>
                        <a
                          key={e.id}
                          href={e.url}
                          download="filename"
                          target="_blank"
                        >
                          {e.url && e.url.split("/")[7]}
                        </a>
                        <Button
                          key={e.id}
                          style={{
                            marginLeft: 10,
                            background: "#ffffff",
                            border: "none",
                          }}
                        >
                          {" "}
                          <Delete
                            key={e.id}
                            onClick={() => {
                              setShowModal(!showModal);
                              Swal.fire({
                                title:
                                  "Estás seguro de eliminar este documento?",
                                text: "Esto será de forma permanente!",
                                icon: "warning",
                                showCancelButton: true,
                                confirmButtonColor: "#3085d6",
                                cancelButtonColor: "#d33",
                                cancelButtonText: "Cancelar",
                                confirmButtonText: "Sí",
                              }).then((result) => {
                                if (result.isConfirmed) {
                                  deleteFile(
                                    e.id,
                                    e.url,
                                    auth.tokken
                                  ).then((res) => {
                                    if (res.status === 204) {
                                      alert("success", "Documento eliminado");
                                    } else {
                                      alert("error", "Error al eliminar");
                                    }
                                  });
                                }
                              });
                            }}
                            sx={{
                              color: "#b71c1c",
                            }}
                          />{" "}
                        </Button>
                      </Grid>
                    ))}
                </Box>

                <Grid
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-around",
                  }}
                >
                  <Button
                    style={{
                      width: "200px",
                      height: "50px",
                      margin: "10px auto",
                      borderRadius: "50px",
                      fontSize: 18,
                      background: "#009929",
                      border: "none",
                    }}
                    onClick={() => {
                      // uploadFile(idCase, fileUp, auth.tokken).then((res) =>
                      // res.status === 200
                      // ?
                      alert("success", "Cambios guardados");
                      setShowModal(!showModal);
                      casesId(idCase, auth.tokken).then(
                        (_case) => setFiles(_case.files),
                        setShowModal(!showModal)
                      );
                      setFiles([]);
                      setFileUp([]);
                      // : (alert("error", "Error al guardar"),
                      //   setShowModal(!showModal),
                      //   setFiles([]),
                      //   setFileUp([]))
                      // );
                    }}
                  >
                    Guardar
                  </Button>
                  <Button
                    style={{
                      width: "200px",
                      height: "50px",
                      margin: "10px auto",
                      borderRadius: "50px",
                      fontSize: 18,
                      background: "#8c8c8c",
                      border: "none",
                    }}
                    onClick={() => {
                      setShowModal(!showModal);
                      setFiles([]);
                    }}
                  >
                    Salir
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        )}
      </LoadingOverlay>
    </Grid>
  );
};
