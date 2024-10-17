import { createRouter, createWebHistory } from 'vue-router';
import SectionHome from "@/sections/SectionHome.vue";
import SectionAbout from "@/sections/SectionAbout.vue";
import SectionMenu from "@/sections/SectionMenu.vue";
import SectionGalery from "@/sections/SectionGalery.vue";
import SectionService from "@/sections/SectionService.vue";

const routes = [
    {
        path: '/',
        name: 'Home',
        component: SectionHome
    },
    {
        path: '/about',
        name: 'About',
        component: SectionAbout
    },
    {
        path: '/menus',
        name: 'Menus',
        component: SectionMenu
    },
    {
        path: '/gallery',
        name: 'Gallery',
        component: SectionGalery
    },
    {
        path: '/service',
        name: 'Service',
        component: SectionService
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        } else if (to.hash) {
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve({
                        el: to.hash,
                        behavior: 'smooth',
                    });
                }, 300);
            });
        } else {
            return { left: 0, top: 0, behavior: 'smooth' };
        }
    }
});
export default router;
