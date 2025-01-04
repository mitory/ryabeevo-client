<template>
    <div class = ''>
        <div class="image-container">
            <img :src="props.image_main.file" :alt="props.image_main.name">
        </div>
        <div class="container">
            <div class="title-block">
                <h1 class="title-page">
                    {{ props.name }}
                    </h1> 
                <div class="links-path">
                        <router-link to="/">Главная</router-link>
                        <div class="elips" v-if="props.backlink && props.backname"></div>
                        <router-link :to="props.backlink" v-if="props.backlink && props.backname">{{ props.backname }}</router-link>
                        <div class="elips"></div>
                        <div class="this-path">
                            {{ props.name }}
                        </div>
                </div>
            </div>
            <div class="content">
                <div class="text" v-html="props.text">
                </div>
                <div class="gallery">
                    <img 
                        v-for="(el, index) in props.gallery" 
                        :key="el.id" 
                        :src="el.file" 
                        :alt="el.name" 
                        class="gallery__img open-fotogallery"
                        @click="openFotoGallery(props.gallery, index)">
                </div>
            </div>
        </div>
   </div>
</template>

<script setup>
import { useStore } from 'vuex'

const store = useStore();

const props = defineProps({
        name: {
            type: String,
            default: ''
        },
        text: {
            type: String,
            default: ''
        },
        gallery: {
            type: Array,
            default: () => []
        },
        image_main: {
            type: Object,
            default: {}
        },
        backlink: {
            type: String
        },
        backname: String
    })
const openFotoGallery = (data, index) => {
    store.dispatch('fotoGallery/open', {data, index});
}
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
        flex-direction: column;
        gap: 16px;
    }

    .text {
        width: 584px;
    }

     .gallery {
        width: 100%;
        display: flex;
        gap: 8px;
        flex-wrap: wrap;
    } 
    .gallery__img {
        flex-grow: 1;
        max-width: 24%;
        aspect-ratio: 1; 
        object-fit: cover; 
        object-position: center; 
        overflow: hidden;
        border-radius: 8px;
    }

    .container {
        width: calc(584px + 16px + 384px);
        padding: 0 auto;
    }

    @media (max-width: 992px) {
        .container {
            width: auto;
            padding: 0 16px;
         }
        .text {
            width: auto;
            max-width: 584px;
        }
    }

    @media (max-width: 760px) {
        .gallery__img {
            max-width: 49%;
        }
    }

    @media (max-width: 432px) {
        .gallery__img {
            max-width: 48%;
        }
    }
</style>