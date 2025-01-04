<template>
    <section class="gallery" v-if="bannersList.length">
        <carousel 
            :items-to-show="1" 
            class="carousel" 
            :autoplay="5000" 
            :transition="600" 
            :wrapAround="true" 
            :mouseDrag="false" 
            :touchDrag="false"
            ref="myCarousel" >
            <slide v-for="el in bannersList" :key="el.id" v-touch:swipe.left="doSwipeLeft"
            v-touch:swipe.right="doSwipeRight">
                <router-link
                :to="el.url" 
                class="gallery__wrapper">
                    <img :src="el.img" :alt="el.name" class="gallery__pic">
                    <p class="gallery__title-link"> {{ el.name }} </p>
                </router-link>
            </slide>

            <template #addons>
                <navigation v-if="bannersList.length"/>
                <pagination v-if="bannersList.length"/>
            </template>
        </carousel>
        <div class="bookingform-wrapper-in-gallery">
            <BookingForm class="general"/>
        </div>
    </section>
</template>

<script setup>
    import 'vue3-carousel/dist/carousel.css'
    import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
    import { ref, onMounted, getCurrentInstance, computed} from 'vue'
    import { useStore } from 'vuex'
    import BookingForm from '../BookingElements/BookingForm.vue'

    const store = useStore();
    const { appContext } = getCurrentInstance();
    const removeTitleAttributes = appContext.config.globalProperties.removeTitleAttributes;

    const myCarousel = ref(null);
    const doSwipeLeft = () => {
        myCarousel.value.next();
    };

    const doSwipeRight = () => {
        myCarousel.value.prev();
    };

    onMounted(() => {
        store.dispatch('appData/initBanners');
        if (removeTitleAttributes) removeTitleAttributes();
    });

    const bannersList = computed(() => store.state.appData.banners);
</script>

<style>

    .gallery {
        position: relative;
    }

    .bookingform-wrapper-in-gallery {
        position: absolute;
        right: 64px;
        top: calc(50% - 127px);
    }

    @media(max-width: 760px) {
        .bookingform-wrapper-in-gallery {
            position: static;
            background: var(--green-dark);
            width: auto;
            padding: 16px;
        }
    }
    


    a.gallery__wrapper {-webkit-tap-highlight-color: transparent;}
    .gallery__wrapper {
        display: block;
        position: relative;
        width: 100%;
        overflow: hidden;
        text-align: center;
    }

    .gallery__title-link {
        position: absolute;
        bottom: 21px;
        left: 44px;
        font-family: "Lobster", sans-serif;
        font-size: 48px;
        line-height: 60px;
        color: var(--white-color);
        text-shadow: 0 0 20px rgba(85, 219, 145, 0.5);
    }

    .gallery__title-link::after {
        content: url('../../assets/img/button_icon/to_link_light-green.svg');
        margin-left: 13px;

    }

    .gallery__wrapper:hover {
        opacity: 1;
    }

    .gallery__pic {
        width: 100%;
        height: auto; 
        max-height: 473px;
        object-fit: cover;
        object-position: center center;
    }

    

    .slider__arrows {
        position: absolute;
        left: 0;
        top: 45%;
        width: 100%;
        padding: 0 16px;
        display: flex;
        justify-content: space-between;
    }

    @media (max-width: 992px) {

        .gallery__wrapper {
            height: 368px;
        }
    }
    @media (max-width: 530px) {
        .gallery__pic {
            width: auto;
            height: 100%;

        }

        .gallery__wrapper {
            display: flex;
            justify-content: center;
        }

        .gallery__title-link {
            bottom: 44px;
            left: 0;
            text-align: center;
            width: 100%;
        }
    }
</style>