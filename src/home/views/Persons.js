import { useContext, useState } from "react";
import Swal from "sweetalert2";
import { Box, Button, Card, Grid, Typography } from "@mui/material";
import { DeleteForeverSharp, EditSharp } from "@mui/icons-material";
import LoadingOverlay from "react-loading-overlay";
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
import { useEffect } from "react";
import AuthContext from "../../auth/context/AuthContext";
import "./Persons.css";

const {
  idTypes,
  people,
  updatePeople,
  createPeople,
  deletePeople,
} = require("../components/services.js");

const { peopleToEstudents } = require("../components/servicesCases.js");

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

export const Persons = () => {
  const [openModal, setOpenModal] = useState(false);
  const [data, setData] = useState([]);
  const [idTypeSelectItems, setIdTypeSelectItems] = useState([]);
  const [idType, setIdType] = useState([]);
  const [showLoading, setShowLoading] = useState(true);
  const [reloadData, setReloadData] = useState(false);

  const { auth, handleAuth } = useContext(AuthContext);

  const cellrender = (row) => {
    let apellido1 = row.data.lastName1 === null ? "" : row.data.lastName1;
    let apellido2 = row.data.lastName2 === null ? "" : row.data.lastName2;
    return <p>{`${apellido1} ${apellido2}`}</p>;
  };

  let positionEditorOptions = {
    items: idTypeSelectItems,
    searchEnabled: true,
    value: "",
  };

  const roleId = localStorage.getItem("role");

  useEffect(() => {
    roleId === "3" &&
      people(auth.tokken).then((people) => {
        setData(people);
        setShowLoading(false);
      });
    roleId === "1" &&
      peopleToEstudents(auth.tokken).then((people) => {
        setData(people);
        setShowLoading(false);
      });

    idTypes(auth.tokken).then((id) => {
      let idType = id.map((e) => e.name);
      setIdTypeSelectItems(idType);
      setIdType(id);
    });
  }, [reloadData]);

  const alert = (icon, text) => {
    Swal.fire({
      position: "center",
      icon: icon,
      title: text,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      <Typography variant="h4">Personas</Typography>
      <LoadingOverlay active={showLoading} spinner text="Cargando Personas... ">
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
                deletePeople(id, auth.tokken).then((res) => {
                  res.request.status === 204
                    ? alert("success", "Elemento eliminado")
                    : alert("error", "Error al eliminar");
                    setReloadData(!reloadData);
                });
              }}
              onRowInserted={(row) => {
                let typeId = [];

                idType.forEach(
                  (e) => e.name === row.data.idTypeId && typeId.push(e.id)
                );

                let name = row.data.name;
                let lastName1 = row.data.lastName1;
                let lastName2 = row.data.lastName2;
                let idTypeId = typeId[0];
                let idNumber = row.data.idNumber;
                let email = row.data.email;
                let tel = row.data.tel;
                let birthdate = row.data.birthdate;

                createPeople(
                  name,
                  lastName1,
                  lastName2,
                  idTypeId,
                  idNumber,
                  email,
                  tel,
                  birthdate,
                  auth.tokken
                ).then((res) => {
                  res.id
                    ? alert("success", "Elemento creado")
                    : alert("error", "Error al crear persona");
                  setReloadData(!reloadData);
                });
              }}
              onInitialized={() => {}}
              onRowUpdated={(row) => {
                let typeId = [];

                idType.forEach(
                  (e) => e.name === row.data.idTypeId && typeId.push(e.id)
                );

                let id = row.data.id;
                let name = row.data.name;
                let lastName1 = row.data.lastName1;
                let lastName2 = row.data.lastName2;
                let idTypeId = typeId[0];
                let idNumber = row.data.idNumber;
                let email = row.data.email;
                let tel = row.data.tel;
                let birthdate = row.data.birthdate;

                updatePeople(
                  id,
                  name,
                  lastName1,
                  lastName2,
                  idTypeId,
                  idNumber,
                  email,
                  tel,
                  birthdate,
                  auth.tokken
                ).then((res) => {
                  res.length > 0
                    ? alert("success", "Elemento editado")
                    : alert("error", "Error al editar");
                    setReloadData(!reloadData);
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
                  title="Configuración Personas"
                  showTitle={true}
                  width={700}
                  height={350}
                />
                <Form>
                  <Item itemType="group" colCount={2} colSpan={2}>
                    <Item dataField="name" caption="Nombre" />
                    <Item dataField="lastName1" caption="Primer apellido" />
                    <Item dataField="lastName2" caption="Segundo apellido" />
                    <Item
                      dataField="idTypeId"
                      editorType="dxSelectBox"
                      editorOptions={positionEditorOptions}
                    />
                    {/* <Item dataField="idTypeId" caption="Tipo de documento" /> */}
                    <Item dataField="idNumber" caption="Número de documento" />
                    <Item dataField="email" caption="Correo" />
                    <Item dataField="tel" caption="Teléfono" />
                    <Item
                      dataField="birthdate"
                      caption="Fecha de nacimiento"
                      editorType="dxDateBox"
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
              <Column dataField="name" caption="Nombre" alignment="center"/>
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
              <Column
                dataField="idTypeId"
                caption="Tipo de documento"
                visible={false}
              />
              <Column dataField="idType.name" caption="Tipo de documento" alignment="center"/>
              <Column dataField="idNumber" caption="Número de documento" alignment="center"/>
              <Column dataField="email" caption="Correo" alignment="center"/>
              <Column dataField="tel" caption="Teléfono" alignment="center"/>
              <Column dataField="birthdate" caption="Fecha de nacimiento" alignment="center"/>
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
      </LoadingOverlay>
    </Grid>
  );
};
