<template>
    <nav>
        <NavList />
        <img src="../../assets/img/button_icon/menu-burger.svg" alt="" class="menu-burger-button" @click="openMenu">
		<p class="mobile__this-path"> 
			{{ $route.path !== '/' ? $store.state.appData.navList.find(el => el.url === $route.path)?.name : '' }} 
		</p>
        <SocialMedias class="social-medias" :collection="$store.state.appData.social?.general"/>
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

	.mobile__this-path {
		display: none;
	}

	@media (max-width: 760px) {
		nav .nav__list {
			display: none;
		}
		.menu-burger-button {
			display: block;
		}

		.mobile__this-path {
			display: block;
			font-size: 14px;
			font-weight: 700;
			line-height: 18px;
			letter-spacing: 1px;
			color: var(--white-color);
		}
		nav {
			justify-content: start;
			align-items: center;
			gap: 8px;
			padding-left: 80px;
		}
	}
</style>