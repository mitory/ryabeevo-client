<template>
    <section class="whyus" v-if="whysList.length">
        <div class="whyus__content container">
            <h2 class="title">Почему выбирают нас?</h2>
            <div class="whyus__slider slider">
                <carousel 
                    :items-to-show="4" 
                    class="whyus-slider" 
                    :transition="600" 
                    :wrapAround="true" 
                    :mouseDrag="false" 
                    :touchDrag="false"
                    :snap-align="'start'"
                    :breakpoints="breakpoints" 
                    ref="myCarousel">
                    <slide v-for="el in whysList" :key="el.id">
                        <div 
                            class="whyus__slide" 
                            v-touch:swipe.left="doSwipeLeft"
                            v-touch:swipe.right="doSwipeRight">
                            <img :src="el.image_main.file" :alt="el.header" class="whyus__img">
                            <h3 class="subtitle whyus__subtitle">
                                {{ el.header }}
                            </h3>
                            <p class="whyus__description">
                                {{ el.text }}
                            </p>
                        </div>
                    </slide>
                    <template #addons>
                        <navigation :class="{ 'hide': shouldHideNavigation }" />
                    </template>
                </carousel>
            </div>
        </div>
    </section>
</template>

<script setup>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Navigation } from 'vue3-carousel'
import { ref, computed, onMounted, getCurrentInstance } from 'vue'
import { useStore } from 'vuex'

const store = useStore();
store.dispatch('appData/initWhys');


const myCarousel = ref(null);
const windowWidth = ref(window.innerWidth);

const breakpoints = {
        0: {
            itemsToShow: 1,
            snapAlign: 'center'
        },
        760: {
            itemsToShow: 4,
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
})

const whysList = computed(() => store.state.appData.whys );
const width = computed(() => store.state.system.width );

const shouldHideNavigation = computed(() => {
    return width.value >= 760 && whysList.value.length <= 4;
});
</script>

<style>
    .whyus__slider {
        padding: 36px;
    }

    .whyus__slide {
        padding: 16px;
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-left: 16px;
        margin-right: 16px;
    }

    .whyus-slider .carousel__slide {
        margin-top: 64px;
    }
    .whyus-slider .carousel__slide:nth-child(even) {
        margin-top: 0;
        margin-bottom: 64px;
    }

    .whyus__img {
        margin-bottom: 16px;
    }

    h3.whyus__subtitle {
        font-size: 18px;
        line-height: 23px;
        letter-spacing: 1px;
        text-transform: uppercase;
    }

    .whyus__description {
        width: 187px;
    }

    @media (max-width: 1416px) {
        .whyus__slide {
            flex: 1 1 0px;
            width: auto;
        }
    }

    @media (max-width: 992px) {
        .whyus__description {
            width: auto;
        }
        .whyus__slide {
            margin-left: 8px;
            margin-right: 8px;
        }
    }

    @media (max-width: 760px) {
        .whyus__slide {
            margin-left: 0;
            margin-right: 0;
            max-width: 303px;
        }
        .whyus__description {
            max-width: 187px;
        }
        .whyus-slider .carousel__slide,
        .whyus-slider .carousel__slide:nth-child(even) {
            margin: 0;
            align-self: center;
        }
        .whyus-slider .carousel__prev {
            left: -40px !important;
        } 
        .whyus-slider .carousel__next {
            right: -40px !important;
        }
    }
</style>