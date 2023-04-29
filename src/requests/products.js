import {instance} from '../services/api.js'



export async function getAllProducts() {
    try {
        const resp = await instance.get('/products'); 
         return resp.data.products;
    } catch (error) {
        console.log(error.message);
    }

}

export async function getProductById(id) {
    try {
        const resp = await instance.get(`/products/${id}`);
        console.log(resp)
         return resp.data;
    } catch (error) {
        console.log(error.message);
    }

}