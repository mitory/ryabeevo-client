<script setup>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Navigation } from 'vue3-carousel'
import { ref, onMounted, onBeforeUnmount, getCurrentInstance } from 'vue'

const myCarousel = ref(null);
const windowWidth = ref(window.innerWidth);

const breakpoints = {
    0: {
        itemsToShow: 1,
        snapAlign: 'start'
    },
    540: {
        itemsToShow: 2,
        snapAlign: 'start'
    },
    760: {
        itemsToShow: 3,
        snapAlign: 'start'
    }
};

const slides = [
    { id: 1, title: 'Банкетный зал', desctiption: 'Отдых на природе всегда в моде.', urlimg: '/services/banket_zal.jpg' },
    { id: 2, title: 'Выпускные', desctiption: 'Отметьте выпускной вместе с нами', urlimg: '/services/vipusknoi.jpg' },
    { id: 3, title: 'Лазертаг и пейнтбол', desctiption: 'Отдых для любителей активных игр и адреналина', urlimg: '/services/lazertag.jpg' }
];

const doSwipeLeft = () => {
    if (windowWidth.value < 760) myCarousel.value.next();
};

const doSwipeRight = () => {
    if (windowWidth.value < 760) myCarousel.value.prev();
};

const onResize = () => {
    windowWidth.value = window.innerWidth;
};

const { appContext } = getCurrentInstance();
const removeTitleAttributes = appContext.config.globalProperties.removeTitleAttributes;

onMounted(() => {
    if (removeTitleAttributes) removeTitleAttributes();
    window.addEventListener('resize', onResize);
});

onBeforeUnmount(() => {
    window.removeEventListener('resize', onResize);
});

</script>

<template>
    <section class="services">
		<div class="services__content container">
			<h2 class="title">К вашим услугам</h2>
            <carousel 
                :items-to-show="3" 
                class="services-slider" 
                :transition="600" 
                :wrapAround="true" 
                :mouseDrag="false" 
                :touchDrag="false"
                :breakpoints="breakpoints"
                ref="myCarousel" >
                <slide v-for="elem in slides" :key="elem.id">
                    <div 
                        class="services__slide"
                        v-touch:swipe.left="doSwipeLeft"
                        v-touch:swipe.right="doSwipeRight">
                        <div class="pic__wrapper">
                            <img :src="elem.urlimg" alt="">
                        </div>
                        <h3 class="subtitle">
                            {{ elem.title }}
                        </h3>
                        <p class="services__description">
                            {{ elem.desctiption }}
                        </p>
                    </div>
                </slide>
                <template #addons>
                    <navigation />
                </template>
            </carousel>
		</div>
	</section>
</template>

<style>
    .services {
        background: url('../../assets/img/bgs/services-section.png') center / cover no-repeat;
        width: 100%;
        padding: 44.15px 0 54px 0;
    }

    .services__content .title {
        margin-bottom: 38px;
    }

    .services__slide {
        width: 424px;
        background-color: var(--white-color);
        padding: 32px 16px 26px 16px;
        text-align: center;
        border-radius: 12px;
    }

    .services-slider .carousel__prev, 
    .services-slider .carousel__next {
        top: 40% !important;
    }

    .services-slider .carousel__prev {
        left: -1px !important;
    } 
    .services-slider .carousel__next {
        right: -1px !important;
    }

    .carousel__slide {
        align-items: stretch;
    }

    @media (max-width: 1416px) {
        .services__slide {
            flex: 1 1 0;
            width: auto;
            margin-left: 16px;
            margin-right: 16px;
        }
        .services-slider .carousel__prev {
            left: -5px !important;
        } 
        .services-slider .carousel__next {
            right: -5px !important;
        }
    }
</style>