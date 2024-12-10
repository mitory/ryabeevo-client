<template>
    <ul class="nav__list">
        <li class="nav__element" :class="$route.path === '/company' ? 'active' : ''" @click="close">
            <router-link to="/company">О нас</router-link>
        </li>
        <li class="nav__element" :class="$route.path === '/catalog' ? 'active' : ''" @click="close">
            <router-link to="/catalog">Проживание</router-link>
        </li>
        <li class="nav__element" :class="$route.path === '/services/banketnyy-zal' ? 'active' : ''" @click="close">
            <router-link to="/services/banketnyy-zal">Банкетные залы</router-link>
        </li>
        <li class="nav__element" :class="$route.path === '/services' ? 'active' : ''" @click="close">
            <router-link to="/services">Услуги</router-link>
        </li>
        <li class="nav__element" :class="$route.path === '/promo' ? 'active' : ''" @click="close">
            <router-link to="/promo">Акции</router-link>
        </li>
        <li class="nav__element" :class="$route.path === '/contacts' ? 'active' : ''" @click="close">
            <router-link to="/contacts">Контакты</router-link>
        </li>
    </ul>
</template>
<script setup>
import { useStore } from 'vuex'

const store = useStore();

const close = () => {
  store.dispatch('elementController/close');
};
</script>

<style>
    .nav__list {
        display: flex;
        gap: 52px;
    }

    .nav__element a {
        color: var(--white-color);
        font-size: 14px;
        font-weight: 700;
        line-height: 18px;
        letter-spacing: 1px;
        z-index: 1;
        position: relative;
    }

    .nav__element {
        position: relative;
    }
    .nav__element.active::before {
        content: '';
        position: absolute;
        top: -16px;
        left: -16px;
        right: -16px;
        bottom: -16px;
        background: var(--green-dark);
        z-index: 0;
    }

    @media (max-width: 992px) {
        .nav__list {
            gap: 16px;
        }
        .nav__element.active::before {
            left: -8px;
            right: -8px;
        }
    }

    @media (max-width: 760px) {
        .nav__element.active::before {
            top: -8px;
            bottom: -8px;
        }
        .nav__element a {
            display: inline-block;
            width: 100%;
            height: 100%;
        }
    }
</style>