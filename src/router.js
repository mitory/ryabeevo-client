import { createRouter, createWebHistory } from 'vue-router';
import MainPage from './components/MainPage.vue';
import Catalog from './components/Catalog/Catalog.vue';
import About from './components/Pages/About.vue';
import Service from './components/Pages/Service.vue';
import PromoList from './components/PagesLists/PromoList.vue';
import ServicesList from './components/PagesLists/ServicesList.vue';
import ContactsPage from './components/Contacts/ContactsPage.vue';
import DomaList from './components/PagesLists/DomaList.vue';
import HousePageTemplate from './components/Pages/HousePageTemplate.vue';

export const router = createRouter({
    routes: [
        {
            path: '/',
            component: MainPage,
        },
        {
            path: '/company',
            component: About
        }, 
        {
            path: '/catalog',
            component: Catalog
        },
        {
            path: '/catalog/doma',
            component: DomaList
        },
        {
            path: '/catalog/doma/dom-1',
            component: HousePageTemplate
        },
        {
            path: '/services/banketnyy-zal',
            component: Service
        },
        {
            path: '/promo',
            component: PromoList
        },
        {
            path: '/services',
            component: ServicesList
        },
        {
            path: '/contacts',
            component: ContactsPage
        },
        {
            path: '/:catchAll(.*)',
            component: MainPage
        }
    ],
    scrollBehavior() {
        window.scrollTo(0,0);
    },
    history: createWebHistory()
})



export default router