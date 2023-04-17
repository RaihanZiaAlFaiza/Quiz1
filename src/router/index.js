import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/home.vue";
import About from "@/views/about.vue";
import Galary from "@/views/galary.vue";


const routes = [
    {
        path: "/home",
        name: "Home",
        component: Home,
    },
    {
        path: "/about",
        name: "About",
        component: About,
    },
    {
        path: "/galary",
        name: "Galary",
        component: Galary,
    },

];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;