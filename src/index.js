import './styles/normalize.css';
import './styles/index.css';
import {getAllProducts} from './requests/products'
import { createAllProductMarkap } from './services/markupService';
import refs from './refs';

async function renderProducts(){
  const allProducts = await getAllProducts();
   
  const allProductsMarkup = await createAllProductMarkap(allProducts);

  refs.allProducts.insertAdjacentHTML('beforeend', allProductsMarkup)

}

renderProducts();



