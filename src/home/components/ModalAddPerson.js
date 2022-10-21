import React, { useState } from "react";
import { Box, Button, Card, Grid, Typography } from "@mui/material";
import { CgClose } from "react-icons/cg";

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

const texts = {
  exportAll: "Exportar todos los datos",
  exportSelectedRows: "Exportar filas seleccionadas",
  exportTo: "Export",
};

const texts2 = {
  confirmDeleteMessage: "Estas seguro de eliminar la referencia?",
};

const allowedPageSizes = [5, 10, "Todos"];

export const ModalAddPerson = ({
  persons,
  showModal,
  nameValue,
  handleChange,
  estudents,
  advisors,
}) => {
  const [data, setData] = useState(persons);

  const cellrender = (row) => {
    let apellido1 = row.data.lastName1 === null ? "" : row.data.lastName1;
    let apellido2 = row.data.lastName2 === null ? "" : row.data.lastName2;
    return <p>{`${apellido1} ${apellido2}`}</p>;
  };

  const { name, value, name2, value2 } = nameValue;

  console.log("datas modal pesons", nameValue);

  return (
    <Card
      style={{
        padding: 20,
        width: "80%",
      }}
    >
      <Box width="100%">
        <Grid
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <h4>Selecciona una persona</h4>
          <CgClose
            onClick={() => showModal(false)}
            style={{
              fontSize: 35,
              right: 15,
              top: 15,
              cursor: "pointer",
              color: "#000000",
            }}
          />
        </Grid>
        <DataGrid
          dataSource={
            name === "studentAssignee"
              ? estudents
              : name === "advisor"
              ? advisors
              : name === "receiverStudent"
              ? estudents
              : data
          }
          keyExpr="id"
          showColumnLines={true}
          hoverStateEnabled={true}
          onRowClick={(e) => (
            handleChange(
              name,
              e.data.id,
              name2,
              e.data.name +
                " " +
                (e.data.lastName1 === null ? "" : e.data.lastName1) +
                " " +
                (e.data.lastName2 === null ? "" : e.data.lastName2)
            ),
            showModal(false)
          )}
          onExporting={(e) => {}}
          showHeaderFilter={true}
          showRowLines={true}
          columnAutoWidth={true}
          showBorders={true}
          onRowRemoved={(row) => {}}
          onRowInserted={(row) => {}}
          onInitialized={() => {}}
          onRowUpdated={(row) => {}}
        >
          <Editing
            mode="popup"
            allowUpdating={false}
            allowAdding={false}
            allowDeleting={false}
            useIcons={true}
            texts={texts2}
          >
            <Popup
              title="Consultorio Jurídico"
              showTitle={true}
              width={700}
              height={350}
            />
            <Form>
              <Item itemType="group" colCount={2} colSpan={2}>
                <Item dataField="name" caption="Nombre" />
              </Item>
            </Form>
          </Editing>
          <HeaderFilter visible={true} />
          <FilterRow visible={true} />
          <Selection
            // mode="multiple"
            deferred={true}
            showCheckBoxesMode="always"
          />
          <Column dataField="name" caption="Nombre" />
          <Column caption="Apellidos" cellRender={cellrender} width={200} />
          <Column dataField="idNumber" caption="Número de documento" />
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
            enabled={false}
            allowExportSelectedData={true}
            texts={texts}
          />
        </DataGrid>
      </Box>
    </Card>
  );
};
