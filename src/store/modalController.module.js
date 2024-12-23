export const modalController = {
    namespaced: true,
    state: {
        isModal: false,
        text: '',
        title: '',
        isError: false
    },
    mutations: {
        modalDisable(state) {
           state.isModal = false;
           state.text = '';
           state.title = '';
           state.isError = false
        },
        modalActive(state, newState) {
            state.isModal = true;
            state.text = newState.text;
            state.title = newState.title;
            state.isError = newState.isError;
        },
    },
    actions: {
        close({ commit }) {
            commit('modalDisable');
        },
        openModal({ commit }, newState) {
            commit('modalActive', newState);
        },
    }
};