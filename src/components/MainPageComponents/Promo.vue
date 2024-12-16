<template>
    <section class="promo" v-if="promoList.length">
		<div class="promo-content container">
			<div class="promo__title-container">
				<h2 class="title">Акции</h2>
				<router-link to="/promo" class="promo__alllink">Все акции</router-link>
			</div>
                <carousel 
                :items-to-show="3" 
                class="promo-slider" 
                :transition="600" 
                :wrapAround="true" 
                :mouseDrag="false" 
                :touchDrag="false"
                :breakpoints="breakpoints"
                ref="myCarousel" >
                <slide v-for="el in promoList" :key="el.id">
                    <div 
                        class="promo__slide" 
                        v-touch:swipe.left="doSwipeLeft"
                        v-touch:swipe.right="doSwipeRight">
                            <router-link :to="`promo/${el.url_name}`">
                                <div class="pic__wrapper">
                                    <img :src="el.image_main.file" :alt="el.name">
                                </div>
                                <h3 class="subtitle">
                                    {{ el.name }}
                                </h3>
                                <p class="promo__desctiption">
                                    {{ el.desc_short }}
                                </p>
                            </router-link>
                    </div>
                </slide>
                <template #addons>
                    <navigation :class="{ 'hide': shouldHideNavigation }"/>
                    <pagination :class="{ 'hide': shouldHideNavigation }"/>
                </template>
            </carousel>
		</div>
	</section>
</template>

<script setup>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Navigation } from 'vue3-carousel'
import { ref, computed, onMounted, getCurrentInstance } from 'vue'
import { useStore } from 'vuex'

const store = useStore();

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
store.dispatch('appData/initPromo');

onMounted(() => {
    if (removeTitleAttributes) removeTitleAttributes();
});

const promoList = computed(() => store.state.appData.promo);
const width = computed(() => store.state.system.width );

const shouldHideNavigation = computed(() => {
    return width.value >= 760 && promoList.value.length <= 3;
});
</script>

<style>
    .promo {
        background: url('../../assets/img/bgs/promo-section.png') center / cover no-repeat;
        width: 100%;
        padding-top: 16.5px;
    }

    .promo__slide a:hover {
        opacity: 1;
    }

    .promo__title-container {
        text-align: center;
        position: relative;
        margin-bottom: 32px;
    }

    .promo__alllink {
        font-size: 14px;
        line-height: 18px;
        letter-spacing: 1px;
        position: absolute;
        right: 59px;
        top: 12.5px;
    }

    .promo__alllink::after {
        content: url('../../assets/img/button_icon/to_link.svg');
        width: 8px;
        height: 8px;
        margin-left: 8px;
    }

    .promo__slide {
        width: 424px;
        background-color: var(--white-color);
        padding: 16px;
        text-align: center;
        border-radius: 12px;
        margin-bottom: 72px;
    }

    .promo-slider .carousel__pagination {
        bottom: 38px !important;
    }

    .promo-slider .carousel__prev, 
    .promo-slider .carousel__next {
        top: 30% !important;
    }

    .promo-slider .carousel__prev {
        left: -1px !important;
    } 
    .promo-slider .carousel__next {
        right: -1px !important;
    }

    .carousel__slide {
        align-items: stretch;
    }

    @media (max-width: 1416px) {

        .promo__slide {
            flex: 1 1 0;
            width: auto;
            margin-left: 16px;
            margin-right: 16px;
        }
        .promo-slider .carousel__prev {
            left: -5px !important;
        } 
        .promo-slider .carousel__next {
            right: -5px !important;
        }
    }
    @media (max-width: 550px) {
        .promo__alllink {
            right: calc(50% - 45px);
            top: 32px;
        }
    }
</style>