<template>
    <section class="whyus">
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
                    <slide v-for="elem in slides" :key="elem.id">
                        <div 
                            class="whyus__slide" 
                            v-touch:swipe.left="doSwipeLeft"
                            v-touch:swipe.right="doSwipeRight">
                            <img :src="elem.urlimg" alt="" class="whyus__img">
                            <h3 class="subtitle whyus__subtitle">
                                {{ elem.title }}
                            </h3>
                            <p class="whyus__description">
                                {{ elem.description }}
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
import { ref, computed, onMounted, onBeforeUnmount, getCurrentInstance } from 'vue'

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

const slides = [        
                { id: 1, title: 'Всего 7 км от города', description: '15 минут от центра Твери и вы уже на отдыхе', urlimg: '/whyus/map\.svg' },
                { id: 2, title: 'Сближенность с природой', description: 'Сосновый бор и две речки рядом с базой', urlimg: '/whyus/house\.svg' },
                { id: 3, title: 'ЧТО-ТО ПРО ГРИЛЬ', description: 'Текст про гриль текст про гриль, про гриль текст', urlimg: '/whyus/grill\.svg' },
                { id: 4, title: 'ЧТО-ТО ПРО ЛЕС', description: 'Текст про лес текст про лес, про лес текст', urlimg: '/whyus/nature\.svg' },
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

const shouldHideNavigation = computed(() => {
    return slides.length <= 4 && windowWidth.value >= 760;
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