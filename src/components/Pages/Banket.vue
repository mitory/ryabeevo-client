<template>
    <TemplatePage 
        v-if="banketData"
        :name="banketData.name"
        :text="banketData.desc_full" 
        :gallery="banketData.gallery"
        :image_main="banketData.image_main"
        :backlink="'/banketnye-zaly'"
        :backname="'Банкетные залы'"  />
</template>

<script setup>
import TemplatePage from './TemplatePage.vue';
import { useStore } from 'vuex'
import { useRoute, useRouter  } from "vue-router";
import { ref, onMounted } from 'vue'

const store = useStore();
const route = useRoute();
const router = useRouter();
let banketData = ref({});

onMounted(async () => {
    await store.dispatch('appData/initBanket');
    banketData.value = store.state.appData.banket.find(el => el.url_name === route.params.name);

    if (!banketData.value) {
        router.push({ path: '/404page'})
    }
})

</script>

<style scoped>
    
</style>