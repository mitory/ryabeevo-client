export const elementController = {
    namespaced: true,
    state: {
        wrapper: false,
        elements: {
            mobileMenu: false,
            askForm: false,
            callBackForm: false,
        }
    },
    mutations: {
        wrapperDisable(state) {
            Object.keys(state.elements).forEach(key => {
                state.elements[key] = false;
            });
           state.wrapper = false;
        },
        mobileMenuActive(state) {
            state.wrapper = true;
            state.elements.mobileMenu = true;
        },
        askFormActive(state) {
            state.wrapper = true;
            state.elements.askForm = true;
        },
        callBackFormActive(state) {
            state.wrapper = true;
            state.elements.callBackForm = true;
        }
    },
    actions: {
        close({ commit }) {
            commit('wrapperDisable');
        },
        openMobileMenu({ commit }) {
            commit('mobileMenuActive');
        },
        openAskForm({ commit }) {
            commit('askFormActive');
        },
        openCallBackForm({ commit }) {
            commit('callBackFormActive');
        }
    }
};