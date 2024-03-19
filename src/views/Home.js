import { header } from '../components/header/index.js';
import { footer } from "../components/footer/index.js";
import { filters } from "../components/filters/index.js";
import { renderItems } from "../components/cards/index.js";
// import { filterData, sortData, computeStats } from "../../lib/dataFunctions.js";

import data from '../../data/dataset.js';

export const Home = () => {
  const rootElements = document.getElementById("root");
  rootElements.insertAdjacentElement("beforebegin", header());

  const filtersEl = filters();
  rootElements.insertAdjacentElement('beforebegin', filtersEl);

  rootElements.insertAdjacentElement("afterend", footer());


  return rootElements;
  
}

