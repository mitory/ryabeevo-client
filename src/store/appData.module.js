import config from '../http/config'
import { 
    getContacts, getMenu, getSocial, getBanner, getPromo, 
    getService, getWhys, getAbout, getHouse, getTanhouse
} from '../http/api'

function makeLink(link) {
    return config.Url + link
}

export const appData = {
    namespaced: true,
    state: {
        navList: [],
        contacts: null,
        social: null,
        banners: [],
        promo: [],
        whys: [],
        services: [],
        about: null,
        house: null,
        tanhouse: null
    },
    mutations: {
        saveNavList(state, navList) {
            state.navList = navList;
        },
        saveContacts(state, contacts) {
            state.contacts = {}
            const address = contacts.find(el => el.contact_type === 'AD');
            state.contacts.contactPageText = address.text.replace('\r\n', '');
            state.contacts.address = address.text.replace('\r\n', '<br>');

            state.contacts.mails = contacts.find(el => el.contact_type === 'MA').text.split('\r\n');

            const tels = contacts.filter(el => el.contact_type === 'PH');
            state.contacts.telHe = tels.find(el => el.location_type === 'HE').text.split('\r\n');
            state.contacts.telFo = tels.find(el => el.location_type === 'FO').text.split('\r\n');
            state.contacts.telPa = tels.find(el => el.location_type === 'PA').text.split('\r\n');

            state.contacts.workTime = contacts.find(el => el.contact_type === 'WO').text;
        },
        saveSocial(state, social) {
            const socialGeneral = social.filter(el => el.name.startsWith('Общий'))
                                        .map(el => { return {
                                            id: el.id,
                                            img: makeLink(el.image_main.file),
                                            url: el.image_main.url,
                                            name: el.image_main.name
                                        }});
            const socialContactPage = social.filter(el => el.name.startsWith('Зеленый'))
                                        .map(el => { return {
                                            id: el.id,
                                            img: makeLink(el.image_main.file),
                                            url: el.image_main.url,
                                            name: el.image_main.name
                                        }});
            
            state.social = {}
            state.social.general = socialGeneral;
            state.social.contactPage = socialContactPage;
        },
        saveBanners(state, banners) {
            state.banners = banners.map(el => { return {
                id: el.id,
                img: makeLink(el.image_main.file),
                url: el.image_main.url,
                name: el.name
            }})
        },
        savePromo(state, promo) {
            state.promo = [...promo].sort((el1, el2) => el1.weight - el2.weight);
            state.promo.forEach(el => {
                el.image_main.file = makeLink(el.image_main.file)
                el.gallery.forEach(pic => {
                    pic.file = makeLink(pic.file)
                })
            });
        },
        saveWhys(state, whys) {
            state.whys = [...whys];
            state.whys.forEach(el => {
                el.image_main.file = makeLink(el.image_main.file)
            });
        },
        saveServices(state, services) {
            state.services = [...services].sort((el1, el2) => el1.weight - el2.weight);
            state.services.forEach(el => {
                el.image_main.file = makeLink(el.image_main.file)
                el.gallery.forEach(pic => {
                    pic.file = makeLink(pic.file)
                })
            });
        },
        saveAbout(state, about) {
            state.about = about;
            state.about.gallery.forEach(el => {
                el.file = makeLink(el.file)
            });
            state.about.image_main.file = makeLink(about.image_main.file);
        },
        saveHouse(state, house) {
            state.house = house;
            state.house.image_main.file = makeLink(house.image_main.file)
            state.house.gallery.forEach(pic => {
                    pic.file = makeLink(pic.file)
                })
        },
        saveTanhouse(state, tanhouse) {
            state.tanhouse = tanhouse;
            state.tanhouse.image_main.file = makeLink(tanhouse.image_main.file)
            state.tanhouse.gallery.forEach(pic => {
                    pic.file = makeLink(pic.file)
                })
        },
    },
    actions: {
        async initNavList({ commit, state  }) {
            if(!state.navList.length) {
                const menu = await getMenu()
                commit('saveNavList', menu.sort((el1, el2) => el1.weight - el2.weight));
            }
            
        },
        async initContacts({ commit, state }) {
            if (!state.contacts) {
                const contacts = await getContacts()
                commit('saveContacts', contacts);
            }
            
        },
        async initSocial({ commit, state }) {
            if (!state.social) {
                const social = await getSocial()
                commit('saveSocial', social);
            }
        },
        async initBanners({ commit, state }) {
            if(!state.banners.length) {
                const banners = await getBanner();
                commit('saveBanners', banners);
            }
        },
        async initPromo({ commit, state }) {
            if(!state.promo.length) {
                const promo = await getPromo();
                commit('savePromo', promo);
            }
        },
        async initWhys({ commit, state }) {
            if(!state.whys.length) {
                const whys = await getWhys()
                commit('saveWhys', whys);
            }
        },
        async initServices({ commit, state }) {
            if(!state.services.length) {
                const services = await getService();
                commit('saveServices', services);
            }
        },
        async initAbout({ commit, state }) {
            if (!state.about) {
                const about = await getAbout()
                commit('saveAbout', about);
            }
        },
        async initHouse({ commit, state }) {
            if (!state.house) {
                const house = await getHouse()
                commit('saveHouse', house);
            }
        },
        async initTanhouse({ commit, state }) {
            if (!state.tanhouse) {
                const tanhouse = await getTanhouse()
                commit('saveTanhouse', tanhouse);
            }
        },
    }
};