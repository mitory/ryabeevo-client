import { createRouter, createWebHistory } from 'vue-router';
import MainPage from './components/MainPage.vue';
import Catalog from './components/Catalog.vue';
import About from './components/Pages/About.vue';
import Service from './components/Pages/Service.vue';
import PromoList from './components/PagesLists/PromoList.vue';
import ServicesList from './components/PagesLists/ServicesList.vue';
import ContactsPage from './components/Contacts/ContactsPage.vue';
import HousePageTemplate from './components/Pages/HousePageTemplate.vue';
import Promo from './components/Pages/Promo.vue';
import Page404 from './components/Pages/Page404.vue';
import BanketList from './components/PagesLists/BanketList.vue';
import Banket from './components/Pages/Banket.vue';
import TravelLineBooking from './components/BookingElements/TravelLineBooking.vue';

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
            path: '/catalog/:name',
            component: HousePageTemplate
        },
        {
            path: '/services/:name',
            component: Service
        },
        {
            path: '/promo',
            component: PromoList
        },
        {
            path: '/promo/:name',
            component: Promo
        },
        {
            path: '/services',
            component: ServicesList
        },
        {
            path: '/banketnye-zaly',
            component: BanketList
        },
        {
            path: '/banketnye-zaly/:name',
            component: Banket
        },
        {
            path: '/contacts',
            component: ContactsPage
        },
        {
            path: '/booking',
            component: TravelLineBooking
        },
        {
            path: '/:catchAll(.*)',
            component: Page404
        }
    ],
    scrollBehavior() {
        window.scrollTo(0,0);
    },
    history: createWebHistory()
})



export default router