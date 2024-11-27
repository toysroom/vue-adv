<script setup lang="ts">
import { Product } from '../../models/Product';
import { Status } from '../../models/Status';
defineProps({
    columns: {
        type: Array
    },
    data: {
        type: Array
    }
})

defineEmits([
    'onBtn1',
    'onBtn2',
])

</script>

<template>
    <table className="table">
        <thead>
            <tr>               
                <th v-for="(column, index) in columns" :key="index">{{ column }}</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(el, index) in data" :key="index">
                <td>{{ index+1 }}</td>
                <td>{{ el['name'] }}</td>
                <td>{{ el.cod }}</td>
                <td>{{ el.price }}</td>
                <td>{{ el.size }}</td>
                <td><button className="btn btn-primary" @click="$emit('onBtn2', el)">Modifica</button></td>
                <td><button className="btn btn-danger" @click="$emit('onBtn1', el)">
                    {{ el.destroy === Status.loading ? 'Cancellazione in corso...' : 'Cancella' }}    
                </button></td>
            </tr>
        </tbody>
    </table>
</template>