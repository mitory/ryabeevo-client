<template>
     <div class="booking-input">
        <router-link to="/booking" class="booking-link">Забронировать</router-link>
    </div>
</template>

<script>

</script>

<style scoped>
    .booking-link {
        color: var(--white-color);
        font-size: 17px;
        line-height: 22px;
    }


    .booking-input {
        border-radius: 20px;
        background: var(--green-dark);
        width: 164px;
        height: 40px;  
        padding: 9px 16px 9px 16px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>