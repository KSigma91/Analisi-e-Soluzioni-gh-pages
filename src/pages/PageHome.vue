<template>
    <div>
        <div id="jumbotron__home" class="position-relative shadow">
            <div class="jumbotron jumbotron-fluid d-flex flex-column justify-content-start justify-content-md-center justify-content-lg-center bg-dark bg-opacity-75 py-5">
                <gsap-reveal :y="40">
                    <div class="container py-5 mb-4 text-start text-white opacity-100">
                        <div class="badge bg-warning text-dark mb-3 rounded-pill px-3 py-2">Infortunistica stradale • supporto tecnico</div>
                        <h1 class="display-5 fw-bold">Precisione tecnica al servizio del tuo lavoro</h1>
                        <p class="lead mb-4 fs-4">Supportiamo periti e tecnici di parte con analisi dettagliate, report chiari e project management dedicato. Affidabilità e chiarezza per i tuoi incarichi più complessi.</p>
                        <gsap-reveal>
                            <div class="d-flex justify-content-center justify-content-lg-start">
                                <a class="btn btn-block btn-primary px-3 py-2 rounded-1 border-0" @click="scrollToContact">Contattaci</a>
                            </div>
                        </gsap-reveal>
                    </div>
                </gsap-reveal>
            </div>
            <div id="gradient"></div>
        </div>
<!-- CHI SIAMO (AMGLAB) -->
        <section class="py-5">
            <div class="container-xxl px-3 px-lg-4">
                <gsap-reveal children=".col-lg-7" :y="35" :stagger="0.12">
                    <div class="row g-4 align-items-center">
                        <div class="col-lg-5 text-start">
                            <span class="text-warning fw-bold text-uppercase small">Cos'è AMG Lab?</span>
                            <h2 class="fw-bold display-6 mt-2 mb-3">Una realtà italiana specializzata nel settore dell'infortunistica stradale</h2>
                            <p class="text-secondary mb-3">
                                Forniamo consulenze tecniche specialistiche nell'ambito dell'infortunistica stradale, collaborando con <strong>studi legali</strong>, <strong>CTU (Consulenti Tecnici d'Ufficio)</strong> e <strong>CTP (Consulenti Tecnici di Parte)</strong>.
                                Mettiamo a disposizione competenze tecniche, tecnologie avanzate e metodologie consolidate per l'analisi, la rilevazione e la ricostruzione dei sinistri stradali.
                                La nostra struttura è organizzata per garantire elaborati tecnici chiari, accurati e facilmente consultabili.
                            </p>
                        </div>
                        <div class="col-lg-7">
                            <div class="row g-3 align-items-stretch">
                                <div v-for="about in aboutList" :key="about" class="col-md-4">
                                    <div class="border rounded-4 p-4 h-100 bg-light">
                                        <div class="fs-3 text-warning mb-3"><i :class="about.icon"></i></div>
                                        <h3 class="h6 fw-bold">{{ about.head }}</h3>
                                        <p class="small text-secondary mb-0">{{ about.text }}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </gsap-reveal>
            </div>
        </section>
<!-- PERCHE' SCEGLIERE AMG LAB -->
        <section class="container-fluid bg-light py-5">
            <gsap-reveal children=".card" :y="35" :stagger="0.12" :delay=".1">
                <div class="text-center mb-4 mb-lg-5">
                    <span class="text-warning text-start text-md-center text-lg-center text-uppercase small fw-bold">Perché scegliere AMG Lab</span>
                    <h2 class="fw-bold display-6 mt-2">Metodo, precisione e supporto in ogni fase del caso</h2>
                    <p class="text-secondary mx-auto mb-0" style="max-width: 760px;">
                        Ogni incarico viene affrontato con un percorso ordinato: raccolta dei dati, verifica delle informazioni disponibili, analisi tecnica e restituzione di elaborati comprensibili anche nei passaggi più complessi.
                    </p>
                </div>
                <div class="d-flex flex-wrap justify-content-center gap-4">
                    <div v-for="(choice, index) in choiceList" :key="index"
                        class="card border-0 shadow-sm rounded-4 text-center p-2" style="width: 20rem;">
                        <div class="card-body">
                            <div>
                                <img class="mb-2" :src="choice.img" alt="image" style="width: 4rem;">
                            </div>
                            <h3 class="card-title h5 fw-semibold" style="color: #004f8e;">{{ choice.title }}</h3>
                            <p class="card-text text-secondary">{{ choice.text }}</p>
                        </div>
                    </div>
                </div>
            </gsap-reveal>
        </section>
<!-- SERVIZI -->
        <section class="container d-flex flex-wrap justify-content-center align-items-start gap-5 py-5">
            <gsap-reveal children=".col" :y="35" :stagger="0.12">
                <div class="row align-items-start">
                    <div class="col-lg-6 mb-4 mb-lg-0">
                        <img src="../assets/Progetti-Sap-tech.svg" alt="services" class="img-fluid">
                    </div>
                    <div class="col-lg-6 mt-5">
                        <div class="card border-0 rounded-0">
                            <div class="card-body border-0 text-start p-0">
                                <!-- <hr class="my-4 opacity-100"> -->
                                <div class="card-title d-flex justify-content-between fw-bold mb-4"><span class="text-warning fw-bold text-uppercase small">I nostri servizi</span></div>
                                <p class="card-text" style="font-size: 1.1rem;">AMG Lab affianca periti e tecnici di parte offrendo un supporto completo, dall’analisi preliminare dei dati alla redazione di perizie tecniche. Grazie a un approccio integrato e all’esperienza del nostro team, garantiamo report chiari e attendibili, strumenti di valutazione avanzati e un’assistenza costante in ogni fase del progetto. Scopri di più sull’ampia gamma di servizi pensati per semplificare il tuo lavoro e valorizzare i tuoi risultati.</p>
                                <div class="d-flex justify-content-center justify-content-lg-start pb-3">
                                    <router-link class="btn btn-block btn-primary px-3 py-2 rounded-1 border-0 mt-4" to="/servizi" @click.native=ScrollToServices>Scopri di più</router-link>
                                </div>
                            </div>
                        </div>
                        <div class="row row-cols-1 row-cols-sm-3 g-3 mt-4">
                            <div class="col">
                                <div class="border rounded-4 p-3 h-100">
                                    <div class="fw-bold text-warning">01</div>
                                    <div class="small text-secondary">Analisi del caso</div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="border rounded-4 p-3 h-100">
                                    <div class="fw-bold text-warning">02</div>
                                    <div class="small text-secondary">Rilievi e documenti</div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="border rounded-4 p-3 h-100">
                                    <div class="fw-bold text-warning">03</div>
                                    <div class="small text-secondary">Consegna report</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </gsap-reveal>
        </section>
<!-- Evento Infortunistica Stradale "Analisi e Soluzioni" -->
        <section class="mb-3 mb-md-5 py-5 bg-light">
            <gsap-reveal children=".col-lg-5" :y="35" :stagger="0.12">
                <div class="container">
                    <div class="row g-4 align-items-start">
                        <div class="col-lg-7 text-start">
                            <span class="text-warning fw-bold text-uppercase small">Infortunistica Stradale</span>
                            <h2 class="fw-bold display-6 mt-2 mb-3">Analisi e Soluzioni</h2>
                            <p class="text-secondary">
                                Un incontro dedicato alla presentazione della realtà AMG Lab e al confronto con esperti del settore.
                                L'obiettivo è condividere strumenti, metodologie e visione operativa per affrontare meglio i casi complessi.
                            </p>
                            <p class="text-secondary mb-0">
                                Il 16 dicembre 2023 abbiamo organizzato un incontro dedicato all’infortunistica stradale e alla presentazione della nostra attività. L’evento si è svolto in un clima di grande collaborazione, grazie alla partecipazione di avvocati specializzati nel settore delle responsabilità civili e alla presenza della Polizia Locale di Lecce e provincia, che ha contribuito con dati, casi pratici e interventi sul campo. L’ampia competenza degli ospiti ha garantito approfondimenti concreti sulle dinamiche dei sinistri e sulle strategie di tutela legale, mentre la Polizia Locale ha illustrato le procedure operative e le best practice per la gestione degli incidenti. Questo primo appuntamento non solo ha riscosso un notevole successo di pubblico, ma ha anche rappresentato un punto di partenza fondamentale per far conoscere la nostra realtà professionale sul territorio, gettando le basi per futuri eventi e collaborazioni.
                            </p>
                        </div>
<!-- Video -->
                        <div class="col-lg-5">
                            <video poster="../assets/galleria/Poster00086400.jpg" preload="metadata" playsinline muted autoplay loop plays-inline src="../assets/Evento_web.mp4" class="order-1 shadow-sm" style="width: 100%; object-fit: cover; cursor: not-allowed"></video>
                        </div>
                    </div>
<!-- Card immagini evento -->
                    <gsap-reveal children=".card" :y="35" :stagger="0.12">
                        <div class="row g-4 mt-1 mt-lg-3">
                            <div class="col-md-5">
                                <div class="card h-auto border-0 shadow-sm rounded-4 overflow-hidden p-4">
                                    <span class="text-warning fw-bold text-uppercase small mb-2">Locandina evento</span>
                                    <h3 class="h5 fw-bold mb-3">Incontro ufficiale del 16 dicembre 2023</h3>
                                    <div class="row g-0 align-self-center">
                                        <div class="col-12">
                                            <div class="overflow-hidden">
                                                <img src="../assets/E_03_rid.jpg" alt="Locandina evento" class="img-fluid w-100 h-auto d-block" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-7">
                                <div class="card border-0 shadow-sm rounded-4 overflow-hidden">
                                    <div class="card-body p-4">
                                        <span class="text-warning fw-bold text-uppercase small mb-2 d-inline-block">Partecipazione pubblica</span>
                                        <h3 class="h5 fw-bold mb-3">Grande coinvolgimento e dibattito tecnico-legale</h3>
                                        <div class="row g-3">
                                            <div class="col-12">
                                                <div class="overflow-hidden">
                                                    <img src="../assets/E_01.jpg" alt="Pubblico durante l'evento" class="img-fluid w-100 h-auto d-block" />
                                                </div>
                                            </div>
                                            <div class="col-12">
                                                <div class="overflow-hidden">
                                                    <img src="../assets/E_02.jpg" alt="Seconda immagine dell'evento" class="img-fluid w-100 h-auto d-block" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </gsap-reveal>
                </div>
            </gsap-reveal>
        </section>
<!-- CIGMAN -->
        <section class="container-fluid section-wrap py-5 px-3 px-lg-4">
            <gsap-reveal children="section" :y="35" :stagger="0.12">
                <div class="container user-select-none">
                    <section class="bg-white border rounded-4 shadow-sm overflow-hidden mb-4 mb-lg-5">
                        <div class="row g-0 align-items-stretch">
                            <div class="col-lg-6 order-2 order-lg-1 p-4 p-md-5 d-flex align-items-center text-start">
                                <div>
                                    <div class="text-warning fw-bold text-uppercase small mb-3">Prodotto in prova</div>
                                    <h1 class="display-4 fw-bold lh-1 mb-3">CIGMAN CD-120G</h1>
                                    <p class="fs-4 fw-semibold text-dark mb-4">Uno strumento utile per l'infortunistica stradale.</p>
                                    <p class="text-secondary fs-6 lh-lg mb-4">
                                        Compatto, preciso e facile da usare, il CIGMAN CD-120G può diventare un valido
                                        supporto nei rilievi tecnici su strada, aiutando a raccogliere misure e riferimenti
                                        utili per ricostruzioni, planimetrie e analisi del sinistro.
                                    </p>
<!-- CARATTERISTICHE PRINCIPALI -->
                                    <div v-for="item in cigItems" :key="item" class="row row-cols-2 row-cols-xl-4 g-3 mb-4">
                                        <div v-for="itemMain in item.main" :key="itemMain.id" class="col">
                                            <div class="d-flex align-items-start gap-3">
                                                <div class="flex-shrink-0 rounded-circle bg-warning bg-opacity-10 text-warning d-inline-flex align-items-center justify-content-center" style="width: 44px; height: 44px;">
                                                    <i :class="itemMain.icon"></i>
                                                </div>
                                                <div>
                                                    <div class="fw-semibold">{{ itemMain.type }}</div>
                                                    <div class="small text-secondary">{{ itemMain.text }}</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="d-flex justify-content-end col-12 col-lg-6 order-1 order-lg-2">
                                <img src="../assets/Cigman/Cigman.png" alt="CIGMAN" class="img-fluid w-100 h-auto d-block" />
                            </div>
                        </div>
                    </section>
<!-- CARATTERISTICHE NEL DETTAGLIO -->
                    <section class="bg-white border rounded-4 shadow-sm overflow-hidden mb-4 mb-lg-5">
                        <div v-for="item in cigItems" :key="item" class="row row-cols-1 row-cols-md-5 g-0 text-center text-md-start">
                            <div v-for="itemDesc in item.desc" :key="itemDesc.id" class="col p-4 border-end">
                                <div class="text-warning mb-3 fs-4"><i :class="itemDesc.icon"></i></div>
                                <h3 class="h6 fw-bold mb-2">{{ itemDesc.type }}</h3>
                                <p class="mb-0 text-secondary small">{{ itemDesc.text }}</p>
                            </div>
                        </div>
                    </section>

                    <section id="scheda" class="mb-4 mb-lg-5">
                        <div class="row g-4">
                            <div class="col-lg-12">
                                <div v-for="item in cigItems" :key="item" class="row g-4">
                                    <div v-for="itemImage in item.image" :key="itemImage.id" class="col-md-6 col-xl-3">
                                        <article class="card h-100 border shadow-sm rounded-4 overflow-hidden">
                                            <img :src="itemImage.photos" class="card-img-top object-fit-cover" :alt="itemImage.type" style="width: 304; height: 202,66;" />
                                            <div class="card-body p-4 text-start">
                                                <h3 class="h5 fw-bold">{{ itemImage.head }}</h3>
                                                <p class="card-text text-secondary mb-0">{{ itemImage.desc }}</p>
                                            </div>
                                        </article>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </gsap-reveal>
        </section>
<!-- CONTATTACI (Home) -->
        <section id="contattaci" class="py-5 bg-dark bg-gradient" style="font-family: 'Inter';">
            <gsap-reveal children=".row" :y="35" :stagger="0.12">
                <div class="container d-flex flex-column justify-content-center align-items-center">
                    <div class="row g-4 g-lg-5 align-items-stretch">
                        <div class="col-lg-5">
                            <div class="h-100 d-flex flex-column justify-content-between text-start">
                                <div>
                                    <span class="badge bg-warning text-dark rounded-pill px-3 py-2 mb-3">
                                        Contatti
                                    </span>
        
                                    <h2 class="display-6 text-white fw-bold mb-3">
                                        Hai bisogno di supporto tecnico per un sinistro?
                                    </h2>
        
                                    <p class="lead text-white-50 mb-4">
                                        Raccontaci il caso: ti risponderemo con indicazioni chiare sui prossimi passaggi,
                                        sui documenti utili e sulle attività tecniche più adatte.
                                    </p>
                                </div>
                                <gsap-reveal children=".col" :y="35" :stagger="0.12">
                                    <div class="row row-cols-1 g-3">
                                        <div class="col">
                                            <div class="d-flex gap-3 p-3 border border-light border-opacity-25 rounded-4 bg-white bg-opacity-10">
                                                <div class="fs-4 text-warning">
                                                    <i class="bi bi-envelope"></i>
                                                </div>
                                                <div>
                                                    <div class="fw-semibold text-white">Email</div>
                                                    <a href="mailto:amglab.info@gmail.com" class="link-light text-decoration-none">
                                                        amglab.info@gmail.com
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col">
                                            <div class="d-flex gap-3 p-3 border border-light border-opacity-25 rounded-4 bg-white bg-opacity-10">
                                                <div class="fs-4 text-warning">
                                                    <i class="bi bi-telephone"></i>
                                                </div>
                                                <div>
                                                    <div class="fw-semibold text-white">Telefono</div>
                                                    <a href="tel:+390000000000" class="link-light text-decoration-none">
                                                        389 6821133 - 328 7264874
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col">
                                            <div class="d-flex gap-3 p-3 border border-light border-opacity-25 rounded-4 bg-white bg-opacity-10">
                                                <div class="fs-4 text-warning">
                                                    <i class="bi bi-clock"></i>
                                                </div>
                                                <div>
                                                    <div class="fw-semibold text-white">Tempi di risposta</div>
                                                    <div class="text-white-50">
                                                        Entro 24/48 ore lavorative
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </gsap-reveal>
                            </div>
                        </div>

                        <div class="col-lg-7">
                            <div class="card border-0 shadow-lg rounded-4 h-100">
                                <div class="card-body p-4 p-lg-5">
                                    <h3 class="h4 fw-bold mb-2 text-dark">Richiedi informazioni</h3>
                                    <p class="text-secondary mb-4">
                                        Compila il modulo: i campi contrassegnati con * sono obbligatori.
                                    </p>
                                    <form ref="form" class="needs-validation"  novalidate @submit.prevent="sendMail">
                                        <div class="row g-3">
                                            <input type="hidden" name="form_type" value="Contattaci">
                                            <div class="col-md-6 text-start">
                                                <div class="form-floating">
                                                    <input type="text" class="form-control rounded-2 border border-1" :class="{'is-invalid': errors.nome}" id="nome" name="nome" placeholder="Nome" v-model="form.nome" required>
                                                    <label for="nome"><small>Nome *</small></label>
                                                    <div class="invalid-feedback">
                                                        {{ errors.name }}
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-6 text-start">
                                                <div class="form-floating">
                                                    <input type="text" class="form-control rounded-2 border border-1" :class="{'is-invalid': errors.cognome}" id="cognome" name="cognome" placeholder="Cognome" v-model="form.cognome" required>
                                                    <label for="cognome"><small>Cognome *</small></label>
                                                    <div class="invalid-feedback">
                                                        {{ errors.lastname }}
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-6 text-start">
                                                <div class="form-floating">
                                                    <input type="email" class="form-control rounded-2 border border-1" :class="{'is-invalid': errors.email}" id="email" name="email" placeholder="Email" v-model="form.email" required>
                                                    <label for="email" class="form-label"><small>Email *</small></label>
                                                    <div class="invalid-feedback">
                                                        {{ errors.email }}
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-6 text-start">
                                                <div class="form-floating">
                                                    <input type="tel" class="form-control rounded-2 border border-1" id="cellulare" name="cellulare" placeholder="Cellulare" v-model="form.cellulare" @input="form.cellulare = form.cellulare.replace(/\D/g, '')">
                                                    <label for="cellulare" class="form-label me-1"><small>Cellulare</small></label>
                                                </div>
                                            </div>
                                            <div class="col-12 text-start">
                                                <div class="form-floating">
                                                    <select class="form-select" :class="{'is-invalid': errors.richiesta}" id="richiesta" name="richiesta" aria-label="Tipo di richiesta" v-model="form.richiesta" required>
                                                        <option class="small" selected disabled>Seleziona</option>
                                                        <option value="Analisi Tecnica">Analisi tecnica del sinistro</option>
                                                        <option value="Report e Documentazione">Report e documentazione</option>
                                                        <option value="Rilievi e Sopralluogo">Rilievi e sopralluogo</option>
                                                        <option value="Collaborazione">Collaborazione professionale</option>
                                                    </select>
                                                    <label for="richiesta" class="form-label"><small>Tipo di richiesta *</small></label>
                                                    <div class="invalid-feedback">
                                                        {{ errors.richiesta }}
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-12 text-start">
                                                <div class="form-floating">
                                                    <textarea class="form-control rounded-2 border border-1" :class="{'is-invalid': errors.messaggio}" id="messaggio" name="messaggio" placeholder="Messaggio" rows="2" v-model="form.messaggio" required></textarea>
                                                    <label for="messaggio" class="form-label"><small>Messaggio *</small></label>
                                                    <div class="invalid-feedback">
                                                        {{ errors.message }}
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-12">
                                                <div class="form-check mb-3 text-start">
                                                    <input class="form-check-input" id="privacy" type="checkbox" :class="{'is-invalid': errors.privacy}" v-model="form.privacy">
                                                    <label for="privacy" class="form-check-label text-dark"><small>Acconsento al trattamento dei miei dati personali, come descritto nella Privacy Policy, esclusivamente per ricevere una risposta al mio messaggio.</small> <span class="text-danger">*</span></label>
                                                    <div class="invalid-feedback">
                                                        {{ errors.privacy }}
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="d-flex justify-content-center justify-content-lg-end pt-1">
                                                <button class="btn btn-block btn-primary px-5 px-md-5 px-lg-3 py-2 rounded-1 border-0" type="submit" @click="showAlert">Invia richiesta</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </gsap-reveal>
        </section>
        <!--  -->
        <!-- TODO: inserire una sezione a scorrimento per possibili recensioni (in futuro) -->
        <!--  -->
        <!-- TODO: area sponsor se presente (in futuro) -->
        <!--  -->
    </div>
</template>

<script>
import emailjs from '@emailjs/browser'; 
import Swal from 'sweetalert2';
import GsapReveal from '../components/GsapReveal.vue';

export default {
    name: 'PageHome',
    components: {
        GsapReveal
    },
    metaInfo() {
        const path = this.$route.path;
        const canonicalURL = `https://amglablecce.it${path}`;
        return {
            title: 'AMG Lab',
            link: [
                { rel: 'canonical', href: canonicalURL }
            ],
            meta: [
                { name: 'description', content: 'AMG Lab si occupa di infortunistica stradale: ricostruzione incidenti, rilievi 3D, perizie tecnico-forense per CTU/CTP.' }
            ]
        };
    },
    data() {
        return {
            aboutList: [
                { icon: 'bi bi-laptop', head: 'Tecnologie avanzate', text: 'Droni, software e strumenti per rilievi e ricostruzioni più complete.'},
                { icon: 'bi bi-people', head: 'Team specializzato', text: 'Competenze tecniche e collaborazione costante tra le figure coinvolte.'},
                { icon: 'bi bi-shield-check', head: 'Affidabilità', text: 'Processi chiari, report accurati e assistenza dedicata in ogni fase.'}
            ],
            choiceList: [
                {
                    title: "Competenza specialistica",
                    text: "Analisi con approccio tecnico-forense e metodo aggiornato.",
                    img: require("../assets/car-insurance.gif")
                },
                {
                    title: "Report chiari e dettagliati",
                    text: "Documenti leggibili, ordinati e utili in ambito legale e assicurativo.",
                    img: require("../assets/document.gif")
                },
                {
                    title: "Supporto personalizzato",
                    text: "Ogni pratica segue un percorso dedicato, adattato alle esigenze del cliente.",
                    img: require("../assets/handshake.gif")
                },
                {
                    title: "Tempi rapidi e costi trasparenti",
                    text: "Processi snelli per risposte puntuali e un flusso di lavoro efficiente.",
                    img: require("../assets/fast-forward.gif")
                }
            ],
            cardList: [
                {
                    img: "",
                    alt: ""
                },
            ],
            form: {
                nome: '',
                cognome: '',
                cellulare: '',
                email: '',
                richiesta: '',
                messaggio: '',
                privacy: false
            },
            errors: {},
            cigItems: [
                {
                    main: [
                        {
                            id: 0,
                            icon: 'bi bi-bullseye',
                            type: 'Precisione',
                            text: '±2 mm',
                        },
                        {
                            id: 1,
                            icon: 'bi bi-rulers',
                            type: 'Distanza max',
                            text: '120 metri',
                        },
                        {
                            id: 2,
                            icon: 'bi bi-save',
                            type: 'Memoria',
                            text: '100 misurazioni',
                        },
                        {
                            id: 3,
                            icon: 'bi bi-shield-check',
                            type: 'Resistente',
                            text: 'IP68',
                        }
                    ],
                    desc: [
                        {
                            id: 0,
                            icon: 'bi bi-rulers',
                            type: 'Misurazioni multiple',
                            text: 'Distanza, area, volume, misurazioni continue, ecc.',
                        },
                        {
                            id: 1,
                            icon: 'bi bi-folder2',
                            type: 'Memoria intelligente',
                            text: 'Salva fino a 100 misurazioni per rivederle quando vuoi.',
                        },
                        {
                            id: 2,
                            icon: 'bi bi-brightness-high',
                            type: 'Display retroilluminato',
                            text: 'Lettura chiara anche in ambienti poco illuminati.',
                        },
                        {
                            id: 3,
                            icon: 'bi bi-phone',
                            type: 'Compatto e leggero',
                            text: 'Design ergonomico e materiali di alta qualità.',
                        },
                        {
                            id: 4,
                            icon: 'bi bi-shield-check',
                            type: 'Robusto e affidabile',
                            text: 'Protezione IP68 contro polvere e schizzi d\'acqua.',
                        }
                    ],
                    image: [
                        {
                            id: 0,
                            type: 'cigman',
                            photos: require('../assets/Cigman/IMG_2204_DxO.jpg'),
                            head: 'Precisione al laser',
                            desc: 'Utile per rilevare distanze, ingombri e riferimenti metrici durante sopralluoghi tecnici e ricostruzioni.'
                        },
                        {
                            id: 1,
                            type: 'cigman',
                            photos: require('../assets/Cigman/photo_2026-05-04_21-01-33.jpg'),
                            head: 'Supporto nei rilievi',
                            desc: 'Aiuta a raccogliere misure coerenti e facilmente riportabili in relazioni, schemi tecnici ed elaborati grafici.'
                        },
                        {
                            id: 2,
                            type: 'cigman',
                            photos: require('../assets/Cigman/IMG_2208_DxO.jpg'),
                            head: 'Facile da usare',
                            desc: 'L’interfaccia intuitiva e il display leggibile permettono di effettuare misurazioni rapide anche sul campo.'
                        },
                        {
                            id: 3,
                            type: 'cigman',
                            photos: require('../assets/Cigman/IMG_2186_DxO.jpg'),
                            head: 'Perfetto per ogni progetto',
                            desc: 'Un supporto pratico per planimetrie, verifiche dimensionali, documentazione tecnica e analisi preliminari.'
                        }
                    ]
                }
            ],
        }
    },
    mounted() {
        const vid = this.$refs.myVideo;
        vid.onloadedmetadata = () => {
            vid.play();
            vid.pause();
        };
    },
    methods: {
        onVisible(visible) {
            if (visible) this.isVisible = true;
        },
        sendMail(event) {
            if (this.showAlert()) {
                event.preventDefault();
                emailjs.sendForm('service_o1g30x9', 'template_9tykh0u', this.$refs.form, 'AEfAAYssR5PXoPmif')
                .then(() => {
                    Swal.fire({ icon : 'success', title : 'Successo!', text : 'Messaggio inviato con successo', confirmButtonColor : '#3085d6'});
                    this.resetForm();
                })
                .catch(() => {
                    Swal.fire({ icon : 'error', title : 'Si è verificato un errore', text : 'C\'è stato un problema durante l\'invio del messaggio', confirmButtonColor : '#3085d6'});
                });
            } else {
                Swal.fire({ icon : 'error', title : 'Si è verificato un errore', text : 'Controlla i campi inseriti', confirmButtonColor : '#3085d6'});
            }
        },
        showAlert() {
            this.errors = {};
            let valid = true;

            if (!this.form.nome) {
                this.errors.nome = 'Non hai inserito il tuo nome';
                valid = false;
            }
            if (!this.form.cognome) {
                this.errors.cognome = 'Non hai inserito il tuo cognome';
                valid = false;
            }
            if (!this.form.email) {
                this.errors.email = 'Non hai inserito la tua email';
                valid = false;
            } else if (!this.form.email.includes('@')) {
                this.errors.email = 'Non hai inserito la @ alla tua email';
                valid = false;
            } else if (!this.form.email.includes('.')) {
                this.errors.email = 'La tua email deve contenere un punto (.)';
                valid = false;
            }
            if (!this.form.richiesta) {
                this.errors.richiesta = 'Seleziona il tipo di richiesta',
                valid = false;
            }
            if (!this.form.messaggio) {
                this.errors.messaggio = 'Non hai inserito il tuo messaggio';
                valid = false;
            }
            if (!this.form.privacy) {
                this.errors.privacy = 'Devi accettare il trattamento dei dati personali';
                valid = false;
            }

            return valid;
        },
        resetForm() {
            this.form = { nome : '', cognome : '', email : '', cellulare : '', messaggio : '', privacy : false };
            this.errors = {};
            this.$refs.form.reset();
        },
        scrollToContact() {
            const section = document.getElementById('contattaci');
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }
}
</script>

<style lang="scss" scoped>
#jumbotron__home {
    background-image: url(../assets/t-bone-car-accidents.png);
    background-size: cover;

    .jumbotron {
        height: 650px;

        @media screen and (max-width: 991px) {
            height: 580px;
        }
    }

    #gradient {
        position: absolute;
        bottom: 0;
        left: 0;
        z-index: 600;
        width: 100%;
        height: 150px;
        background: url(../assets/gradient.png);
        background-size: cover;
    }
}
</style>