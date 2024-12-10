<template>
    <div class="nav-tablet">
		<NavList />
	</div>
</template>

<script>
import NavList from '../Nav/NavList.vue'
export default {
    data() {
        return {
            
        }
    },
    components: {
        NavList
    },
    methods: {
        
    }
}
</script>

<style>
    .nav-tablet {
        display: none;
        background-color: var(--green-color);
        justify-content: center;
        padding: 16px 0;
    }

    .nav-tablet .nav__list {
        gap: 16px;
    }

    @media (max-width: 1200px) {
        .nav-tablet {
            display: flex;
        }
    }
    @media (max-width: 760px) {
	    .nav-tablet {
		    display: none;
	    }
    }
</style>