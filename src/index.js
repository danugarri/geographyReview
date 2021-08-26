import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CountryCapitalGame from './components/CountryCapitalGame/CountryCapitalGame';

import { Presentation } from "./components/Presentation/Presentation";

ReactDOM.render(
  <React.StrictMode>
    <Presentation />
    <CountryCapitalGame />

  </React.StrictMode>,
  document.getElementById('root')
);

