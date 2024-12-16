<template>
    <div>
        <a 
            v-for="item in $store.state.appData.contacts?.mails" 
            :href="`mailto:${item}`" target="_blank" :key="item"> 
            {{ item }}
        </a>
   </div>
</template>

<script>

</script>

<style scoped>
    
</style>