import { createRouter, createWebHistory } from "vue-router";
import HelloWorld from "./components/default/inguinora/HelloWorld.vue";
import LoopComponent  from "./components/LoopComponent.vue";
import AreaTriangulo from "./components/atividade/AreaTriangulo.vue";
import AreaCirculo from "./components/atividade/AreaCirculo.vue";
import AreaTrapezio from "./components/atividade/AreaTrapezio.vue";
import HomeComponent from "./components/atividade/HomeComponent.vue";
import SobreNosComponent from "./components/atividade/SobreNosComponent.vue";

const routes = [
    {
        path: '/',
        name: 'Hello',
        component: HelloWorld
    },
    {
        path: '/loop',
        name: 'Loop',
        component: LoopComponent
    },
    {
        path: '/triangulo',
        name: 'Triangulo',
        component: AreaTriangulo
    },
    {
        path: '/circulo',
        name: 'Circulo',
        component: AreaCirculo
    },
    {
        path: '/trapezio',
        name: 'Trapezio',
        component: AreaTrapezio
    },
    {
        path: '/home',
        name: 'Home',
        component: HomeComponent
    },
    {
        path: '/sobrenos',
        name: 'Sobrenos',
        component: SobreNosComponent
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;