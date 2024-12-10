<template>
    <div class='nav-mobile'>
        <img src="../../assets/img/button_icon/close.svg" alt="Закрыть" class="close" @click="close">
        <NavList class="mobile__nav"/>
   </div>
</template>

<script setup>
import NavList from './NavList.vue';
import { useStore } from 'vuex'

const store = useStore();

const close = () => {
  store.dispatch('elementController/close');
};
</script>

<style>
    .nav-mobile {
        left: -100%;
        position: fixed;
        top: 0;
        bottom: 0;
        width: 50%;
        height: 100svh;
        background-color: var(--green-color);
        z-index: 15;
        padding: 100px 20px 100px 50px;
        -webkit-transition: 0.5s;
        -o-transition: 0.5s;
        transition: 0.5s;
    }

    .nav-mobile.show {
        left: 0;
    }

    .close {
        width: 25px;
        height: 25px;
        position: absolute;
        right: 10px;
        top: 10px;
        cursor: pointer;
    }

    .mobile__nav {
        flex-direction: column;
    }
</style>