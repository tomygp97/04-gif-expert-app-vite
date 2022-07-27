// import React from 'react';
// // import ReactDOM from 'react-dom/client';
// import { createRoot } from 'react-dom/client';
// import GifExpertApp from "./GifExpertApp";

// import './index.css';


// // const root = createRoot(document.getElementById("root"));
// const root = createRoot(document.getElementById('root'));

// root.render( <GifExpertApp /> );


// //Tarea
// //Crear un archivo llamado GifExpertApp
// // <h2>GifExpertApp</h2>
// // <hr />


// ----------------------- Forma Nueva de Hacerlo ------------------------------ //

import React from 'react';
import ReactDOM from 'react-dom/client';
//import { createRoot } from 'react-dom/client';
import GifExpertApp from "./GifExpertApp";

import './index.css';


// const root = createRoot(document.getElementById("root"));
// const root = createRoot(document.getElementById('root'));

// root.render( <GifExpertApp /> );


ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <GifExpertApp />
    </React.StrictMode>
);
