<template>
    <PagesList 
        :name="'Акции'"
        :elements="promoList"
        :code="'promo'"
    />
</template>

<script setup>
import PagesList from './PagesList.vue';
import { useStore } from 'vuex'
import { computed } from 'vue'

const store = useStore();
store.dispatch('appData/initPromo');

const promoList = computed(() => store.state.appData.promo)
</script>

<style scoped>
    
</style>