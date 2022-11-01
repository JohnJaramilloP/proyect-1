import React, { useContext, useEffect, useState } from "react";
import { Box, Button, Card, Grid, Typography } from "@mui/material";
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
import AuthContext from "../../auth/context/AuthContext.js";

const texts = {
  exportAll: "Exportar todos los datos",
  exportSelectedRows: "Exportar filas seleccionadas",
  exportTo: "Export",
};

const texts2 = {
  confirmDeleteMessage: "Estas seguro de eliminar la referencia?",
};

const allowedPageSizes = [5, 10, 15, 20];

const { advisorsList } = require("../components/servicesCases.js");

export const Advisers = ({ state }) => {
  const [data, setData] = useState([]);
  const [showLoading, setShowLoading] = useState(true);

  const { auth, handleAuth } = useContext(AuthContext);

  useEffect(() => {
    advisorsList(auth.tokken).then((advisors) => {
      console.log("advisor list", advisors);
      setData(advisors);
      setShowLoading(false);
    });
  }, []);

  const cellrender = (row) => {
    let apellido1 = row.data.lastName1 === null ? "" : row.data.lastName1;
    let apellido2 = row.data.lastName2 === null ? "" : row.data.lastName2;
    return <p>{`${apellido1} ${apellido2}`}</p>;
  };

  console.log("statessss", state);

  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      <Typography variant="h4">Asesores</Typography>

      <LoadingOverlay active={showLoading} spinner text="Cargando Asesores... ">
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
              <Column dataField="name" caption="Nombre" alignment="center" />
              <Column
                caption="Apellidos"
                cellRender={cellrender}
                width={200}
                alignment="center"
              />
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
              <Column
                dataField="idType.name"
                caption="Tipo de documento"
                alignment="center"
              />
              <Column
                dataField="idNumber"
                caption="Número de documento"
                alignment="center"
              />
              <Column dataField="email" caption="Correo" alignment="center" />
              <Column dataField="tel" caption="Teléfono" alignment="center" />
              <Column
                dataField="birthdate"
                caption="Fecha de nacimiento"
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
      </LoadingOverlay>
    </Grid>
  );
};
