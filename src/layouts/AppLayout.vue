<script setup>
import Navbar from '../components/Navbar.vue'
import Sidebar from '../components/Sidebar.vue'
</script>

<template>
    <Navbar />
    <div class="wrapper">
        <Sidebar />
        <div class="content">
            <slot></slot>
        </div>
    </div>
</template>