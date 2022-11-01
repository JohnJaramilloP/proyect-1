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
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import OutlinedInput from "@mui/material/OutlinedInput";
import Swal from "sweetalert2";

import "devextreme/dist/css/dx.light.css";
import { Box, Card, Grid, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { CommentBankSharp, Place } from "@mui/icons-material";
import AuthContext from "../../auth/context/AuthContext.js";

const {
  attentionPlaces,
  areas,
  subjectMatters,
  origins,
  capacities,
  legalOfficerOptions,
  attentionResults,
  efficacyOptions,
  caseStatuses,
  audienceResults,
  graphicSupportOptions,
  idTypes,
  fileTypes,
  users,
  createPlace,
  createArea,
  createSubjectMatters,
  createOrigins,
  createCapacities,
  createLegalOfficerOptions,
  createAttentionResults,
  createEfficacyOptions,
  createCaseStatuses,
  createAudienceResults,
  createGraphicSupportOptions,
  createIdTypes,
  createFileTypes,
  createUsers,
  updatePlace,
  updateArea,
  updateSubjectMatters,
  updateOrigins,
  updateCapacities,
  updateLegalOfficerOptions,
  updateAttentionResults,
  updateEfficacyOptions,
  updateCaseStatuses,
  updateAudienceResults,
  updateGraphicSupportOptions,
  updateIdTypes,
  updateFileTypes,
  updateUsers,
  deletePlace,
  deleteArea,
  deleteSubjectMatters,
  deleteOrigins,
  deleteCapacities,
  deleteLegalOfficerOptions,
  deleteAttentionResults,
  deleteEfficacyOptions,
  deleteCaseStatuses,
  deleteAudienceResults,
  deleteGraphicSupportOptions,
  deleteIdTypes,
  deleteFileTypes,
  deleteUsers,
  people,
} = require("../components/services.js");

const texts = {
  exportAll: "Exportar todos los datos",
  exportSelectedRows: "Exportar filas seleccionadas",
  exportTo: "Export",
};

const texts2 = {
  confirmDeleteMessage: "Estas seguro de eliminar el caso?",
  saveRowChanges: "Guardar",
  cancelRowChanges: "Cancelar",
  deleteRow: "Eliminar",
  editRow: "Editar",
};

const allowedPageSizes = [5, 10, 15, 20];

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
  "Áreas",
  "Lugares de atención",
  "Materia",
  "Origen",
  "Calidad",
  "Funcionario Judicial",
  "Resultado de la atención",
  "Eficacia",
  "Resultado de la audiencia",
  "Tipos de identificación",
  "Usuarios",
  "Estado de los casos",
  "Tipos de archivo",
  "Opciones de soporte gráfico",
];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export const Configuration = () => {
  const theme = useTheme();
  const [optionSelect, setOptionSelect] = useState([]);
  const [data, setData] = useState([]);
  const [viewGrid, setViewGrid] = useState(1);
  const [peopleSelectItems, setPeopleSelectItems] = useState([]);
  const [idPerson, setIdPerson] = useState([]);

  const { auth, handleAuth } = useContext(AuthContext);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setOptionSelect(typeof value === "string" ? value.split(",") : value);

    console.log("tokken", auth.tokken);

    switch (event.target.value) {
      case "Lugares de atención":
        attentionPlaces(auth.tokken).then((res) => {
          setData(res);
          setViewGrid(1);
        });
        break;
      case "Áreas":
        areas(auth.tokken).then((res) => {
          setData(res);
          setViewGrid(1);
        });
        break;
      case "Materia":
        subjectMatters(auth.tokken).then((res) => {
          setData(res);
          setViewGrid(1);
        });
        break;
      case "Origen":
        origins(auth.tokken).then((res) => {
          setData(res);
          setViewGrid(1);
        });
        break;
      case "Calidad":
        capacities(auth.tokken).then((res) => {
          setData(res);
          setViewGrid(1);
        });
        break;
      case "Funcionario Judicial":
        legalOfficerOptions(auth.tokken).then((res) => {
          setData(res);
          setViewGrid(1);
        });
        break;
      case "Resultado de la atención":
        attentionResults(auth.tokken).then((res) => {
          setData(res);
          setViewGrid(1);
        });
        break;
      case "Eficacia":
        efficacyOptions(auth.tokken).then((res) => {
          setData(res);
          setViewGrid(1);
        });
        break;
      case "Estado de los casos":
        caseStatuses(auth.tokken).then((res) => {
          setData(res);
          setViewGrid(1);
        });
        break;
      case "Resultado de la audiencia":
        audienceResults(auth.tokken).then((res) => {
          setData(res);
          setViewGrid(1);
        });
        break;
      case "Opciones de soporte gráfico":
        graphicSupportOptions(auth.tokken).then((res) => {
          setData(res);
          setViewGrid(1);
        });
        break;
      case "Tipos de identificación":
        idTypes(auth.tokken).then((res) => {
          setData(res);
          setViewGrid(1);
        });
        break;
      case "Tipos de archivo":
        fileTypes(auth.tokken).then((res) => {
          setData(res);
          setViewGrid(1);
        });
        break;
      case "Usuarios":
        users(auth.tokken).then((res) => {
          setData(res);
          setViewGrid(2);
        });
        break;

      default:
        break;
    }
  };

  const alert = (icon, text) => {
    Swal.fire({
      position: "center",
      icon: icon,
      title: text,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  useEffect(() => {
    people(auth.tokken).then((res) => {
      let persons = res.map(
        (e) =>
          e.name +
          " " +
          (e.lastName1 === null ? "" : e.lastName1) +
          " " +
          (e.lastName2 === null ? "" : e.lastName2)
      );
      setPeopleSelectItems(persons);
      setIdPerson(res);
    });
  }, [data]);

  const cellrender = (row) => {
    let apellido1 =
      row.data.person.lastName1 === null ? "" : row.data.person.lastName1;
    let apellido2 =
      row.data.person.lastName2 === null ? "" : row.data.person.lastName2;
    return <p>{`${apellido1} ${apellido2}`}</p>;
  };

  let positionEditorOptions = {
    items: peopleSelectItems,
    searchEnabled: true,
    value: "",
  };

  let editorPassword = {
    mode: "password",
  };

  return (
    <div>
      <Grid
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          margin: " 10px 0",
        }}
      >
        <Typography variant="h4">Configuración</Typography>
      </Grid>

      <Grid>
        <Typography variant="h6">
          Selecciona los datos para la tabla:
        </Typography>

        <FormControl
          sx={{
            m: "20px 0",
            width: "50%",
          }}
        >
          <InputLabel id="demo-multiple-name-label">
            Selecciona una de las opciones
          </InputLabel>
          <Select
            labelId="demo-simple-select-disabled-label"
            id="demo-simple-select-disabled"
            value={optionSelect}
            onChange={handleChange}
            input={<OutlinedInput label="Name" />}
            MenuProps={MenuProps}
          >
            {names.map((name) => (
              <MenuItem
                key={name}
                value={name}
                style={getStyles(name, optionSelect, theme)}
              >
                {name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>

      {viewGrid === 1 && (
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
              onRowRemoved={(row) => {
                let id = row.data.id;
                switch (optionSelect[0]) {
                  case "Lugares de atención":
                    deletePlace(id, auth.tokken).then((res) => {
                      res.request.status === 204
                        ? alert("success", "Elemento eliminado")
                        : alert("error", "Este recurso ya está en uso!!!");
                      attentionPlaces(auth.tokken).then((res) => setData(res));
                    });
                    break;
                  case "Áreas":
                    deleteArea(id, auth.tokken).then((res) => {
                      console.log();
                      res.request.status === 204
                        ? alert("success", "Elemento eliminado")
                        : alert("error", "Este recurso ya está en uso!!!");
                      areas(auth.tokken).then((res) => setData(res));
                    });
                    break;
                  case "Materia":
                    deleteSubjectMatters(id, auth.tokken).then((res) => {
                      res.request.status === 204
                        ? alert("success", "Elemento eliminado")
                        : alert("error", "Este recurso ya está en uso!!!");
                      subjectMatters(auth.tokken).then((res) => setData(res));
                    });
                    break;
                  case "Origen":
                    deleteOrigins(id, auth.tokken).then((res) => {
                      res.request.status === 204
                        ? alert("success", "Elemento eliminado")
                        : alert("error", "Este recurso ya está en uso!!!");
                      origins(auth.tokken).then((res) => setData(res));
                    });
                    break;
                  case "Calidad":
                    deleteCapacities(id, auth.tokken).then((res) => {
                      res.request.status === 204
                        ? alert("success", "Elemento eliminado")
                        : alert("error", "Este recurso ya está en uso!!!");
                      capacities(auth.tokken).then((res) => setData(res));
                    });
                    break;
                  case "Funcionario Judicial":
                    deleteLegalOfficerOptions(id, auth.tokken).then((res) => {
                      res.request.status === 204
                        ? alert("success", "Elemento eliminado")
                        : alert("error", "Este recurso ya está en uso!!!");
                      legalOfficerOptions(auth.tokken).then((res) =>
                        setData(res)
                      );
                    });
                    break;
                  case "Resultado de la atención":
                    deleteAttentionResults(id, auth.tokken).then((res) => {
                      res.request.status === 204
                        ? alert("success", "Elemento eliminado")
                        : alert("error", "Este recurso ya está en uso!!!");
                      attentionResults(auth.tokken).then((res) => setData(res));
                    });
                    break;
                  case "Eficacia":
                    deleteEfficacyOptions(id, auth.tokken).then((res) => {
                      res.request.status === 204
                        ? alert("success", "Elemento eliminado")
                        : alert("error", "Este recurso ya está en uso!!!");
                      efficacyOptions(auth.tokken).then((res) => setData(res));
                    });
                    break;
                  case "Estado de los casos":
                    deleteCaseStatuses(id, auth.tokken).then((res) => {
                      res.request.status === 204
                        ? alert("success", "Elemento eliminado")
                        : alert("error", "Este recurso ya está en uso!!!");
                      caseStatuses(auth.tokken).then((res) => setData(res));
                    });
                    break;
                  case "Resultado de la audiencia":
                    deleteAudienceResults(id, auth.tokken).then((res) => {
                      res.request.status === 204
                        ? alert("success", "Elemento eliminado")
                        : alert("error", "Este recurso ya está en uso!!!");
                      audienceResults(auth.tokken).then((res) => setData(res));
                    });
                    break;
                  case "Opciones de soporte gráfico":
                    deleteGraphicSupportOptions(id, auth.tokken).then((res) => {
                      res.request.status === 204
                        ? alert("success", "Elemento eliminado")
                        : alert("error", "Este recurso ya está en uso!!!");
                      graphicSupportOptions(auth.tokken).then((res) =>
                        setData(res)
                      );
                    });
                    break;
                  case "Tipos de identificación":
                    deleteIdTypes(id, auth.tokken).then((res) => {
                      res.request.status === 204
                        ? alert("success", "Elemento eliminado")
                        : alert("error", "Este recurso ya está en uso!!!");
                      idTypes(auth.tokken).then((res) => setData(res));
                    });
                    break;
                  case "Tipos de archivo":
                    deleteFileTypes(id, auth.tokken).then((res) => {
                      res.request.status === 204
                        ? alert("success", "Elemento eliminado")
                        : alert("error", "Este recurso ya está en uso!!!");
                      fileTypes(auth.tokken).then((res) => setData(res));
                    });
                    break;

                  default:
                    break;
                }
              }}
              onRowInserted={(row) => {
                let name = row.data.name;
                let description = row.data.description;
                switch (optionSelect[0]) {
                  case "Lugares de atención":
                    createPlace(name, description, auth.tokken).then((res) => {
                      console.log("res createplace", res);
                      res.id
                        ? alert("success", "Elemento creado")
                        : alert("error", "Este nombre ya existe!!!");
                      attentionPlaces(auth.tokken).then((res) => setData(res));
                    });
                    break;
                  case "Áreas":
                    createArea(name, description, auth.tokken).then((res) => {
                      console.log("area create", res);
                      res.id
                        ? alert("success", "Elemento creado")
                        : alert("error", "Este nombre ya existe!!!");
                      areas(auth.tokken).then((res) => setData(res));
                    });
                    break;
                  case "Materia":
                    createSubjectMatters(name, description, auth.tokken).then(
                      (res) => {
                        res.id
                          ? alert("success", "Elemento creado")
                          : alert("error", "Este nombre ya existe!!!");
                        subjectMatters(auth.tokken).then((res) => setData(res));
                      }
                    );
                    break;
                  case "Origen":
                    createOrigins(name, description, auth.tokken).then(
                      (res) => {
                        res.id
                          ? alert("success", "Elemento creado")
                          : alert("error", "Este nombre ya existe!!!");
                        origins(auth.tokken).then((res) => setData(res));
                      }
                    );
                    break;
                  case "Calidad":
                    createCapacities(name, description, auth.tokken).then(
                      (res) => {
                        res.id
                          ? alert("success", "Elemento creado")
                          : alert("error", "Este nombre ya existe!!!");
                        capacities(auth.tokken).then((res) => setData(res));
                      }
                    );
                    break;
                  case "Funcionario Judicial":
                    createLegalOfficerOptions(
                      name,
                      description,
                      auth.tokken
                    ).then((res) => {
                      res.id
                        ? alert("success", "Elemento creado")
                        : alert("error", "Este nombre ya existe!!!");
                      legalOfficerOptions(auth.tokken).then((res) =>
                        setData(res)
                      );
                    });
                    break;
                  case "Resultado de la atención":
                    createAttentionResults(name, description, auth.tokken).then(
                      (res) => {
                        res.id
                          ? alert("success", "Elemento creado")
                          : alert("error", "Este nombre ya existe!!!");
                        attentionResults(auth.tokken).then((res) =>
                          setData(res)
                        );
                      }
                    );
                    break;
                  case "Eficacia":
                    createEfficacyOptions(name, description, auth.tokken).then(
                      (res) => {
                        res.id
                          ? alert("success", "Elemento creado")
                          : alert("error", "Este nombre ya existe!!!");
                        efficacyOptions(auth.tokken).then((res) =>
                          setData(res)
                        );
                      }
                    );
                    break;
                  case "Estado de los casos":
                    createCaseStatuses(name, description, auth.tokken).then(
                      (res) => {
                        res.id
                          ? alert("success", "Elemento creado")
                          : alert("error", "Este nombre ya existe!!!");
                        caseStatuses(auth.tokken).then((res) => setData(res));
                      }
                    );
                    break;
                  case "Resultado de la audiencia":
                    createAudienceResults(name, description, auth.tokken).then(
                      (res) => {
                        res.id
                          ? alert("success", "Elemento creado")
                          : alert("error", "Este nombre ya existe!!!");
                        audienceResults(auth.tokken).then((res) =>
                          setData(res)
                        );
                      }
                    );
                    break;
                  case "Opciones de soporte gráfico":
                    createGraphicSupportOptions(
                      name,
                      description,
                      auth.tokken
                    ).then((res) => {
                      res.id
                        ? alert("success", "Elemento creado")
                        : alert("error", "Este nombre ya existe!!!");
                      graphicSupportOptions(auth.tokken).then((res) =>
                        setData(res)
                      );
                    });
                    break;
                  case "Tipos de identificación":
                    createIdTypes(name, description, auth.tokken).then(
                      (res) => {
                        res.id
                          ? alert("success", "Elemento creado")
                          : alert("error", "Este nombre ya existe!!!");
                        idTypes(auth.tokken).then((res) => setData(res));
                      }
                    );
                    break;
                  case "Tipos de archivo":
                    createFileTypes(name, description, auth.tokken).then(
                      (res) => {
                        res.id
                          ? alert("success", "Elemento creado")
                          : alert("error", "Este nombre ya existe!!!");
                        fileTypes(auth.tokken).then((res) => setData(res));
                      }
                    );
                    break;

                  default:
                    break;
                }
              }}
              onInitialized={() => {}}
              onRowUpdated={(row) => {
                let id = row.data.id;
                let name = row.data.name;
                let description = row.data.description;
                switch (optionSelect[0]) {
                  case "Lugares de atención":
                    updatePlace(id, name, description, auth.tokken).then(
                      (res) => {
                        res.length > 0
                          ? alert("success", "Elemento editado")
                          : alert("error", "Error al editar");
                      }
                    );
                    break;
                  case "Áreas":
                    updateArea(id, name, description, auth.tokken).then(
                      (res) => {
                        res.length > 0
                          ? alert("success", "Elemento editado")
                          : alert("error", "Error al editar");
                      }
                    );
                    break;
                  case "Materia":
                    updateSubjectMatters(
                      id,
                      name,
                      description,
                      auth.tokken
                    ).then((res) => {
                      res.length > 0
                        ? alert("success", "Elemento editado")
                        : alert("error", "Error al editar");
                    });
                    break;
                  case "Origen":
                    updateOrigins(id, name, description, auth.tokken).then(
                      (res) => {
                        res.length > 0
                          ? alert("success", "Elemento editado")
                          : alert("error", "Error al editar");
                      }
                    );
                    break;
                  case "Calidad":
                    updateCapacities(id, name, description, auth.tokken).then(
                      (res) => {
                        res.length > 0
                          ? alert("success", "Elemento editado")
                          : alert("error", "Error al editar");
                      }
                    );
                    break;
                  case "Funcionario Judicial":
                    updateLegalOfficerOptions(
                      id,
                      name,
                      description,
                      auth.tokken
                    ).then((res) => {
                      res.length > 0
                        ? alert("success", "Elemento editado")
                        : alert("error", "Error al editar");
                    });
                    break;
                  case "Resultado de la atención":
                    updateAttentionResults(
                      id,
                      name,
                      description,
                      auth.tokken
                    ).then((res) => {
                      res.length > 0
                        ? alert("success", "Elemento editado")
                        : alert("error", "Error al editar");
                    });
                    break;
                  case "Eficacia":
                    updateEfficacyOptions(
                      id,
                      name,
                      description,
                      auth.tokken
                    ).then((res) => {
                      res.length > 0
                        ? alert("success", "Elemento editado")
                        : alert("error", "Error al editar");
                    });
                    break;
                  case "Estado de los casos":
                    updateCaseStatuses(id, name, description, auth.tokken).then(
                      (res) => {
                        res.length > 0
                          ? alert("success", "Elemento editado")
                          : alert("error", "Error al editar");
                      }
                    );
                    break;
                  case "Resultado de la audiencia":
                    updateAudienceResults(
                      id,
                      name,
                      description,
                      auth.tokken
                    ).then((res) => {
                      res.length > 0
                        ? alert("success", "Elemento editado")
                        : alert("error", "Error al editar");
                    });
                    break;
                  case "Opciones de soporte gráfico":
                    updateGraphicSupportOptions(
                      id,
                      name,
                      description,
                      auth.tokken
                    ).then((res) => {
                      res.length > 0
                        ? alert("success", "Elemento editado")
                        : alert("error", "Error al editar");
                    });
                    break;
                  case "Tipos de identificación":
                    updateIdTypes(id, name, description, auth.tokken).then(
                      (res) => {
                        res.length > 0
                          ? alert("success", "Elemento editado")
                          : alert("error", "Error al editar");
                      }
                    );
                    break;
                  case "Tipos de archivo":
                    updateFileTypes(id, name, description, auth.tokken).then(
                      (res) => {
                        res.length > 0
                          ? alert("success", "Elemento editado")
                          : alert("error", "Error al editar");
                      }
                    );
                    break;

                  default:
                    break;
                }
              }}
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
                  title="Configuraciones"
                  showTitle={true}
                  width={700}
                  height={240}
                />
                <Form>
                  <Item itemType="group" colCount={2} colSpan={2}>
                    <Item dataField="name" caption="Nombre">
                      <RequiredRule message="Este campo es requerido" />
                    </Item>
                    <Item dataField="description" caption="Descripción" />
                  </Item>
                </Form>
              </Editing>
              <HeaderFilter visible={true} />
              <Selection
                mode="multiple"
                deferred={true}
                showCheckBoxesMode="always"
              />
              <Column dataField="name" caption="Nombre" alignment="center"/>
              <Column dataField="description" caption="Descripción" alignment="center"/>
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
      )}

      {viewGrid === 2 && (
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
              onRowRemoved={(row) => {
                let id = row.data.id;
                deleteUsers(id, auth.tokken).then((res) => {
                  res.request.status === 204
                    ? alert("success", "Elemento eliminado")
                    : alert("error", "Este recurso ya está en uso!!!");
                });
              }}
              onRowInserted={(row) => {
                let peopleId = [];
                idPerson.filter((e) => {
                  if (
                    e.name +
                      " " +
                      (e.lastName1 === null ? "" : e.lastName1) +
                      " " +
                      (e.lastName2 === null ? "" : e.lastName2) ===
                    row.data.person.name
                  ) {
                    peopleId.push(e.id);
                  }
                });

                let username = row.data.username;
                let pwd = row.data.pwd;
                let roleId = row.data.roleId;
                let personId = peopleId;

                console.log(
                  "row data",
                  username,
                  pwd,
                  roleId,
                  personId,
                  "row data",
                  row.data
                );

                createUsers(username, pwd, roleId, personId, auth.tokken).then(
                  (res) => {
                    console.log("create res", res);
                    if (res.id) {
                      alert("success", "Elemento creado");
                        users(auth.tokken).then((res) => setData(res));
                    }

                    if (
                      res.response.data.error ===
                      "The person is already assigned to a specific user"
                    ) {
                      alert(
                        "error",
                        "La persona ya tiene un usario asignado!!!"
                      );
                    }
                    if (res.response.data.error === "Username Already Exists") {
                      alert("error", "El nombre de usuario ya existe!!!");
                    }
                  }
                );
              }}
              onInitialized={() => {}}
              onRowUpdated={(row) => {
                let id = row.data.id;

                let username = row.data.username;
                let pwd = row.data.pwd;
                let roleId = row.data.roleId;

                updateUsers(id, username, pwd, roleId, auth.tokken).then(
                  (res) => {
                    console.log("edit user", res);
                    users(auth.tokken).then((res) => setData(res));
                    // res.length > 0
                    //   ? alert("success", "Elemento editado")
                    //   : alert("error", "Error al editar");
                  }
                );
              }}
              rowAlternationEnabled={true}
            >
              <Editing
                mode="popup"
                allowUpdating={false}
                allowAdding={true}
                allowDeleting={true}
                useIcons={true}
                texts={texts2}
              >
                <Popup
                  title="Configuración Usuarios"
                  showTitle={true}
                  width={700}
                  height={350}
                />
                <Form>
                  <Item itemType="group" colCount={2} colSpan={2}>
                    <Item
                      dataField="person.name"
                      editorType="dxSelectBox"
                      editorOptions={positionEditorOptions}
                    >
                      <RequiredRule message="Este campo es requerido" />
                    </Item>
                    <Item dataField="roleId" caption="Rol">
                      <RequiredRule message="Este campo es requerido" />
                    </Item>
                    <Item dataField="username" caption="Usuario">
                      <RequiredRule message="Este campo es requerido" />
                    </Item>
                    <Item
                      dataField="pwd"
                      caption="Contraseña"
                      editorOptions={editorPassword}
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
              <Column dataField="roleId" caption="Rol" alignment="center">
                <Lookup
                  dataSource={[
                    { codigo: "1", nombre: "Estudiante" },
                    { codigo: "2", nombre: "Asesor" },
                    { codigo: "3", nombre: "Admin" },
                  ]}
                  displayExpr="nombre"
                  valueExpr="codigo"
                />
              </Column>
              <Column dataField="person.name" caption="Nombre" alignment="center"/>
              <Column caption="Apellidos" cellRender={cellrender} width={200} alignment="center"/>
              <Column
                dataField="lastName1"
                caption="Primer apellido"
                visible={false}
              />
              <Column
                dataField="lastName2"
                caption="Segundo apellido"
                visible={false}
              />
              <Column dataField="username" caption="Usuario" alignment="center"/>
              <Column dataField="pwd" caption="Contraseña" visible={false} />
              <Column dataField="id" caption="ID" visible={false} />
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
      )}
    </div>
  );
};
