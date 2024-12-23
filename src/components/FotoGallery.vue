<template>
    <div class='fotogallery-wrapper' @click="close">
        <div 
            @click.stop=""
            class="fotogallery">
            <div 
                class="fotogallery__image-container"
                v-touch:swipe.left="doSwipeLeft"
                v-touch:swipe.right="doSwipeRight">
                    <img 
                        :src="data[index]?.file" 
                        :alt="data[index]?.name" 
                         >
                <img src="../assets/img/button_icon/close.svg" alt="Закрыть" class="close" @click="close">
                <div class="prev" @click="doSwipeRight"></div>
                <div class="next" @click="doSwipeLeft"></div>
            </div>
        </div>
   </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted  } from 'vue'
import { useStore } from 'vuex'

const store = useStore();

const doSwipeLeft = () => {
    store.dispatch('fotoGallery/incIndex');
};

const doSwipeRight = () => {
    store.dispatch('fotoGallery/deincIndex');
};

const data = computed(() => store.state.fotoGallery.data);
const index = computed(() => store.state.fotoGallery.indexFirstSlide );


const close = () => {
    store.dispatch('fotoGallery/close');
}


const handleKeydown = (event) => {
    if (event.key === 'ArrowLeft') {
        doSwipeRight(); 
    } else if (event.key === 'ArrowRight') {
        doSwipeLeft(); 
    }
};


onMounted(() => {
    window.addEventListener('keydown', handleKeydown);
});


onUnmounted(() => {
    window.removeEventListener('keydown', handleKeydown);
});

</script>

<style scoped>
    .close {
        width: 40px;
        height: 40px;
        position: absolute;
        right: 0;
        top: 0;
        cursor: pointer;
        background: var(--green-dark);
        padding: 10px;
        border-radius: 100%;
    }

    .fotogallery-wrapper {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        z-index: 20;
        align-items: center;
        justify-content: center;
        opacity: 0;
        visibility: hidden;
        transition: opacity 0.5s ease-in-out;
    }

    .fotogallery-wrapper.show {
        display: flex;
        opacity: 1;
        visibility: visible;
    }

    .fotogallery {
        max-height: 90vh;
    }

    .fotogallery__image-container {
        padding: 32px;
        border: 2px solid var(--green-light);
        border-radius: 20px;
        max-height: 90vh;
        position: relative;
        display: flex;
        max-width: 100%;
        margin: 0 20px;
    }

    .prev, .next {
        background: url('../assets/img/button_icon/arrow-left.svg');
        position: absolute;
        width: 40px;
        height: 40px;
        top: calc(50% - 20px);
        right: -20px;
        transform: rotate(180.00deg);
        cursor: pointer;
    }

    .prev {
        transform: translateY(0);
        left: -20px;
    }

    .fotogallery__image-container img:not(.close) {
        border-radius: 20px;
        object-fit: cover;
        max-height: 90vh;
        width: 100%;
    }

    @media (max-width: 540px) {
        .fotogallery__image-container {
            padding: 8px;
        }

        .close {
            width: 35px;
            height: 35px;
        }
    }
</style>