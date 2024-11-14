// Importar React en el bundle
import React from 'react';
import { createRoot } from 'react-dom/client';

// Incluir archivo de estilos
import "../styles/index.css";

import Layout from './layout';

// Crear el root
const root = createRoot(document.querySelector("#app"));

// Renderizar la aplicación
root.render(<Layout />);
