<template>
    <div class = 'container'>
        <div class="title-block">
           <h1 class="title-page">{{ props.name }}</h1> 
           <div class="links-path">
                <router-link to="/">Главная</router-link>
                <div class="elips"></div>
                <div class="this-path">{{ props.name }}</div>
           </div>
        </div>
        <div class="pages-list" :class="classGrid">
            <Card 
                v-for="el in props.elements" :key="el.id"
                :title="el.name"
                :desc="el.desc_short"
                :link="`/${code}/${el.url_name}`"
                :image_main="el.image_main"
                class="card"
            />
        </div>
   </div>
</template>

<script setup>
import Card from '../MiniComponents/Card.vue'
const props = defineProps(['name', 'elements', 'code', 'classGrid'])

</script>

<style scoped>

    .container {
        max-width: 984px;
    }

    .pages-list {
        padding: 32px 0 36px 0;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 16px;
    }

    .card {
        flex-grow: 1;
        margin-bottom: 32px;
    }

    .title-page {
        margin: 8px 0px;
    }

 
   

    @media (max-width: 992px) {
        .pages-list {
            grid-template-columns: repeat(2, 1fr);
            align-items: stretch;
        }
        .link-wrapper {
            display: inline-flex;
            width: 100%;
        }
        .link-wrapper .catalog__card {
            width: 100%;
        }
    }


    @media (max-width: 530px) {
        .pages-list {
            grid-template-columns: repeat(1, 1fr);
        }
    }
</style>