<script setup>
import { ref, watch } from 'vue';

const props = defineProps({
    modalToggle: {
        type: Boolean
    },
    modalValues: {
        type: Object
    }
});

const emit = defineEmits([
    'closeModal',
    'saveButton',
]);
const newProduct = ref({});

watch(
    () => props.modalValues,
    () => {
        newProduct.value = props.modalValues;
    }
)

</script>

<template>
    <div 
        :class="`modal ${ modalToggle ? '' : 'fade' }`" 
        :style=" { display: modalToggle ? 'block' : 'none'}">   
        <div class="modal-dialog">
            <form @submit.prevent="$emit('saveButton', newProduct)">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5">Aggiungi prodotto</h1>
                        <button type="button" class="btn-close" @click="$emit('closeModal')"></button>
                    </div>
                    <div class="modal-body">
                        <div class="mb-3">
                            <label htmlFor="name" class="form-label">Nome</label>
                            <input 
                                type="text" 
                                class="form-control" 
                                id="name"
                                v-model="newProduct.name"
                            />
                        </div>
                        <div class="mb-3">
                            <label htmlFor="cod" class="form-label">Codice</label>
                            <input 
                                type="text" 
                                class="form-control" 
                                id="cod"
                                v-model="newProduct.cod"
                            />
                        </div>

                        <div class="mb-3">
                            <label htmlFor="price" class="form-label">Prezzo</label>
                            <input 
                                type="text" 
                                class="form-control"
                                id="price"
                                v-model="newProduct.price"
                            />
                        </div>

                        <div class="mb-3">
                            <label htmlFor="size" class="form-label">Misura</label>
                            <input 
                                type="text" 
                                class="form-control" 
                                id="size"
                                 v-model="newProduct.size"
                            />
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" @click="$emit('closeModal')">Close</button>
                        <button class="btn btn-primary">Salva</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>