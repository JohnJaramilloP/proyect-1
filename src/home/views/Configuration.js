import React, { useEffect, useState } from "react";
// import { Box } from "@material-ui/core";
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
} from "devextreme-react/data-grid";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import OutlinedInput from "@mui/material/OutlinedInput";
import Swal from "sweetalert2";

import "devextreme/dist/css/dx.light.css";
import { Card, Grid, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { CommentBankSharp } from "@mui/icons-material";

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
  people,
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
  updatePeople,
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
  createPeople,
  deletePeople,
} = require("../components/services.js");

const texts = {
  exportAll: "Exportar todos los datos",
  exportSelectedRows: "Exportar filas seleccionadas",
  exportTo: "Export",
};

const texts2 = {
  confirmDeleteMessage: "Estas seguro de eliminar la referencia?",
};

const allowedPageSizes = [5, 10, "Todos"];

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
  "Personas",
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

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setOptionSelect(typeof value === "string" ? value.split(",") : value);

    switch (event.target.value) {
      case "Lugares de atención":
        attentionPlaces().then((res) => {
          setData(res);
          setViewGrid(1);
        });
        break;
      case "Áreas":
        areas().then((res) => {
          setData(res);
          setViewGrid(1);
        });
        break;
      case "Materia":
        subjectMatters().then((res) => {
          setData(res);
          setViewGrid(1);
        });
        break;
      case "Origen":
        origins().then((res) => {
          setData(res);
          setViewGrid(1);
        });
        break;
      case "Calidad":
        capacities().then((res) => {
          setData(res);
          setViewGrid(1);
        });
        break;
      case "Funcionario Judicial":
        legalOfficerOptions().then((res) => {
          setData(res);
          setViewGrid(1);
        });
        break;
      case "Resultado de la atención":
        attentionResults().then((res) => {
          setData(res);
          setViewGrid(1);
        });
        break;
      case "Eficacia":
        efficacyOptions().then((res) => {
          setData(res);
          setViewGrid(1);
        });
        break;
      case "Estado de los casos":
        caseStatuses().then((res) => {
          setData(res);
          setViewGrid(1);
        });
        break;
      case "Resultado de la audiencia":
        audienceResults().then((res) => {
          setData(res);
          setViewGrid(1);
        });
        break;
      case "Opciones de soporte gráfico":
        graphicSupportOptions().then((res) => {
          setData(res);
          setViewGrid(1);
        });
        break;
      case "Tipos de identificación":
        idTypes().then((res) => {
          setData(res);
          setViewGrid(1);
        });
        break;
      case "Tipos de archivo":
        fileTypes().then((res) => {
          setData(res);
          setViewGrid(1);
        });
        break;
      case "Personas":
        people().then((res) => {
          setData(res);
          setViewGrid(2);
        });
        break;

      default:
        break;
    }
  };

  const alertCreate = () => {
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Elemento creado",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  const alertWrong = () => {
    Swal.fire({
      position: "center",
      icon: "error",
      title: "El nombre es requerido",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  const alerUpdate = () => {
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Elemento editado",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  const alerDelete = () => {
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Elemento eliminado",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  const alerDeleteWrong = () => {
    Swal.fire({
      position: "center",
      icon: "error",
      title: "Error al eliminar elemento",
      showConfirmButton: false,
      timer: 1500,
    });
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
        <Typography variant="h4">Configuración:</Typography>
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
              let name = row.data.name;
              let description = row.data.description;
              switch (optionSelect[0]) {
                case "Lugares de atención":
                  deletePlace(id).then((res) => {
                    res.request.status === 204
                      ? alerDelete()
                      : alerDeleteWrong();
                  });
                  break;
                case "Áreas":
                  deleteArea(id).then((res) => {
                    res.request.status === 204
                      ? alerDelete()
                      : alerDeleteWrong();
                  });
                  break;
                case "Materia":
                  deleteSubjectMatters(id).then((res) => {
                    res.request.status === 204
                      ? alerDelete()
                      : alerDeleteWrong();
                  });
                  break;
                case "Origen":
                  deleteOrigins(id).then((res) => {
                    res.request.status === 204
                      ? alerDelete()
                      : alerDeleteWrong();
                  });
                  break;
                case "Calidad":
                  deleteCapacities(id).then((res) => {
                    res.request.status === 204
                      ? alerDelete()
                      : alerDeleteWrong();
                  });
                  break;
                case "Funcionario Judicial":
                  deleteLegalOfficerOptions(id).then((res) => {
                    res.request.status === 204
                      ? alerDelete()
                      : alerDeleteWrong();
                  });
                  break;
                case "Resultado de la atención":
                  deleteAttentionResults(id).then((res) => {
                    res.request.status === 204
                      ? alerDelete()
                      : alerDeleteWrong();
                  });
                  break;
                case "Eficacia":
                  deleteEfficacyOptions(id).then((res) => {
                    res.request.status === 204
                      ? alerDelete()
                      : alerDeleteWrong();
                  });
                  break;
                case "Estado de los casos":
                  deleteCaseStatuses(id).then((res) => {
                    res.request.status === 204
                      ? alerDelete()
                      : alerDeleteWrong();
                  });
                  break;
                case "Resultado de la audiencia":
                  deleteAudienceResults(id).then((res) => {
                    res.request.status === 204
                      ? alerDelete()
                      : alerDeleteWrong();
                  });
                  break;
                case "Opciones de soporte gráfico":
                  deleteGraphicSupportOptions(id).then((res) => {
                    res.request.status === 204
                      ? alerDelete()
                      : alerDeleteWrong();
                  });
                  break;
                case "Tipos de identificación":
                  deleteIdTypes(id).then((res) => {
                    res.request.status === 204
                      ? alerDelete()
                      : alerDeleteWrong();
                  });
                  break;
                case "Tipos de archivo":
                  deleteFileTypes(id).then((res) => {
                    res.request.status === 204
                      ? alerDelete()
                      : alerDeleteWrong();
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
                  createPlace(name, description).then((res) => {
                    res.id ? alertCreate() : alertWrong();
                  });
                  break;
                case "Áreas":
                  createArea(name, description).then((res) => {
                    res.id ? alertCreate() : alertWrong();
                  });
                  break;
                case "Materia":
                  createSubjectMatters(name, description).then((res) => {
                    res.id ? alertCreate() : alertWrong();
                  });
                  break;
                case "Origen":
                  createOrigins(name, description).then((res) => {
                    res.id ? alertCreate() : alertWrong();
                  });
                  break;
                case "Calidad":
                  createCapacities(name, description).then((res) => {
                    res.id ? alertCreate() : alertWrong();
                  });
                  break;
                case "Funcionario Judicial":
                  createLegalOfficerOptions(name, description).then((res) => {
                    res.id ? alertCreate() : alertWrong();
                  });
                  break;
                case "Resultado de la atención":
                  createAttentionResults(name, description).then((res) => {
                    res.id ? alertCreate() : alertWrong();
                  });
                  break;
                case "Eficacia":
                  createEfficacyOptions(name, description).then((res) => {
                    res.id ? alertCreate() : alertWrong();
                  });
                  break;
                case "Estado de los casos":
                  createCaseStatuses(name, description).then((res) => {
                    res.id ? alertCreate() : alertWrong();
                  });
                  break;
                case "Resultado de la audiencia":
                  createAudienceResults(name, description).then((res) => {
                    res.id ? alertCreate() : alertWrong();
                  });
                  break;
                case "Opciones de soporte gráfico":
                  createGraphicSupportOptions(name, description).then((res) => {
                    res.id ? alertCreate() : alertWrong();
                  });
                  break;
                case "Tipos de identificación":
                  createIdTypes(name, description).then((res) => {
                    res.id ? alertCreate() : alertWrong();
                  });
                  break;
                case "Tipos de archivo":
                  createFileTypes(name, description).then((res) => {
                    res.id ? alertCreate() : alertWrong();
                  });
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
                  updatePlace(id, name, description).then((res) => {
                    res.length > 0 ? alerUpdate() : alertWrong();
                  });
                  break;
                case "Áreas":
                  updateArea(id, name, description).then((res) => {
                    res.length > 0 ? alerUpdate() : alertWrong();
                  });
                  break;
                case "Materia":
                  updateSubjectMatters(id, name, description).then((res) => {
                    res.length > 0 ? alerUpdate() : alertWrong();
                  });
                  break;
                case "Origen":
                  updateOrigins(id, name, description).then((res) => {
                    res.length > 0 ? alerUpdate() : alertWrong();
                  });
                  break;
                case "Calidad":
                  updateCapacities(id, name, description).then((res) => {
                    res.length > 0 ? alerUpdate() : alertWrong();
                  });
                  break;
                case "Funcionario Judicial":
                  updateLegalOfficerOptions(id, name, description).then(
                    (res) => {
                      res.length > 0 ? alerUpdate() : alertWrong();
                    }
                  );
                  break;
                case "Resultado de la atención":
                  updateAttentionResults(id, name, description).then((res) => {
                    res.length > 0 ? alerUpdate() : alertWrong();
                  });
                  break;
                case "Eficacia":
                  updateEfficacyOptions(id, name, description).then((res) => {
                    res.length > 0 ? alerUpdate() : alertWrong();
                  });
                  break;
                case "Estado de los casos":
                  updateCaseStatuses(id, name, description).then((res) => {
                    res.length > 0 ? alerUpdate() : alertWrong();
                  });
                  break;
                case "Resultado de la audiencia":
                  updateAudienceResults(id, name, description).then((res) => {
                    res.length > 0 ? alerUpdate() : alertWrong();
                  });
                  break;
                case "Opciones de soporte gráfico":
                  updateGraphicSupportOptions(id, name, description).then(
                    (res) => {
                      res.length > 0 ? alerUpdate() : alertWrong();
                    }
                  );
                  break;
                case "Tipos de identificación":
                  updateIdTypes(id, name, description).then((res) => {
                    res.length > 0 ? alerUpdate() : alertWrong();
                  });
                  break;
                case "Tipos de archivo":
                  updateFileTypes(id, name, description).then((res) => {
                    res.length > 0 ? alerUpdate() : alertWrong();
                  });
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
                title="Consultorio Jurídico"
                showTitle={true}
                width={700}
                height={620}
              />
              <Form>
                <Item itemType="group" colCount={2} colSpan={2}>
                  <Item dataField="name" caption="Nombre" required />
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
            <Column dataField="name" caption="Nombre" />
            <Column dataField="description" caption="Descripción" />
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
        </Card>
      )}

      {viewGrid === 2 && (
        <Card
          style={{
            padding: 10,
            width: "100%",
          }}
        >
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
              deletePeople(id).then((res) => {
                res.request.status === 204
                  ? alerDelete()
                  : alerDeleteWrong();
              });
            }}
            onRowInserted={(row) => {
              let name = row.data.name;
              let lastName1 = row.data.lastName1;
              let idTypeId = row.data.idTypeId;
              let idNumber = row.data.idNumber;
              let email = row.data.email;
              let tel = row.data.tel;
              let birthdate = row.data.birthdate;

              createPeople(
                name,
                lastName1,
                idTypeId,
                idNumber,
                email,
                tel,
                birthdate
              ).then((res) => {
                res.id ? alertCreate() : alertWrong();
              });
            }}
            onInitialized={() => {}}
            onRowUpdated={(row) => {
              let id = row.data.id;
              let name = row.data.name;
              let lastName1 = row.data.lastName1;
              let idTypeId = row.data.idTypeId;
              let idNumber = row.data.idNumber;
              let email = row.data.email;
              let tel = row.data.tel;
              let birthdate = row.data.birthdate;

              updatePeople(
                id,
                name,
                lastName1,
                idTypeId,
                idNumber,
                email,
                tel,
                birthdate
              ).then((res) => {
                res.length > 0 ? alerUpdate() : alertWrong();
              });
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
                title="Consultorio Jurídico"
                showTitle={true}
                width={700}
                height={620}
              />
              <Form>
                <Item itemType="group" colCount={2} colSpan={2}>
                  <Item dataField="name" caption="Nombre" r />
                  <Item dataField="lastName1" caption="Apellido" />
                  <Item dataField="idTypeId" caption="Tipo de documento" />
                  <Item dataField="idNumber" caption="Número de documento" />
                  <Item dataField="email" caption="Correo" />
                  <Item dataField="tel" caption="Teléfono" />
                  <Item dataField="birthdate" caption="Fecha de nacimineto" />
                </Item>
              </Form>
            </Editing>
            <HeaderFilter visible={true} />
            <Selection
              mode="multiple"
              deferred={true}
              showCheckBoxesMode="always"
            />
            <Column dataField="name" caption="Nombre" />
            <Column dataField="lastName1" caption="Apellido" />
            <Column dataField="idTypeId" caption="Tipo de documento" />
            <Column dataField="idNumber" caption="Número de documento" />
            <Column dataField="email" caption="Correo" />
            <Column dataField="tel" caption="Teléfono" />
            <Column dataField="birthdate" caption="Fecha de nacimineto" />
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
        </Card>
      )}
    </div>
  );
};
