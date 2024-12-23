<template>
    <div class='nav-mobile'>
        <CloseButton />
        <NavList class="mobile__nav"/>
   </div>
</template>

<script setup>
import NavList from './NavList.vue';
import CloseButton from '../MiniComponents/CloseButton.vue';
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

    .mobile__nav {
        flex-direction: column;
    }
</style>