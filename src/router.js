let ROUTES = {};
let rootEl = null;

export const setRootEl = (el) => {
  rootEl = el; // assign rootEl
}

export const setRoutes = (routes) => {
  ROUTES = routes;// assign ROUTES
}

const queryStringToObject = (queryString) =>
  Object.fromEntries(new URLSearchParams(queryString).entries());

const renderView = (pathName, props = {}) => {
  // if (!(pathName in routes)) { 
  //   pathName = ERROR_PATH;
  // }
  rootEl.innerHTML = "";
  const viewEl = ROUTES[pathName](props);
  rootEl.appendChild(viewEl);
}

export const onURLChange = () => {
  const { pathname, searchParams } = window.location;// Analisa a localização para obter o pathname e os parâmetros de pesquisa
  const props = queryStringToObject(searchParams);// Converte os parâmetros de pesquisa em um objeto (se houver)
  renderView(pathname, props);// Renderiza a visualização com o pathname e o objeto de parâmetros
};


export const navigateTo = (pathName, props = {}) => {
  const link = window.location.origin + pathName;
  window.history.pushState({}, pathName, link);
  renderView(pathName, props);
};
