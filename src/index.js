// En este archivo definirás tus rutas e importarás los componentes que vas a renderizar.

import { Home } from './views/Home.js';
import { Chat } from './views/chat/index.js';
import { setRootEl, setRoutes, onURLChange } from './router.js';

const routes = {
  "/": Home,
  "/Chat": Chat
}

setRoutes(routes);

window.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root"); 
  setRootEl(root);
  onURLChange();

});

