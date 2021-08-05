import React from "react";
import "./style.css";
import Card from "./Components/layout/Card";
import Media from './Components/Aleatorio'

export default () => {
  return (
    <div id="app">
      <Card titulo="Exemplo de Card">
        <Media max={15} min={2}></Media>
      </Card>
    </div>
  );
};
