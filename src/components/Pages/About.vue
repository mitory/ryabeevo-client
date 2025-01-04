<template>
    <TemplatePage 
        v-if="aboutData" 
        :name="'О нас'"
        :text="aboutData.info" 
        :gallery="aboutData.gallery"
        :image_main="aboutData.image_main" />
</template>

<script setup>
import TemplatePage from './TemplatePage.vue';
import { useStore } from 'vuex'
import { computed } from 'vue'

const store = useStore();
store.dispatch('appData/initAbout');
const aboutData = computed(() => store.state.appData.about);

</script>

<style scoped>
    
</style>