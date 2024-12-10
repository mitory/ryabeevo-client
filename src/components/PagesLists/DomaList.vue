<template>
    <PagesList :data="domaList" />
</template>

<script setup>
import PagesList from '../PagesList.vue';
import { domaList } from '../../datas/doma'
</script>

<style>
    .container.dom-container {
        max-width: 100%;
    }

    .pages-list.dom-list {
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
    }

    .pages-list__element.dom-element {
        flex-direction: column;
        gap: 8px;
        padding: 16px 32px;
        flex-grow: 1;
    }

    .pages-list__element.dom-element .pages-list__text {
        align-items: center;
        gap: 0;
        width: auto;
    }
</style>