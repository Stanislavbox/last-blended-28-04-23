export async function createAllProductMarkap (arr){
 return arr.map(({brand, id, price }) => 
    `
    <li>
      <h2>${brand}</h2>
      <p>${price}</p>
      <p>${id}</p>
    </li>
    `
  ).join('');

}

export function createSingleProductMarkup(data) {
  
  const { brand, id, price } = data;
 return ` <h2>${brand}</h2>
      <p>${price}</p>
      <p>${id}</p>    
    `
}


