import './styles/normalize.css';
import './styles/index.css';
import {getAllProducts, getProductById} from './requests/products'
import { createAllProductMarkap, createSingleProductMarkup } from './services/markupService';
import refs from './refs';
// =========TASK1==========
// async function renderProducts() {
//   try {
//     const allProducts = await getAllProducts();
//     const allProductsMarkup = await createAllProductMarkap(allProducts);
//     refs.allProducts.insertAdjacentHTML('beforeend', allProductsMarkup);
//   } catch (error) {
//     console.log(error.message)
//   }

// }

// renderProducts();

// ==========TASK2===========
refs.singleProductForm.addEventListener("submit", onSearchFormSubmit);

async function onSearchFormSubmit(event) {
  event.preventDefault();
try {
  const id = event.currentTarget.elements.id.value.trim();
  const result = await getProductById(id);
  const markup = createSingleProductMarkup(result);
  refs.singleProduct.innerHTML = markup;
} catch (error) {
  console.log(error.message);
}
}

