<template>
    <ul>
        <li v-for="tel in props.tels" :key="tel">
            <a :href="`tel:${tel.replace(/[\(\)\s-]/g, '')}`">{{ tel }}</a>
        </li>
   </ul>
</template>

<script setup>
const props = defineProps(['tels'])
</script>

<style scoped>
    
</style>