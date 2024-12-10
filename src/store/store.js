import { createStore } from "vuex";
import { elementController } from './elementsController.module'

const store = createStore({
    modules: {
        elementController
    }
});

export default store;