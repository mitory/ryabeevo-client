<template>
       <TravelLineSearchForm class="booking"/>
</template>

<script setup>
import TravelLineSearchForm from './TravelLineSearchForm.vue';

</script>

<style scoped>
    .general.booking {
        width: 235px;
        border-radius: 20px;
        background: rgba(0, 0, 0, 0.41);
        padding: 16px;
    }

    .long.booking {
        padding: 32px 8px;
    }

    @media(max-width: 335px) {
        .long.booking {
            padding-top: 64px;
        }
    }

    @media(max-width: 760px) {
        .general.booking {
            width: auto;
            background: var(--white-color);
        }
    }
</style>