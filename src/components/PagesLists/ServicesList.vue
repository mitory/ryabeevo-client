<template>
    <PagesList 
        :name="'Услуги'"
        :elements="servicesList"
        :code="'services'"
    />
</template>

<script setup>
import PagesList from './PagesList.vue';
import { useStore } from 'vuex'
import { computed } from 'vue'
import { useHead } from '@vueuse/head'

useHead({
  title: 'Отдых в 4 км от Твери в загородном комплексе «Рябеевская поляна».',
  meta: [
    {
      name: 'description',
      content: 'Коттеджи с индивидуальными мангальными зонами, спортивные площадки для футбола и волейбола, настольный теннис, детская площадка, русская баня на дровах, купель, зона для отдыха с бесплатными шезлонгами, а также есть возможность организовать игры на свежем воздухе.',
    },
  ],
});

const store = useStore();
store.dispatch('appData/initServices');
const servicesList = computed(() => store.state.appData.services)

</script>

<style scoped>
    
</style>