import { createStore } from "vuex";
import { elementController } from './elementsController.module'
import { appData } from './appData.module'
import { system } from './system.module'
import { modalController } from './modalController.module'
import { fotoGallery } from "./fotoGallery.module";

const store = createStore({
    modules: {
        elementController, appData, system, modalController, fotoGallery
    }
});

export default store;