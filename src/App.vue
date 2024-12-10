<script setup>
import HeaderElement from './components/HeaderElement.vue';
import FooterElement from './components/FooterElement.vue';
import Wrapper from './components/Wrapper.vue';
import NavMobileMenu from './components/Nav/NavMobileMenu.vue';
import { getContacts } from './http/api'
import { onMounted } from 'vue'


onMounted(async () => {
    const response = await getContacts()
    console.log(response)
})
</script>

<template>
    <div class="app-wrapper">
        <HeaderElement />
        <div class="app-content">
            <router-view></router-view>
        </div>
    </div>
    <FooterElement class="app-footer"/>
  
  <Wrapper :class="{'show': $store.state.elementController.wrapper}" />
  <NavMobileMenu :class="{'show': $store.state.elementController.elements.mobileMenu}" />
</template>

<style>
:root {
	--white-color: #fff;
	--black-color: #000;
	--green-color: #008B45;
	--green-light: #55DB91;
	--green-dark: #016C36;
}

* {
	font-family: "PT Sans Caption", serif;
	font-size: 13px;
}

body {
	font-weight: 400;
	line-height: 17px;
	letter-spacing: 0px;
	color: var(--green-color);
}

.app-wrapper {
    display: flex;
	flex-direction: column;
	min-height: calc(100vh - 161px);
}

@media (max-width: 760px) {
    .app-wrapper {
        min-height: calc(100vh - 217px);
    }
}

button, a {
	color: var(--green-color);
}

button:hover, a:hover {
	opacity: 0.8;
}

.container {
	max-width: 1416px;
	margin: 0 auto;
}

@media (max-width: 1416px) {
	.container {
		padding: 0 16px;
	}
}

.social-medias {
      position: absolute;
      right: 42px;
      top: calc(50% - 12px);
      display: flex;
      gap: 4px;
  }
  @media (max-width: 992px) {
      .social-medias {
          right: 15px;
      }
  }

  .carousel__prev, .carousel__next {
        margin: 0 !important;
        padding: 0 !important;
        width: 40px !important;
        height: 40px !important;
        background: url('./assets/img/button_icon/arrow-left.svg')  center no-repeat !important;
        top: calc(50% - 20px) !important;
    }

    .carousel__prev {
        left: 16px !important;
        transform: translateY(0) !important;
    }
    .carousel__next {
        transform: rotate(180.00deg) !important;
        right: 16px !important;
    }
    .carousel__prev > svg, 
    .carousel__next > svg {
        display: none !important;
    }

    .carousel__pagination-button::after {
        width: 10px !important;
        height: 10px !important;
        background-color: var(--green-light) !important;
        border-radius: 50% !important;
    }
    .carousel__pagination-button {
        padding: 0 !important;
    }

    .carousel__pagination-button--active::after {
        width: 18px !important;
        height: 18px !important;
        background-color: var(--green-color) !important;
    }
    .carousel__pagination {
        align-items: center !important;
        gap: 8px !important;
    }


    h2.title {
        font-size: 32px;
        line-height: 41px;
        letter-spacing: 1px;
        text-align: center;
    }

    @media (max-width: 550px) {
        h2.title {
            font-size: 25px;
            line-height: 32px;
        }
    }

    h3.subtitle {
        color: var(--green-light);
        font-size: 22px;
        font-weight: 700;
        line-height: 28px;
        margin-bottom: 4px;
    }

    h1.title-page {
        font-size: 32px;
        line-height: 41px;
        letter-spacing: 1px;
        color: #9F9F9F;
    }

    .text * {
        font-size: 13px;
        line-height: 17px;
        color: #4A4A4A;
    }

    .image-container {
        position: relative;
        width: 100%;
        overflow: hidden;
        text-align: center;
    }

    .image-container img {
        width: 100%;
        object-fit: cover;
        object-position: center center;
    }

    .hide {
        display: none !important;
    }

    .pic__wrapper {
        border-radius: 100%;
        border: 5px solid var(--green-light);
        width: 117px;
        height: 117px;
        margin: 16px auto;
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .pic__wrapper img {
        height: 100%;
        display: inline-block;
        zoom: 1;
    }

    .title-block {
        margin: 8px 0;
    }

    @media (max-width: 760px) {
        .title-block {
            margin: 16px 0 8px 0;
        }
    }

    .links-path {
        display: flex;
        align-items: center;
        gap: 16px;
    }

    @media (max-width: 352px) {
        .links-path {
            gap: 8px;
        }
    }
    
    .elips {
        width: 5px;
        height: 5px;
        border-radius: 100%;
        background: #E3E2E2;
    }

    .this-path {
        color: #B2D8D3;
    }

    .carousel.house-slider .carousel__prev {
        left: -20px !important;
    }

    .carousel.house-slider .carousel__next {
        right: -20px !important;
    }
</style>
