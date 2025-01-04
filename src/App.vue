<script setup>
import HeaderElement from './components/HeaderElement.vue';
import FooterElement from './components/FooterElement.vue';
import Wrapper from './components/Wrapper.vue';
import NavMobileMenu from './components/Nav/NavMobileMenu.vue';
import AskForm from './components/AskForm.vue';
import { onMounted, onBeforeUnmount } from 'vue'
import { useStore } from 'vuex'
import ModalWindow from './components/ModalWindow.vue';
import { postAskForm, postCallBackForm } from './http/post_data';
import FotoGallery from './components/FotoGallery.vue'


const store = useStore();

const onResize = () => {
    store.dispatch('system/setWidth', window.innerWidth);
};
onResize();

onMounted(() => {
    store.dispatch('appData/initNavList');
    store.dispatch('appData/initContacts');
    store.dispatch('appData/initSocial');
    window.addEventListener('resize', onResize);
})

onBeforeUnmount(() => {
    window.removeEventListener('resize', onResize);
});

const handleEmailFormSubmit = async (data) => {
    try {
        await postAskForm({
            name: data.fullname,
            mail: data.contact,
            info: data.comment,
            recaptcha: data.recaptcha
        });
        showSuccessModal('почтовому адресу');
        store.dispatch('elementController/close');
        return true;
    } catch {
        showErrorModal();
        return false;
    }
};

const handlePhoneFormSubmit = async (data) => {
    try {
        await postCallBackForm({
            name: data.fullname,
            phone: data.contact,
            info: data.comment,
            recaptcha: data.recaptcha
        });
        showSuccessModal('телефонному номеру');
        store.dispatch('elementController/close');
        return true;
    } catch {
        showErrorModal();
        return false;
    }
};

const showSuccessModal = (askMethod) => {
    store.dispatch('modalController/openModal', {
        text: `Спасибо за обращение!<br>Мы свяжемся с Вами в ближайшее время по указанному ${askMethod}.`,
        title: 'Успешно отправлено',
        isError: false,
    });
};

const showErrorModal = () => {
    store.dispatch('modalController/openModal', {
        text: `Упс...<br> Кажется что-то пошло не так. Повторите попытку позднее.`,
        title: 'Отправка не удалась',
        isError: true,
    });
};
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
  <AskForm 
        v-if="$store.state.elementController.elements.askForm"
        :class="{'show': $store.state.elementController.elements.askForm}"
        fieldType="email" 
        :onSubmit="handleEmailFormSubmit"
        :title="'Задать вопрос'" 
    />
    <AskForm 
        v-if="$store.state.elementController.elements.callBackForm"
        :class="{'show': $store.state.elementController.elements.callBackForm}"
        fieldType="phone" 
        :onSubmit="handlePhoneFormSubmit" 
        :title="'Заказать звонок'" 
    />
  <ModalWindow :class="{'show': $store.state.modalController.isModal}" />
  <FotoGallery :class="{'show': $store.state.fotoGallery.isOpen}"/>
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

    .text ul li {
        list-style: disc;
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

    @media (max-width: 500px) {
        .carousel.fotogallery .carousel__prev, 
        .carousel.fotogallery .carousel__next {
            width: 30px !important;
            height: 30px !important;
            top: calc(50% - 15px) !important;
            border-radius: 100%;
        }

        .carousel.fotogallery .carousel__prev {
            left: -15px !important;
        }

        .carousel.fotogallery .carousel__next {
            right: -15px !important;
        }
    }

    .contact__tels-list li {
        list-style: disc;
    }

    .contact__email a {
        color: var(--green-dark) !important;
        text-decoration: underline;
    }

    .contact-yamap {
        border: 2px solid var(--green-light);
        border-radius: 12px;
        padding: 2px;
    }

    .open-fotogallery:hover {
        cursor: pointer;
        transition: transform 0.3s ease, filter 0.3s ease;
        transform: scale(1.01);
        filter: brightness(0.8);
    }

    .link-wrapper {
        display: flex;
        justify-content: start;
        position: relative;
    }

    .link-wrapper:hover {
        opacity: 1;
    }

    .text ul {
        margin-left: 16px;
    }

    .birdlink:hover {
        opacity: 1;
    }

    .carousel.house-slider button.carousel__prev:hover,
    .carousel.house-slider button.carousel__next:hover {
        opacity: 1 !important;
    }
</style>
