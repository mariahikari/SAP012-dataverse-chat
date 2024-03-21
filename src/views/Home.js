import { header } from '../components/header/index.js';
import { footer } from "../components/footer/index.js";
import { filters } from "../components/filters/index.js";


export const Home = () => {
  const rootElements = document.getElementById("root");
  rootElements.insertAdjacentElement("beforebegin", header());

  const filtersEl = filters();
  rootElements.insertAdjacentElement('beforebegin', filtersEl);

  rootElements.insertAdjacentElement("afterend", footer());


  return rootElements;
  
}

