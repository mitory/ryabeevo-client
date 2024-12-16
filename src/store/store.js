import { createStore } from "vuex";
import { elementController } from './elementsController.module'
import { appData } from './appData.module'
import { system } from './system.module'

const store = createStore({
    modules: {
        elementController, appData, system
    }
});

export default store;