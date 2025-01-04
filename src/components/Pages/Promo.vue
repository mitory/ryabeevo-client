<template>
    <TemplatePage 
        v-if="promoData"
        :name="promoData.name"
        :text="promoData.desc_full" 
        :gallery="promoData.gallery"
        :image_main="promoData.image_main"
        :backlink="'/promo'"
        :backname="'Акции'" />
</template>

<script setup>
import TemplatePage from './TemplatePage.vue';
import { useStore } from 'vuex'
import { useRoute, useRouter  } from "vue-router";
import { ref, onMounted } from 'vue'

const store = useStore();
const route = useRoute();
const router = useRouter();
let promoData = ref({});

onMounted(async () => {
    await store.dispatch('appData/initPromo');
    promoData.value = store.state.appData.promo.find(el => el.url_name === route.params.name);

    if (!promoData.value) {
        router.push({ path: '/404page'})
    }
})

</script>

<style scoped>
    
</style>