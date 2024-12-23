export const fotoGallery = {
    namespaced: true,
    state: {
        isOpen: false,
        data: [],
        indexFirstSlide: 0
    },
    mutations: {
        fotoGalleryDisable(state) {
           state.isOpen = false;
           state.data = [];
           state.indexFirstSlide = 0;
        },
        fotoGalleryActive(state, {data, index}) {
            state.isOpen = true;
            state.data = data;
            state.indexFirstSlide = index;
        },
        incIndex(state) {
            if (state.indexFirstSlide + 1 === state.data.length) {
                state.indexFirstSlide = 0;
            } else {
                state.indexFirstSlide++;
            }
        },
        deincIndex(state) {
            if (state.indexFirstSlide - 1 === -1) {
                state.indexFirstSlide = state.data.length - 1;
            } else {
                state.indexFirstSlide--;
            }
        },
        hideForAnim(state) {
            state.isOpen = false;
        },
        showForAnim(state) {
            state.isOpen = true;
        }
    },
    actions: {
        close({ commit }) {
            commit('fotoGalleryDisable');
        },
        open({ commit }, {data, index}) {
            commit('fotoGalleryActive', {data, index});
        },
        incIndex({ commit }) {
            commit('incIndex');
        },
        deincIndex({ commit }) {
            commit('deincIndex');
        },
        hideForAnim({ commit }) {
            commit('hideForAnim');
        },
        showForAnim({ commit }) {
            commit('showForAnim');
        }
    }
};