export const system = {
    namespaced: true,
    state: {
        width: 0
    },
    mutations: {
        initWidth(state, value) {
            state.width = value;
        },
    },
    actions: {
        setWidth({ commit }, value) {
            commit('initWidth', value);
        }
    }
};