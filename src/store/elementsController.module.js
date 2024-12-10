export const elementController = {
    namespaced: true,
    state: {
        wrapper: false,
        elements: {
            mobileMenu: false  
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
        }
    },
    actions: {
        close({ commit }) {
            commit('wrapperDisable');
        },
        openMobileMenu({ commit }) {
            commit('mobileMenuActive');
        }
    }
};