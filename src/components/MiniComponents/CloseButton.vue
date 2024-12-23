<template>
    <img src="../../assets/img/button_icon/close.svg" alt="Закрыть" class="close" @click="close">
</template>

<script setup>
import { useStore } from 'vuex'

const store = useStore();
const close = () => {
  store.dispatch('elementController/close');
};
</script>

<style scoped>
    .close {
        width: 25px;
        height: 25px;
        position: absolute;
        right: 10px;
        top: 10px;
        cursor: pointer;
    }
</style>