<template>
    <section class="promo">
		<div class="promo-content container">
			<div class="promo__title-container">
				<h2 class="title">Акции</h2>
				<a href="" class="promo__alllink">Все акции</a>
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
                <slide v-for="elem in slides" :key="elem.id">
                    <div 
                        class="promo__slide" 
                        v-touch:swipe.left="doSwipeLeft"
                        v-touch:swipe.right="doSwipeRight">
                        <div class="pic__wrapper">
                            <img :src="elem.urlimg" alt="">
                        </div>
                        <h3 class="subtitle">
                            {{ elem.title }}
                        </h3>
                        <p class="promo__desctiption">
                            {{ elem.desctiption }}
                        </p>
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
import { ref, computed, onMounted, onBeforeUnmount, getCurrentInstance } from 'vue'

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
        {id: 1, title: '1 час в бане в подарок', desctiption: 'При заказе бани от 5 часов в выходные дни (пятница - воскресенье) мы дарим 1 час в подарок!', urlimg: '/promo/pic1.png' },
        {id: 2, title: 'Подарок для молодоженов', desctiption: 'При проведении свадьбы от 30 человек в нашем банкетном зале мы дарим бесплатное проживание в доме на сутки!', urlimg: '/promo/pic2.png' },
        {id: 3, title: 'Скидка на проживание', desctiption: 'Мы дарим скидку 25% на проживание в будние дни (воскресенье - четверг)!', urlimg: '/promo/pic3.png' }
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
    return slides.length <= 3 && windowWidth.value >= 760;
});
</script>

<style>
    .promo {
        background: url('../../assets/img/bgs/promo-section.png') center / cover no-repeat;
        width: 100%;
        padding-top: 16.5px;
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