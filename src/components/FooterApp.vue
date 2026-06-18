<template>
    <footer class="text-start" style="background-color: #232f3e; color: #dddddd; font-family: 'Inter';">
        <gsap-reveal children=".row" :y="35" :stagger="0.12">
            <section class="border-bottom border-secondary">
                <div class="container-xxl px-3 px-lg-4 py-4">
                    <div class="row g-3 align-items-center">
                        <div class="col-lg-8">
                            <h2 class="h4 fw-bold mb-1">Hai bisogno di supporto tecnico su un sinistro?</h2>
                            <p class="text-white-50 mb-0 fw-light">Contattaci per consulenze, preventivi, revisioni di casi archiviati e supporto a CTU/CTP.</p>
                        </div>
                        <div class="col-lg-4 text-lg-end">
                            <router-link @click.native="goToContact"  to="/#contattaci" class="btn btn-warning text-white px-3 py-2 rounded-1 border-0">Richiedi informazioni</router-link>
                        </div>
                    </div>
                </div>
            </section>
        </gsap-reveal>

        <section>
            <gsap-reveal children=".col-12" :y="35" :stagger="0.12">
                <div class="container px-3 px-md-0 px-lg-4 py-5">
                    <gsap-reveal children=".row" :y="35" :stagger="0.12">
                        <div class="row g-4 g-lg-5">
                            <div class="col-lg-3">
                                <a href="/" class="d-inline-flex align-items-center gap-2 text-white text-decoration-none mb-3">
                                    <img :src="require('../assets/1x/amglabweb02.png')" alt="AMG Lab" class="img-fluid me-1">
                                </a>
                                <p class="text-white-50 mb-4 fw-light">
                                    Analisi tecnica, ricostruzione dinamica e supporto professionale nel settore dell'infortunistica stradale.
                                </p>
                                <gsap-reveal children="a" :y="35" :stagger="0.12">
                                    <div class="d-flex align-items-center gap-2">
                                        <a href="https://www.linkedin.com/in/alessio-montinaro-0a504a20b/recent-activity/all/" class="btn btn-outline-light rounded-circle d-inline-flex justify-content-center align-items-center p-0" style="width: 43px; height: 43px;" aria-label="LinkedIn"><i class="bi bi-linkedin"></i></a>
                                        <a href="https://www.youtube.com/@AMGLab" class="btn btn-outline-light rounded-circle d-inline-flex justify-content-center align-items-center p-0" style="width: 43px; height: 43px;" aria-label="YouTube"><i class="bi bi-youtube"></i></a>
            <!-- TODO: Aggiungere email? -->
                                        <!-- <a href="#" class="btn btn-outline-light rounded-circle" aria-label="Email"><i class="bi bi-envelope"></i></a> -->
                                    </div>
                                </gsap-reveal>
                            </div>
<!-- CONTATTI -->
                            <div class="col-12 col-lg-3">
                                <h3 class="h6 fw-bold text-uppercase mb-3">Contatti</h3>
                                <ul class="list-unstyled text-white-50 mb-0 fw-light">
                                    <li class="mb-3"><i class="bi bi-geo-alt text-warning me-2"></i>Lecce, 73100</li>
                                    <li class="mb-3"><i class="bi bi-envelope text-warning me-2"></i><a href="mailto:amglab.info@gmail.com" class="link-light text-decoration-none">amglab.info@gmail.com</a></li>
                                    <li><i class="bi bi-telephone text-warning me-2"></i><a href="tel:+393896821133" class="link-light text-decoration-none">389 6821133 - 328 7264874</a></li>
                                </ul>
                            </div>
<!-- LINK UTILI -->
                            <div class="col-12 col-lg-2">
                                <h3 class="h6 fw-bold text-uppercase mb-3">Link utili</h3>
                                <ul class="list-unstyled mb-0 fw-light">
                                    <li class="mb-2"><router-link @click.native="ScrollToTop" to="/" class="link-light text-decoration-none">Home</router-link></li>
                                    <li class="mb-2"><router-link @click.native="ScrollToTop" to="/servizi" class="link-light text-decoration-none">Servizi</router-link></li>
                                    <li class="mb-2"><router-link @click.native="ScrollToTop" to="/elaborati" class="link-light text-decoration-none">Elaborati</router-link></li>
                                    <li><router-link @click.native="ScrollToTop" to="/chisiamo" class="link-light text-decoration-none">Chi siamo</router-link></li>
                                </ul>
                            </div>
<!-- SUPPORTO -->
                            <div class="col-12 col-lg-2">
                                <h3 class="h6 fw-bold text-uppercase mb-3">Supporto</h3>
                                <ul class="list-unstyled mb-0 fw-light">
                                    <li class="mb-2"><router-link @click.native="ScrollToTop" to="/#contattaci" class="link-light text-decoration-none" @click="goToContact">Contattaci</router-link></li>
                                    <li class="mb-2"><router-link @click.native="ScrollToTop" to="/servizi#faqServizi" class="link-light text-decoration-none" @click="goToFaq">FAQ</router-link></li>
                                    <li class="mb-2"><router-link @click.native="ScrollToTop" to="/preventivi" class="link-light text-decoration-none">Preventivi</router-link></li>
                                    <li class="mb-2"><router-link @click.native="ScrollToTop" to="/consulenze" class="link-light text-decoration-none">Consulenze</router-link></li>
                                    <li><router-link @click.native="ScrollToTop" to="/revisioni" class="link-light text-decoration-none">Revisione Casi</router-link></li>
                                </ul>
                            </div>
<!-- SERVIZI -->
                            <!-- <div class="col-6 col-lg-2">
                                <h3 class="h6 fw-bold text-uppercase mb-3">Servizi</h3>
                                <ul class="list-unstyled mb-0 fw-light">
                                    <li class="mb-2"><router-link @click.native="ScrollToTop" to="/servizi#consulenza" class="link-light text-decoration-none">Consulenza tecnica</router-link></li>
                                    <li class="mb-2"><router-link @click.native="ScrollToTop" to="/servizi#rilievo" class="link-light text-decoration-none">Sopralluoghi</router-link></li>
                                    <li class="mb-2"><router-link @click.native="ScrollToTop" to="/servizi#fotogrammetria" class="link-light text-decoration-none">Aerofotogrammetria</router-link></li>
                                    <li><router-link @click.native="ScrollToTop" to="/servizi#ricostruzione" class="link-light text-decoration-none">Ricostruzione 2D/3D</router-link></li>
                                </ul>
                            </div> -->
                        </div>
                    </gsap-reveal>
                </div>
            </gsap-reveal>
        </section>
<!-- FOOTER INFERIORE -->
        <section class="bg-black bg-opacity-25 border-top border-secondary">
            <div class="container-xxl px-3 px-lg-4 py-3">
                <div class="row g-3 align-items-center fw-light">
                    <div class="col-lg-6 text-center text-lg-start">
                        <p class="small text-white-50 mb-0">AMG Lab · Lecce, 73100</p>
                    </div>
                    <div class="col-lg-6">
                        <ul class="list-inline text-center text-lg-end small mb-0">
                            <li class="list-inline-item"><router-link class="link-light text-decoration-none text-white-50" to="/privacy&cookie">Privacy Policy</router-link></li>
                            <li class="list-inline-item text-white-50">·</li>
                            <li class="list-inline-item"><router-link @click.native="goToContact" to="/#contattaci" class="link-light text-decoration-none text-white-50">Contatti</router-link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    </footer>
</template>

<script>
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/all';
import GsapReveal from '../components/GsapReveal.vue';

gsap.registerPlugin(ScrollToPlugin);

export default {
    name: 'FooterApp',
    components: { GsapReveal },
    methods: {
        ScrollToTop() {
            gsap.to(window, { scrollTo: { x: 0, y : 0 }, duration: 1.0, ease: 'power2.out'});
        },
        goToContact() {
            // se non sei già in homepage, cambia pagina
            if (this.$route.path !== '/') {
                this.$router.push({ path: '/', hash: '#contattaci' });
            } else {
                // già in home: scrolla direttamente
                const el = document.getElementById('contattaci');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
            }
        },
        goToFaq() {
            // se non sei già in homepage, cambia pagina
            if (this.$route.path !== '/servizi') {
                this.$router.push({ path: '/servizi', hash: '#faq' });
            } else {
                // già in home: scrolla direttamente
                const el = document.getElementById('faq');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }
}
</script>

<style lang="scss" scoped>
img {
    width: auto;
    height: 60px;

    // @media screen and (max-width: 767px) {
    //     height: 40px;
    // }
}
</style>