<template>
    <div class = ''>
        <div class="image-container">
            <img :src="props.data.imglink" alt="">
        </div>
        <div class="container">
            <h1 class="title-page">
                {{ props.data.title }}
            </h1>
            <div class="content">
                <div class="text" v-html="props.data.text">
                </div>
                <div class="gallery">
                    <img v-for="element in props.data.gallery" :key="element.id" :src="element.url" alt="" class="gallery__img">
                </div>
            </div>
        </div>
   </div>
</template>

<script setup>
const props = defineProps(['data'])

</script>

<style scoped>

    .image-container img {
        max-height: 400px;
    }

    .title-page {
        margin: 8px 0;
    }

    .content {
        padding: 16px 0 36px 0;
        display: flex;
        gap: 16px;
    }

    .text {
        width: 584px;
    }

    .gallery {
        width: calc(384px + 2px);
        display: flex;
        gap: 2px;
        flex-wrap: wrap;
    }

    .gallery__img {
        width: 49%;
    }

    .container {
        width: calc(584px + 16px + 384px);
        padding: 0 auto;
    }

    @media (max-width: 992px) {
        .content {
            flex-direction: column;
        }
        .container {
            width: auto;
            padding: 0 16px;
        }
        .gallery {
            width: 100%;
        }
        .gallery__img {
            width: 24%;
        }
        .text {
            width: auto;
            max-width: 584px;
        }
    }

    @media (max-width: 760px) {
        .gallery__img {
            width: 49%;
        }
    }
</style>