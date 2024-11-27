<script setup>
import { ref } from 'vue';
import axios from 'axios';
import { useProductStore } from '../stores/products';
import AppLayout from '../layouts/AppLayout.vue';
import ProductTable from '../components/products/ProductTable.vue'
import Modal from '../components/Modal.vue';
import { storeToRefs } from 'pinia';

const newProductInitialState = {
    name: '',
    cod: '',
    price: 0,
    size: '',
};

const modalToggle = ref(false);
const modalValues = ref(newProductInitialState);

const columns = ['#', 'Nome', 'Codice', 'Prezzo', 'Misura', 'Modifica', 'Cancella'];

const storeProducts = useProductStore();

const { loadProducts, delProduct, addProduct, updateProduct } = storeProducts;
const { data } = storeToRefs(storeProducts);

const addButtonHandler = () => {
    modalToggle.value = true;
}

const closeModalHandler = () => {
    modalValues.value = newProductInitialState;
    modalToggle.value = false;
}


const saveButtonHandler = (newProduct) => {
    if (newProduct.id)
    {
        updateProduct(newProduct);
    }
    else 
    {
        addProduct(newProduct);
    }
    closeModalHandler();
}

const editButtonHandler = (product) => {
    modalValues.value = {...product};
    modalToggle.value = true;
}

loadProducts();

</script>
<template>
    <AppLayout>
        <h1>Product view</h1>
        
        <div class="my-4">
            <button 
                class="btn btn-primary"
                @click="addButtonHandler"
                >Aggiungi prodotto
            </button>
        </div>
        <ProductTable
            :columns="columns"
            :data="data"
            @onBtn1="delProduct" 
            @onBtn2="editButtonHandler"
        />

        <Modal 
            :modalToggle="modalToggle"
            :modalValues="modalValues"
            @closeModal="closeModalHandler"
            @saveButton="saveButtonHandler"
         />
    </AppLayout>
</template>