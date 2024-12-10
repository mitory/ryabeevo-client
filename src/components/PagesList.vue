<template>
    <div class = 'container' :class="data.classContainer">
        <div class="title-block">
           <h1 class="title-page">{{ data.title }}</h1> 
           <div class="links-path">
                <router-link to="/">Главная</router-link>
                <div class="elips"></div>
                <div class="this-path">{{ data.title }}</div>
           </div>
        </div>
        <div class="pages-list" :class="data.classList">
            <div class="pages-list__element" v-for="el in data.elements" :key="el.id" :class="data.classElement">
                <div class="pic__wrapper">
                    <img :src="el.urlimg" alt="">
                </div>
                <div class="pages-list__text">
                    <h3 class="subtitle">{{ el.title }}</h3>
                    <p class="pages-list__description">
                        {{ el.desctiption }}
                    </p>
                    <div class="link-wrapper">
                        <router-link :to="el.link ? el.link : '/services/banketnyy-zal'" class="link">Подробнее</router-link>
                    </div>
                </div>
            </div>
        </div>
   </div>
</template>

<script setup>
const props = defineProps(['data'])

</script>

<style scoped>

    .container {
        max-width: 670px;
        padding: 0 16px;
    }

    .title-block {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-bottom: 16px;
    }

    .pages-list {
        display: flex;
        flex-direction: column;
        gap: 32px;
        padding-bottom: 32px;
        align-items: center;
    }

    .title-page {
        margin: 8px 0px;
    }

    .pic__wrapper {
        margin: 0;
        border: 5px solid var(--white-color);
        width: 150px;
        height: 150px;
    }

    .pages-list__element {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 32px;
        background-color: var(--green-dark);
        padding: 16px 64px;
        border-radius: 12px;
    }

    .pages-list__text {
        width: 350px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        gap: 8px;
    }

    .subtitle {
        margin-bottom: 8px;
    }

    .pages-list__description {
        color: var(--white-color);
    }

    .link-wrapper {
        display: flex;
        justify-content: start;
    }

    .link {
        color: var(--green-light);
    }

    .link:hover {
        color: var(--white-color);
        opacity: 1;
    }

    .link:hover::after {
        content: url('../assets/img/button_icon/to_link_white.svg');
    }

    .link::after {
        content: url('../assets/img/button_icon/to_link_light.svg');
        width: 8px;
        height: 8px;
        margin-left: 8px;
    }

    @media (max-width: 670px) {
        .pages-list__element {
            flex-direction: column;
            gap: 16px;
            padding: 16px 32px;
        }
        .pages-list__text {
            max-width: 350px;
            text-align: center;
        }
        .subtitle {
            margin-bottom: 0;
        }
        .pic__wrapper {
            width: 117px;
            height: 117px;
        }
        .link-wrapper {
            display: flex;
            justify-content: center;
        }
    }

    @media (max-width: 430px) {
        .pages-list__element {
            padding: 16px;
        }
        .pages-list__text {
            max-width: 280px;
        }
    }
</style>