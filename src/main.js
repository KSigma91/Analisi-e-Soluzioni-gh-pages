import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueSweetalert2 from 'vue-sweetalert2'
import gsap from 'gsap'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import VueMeta from 'vue-meta';

gsap.registerPlugin(ScrollToPlugin)

import Home from './pages/PageHome.vue'
import Service from './pages/PageService.vue'
import Gallery from './pages/PageGallery.vue'
import About from './pages/PageAbout.vue'
import Legal from './pages/PageLegal.vue'
import Quotes from './components/QuotesForm.vue'
import Case from './components/CaseForm.vue'
import Consultancy from './components/ConsultancyForm.vue'



const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/servizi',
        name: 'service',
        component: Service
    },
    {
        path: '/elaborati',
        name: 'gallery',
        component: Gallery
    },
    {
        path: '/chisiamo',
        name: 'about',
        component: About
    },
    {
        path: '/preventivi',
        name: 'quotes',
        component: Quotes
    },
    {
        path: '/revisioni',
        name: 'case',
        component: Case
    },
    {
        path: '/consulenze',
        name: 'consultancy',
        component: Consultancy
    },
    {
        path: '/privacy-cookie',
        name: 'privacy-cookie',
        component: Legal
    },
    {
      path: '*',
      redirect: '/'
    }
];

const router = new VueRouter ({
    routes,
    mode: 'hash',
    base: process.env.BASE_URL,
    
    scrollBehavior(to, from, savedPosition) {
        // se vengo da history, usa la posizione salvata (no animazione)
        if (savedPosition) {
            return savedPosition;
        }
        // scroll verso hash con GSAP
        if (to.hash) {
            // restituisco false per impedire lo scroll nativo
            return new Promise(resolve => {
                // wait until Vue has rendered the target element
                setTimeout(() => {
                    const target = document.querySelector(to.hash);
                    if (target) {
                        gsap.to(window, {
                        duration: 1,
                        scrollTo: { y: target, offsetY: 80 }, // offsetY per tenere conto dell’header sticky
                        ease: 'power2.out',
                        onComplete: () => resolve({ x: 0, y: window.scrollY })
                        });
                    } else {
                        // elemento non trovato, scroll in top
                        gsap.to(window, {
                        duration: 1,
                        scrollTo: { y: 0 },
                        ease: 'power2.out',
                        onComplete: () => resolve({ x: 0, y: 0 })
                        });
                    }
                }, 50); 
            });
        }
        // altrimenti scrolla top con GSAP
        return new Promise(resolve => {
            gsap.to(window, {
                duration: .8,
                scrollTo: { y: 0 },
                ease: 'power2.out',
                onComplete: () => resolve({ x: 0, y: 0 })
            });
        });
    }
});

export default router;

Vue.use(VueRouter)
Vue.use(VueSweetalert2);

Vue.config.productionTip = false

Vue.use(VueMeta, {
  refreshOnceOnNavigation: true
});

new Vue ({
    render: h => h(App),
    router
}).$mount('#app')