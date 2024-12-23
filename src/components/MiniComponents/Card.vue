<template>
    <router-link :to="props.link" class="link-wrapper">
    <div class="catalog__card">
        <div class="catalog-title__wrapper">
            <h2 class="catalog__title">
                {{ props.title }}
            </h2>
        </div>
        <div class="image-container">
            <img :src="props.image_main.file" :alt="props.image_main.name" class="catalog__img">
        </div>
        <div class="text">
            <p>
                {{ props.desc }}
            </p>
        </div>
    </div>
    <div class="link_container">
        <router-link :to="props.link"><div class="next-page"></div></router-link>
    </div>
    </router-link>
</template>

<script setup>
    const props = defineProps(['title', 'desc', 'image_main', 'link'])
</script>

<style scoped>
    .link-wrapper {
        display: flex;
        justify-content: start;
        position: relative;
    }

    .link-wrapper:hover {
        opacity: 1;
    }

    .catalog__card {
        padding: 0 32px 32px 32px;
        border: 2px solid var(--green-light);
        border-radius: 20px;
        display: flex;
        flex-direction: column;
        gap: 16px;
        width: 100%;
    }

    .catalog-title__wrapper {
        display: flex;
    }

    .catalog__title {
        box-sizing: content-box;
        font-size: 19px;
        font-weight: 700;
        line-height: 28px;
        letter-spacing: 1px;
        color: var(--green-dark);
        padding: 4px 8px;
        background: var(--white-color);
        margin-top: -19px;
        z-index: 1;
    }

    .image-container img {
        max-height: 186px;
    }

    .catalog__img {
        border-radius: 20px;
    }

    .link_container {
        display: flex;
        justify-content: center;
    }

    .next-page {
        position: absolute;
        bottom: calc(-20px);
        left: calc(50% - 20px);
        width: 40px;
        height: 40px;
        background: url('../../assets/img/button_icon/arrow-left.svg')  center no-repeat;
        transform: rotate(180.00deg);
    }

    @media (max-width: 759px) {
        .catalog__card {
            padding: 0 16px 32px 16px;
            gap: 8px;
        }
    }
</style>