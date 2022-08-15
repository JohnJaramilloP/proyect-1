import React, { useState } from "react";
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

import "devextreme/dist/css/dx.light.css";
import { Card, Grid, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

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
    "Oliver Hansen",
    "Van Henry",
    "April Tucker",
    "Ralph Hubbard",
    "Omar Alexander",
    "Carlos Abbott",
    "Miriam Wagner",
    "Bradley Wilkerson",
    "Virginia Andrews",
    "Kelly Snyder",
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
  const [personName, setPersonName] = useState([]);
  const [data, setData] = useState([
    {
      id: 1,
      articulo: "caso 1",
      descripcion: "Familiar",
    },
    {
      id: 2,
      articulo: "caso 2",
      descripcion: "Penal",
    },
  ]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
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
        <Typography variant="h6">Elige la data:</Typography>

        <FormControl sx={{ 
            m: "20px 0", 
            width: "50%", 
            }}>
          <InputLabel id="demo-multiple-name-label">Nombre</InputLabel>
          <Select
            labelId="demo-multiple-name-label"
            id="demo-multiple-name"
            multiple
            value={personName}
            onChange={handleChange}
            input={<OutlinedInput label="Name" />}
            MenuProps={MenuProps}
          >
            {names.map((name) => (
              <MenuItem
                key={name}
                value={name}
                style={getStyles(name, personName, theme)}
              >
                {name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>

      <Card
        style={{
          padding: 10,
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
            //    this.borrarData(row.data);
          }}
          onRowInserted={(row) => {}}
          onInitialized={() => {}}
          onRowUpdated={(row) => {
            //  this.guardarData(row.data);
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
              title="Informacion de Referencia"
              showTitle={true}
              width={700}
              height={620}
            />
            <Form>
              <Item itemType="group" colCount={2} colSpan={2}>
                {/* <Item
                  dataField="pais"
                  editorType="dxSelectBox"
                  editorOptions={positionEditorOptions}
                /> */}
                <Item dataField="articulo" caption="Elemento" />
                <Item dataField="descripcion" caption="Descripción" />
              </Item>
            </Form>
          </Editing>
          <HeaderFilter visible={true} />
          <Selection
            mode="multiple"
            deferred={true}
            showCheckBoxesMode="always"
          />
          <Column dataField="articulo" caption="Elemento" />
          <Column dataField="descripcion" caption="Descripción" />
          <Paging defaultPageSize={10} />
          <Pager
            visible={true}
            allowedPageSizes={allowedPageSizes}
            displayMode="full"
            showPageSizeSelector={true}
            showInfo={true}
            showNavigationButtons={true}
          />
          <Export enabled={true} allowExportSelectedData={true} texts={texts} />
        </DataGrid>
      </Card>
    </div>
  );
};
