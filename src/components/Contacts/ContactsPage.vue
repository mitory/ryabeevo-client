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
            <div class="contact-blocks">
                <div class="contact-block">
                    <img src="../../assets/img/contacts_icon/mapmarker.svg" alt="" class="icon">
                    <div class="contact-wrapper">
                        <h3 class="subtitle">Адресс</h3>
                        <Adress />
                    </div>
                </div>
                <div class="contact-block">
                    <img src="../../assets/img/contacts_icon/phone.svg" alt="" class="icon">
                    <div class="contact-wrapper">
                        <h3 class="subtitle">Телефон</h3>
                        <Tels class="flex-column"/>
                    </div>
                </div>
                <div class="contact-block">
                    <img src="../../assets/img/contacts_icon/clock.svg" alt="" class="icon">
                    <div class="contact-wrapper">
                        <h3 class="subtitle">Режим работы</h3>
                        <p>Круглосуточно</p>
                    </div>
                </div>
                <div class="contact-block">
                    <img src="../../assets/img/contacts_icon/mail.svg" alt="" class="icon">
                    <div class="contact-wrapper">
                        <h3 class="subtitle">E-mail</h3>
                        <Mails />
                    </div>
                </div>
            </div>
            <SocialMedias class="social-medias"/>
        </div>
   </div>
   <YandexMap />
</template>

<script setup>
import Adress from './Adress.vue';
import Mails from './Mails.vue';
import Tels from './Tels.vue';
import SocialMedias from './SocialMedias.vue';
import YandexMap from '../MainPageComponents/YandexMap.vue';
</script>

<style scoped>
    .title-block {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-bottom: 16px;
    }

    .icon {
        background: var(--green-dark);
        border-radius: 100%;
        padding: 10px;
        width: 48px;
        height: 48px;
    }

    .contact-blocks {
        width: 600px;
        margin: 0 auto;
        display: grid;
        grid-template-columns: 1.3fr 1fr;
        align-items: center;
        gap: 24px;
    }

    .contact-block {
        display: flex;
        gap: 16px;
        align-items: center;
    }

    .flex-column {
        display: flex;
        flex-direction: column;
    }

    .contacts__content {
        display: flex;
        flex-direction: column;
        gap: 32px;
        padding-bottom: 32px;
        align-items: center;
    }

    .social-medias {
        width: 600px;
        position: relative;
        right: 0;
        background: var(--green-dark);
        padding: 5px;
        border-radius: 12px;
        justify-content: center;
        gap: 32px;
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