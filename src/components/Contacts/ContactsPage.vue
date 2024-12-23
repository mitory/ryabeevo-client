<template>
    <div class = 'container'>
        <div class="title-block">
           <h1 class="title-page">Контакты</h1> 
           <div class="links-path">
                <router-link to="/">Главная</router-link>
                <div class="elips"></div>
                <div class="this-path">Контакты</div>
           </div>
        </div>
        <div class="contacts__content">
            <div class="links_wrapper">
                <div class="contact-block">
                    <div class="contact-element">
                        <h2 class="contact-title">Адрес:</h2>
                        <Adress :adress="$store.state.appData.contacts?.contactPageText"/>
                    </div>
                    <div class="contact-element">
                        <h2 class="contact-title">Телефоны:</h2>
                    <Tels class="flex-column contact__tels-list" :tels="$store.state.appData.contacts?.telPa"/>
                    </div>
                    <div class="contact-element">
                        <h2 class="contact-title">E-mail</h2>
                        <Mails class="flex-column contact__email"/>
                    </div>
                    <div class="contact-element">
                        <h2 class="contact-title">Режим работы</h2>
                        <p> {{ $store.state.appData.contacts?.workTime }} </p>
                    </div>
                </div>
                <SocialMedias class="social-medias" :isContactPage="true" :collection="$store.state.appData.social?.contactPage"/>
            </div>
            <YandexMap class="contact-yamap"/>
        </div>
   </div>
</template>

<script setup>
import Adress from './Adress.vue';
import Mails from './Mails.vue';
import Tels from './Tels.vue';
import SocialMedias from './SocialMedias.vue';
import YandexMap from '../MainPageComponents/YandexMap.vue';

</script>

<style scoped>
    .container {
        max-width: 984px;
    }

    .contact-block {
        display: flex;
        gap: 16px;
        flex-direction: column;
    }

    .contact-block * {
        color: rgb(74, 74, 74);
        max-width: 476px;
    }

    .contact__tels-list {
        padding-left: 20px;
    }

    .links_wrapper {
        display: flex;
        gap: 37.5px;
        align-items: start;
        margin-bottom: 27px;
    }
    
    
    .contact-title {
        font-size: 20px;
        font-weight: 700;
        line-height: 1em;
    }

    .flex-column {
        display: flex;
        flex-direction: column;
    }

    .contacts__content {
        padding: 32px 0 36px 0;
    }

    .social-medias {
        position: relative;
        right: 0;
        padding: 5px;
        flex-direction: column;
        gap: 8px;
    }

    @media (max-width: 750px) {
        .links_wrapper {
            gap: 16px;
            flex-direction: column;
        }
    }

    @media (max-width: 632px) {
        .contact-blocks {
            width: auto;
            grid-template-columns: 1fr;
        }
        .social-medias {
            width: 100%;
        }
    }
</style>