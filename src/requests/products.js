import {instance} from '../services/api.js'



export async function getAllProducts(){
 const resp = await instance.get('/products')
  console.dir(resp)
 return resp.data.products;
}