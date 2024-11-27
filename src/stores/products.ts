import { ref } from 'vue'
import axios from 'axios';
import { defineStore } from 'pinia'
import type { Product } from '@/models/Product';

export const useProductStore = defineStore('products', () => {
    const data = ref<Product[]>([]);

    const loadProducts = async () => {
        const url = 'http://localhost:3000/products';
        const response = await axios.get(url);
        data.value = response.data;
    }

    const delProduct = async (product: Product) => {
        if (confirm('Sei sicuro di cancellare?')) {
            const url = 'http://localhost:3000/products/'+product.id;
            await axios.delete(url);
            data.value = data.value.filter( (el: Product) => el.id !== product.id);
        }
    }

    const addProduct = async (newProduct: Product) => {
        const url = 'http://localhost:3000/products/';
        const response = await axios.post(url, newProduct);
        data.value = [...data.value, response.data];
    }

    const updateProduct = async (newProduct: Product) => {
        const url = 'http://localhost:3000/products/'+newProduct.id;
        const response = await axios.put(url, newProduct);
        data.value = data.value.map( (el) => (el.id === newProduct.id) ? response.data : el );
    }
    

    return {
        data,
        loadProducts,
        delProduct,
        addProduct,
        updateProduct,
    }
    
})
