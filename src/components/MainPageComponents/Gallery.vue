<template>
    <section class="gallery">
        <carousel 
            :items-to-show="1" 
            class="carousel" 
            :autoplay="5000" 
            :transition="600" 
            :wrapAround="true" 
            :mouseDrag="false" 
            :touchDrag="false"
            ref="myCarousel" >
            <slide v-for="slide in 5" :key="slide" v-touch:swipe.left="doSwipeLeft"
            v-touch:swipe.right="doSwipeRight">
                <a 
                href="" 
                class="gallery__wrapper">
                    <img src="../../assets/outimg/gallery/pic1.jpg" alt="" class="gallery__pic">
                </a>
            </slide>

            <template #addons>
                <navigation />
                <pagination />
            </template>
        </carousel>
    </section>
</template>

<script>
    import 'vue3-carousel/dist/carousel.css'
    import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
    import { ref } from 'vue'

    export default {
        name: 'App',
        components: {
            Carousel,
            Slide,
            Pagination,
            Navigation,
        },
        setup() {
            const myCarousel = ref(null);
            const doSwipeLeft = () => {
                myCarousel.value.next();
            };

            const doSwipeRight = () => {
                myCarousel.value.prev();
            };

            return {
                myCarousel,
                doSwipeLeft,
                doSwipeRight,
            };
        },
        mounted() {
            this.removeTitleAttributes();
        },
        updated() {
            this.removeTitleAttributes();
        },
    }
</script>

<style>
    a.gallery__wrapper {-webkit-tap-highlight-color: transparent;}
    .gallery__wrapper {
        display: block;
        position: relative;
        width: 100%;
        overflow: hidden;
        text-align: center;
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
    }
</style>