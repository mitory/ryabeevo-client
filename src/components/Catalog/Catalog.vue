<template>
    <div class = 'catalog container'>
        <div class="title-block">
           <h1 class="title-page">Проживание</h1> 
           <div class="links-path">
                <router-link to="/">Главная</router-link>
                <div class="elips"></div>
                <div class="this-path">Проживание</div>
           </div>
        </div>
        <div class="catalog__list">
            <div class="catalog__card">
                <div class="catalog-title__wrapper">
                    <h2 class="catalog__title">
                        Дома
                    </h2>
                </div>
                <div class="image-container">
                    <img src="/catalog/dom.jpg" alt="" class="catalog__img">
                </div>
                <div class="text">
                    <p>
                        Гостеприимный загородный комплекс «Рябеевская поляна» расположен всего в 4 километрах от Твери в экологически чистой зоне. Среди уникального природного ландшафта, среди березовой рощи уютно разместились здания комфортабельного комплекса. Чистый, ароматный воздух, соседство с настоящим русским лесом. За территорией «Рябеевской поляны» Вас ожидает разнообразие первозданной природы с ее удивительными дарами: свежим запахом хвои, трелями птиц, изобилием ягод и грибов.грибы, ягоды. В зимний период: лыжня, горка для тюбинга, бесплатный прокат тюбингов.
                    </p>
                </div>
                <div class="link_container">
                    <router-link to="/catalog/doma"><div class="next-page"></div></router-link>
                </div>
            </div>
            <div class="catalog__card">
                <div class="catalog-title__wrapper">
                    <h2 class="catalog__title">
                        Таунхаусы
                    </h2>
                </div>
                <div class="image-container">
                    <img src="/catalog/tankhaus.jpg" alt="" class="catalog__img">
                </div>
                <div class="text">
                    <p>
                        Гостеприимный загородный комплекс «Рябеевская поляна» расположен всего в 4 километрах от Твери в экологически чистой зоне. Среди уникального природного ландшафта, среди березовой рощи уютно разместились здания комфортабельного комплекса. Чистый, ароматный воздух, соседство с настоящим русским лесом. За территорией «Рябеевской поляны» Вас ожидает разнообразие первозданной природы с ее удивительными дарами: свежим запахом хвои, трелями птиц, изобилием ягод и грибов.грибы, ягоды. В зимний период: лыжня, горка для тюбинга, бесплатный прокат тюбингов.                        </p>
                </div>
                <div class="link_container">
                    <router-link to="/catalog/doma"><div class="next-page"></div></router-link>
                </div>
            </div>
        </div>
   </div>
</template>

<script>
export default {
    data() {
        return {
            
        }
    },
    components: {
        
    },
    methods: {
        
    }
}
</script>

<style scoped>
    
    .catalog__list {
        padding: 32px 0 36px 0;
        display: flex;
        gap: 16px;
    }

    .catalog__card {
        width: 484px;
        padding: 32px;
        border: 2px solid var(--green-color);
        border-radius: 20px;
        display: flex;
        flex-direction: column;
        gap: 16px;
    }

    .catalog-title__wrapper {
        display: flex;
    }

    .catalog__title {
        box-sizing: content-box;
        font-size: 32px;
        font-weight: 700;
        line-height: 41px;
        letter-spacing: 1px;
        color: var(--green-dark);
        padding: 4px 8px;
        background: var(--white-color);
        margin-top: -56px;
        z-index: 1;
    }

    .image-container img {
        max-height: 186px;
    }

    .catalog__img {
        border-radius: 20px;
    }

    .link_container {
        display: flex;
        justify-content: center;
        position: relative;
    }

    .next-page {
        position: absolute;
        bottom: calc(-32px - 20px);
        left: calc(50% - 20px);
        width: 40px;
        height: 40px;
        background: url('../../assets/img/button_icon/arrow-left.svg')  center no-repeat;
        transform: rotate(180.00deg);
    }

    .container {
        width: calc(484px * 2 + 16px);
        padding: 0 auto;
    }

    @media (max-width: 992px) {
        .container {
            width: auto;
            padding: 0 16px;
        }

        .catalog__list {
            gap: 32px;
            flex-direction: column;
        }

        .catalog__card {
            width: auto;
        }
    }

    @media (max-width: 760px) {
        .catalog__card {
            padding: 16px;
        }
        .next-page {
            bottom: calc(-16px - 20px);
        }

        .catalog__title {
            margin-top: -46px;
        }

        .catalog__list {
            gap: 48px;
        }
    }
</style>