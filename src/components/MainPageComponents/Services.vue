<script setup>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Navigation } from 'vue3-carousel'
import { ref, onMounted, getCurrentInstance, computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore();
store.dispatch('appData/initServices');

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

const doSwipeLeft = () => {
    if (windowWidth.value < 760) myCarousel.value.next();
};

const doSwipeRight = () => {
    if (windowWidth.value < 760) myCarousel.value.prev();
};

const { appContext } = getCurrentInstance();
const removeTitleAttributes = appContext.config.globalProperties.removeTitleAttributes;

onMounted(() => {
    if (removeTitleAttributes) removeTitleAttributes();
});

const servicesList = computed(() => store.state.appData.services)
const width = computed(() => store.state.system.width );

const shouldHideNavigation = computed(() => {
    return servicesList.value.length <= 3 && width.value >= 760;
});

</script>

<template>
    <section class="services" v-if="servicesList.length">
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
                <slide v-for="el in servicesList" :key="el.id">
                    <div 
                        class="services__slide"
                        v-touch:swipe.left="doSwipeLeft"
                        v-touch:swipe.right="doSwipeRight">
                        <router-link :to="`services/${el.url_name}`">
                            <div class="pic__wrapper">
                                <img :src="el.image_main.file" :alt="el.name">
                            </div>
                            <h3 class="subtitle">
                                {{ el.name }}
                            </h3>
                            <p class="services__description">
                                {{ el.desc_short }}
                            </p>
                        </router-link>
                    </div>
                </slide>
                <template #addons>
                    <navigation :class="{ 'hide': shouldHideNavigation}"/>
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

    .services__slide a:hover {
        opacity: 1;
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