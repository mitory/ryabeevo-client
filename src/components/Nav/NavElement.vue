<template>
    <nav>
        <NavList />
        <img src="../../assets/img/button_icon/menu-burger.svg" alt="" class="menu-burger-button" @click="openMenu">
        <SocialMedias class="social-medias" />
    </nav>
</template>

<script setup>
import NavList from './NavList.vue'
import SocialMedias from '../Contacts/SocialMedias.vue'
import { useStore } from 'vuex'

const store = useStore();

const openMenu = () => {
  store.dispatch('elementController/openMobileMenu');
};
</script>

<style>
    nav {
		background: var(--green-color);
		padding: 16px 0;
		display: flex;
		justify-content: center;
		position: relative;
	}

	.menu-burger-button {
		display: none;
	}

	@media (max-width: 760px) {
		nav .nav__list {
			display: none;
		}
		.menu-burger-button {
			display: block;
		}
		nav {
			justify-content: space-between;
			padding-left: 80px;
		}
	}
</style>