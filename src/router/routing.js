import { createRouter, createWebHistory } from 'vue-router';
import SectionHome from "@/sections/SectionHome.vue";
import SectionAbout from "@/sections/SectionAbout.vue";
import SectionMenu from "@/sections/SectionMenu.vue";
import SectionGalery from "@/sections/SectionGalery.vue";
import SectionService from "@/sections/SectionService.vue";

const routes = [
    { path: '/', component: SectionHome },
    { path: '/about', component: SectionAbout },
    { path: '/menus', component: SectionMenu },
    { path: '/gallery', component: SectionGalery },
    { path: '/service', component: SectionService },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        } else {
            return { left: 0, top: 0, behavior: 'smooth' };
        }
    }
});

export default router;
