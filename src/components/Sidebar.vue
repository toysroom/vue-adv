<script setup lang="ts">
import { RouterLink } from 'vue-router';

</script>

<template>
    <div class="sidebar bg-light">
        <h4>Sidebar</h4>
        <ul class="nav flex-column">
            <li class="nav-item">
                <RouterLink class="nav-link active" to="/">Dashboard</RouterLink>
            </li>
            <li class="nav-item">
                <RouterLink class="nav-link" to="/prodotti">Prodotti</RouterLink>
            </li>
        </ul>
    </div>
</template>