<template>
    <TemplatePage 
        v-if="serviceData"
        :name="serviceData.name"
        :text="serviceData.desc_full" 
        :gallery="serviceData.gallery"
        :image_main="serviceData.image_main" />
</template>

<script setup>
import TemplatePage from './TemplatePage.vue';
import { useStore } from 'vuex'
import { useRoute, useRouter } from "vue-router";
import { ref, onMounted } from 'vue'
import { useHead } from '@vueuse/head'

const store = useStore();
const route = useRoute();
const router = useRouter();
let serviceData = ref({});

onMounted(async () => {
    await store.dispatch('appData/initServices');
    serviceData.value = store.state.appData.services.find(el => el.url_name === route.params.name);

    if (!serviceData.value) {
        router.push({ path: '/404page'})
    }

    useHead({
        title: serviceData.value.title,
        meta: [
            {
            name: 'description',
            content: serviceData.value.description,
            },
        ],
    });
})

</script>

<style scoped>
    
</style>