<template>
    <PagesList :data="servicesList" />
</template>

<script setup>
import PagesList from '../PagesList.vue';
import { servicesList } from '../../datas/services-list'
</script>

<style scoped>
    
</style>