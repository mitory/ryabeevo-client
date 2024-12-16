<template>
    <div class = 'page404'>
        <div class="page404__wrapper">
            <h1 class="page404__title">404</h1>
            <img src="../../assets/img/ryab_logos/logo_bird.svg" alt="Лого" class="logo404">
        </div>
        <p class="page404__text">Страница не найдена</p>
   </div>
</template>

<script>

</script>

<style scoped>
    .page404 {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 8px;
        height: calc(100vh - 200px);
    }

    .page404__wrapper {
        display: flex;
        align-items: center;
        gap: 8px;
    }

    .page404__title {
        font-size: 49px;
    }

    .page404__text {
        font-size: 18px;
    }
</style>