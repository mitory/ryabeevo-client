<template>
    <PagesList 
        :name="'Банкетные залы'"
        :elements="banketList"
        :code="'banketnye-zaly'"
        :classGrid="'banket-list'"
    />
</template>

<script setup>
import PagesList from './PagesList.vue';
import { useStore } from 'vuex'
import { computed } from 'vue'

const store = useStore();
store.dispatch('appData/initBanket');

const banketList = computed(() => store.state.appData.banket)
</script>

<style>
    .pages-list.banket-list {
        display: flex;
        flex-direction: column;
    }
</style>