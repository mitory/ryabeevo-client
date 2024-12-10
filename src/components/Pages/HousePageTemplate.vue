<template>
    <div class = 'container'>
        <div class="title-block">
           <h1 class="title-page">Дома</h1> 
           <div class="links-path">
                <router-link to="/">Главная</router-link>
                <div class="elips"></div>
                <router-link to="/catalog">Проживание</router-link>
                <div class="elips"></div>
                <router-link to="/catalog/doma">Дома</router-link>
                <div class="elips"></div>
                <div class="this-path">Дом 1</div>
           </div>
        </div>
        <div class="house">
            <div class="main-img image-container">
                <img src="/house/main.jpg" alt="">
            </div>
            <div class="house__content">
                <div class="house__text-content">
                    <div class="text-content__description">
                        <h2 class="house__subtitle">Описание</h2>
                        <p>
                            Вместительность — до 6 человек (4 основных места + 2 дополнительных: 1500 руб/чел.)  
                        </p>
                    </div>
                    <div class="text-content__comfort">
                        <h2 class="house__subtitle">В числе удобств:</h2>
                        <ul class="comfort-list">
                            <li class="comgort__item">Бесплатный Wi-fi</li>
                            <li class="comgort__item">3 телевизора</li>
                            <li class="comgort__item">Стиральная машина</li>
                            <li class="comgort__item">Оборудованная кухня со всей необходимой посудой, холодильником, микроволновой печью и электрочайником</li>
                            <li class="comgort__item">Полотенца, тапочки, мыло, гель для душа и шампунь, фен (по требованию)</li>
                            <li class="comgort__item">Индивидуальная мангальная зона</li>
                            <li class="comgort__item">Парковочное место</li>
                            <li class="comgort__item">Доступ к развлечениям и активностям комплекса</li>
                        </ul>
                    </div>
                    <div class="text-content__price">
                        <h2 class="house__subtitle">Стоимость:</h2>
                        <div class="price-text">
                            В будние дни (пн — чт) — <span class="price-value">6 500 руб/сут.</span>
                        </div>
                        <div class="price-text">
                            В выходные дни (пт — вск) — <span class="price-value">8 500 руб/сут.</span>
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
                    <slide v-for="elem in slides" :key="elem.id">
                        <div 
                            class="house-slider__elemnt image-container"
                            v-touch:swipe.left="doSwipeLeft"
                            v-touch:swipe.right="doSwipeRight">
                                <img :src="elem.urlimg" alt="">
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
import { ref, onMounted, getCurrentInstance } from 'vue'

const myCarousel = ref(null);

const slides = [];

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

    for (let i = 1; i <= 12; i++) {
        slides.push({id: i, urlimg: `/house/pic${i}.jpg`});
    }
});

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