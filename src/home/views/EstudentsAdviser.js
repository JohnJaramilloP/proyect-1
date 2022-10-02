import React, { useState } from "react";
import { Box, Button, Card, Grid, Typography } from "@mui/material";
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

export const EstudentsAdviser = () => {
  const [data, setData] = useState([
    {
      name: "John Jaramillo",
      adviser: "carlos Arango",
      casesReceiver: "15",
      casesAssignee: "4"
    },
    {
      name: "John Jaramillo",
      adviser: "carlos Arango",
      casesReceiver: "15",
      casesAssignee: "4"
    },
    {
      name: "John Jaramillo",
      adviser: "carlos Arango",
      casesReceiver: "15",
      casesAssignee: "4"
    },
    {
      name: "John Jaramillo",
      adviser: "carlos Arango",
      casesReceiver: "15",
      casesAssignee: "4"
    },
  ]);

  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      <Typography variant="h4">Estudiantes - "Asesor"</Typography>

      <Card
        style={{
          padding: 10,
          width: "100%",
        }}
      >
        <Box width="100%">
          <DataGrid
            dataSource={data}
            keyExpr="name"
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
            <FilterRow visible={true} />
            <Selection
              mode="multiple"
              deferred={true}
              showCheckBoxesMode="always"
            />
            <Column dataField="name" caption="Nombre" />
            <Column dataField="adviser" caption="Asesor" />
            <Column dataField="casesReceiver" caption="Casos Recepcionados" />
            <Column
              dataField="casesAssignee"
              caption="Número de casos asignados"
            />
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
  );
};
