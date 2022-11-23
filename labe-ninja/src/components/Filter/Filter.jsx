import React from "react";
import { Div } from "./styled";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { theme } from "./Createtheme";
import { ThemeProvider } from "@mui/material/styles";

export default class Filter extends React.Component {
  render() {
    return (
      <Div className="App">
        <ThemeProvider theme={theme}>
          <TextField
            label="Valor mínimo"
            variant="outlined"
            type="number"
            size="small"
            onChange={this.props.onChangeMinValue}
            value={this.props.minValue}
          />
          <TextField
            type="number"
            size="small"
            onChange={this.props.onChangeMaxValue}
            value={this.props.maxValue}
            id="outlined-basic"
            label="Valor máximo"
            variant="outlined"
          />

          <TextField
            type="text"
            size="small"
            onChange={this.props.onChangeSearchProd}
            value={this.props.searchProd}
            id="outlined-basic"
            label="Buscar"
            variant="outlined"
            color="primary"
          />

          <FormControl sx={{ m: 0, minWidth: 150 }} color="primary">
            <InputLabel id="demo-simple-select-helper-label">
              Ordenar por:
            </InputLabel>
            <Select
              labelId="demo-simple-select-helper-label"
              size="small"
              id="demo-simple-select-helper"
              value={this.props.order}
              label="Ordenar por:"
              onChange={this.props.onChangeOrder}
            >
              <MenuItem value={"Título"}>Título</MenuItem>
              <MenuItem value={"Crescente"}>Crescente</MenuItem>
              <MenuItem value={"Decrescente"}>Decrescente</MenuItem>
              <MenuItem value={"Prazo"}>Prazo</MenuItem>
            </Select>
          </FormControl>
        </ThemeProvider>
      </Div>
    );
  }
}