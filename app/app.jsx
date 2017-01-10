import "../node_modules/bootstrap-sass/assets/stylesheets/_bootstrap.scss";
//import "../node_modules/bootstrap-sass/assets/stylesheets/_bootstrap-sprockets.scss";
import React from 'react';
import ReactRom from 'react-dom';
import Deskmark from './components/Deskmark';


const app=document.createElement('div');
document.body.appendChild(app);
ReactRom.render(<Deskmark />,app);