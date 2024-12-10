<template>
    <div class='wrapper' @click="close"></div>
</template>


<script setup>
import { useStore } from 'vuex'

const store = useStore();

const close = () => {
  store.dispatch('elementController/close');
};
</script>

<style scoped>
    .wrapper {
        display: none;
        position: fixed;
        z-index: 10;
        left: 0;
        top: 0;
        width: 100%;
        height: 100svh;
        overflow: auto;
        background-color: rgba(0, 0, 0, 0.5);
        -webkit-backdrop-filter: blur(5px);
        backdrop-filter: blur(5px);
    }
    .wrapper.show {
        display: block;
    }
</style>