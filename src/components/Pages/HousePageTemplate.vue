<template>
    <div class = 'container'>
        <div class="title-block">
           <h1 class="title-page">Дома</h1> 
           <div class="links-path">
                <router-link to="/">Главная</router-link>
                <div class="elips"></div>
                <router-link to="/catalog">Проживание</router-link>
                <div class="elips"></div>
                <div class="this-path">
                    {{ route.params.name === 'tankhaus' ? 'Таунхаус' : (route.params.name === 'doma' ? 'Дома' : '') }}
                </div>
           </div>
        </div>
        <div class="house" v-if="houseData">
            <div class="main-img image-container">
                <img :src="houseData.image_main.file" :alt="houseData.image_main.name">
            </div>
            <div class="house__content">
                <div class="house__text-content">
                    <div class="text-content__description">
                        <h2 class="house__subtitle">Описание</h2>
                        <p>
                            {{ houseData.desc_general }}
                        </p>
                    </div>
                    <div class="text-content__comfort">
                        <h2 class="house__subtitle">В числе удобств:</h2>
                        <ul class="comfort-list">
                            <li class="comgort__item" v-for="el in houseData.conveniences.split('\r\n')" :key="el">
                                {{ el }}
                            </li>
                        </ul>
                    </div>
                    <div class="text-content__price">
                        <h2 class="house__subtitle">Стоимость:</h2>
                        <div class="price-text">
                            В будние дни (пн — чт) — <span class="price-value">{{formatNumberWithSpace(houseData.price_weekdays)}} руб/сут.</span>
                        </div>
                        <div class="price-text">
                            В выходные дни (пт — вск) — <span class="price-value">{{formatNumberWithSpace(houseData.price_weekends)}} руб/сут.</span>
                        </div>
                    </div>
                </div>
                <carousel 
                :items-to-show="1" 
                class="house-slider" 
                :transition="600" 
                :wrapAround="true" 
                :mouseDrag="false" 
                :touchDrag="false"
                ref="myCarousel" >
                    <slide v-for="el in houseData.gallery" :key="el.id">
                        <div 
                            class="house-slider__elemnt image-container"
                            v-touch:swipe.left="doSwipeLeft"
                            v-touch:swipe.right="doSwipeRight">
                                <img :src="el.file" :alt="el.name">
                        </div>
                    </slide>
                    <template #addons>
                        <navigation />
                    </template>
                </carousel>
            </div>
        </div>
   </div>
</template>

<script setup>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Navigation } from 'vue3-carousel'
import { ref, onMounted, getCurrentInstance, computed } from 'vue'
import { useStore } from 'vuex'
import { useRoute, useRouter } from "vue-router";

const store = useStore();
const route = useRoute();
const router = useRouter();
const myCarousel = ref(null);

function formatNumberWithSpace(num) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

const doSwipeLeft = () => {
    myCarousel.value.next();
};

const doSwipeRight = () => {
    myCarousel.value.prev();
};

const { appContext } = getCurrentInstance();
const removeTitleAttributes = appContext.config.globalProperties.removeTitleAttributes;

onMounted(() => {
    if (removeTitleAttributes) removeTitleAttributes();

    if (!['doma', 'tankhaus'].includes(route.params.name)) {
        router.push({path: '/404page'});
    }

    if(route.params.name === 'doma') {
        store.dispatch('appData/initHouse');
    } 

    if(route.params.name === 'tankhaus') {
        store.dispatch('appData/initTanhouse');
    } 
});

const houseData = computed(() => {
    if (route.params.name === 'doma') {
        return store.state.appData.house
    }
    if (route.params.name === 'tankhaus') {
        return store.state.appData.tanhouse
    }
})

</script>

<style scoped>
    .house {
        padding: 32px 0 36px 0;
    }

    .container {
        max-width: 984px;
    }

    .image-container {
        padding: 32px;
        border: 2px solid var(--green-color);
        border-radius: 20px;
        max-height: 400px;
        display: flex;
        margin: 0 0 32px 0px;
    }

    .image-container img {
        border-radius: 20px;
    }

    .house__content {
        display: flex;
        align-items: start;
        gap: 32px;
    }

    .house__text-content {
        width: 476px;
        color: #4A4A4A;
    } 
    
    .house__subtitle {
        font-size: 20px;
        font-weight: 700;
        margin-bottom: 4px;
    }

    .price-value {
        font-weight: 700;
        color: var(--green-color);
    }

    .house-slider {
        width: 476px;
    }
    
    .house-slider__elemnt.image-container {
        width: 476px;
        margin: 0;
    }

    .text-content__description {
        margin-bottom: 32px;
    } 
    .text-content__comfort {
        margin-bottom: 64px;
    }

    .comfort-list {
        margin-left: 16px;
    }

    .comgort__item {
        list-style: disc;
    }

    @media (max-width: 984px) {

         .text-content__comfort {
            margin-bottom: 32px;
        }

        .house__content {
            justify-content: center;
        }

        .house__text-content {
            width: 300px;
        } 
    }

    @media (max-width: 871px) {
        .house__content {
            flex-direction: column-reverse;
        }

        .house-slider {
            width: calc(100% - 32px);
            margin: 0 auto;
        }

        .house-slider__elemnt.image-container {
            width: 100%;
        }

        .house__text-content {
            width: 50%;
            margin-left: 32px;
        }
    }

    @media (max-width: 580px) {
        .house__text-content {
            width: 90%;
            margin-left: 16px;
        }

        .image-container {
            padding: 16px;
        }
    }
</style>