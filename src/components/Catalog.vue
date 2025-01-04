<template>
    <div style="background: rgba(239, 239, 239, 0.41);">
        <BookingForm class="container long"/>
    </div>
    <div class = 'catalog container'>
        <div class="title-block">
           <h1 class="title-page">Проживание</h1> 
           <div class="links-path">
                <router-link to="/">Главная</router-link>
                <div class="elips"></div>
                <div class="this-path">Проживание</div>
           </div>
        </div>
        <div class="catalog__list" v-if="houseData && tanhouseData">
            <router-link to="/catalog/doma" class="link-wrapper">
                <div class="catalog__card">
                    <div class="catalog-title__wrapper">
                        <h2 class="catalog__title">
                            Дома
                        </h2>
                    </div>
                    <div class="image-container">
                        <img :src="houseData.image_main.file" :alt="houseData.image_main.name" class="catalog__img">
                    </div>
                    <div class="text">
                        <p>
                            {{ houseData.desc_type }}
                        </p>
                    </div>
                    <div class="link_container">
                        <router-link to="/catalog/doma"><div class="next-page"></div></router-link>
                    </div>
                </div>
            </router-link>
            <router-link to="/catalog/tankhaus" class="link-wrapper">
            <div class="catalog__card">
                <div class="catalog-title__wrapper">
                    <h2 class="catalog__title">
                        Таунхаусы
                    </h2>
                </div>
                <div class="image-container">
                    <img :src="tanhouseData.image_main.file" :alt="tanhouseData.image_main.name" class="catalog__img">
                </div>
                <div class="text">
                    <p>
                        {{ tanhouseData.desc_type }}                       
                    </p>
                </div>
                <div class="link_container">
                    <router-link to="/catalog/tankhaus"><div class="next-page"></div></router-link>
                </div>
            </div>
            </router-link>
        </div>
   </div>
</template>

<script setup>
import { useStore } from 'vuex'
import { computed } from 'vue'
import { useHead } from '@vueuse/head'
import BookingForm from './BookingElements/BookingForm.vue';

useHead({
  title: 'Загородный комплекс в 4 км от Твери. Экологически чистое расположение рядом с русским лесом.',
  meta: [
    {
      name: 'description',
      content: 'Транспортная доступность с городом, рядом расположены продуктовые магазины. Дома и таунхаусы со своими индивидуальными мангальными зонами от 5 500 руб/сутки. Скидка 15% на проживание в будни.',
    },
  ],
});



const store = useStore();
store.dispatch('appData/initHouse');
store.dispatch('appData/initTanhouse');

const houseData = computed(() => store.state.appData.house)
const tanhouseData = computed(() => store.state.appData.tanhouse)

</script>

<style scoped>
    
    .catalog__list {
        padding: 32px 0 36px 0;
        display: flex;
        gap: 16px;
    }

    .catalog__card {
        padding: 32px;
        border: 2px solid var(--green-light);
        border-radius: 20px;
        display: flex;
        flex-direction: column;
        gap: 16px;
    }

    .catalog__card:hover {
        box-shadow: 0 0 20px rgba(85, 219, 145, 0.5);
        transition: box-shadow 0.3s ease; 
    }

    .catalog__card:hover .catalog__title {
        box-shadow: 0 0 20px rgba(85, 219, 145, 0.5);
        transition: box-shadow 0.3s ease; 
        border-radius: 12px;
    }

    .catalog-title__wrapper {
        display: flex;
    }

    .catalog__title {
        box-sizing: content-box;
        font-size: 32px;
        font-weight: 700;
        line-height: 32px;
        letter-spacing: 1px;
        color: var(--green-dark);
        padding: 8px 8px 4px 8px;
        background: var(--white-color);
        margin-top: -48px;
        z-index: 1;
        vertical-align: middle;
    }

    .image-container img {
        max-height: 186px;
    }

    .catalog__img {
        border-radius: 20px;
    }

    .link_container {
        display: flex;
        justify-content: center;
        position: relative;
    }

    .next-page {
        position: absolute;
        bottom: calc(-32px - 20px);
        left: calc(50% - 20px);
        width: 40px;
        height: 40px;
        background: url('../assets/img/button_icon/arrow-left.svg')  center no-repeat;
        transform: rotate(180.00deg);
    }

    .container {
        width: calc(484px * 2 + 16px);
        padding: 0 auto;
    }

    @media (max-width: 992px) {
        .container {
            width: auto;
            padding: 0 16px;
        }

        .catalog__list {
            gap: 32px;
            flex-direction: column;
        }

        .catalog__card {
            width: auto;
        }
    }

    @media (max-width: 760px) {
        .catalog__card {
            padding: 16px;
        }
        .next-page {
            bottom: calc(-16px - 20px);
        }

        .catalog__title {
            margin-top: -46px;
        }

        .catalog__list {
            gap: 48px;
        }
    }
</style>