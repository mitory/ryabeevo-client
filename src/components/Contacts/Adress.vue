<template>
    <div>
        <a href="https://yandex.ru/maps/-/CDx8eW77" target="_blank" 
        v-html="props.adress ? props.adress : $store.state.appData.contacts?.address">

        </a>
    </div>
</template>

<script setup>
const props = defineProps(['adress'])

</script>

<style scoped>
    
</style>