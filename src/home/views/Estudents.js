import React, { useContext, useEffect, useState } from "react";
import { Box, Button, Card, Grid, Typography } from "@mui/material";
import LoadingOverlay from "react-loading-overlay";
import { Navigate } from "react-router-dom";
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

const {
  estudentsList,
  loginRefresh,
} = require("../components/servicesCases.js");

export const Estudents = () => {
  const [data, setData] = useState([]);
  const [showLoading, setShowLoading] = useState(true);

  const { auth, handleAuth } = useContext(AuthContext);

  useEffect(() => {
    estudentsList(auth.tokken).then((estudents) => {
      console.log("estudents list", estudents, "auth tpken", auth.tokken);
      setData(estudents);
      setShowLoading(false);
    });
  }, []);

  const cellrender = (row) => {
    let apellido1 = row.data.lastName1 === null ? "" : row.data.lastName1;
    let apellido2 = row.data.lastName2 === null ? "" : row.data.lastName2;
    return <p>{`${apellido1} ${apellido2}`}</p>;
  };

  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      <Typography variant="h4">Estudiantes</Typography>
      <LoadingOverlay active={showLoading} spinner text="Cargando casos... ">
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
              <Column caption="Apellidos" cellRender={cellrender} width={200} />
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
              <Column dataField="idType.name" caption="Tipo de documento" />
              <Column dataField="idNumber" caption="Número de documento" />
              <Column dataField="email" caption="Correo" />
              <Column dataField="tel" caption="Teléfono" />
              <Column dataField="birthdate" caption="Fecha de nacimiento" />
              <Paging defaultPageSize={10} />
              <Pager
                visible={true}
                allowedPageSizes={allowedPageSizes}
                displayMode="full"
                showPageSizeSelector={true}
                showInfo={true}
                showNavigationButtons={true}
                infoText= 'Página {0} de {1} ({2} Registros)'
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
