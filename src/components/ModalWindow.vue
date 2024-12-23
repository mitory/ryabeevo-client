<template>
    <div class='modal-wrapper'>
        <div class="modal" :class="{'error': store.state.modalController.isError}">
            <h2>{{ store.state.modalController.title }}</h2>
            <p v-html="store.state.modalController.text"></p>
            <button @click="close">ОК</button>
        </div>
   </div>
</template>

<script setup>
import { useStore } from 'vuex'

const store = useStore();

const close = () => {
    store.dispatch('modalController/close');
}
</script>

<style scoped>
    .modal-wrapper {
        position: fixed;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        backdrop-filter: blur(50px);
        background-color: rgba(0, 0, 0, 0.5);
        z-index: 20;
        display: none;
    }

    .modal-wrapper.show {
        display: block;
    }

    .modal {
        position: fixed;
        width: 300px;
        height: 200px;
        top: calc(50% - 100px);
        left: calc(50% - 150px);
        background: var(--white-color);
        border: 2px solid var(--green-light);
        border-radius: 12px;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        gap: 16px;
    }

    h2 {
        font-size: 20px;
        color: var(--green-dark);
    }

    p {
        padding: 0 8px;
        text-align: center;
    }

    button {
        background: var(--green-dark);
        border-radius: 20px;
        padding: 9px 32px;
        color: var(--white-color);
    }

    .modal.error {
        border: 2px solid rgba(183, 32, 32, 0.793);
    }
    .modal.error h2 {
        color: rgba(183, 32, 32, 0.793);
    }
    .modal.error p {
        color: rgba(183, 32, 32, 0.793);
    }
    .modal.error button {
        background: rgba(183, 32, 32, 0.793);
    }
</style>