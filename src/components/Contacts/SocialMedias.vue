<template>
    <div>
        <a 
        v-for="el in props.collection"
        :key="el.id" 
        :href="el.url"
        :class="props.isContactPage ? 'flex-container' : ''">
            <img :src="el.img" :alt="el.name">
            <p v-if="props.isContactPage"> {{ el.name }} </p>
        </a>
    </div>
</template>

<script setup>
const props = defineProps(['collection', 'isContactPage'])
</script>

<style scoped>
.flex-container {
    display: flex;
    align-items: center;
    gap: 8px;
}
</style>