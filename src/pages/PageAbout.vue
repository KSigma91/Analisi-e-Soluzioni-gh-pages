<template>
    <div id="bg__about" class="bg-light bg-gradient py-5">
        <div class="container-xxl px-3 px-lg-4">
            <section class="bg-white border rounded-4 shadow-sm overflow-hidden mb-4 mb-lg-5">
                <div class="row g-0 align-items-stretch text-start pb-3 pb-lg-0">
                    <div class="col-lg-6 order-lg-1 p-4 p-md-5">
                        <div class="text-warning fw-bold text-uppercase small mb-3">Chi siamo</div>
                        <h1 class="display-4 fw-bold lh-1 mb-3">Studio di infortunistica stradale</h1>
                        <p class="fs-4 fw-semibold text-dark mb-4">Esperienza, precisione e supporto in ogni fase del sinistro.</p>
                        <p class="text-secondary fs-6 lh-lg mb-4">
                            Siamo un team specializzato nella gestione tecnica e documentale degli incidenti stradali.
                            Affianchiamo privati, aziende e professionisti con un approccio chiaro, puntuale e orientato
                            alla ricostruzione corretta dei fatti.
                        </p>
                        
                        <gsap-reveal children=".col" :y="35" :stagger="0.12">
                            <div class="row row-cols-1 row-cols-sm-3 g-3 mb-4">
                                <div class="col">
                                    <div class="border rounded-4 p-3 h-100 bg-warning bg-opacity-10">
                                        <div class="text-warning fs-4 mb-2"><i class="bi bi-clipboard-data"></i></div>
                                        <div class="fw-semibold">Analisi tecnica</div>
                                        <div class="small text-secondary">Raccolta e lettura dei dati</div>
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="border rounded-4 p-3 h-100 bg-warning bg-opacity-10">
                                        <div class="text-warning fs-4 mb-2"><i class="bi bi-diagram-3"></i></div>
                                        <div class="fw-semibold">Ricostruzione</div>
                                        <div class="small text-secondary">Dinamica del sinistro</div>
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="border rounded-4 p-3 h-100 bg-warning bg-opacity-10">
                                        <div class="text-warning fs-4 mb-2"><i class="bi bi-file-earmark-text"></i></div>
                                        <div class="fw-semibold">Relazioni</div>
                                        <div class="small text-secondary">Documentazione e report</div>
                                    </div>
                                </div>
                            </div>
                        </gsap-reveal>
                    </div>

                    <div class="col-lg-6 order-1 d-flex justify-content-center align-items-center">
                        <video data-v-3e2ed5d2="" preload="metadata" playsinline="" muted="muted" autoplay="autoplay" loop="loop" plays-inline="" type="video/quicktime" :src="videoHero" class="img-fluid"></video>
                    </div>
                </div>
            </section>
<!-- MISSIONE -->
            <section class="bg-white border rounded-4 shadow-sm p-4 p-lg-5 mb-4 mb-lg-5">
                <div class="row g-4 align-items-center text-start">
                    <div class="col-lg-5">
                        <div class="text-warning fw-bold text-uppercase small mb-2">La nostra missione</div>
                        <h2 class="fw-bold display-6 mb-3">Portare chiarezza dove servono metodo e competenza</h2>
                        <p class="text-secondary lh-lg mb-0">
                            Ogni sinistro richiede attenzione ai dettagli, capacità di lettura degli elementi
                            oggettivi e una gestione ordinata delle informazioni. Il nostro obiettivo è fornire
                            una base tecnica solida per supportare decisioni corrette e tutelare al meglio chi si rivolge a noi.
                        </p>
                    </div>

                    <div class="col-lg-7">
                        <gsap-reveal children=".row" :y="35" :stagger="0.12">
                            <div class="row row-cols-1 row-cols-md-3 g-3">
                                <div class="col">
                                    <div class="border rounded-4 p-4 h-100">
                                        <div class="text-warning fs-3 mb-3"><i class="bi bi-search"></i></div>
                                        <h3 class="h6 fw-bold">Sopralluogo</h3>
                                        <p class="small text-secondary mb-0">Verifica dei luoghi, dei danni e delle evidenze utili alla pratica.</p>
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="border rounded-4 p-4 h-100">
                                        <div class="text-warning fs-3 mb-3"><i class="bi bi-camera"></i></div>
                                        <h3 class="h6 fw-bold">Documentazione</h3>
                                        <p class="small text-secondary mb-0">Rilievi fotografici, raccolta dati e archiviazione ordinata delle prove.</p>
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="border rounded-4 p-4 h-100">
                                        <div class="text-warning fs-3 mb-3"><i class="bi bi-shield-check"></i></div>
                                        <h3 class="h6 fw-bold">Supporto</h3>
                                        <p class="small text-secondary mb-0">Assistenza tecnica e coordinamento per una gestione più serena del caso.</p>
                                    </div>
                                </div>
                            </div>
                        </gsap-reveal>
                    </div>
                </div>
            </section>
<!-- COMPONENTI STUDIO -->
            <section id="componenti" class="mb-4 mb-lg-5 text-start">
                <div class="d-flex align-items-end justify-content-between flex-wrap gap-3 mb-5">
                    <div class="mb-4">
                        <div class="text-warning fw-bold text-uppercase small mb-2">Componenti dello studio</div>
                        <h2 class="display-6 fw-bold mb-0">Persone, competenze e strumenti che lavorano insieme</h2>
                    </div>
                </div>
                <div class="pt-5">
                    <div class="d-flex flex-wrap justify-content-evenly gap-5">
                        <article v-for="(info, index) in pilotProfile" :key="index" 
                        class="position-relative card border shadow-sm rounded-4 mb-5 mb-lg-0" style="width: 30rem;">
                            <div class="ratio py-5"> <!-- provare my-5 -->
                                <img class="rounded-4 shadow" :src="info.photo" :alt="info.name" loading="lazy">
                            </div>
                            <div class="card-body p-4 pt-0">
                                <h3 class="h5 fw-bold lh-base" style="font-size: 1.2rem; color: #004f8e;">{{ info.skill }}</h3>
                                <p class="text-secondary lh-base">{{ info.title }}</p>
                                <p class="mb-0">{{ info.info }}</p>
                            </div>
                        </article>
                    </div>
<!-- TODO: Da vedere più avanti? -->
                    <!-- <div class="col">
                        <article class="card h-100 border shadow-sm rounded-4 overflow-hidden">
                            <div class="ratio ratio-4x3 bg-warning bg-opacity-10">
                                <img src="assets/team-software.jpg" alt="Postazione software" class="w-100 h-100 object-fit-cover" />
                            </div>
                            <div class="card-body p-4">
                                <div class="text-warning fs-4 mb-3"><i class="bi bi-pc-display"></i></div>
                                <h3 class="h5 fw-bold">Postazione software</h3>
                                <p class="text-secondary mb-0">
                                    Consente di elaborare schemi, cronologie e ricostruzioni visuali utili alla pratica e alla relazione tecnica.
                                </p>
                            </div>
                        </article>
                    </div> -->
                </div>
            </section>
<!-- NUMERI / VALORI -->
            <section class="bg-white border rounded-4 shadow-sm p-4 p-lg-5 mb-4 mb-lg-5 text-start">
                <div class="row g-4 align-items-center">
                    <div class="col-lg-4">
                        <div class="text-warning fw-bold text-uppercase small mb-2">I nostri valori</div>
                        <h2 class="display-6 fw-bold mb-3">Precisione, metodo e trasparenza</h2>
                        <p class="text-secondary mb-0">
                            Ogni incarico viene affrontato con un processo semplice da comprendere e rigoroso nella sostanza.
                        </p>
                    </div>

                    <div class="col-lg-8">
                        <gsap-reveal children=".col" :y="35" :stagger="0.12">
                            <div class="row row-cols-1 row-cols-md-3 g-3">
                                <div class="col">
                                    <div class="border rounded-4 p-4 h-100">
                                        <div class="display-6 fw-bold text-warning">01</div>
                                        <div class="fw-semibold mb-2">Ascolto</div>
                                        <div class="small text-secondary">Partiamo sempre dal caso concreto e dalle esigenze del cliente.</div>
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="border rounded-4 p-4 h-100">
                                        <div class="display-6 fw-bold text-warning">02</div>
                                        <div class="fw-semibold mb-2">Analisi</div>
                                        <div class="small text-secondary">Esaminiamo prove, danni e dinamiche con un approccio tecnico ordinato.</div>
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="border rounded-4 p-4 h-100">
                                        <div class="display-6 fw-bold text-warning">03</div>
                                        <div class="fw-semibold mb-2">Restituzione</div>
                                        <div class="small text-secondary">Consegniamo elaborati chiari, utili e coerenti con gli obiettivi della pratica.</div>
                                    </div>
                                </div>
                            </div>
                        </gsap-reveal>
                    </div>
                </div>
            </section>
<!-- CTA -->
            <gsap-reveal>
                <section id="contatti" class="bg-white border rounded-4 shadow-sm p-4 p-lg-4">
                    <div class="row align-items-center g-3 text-start">
                        <div class="col-lg-8">
                            <h2 class="h3 fw-bold mb-2">Hai bisogno di una valutazione tecnica del sinistro?</h2>
                            <p class="text-secondary mb-0">
                                Possiamo aiutarti a costruire una lettura ordinata dei fatti, con documenti e schede pensate per essere subito comprensibili.
                            </p>
                        </div>
                        <div class="col-lg-4 text-lg-end">
                            <router-link class="btn btn-lg btn-block btn-primary px-3 py-2 rounded-1 border-0" to="/#contattaci">Richiedi informazioni</router-link>
                        </div>
                    </div>
                </section>
            </gsap-reveal>
        </div>
    </div>
</template>

<script>
import GsapReveal from '../components/GsapReveal.vue'

export default {
  components: { GsapReveal },
    name: 'PageAbout',
    metaInfo() {
        const path = this.$route.path
        const canonicalURL = `https://amglablecce.it${path}`
        return {
            title: 'Chi siamo',
            titleTemplate: '%s | AMG Lab',
            link: [
                { rel: 'canonical', href: canonicalURL }
            ],
            meta: [
                { name: 'description', content: 'Scopri chi siamo e cosa ci distingue nel nostro settore.' }
            ]
        }
    },
    data() {
        return {
            videoHero: process.env.BASE_URL + 'videos/Amg_Lab_Web.mp4', 
            pilotProfile: [
                {
                    photo: require("../assets/Alessio-Montinaro_rid.jpg"),
                    name: "Alessio Montinaro",
                    skill: "Consulente Tecnico in Ricostruzione Incidenti Stradali",
                    title: "Socio UPIS – Unione Professionisti Infortunistica Stradale Iscritto all’Albo Docenti della Scuola Regionale di Polizia Locale della Regione Campania e Ideatore del metodo MARC (Metodo Analitico di Ricostruzione e Compatibilità)",
                    info: "Dal 2016 opero nel settore della ricostruzione tecnico-grafica CAD di incidenti stradali, con attività di analisi e ricostruzione dinamica dei sinistri e produzione di elaborati planimetrici di supporto tecnico. Mi occupo di rilievi avanzati e aerofotogrammetria applicata all’infortunistica stradale, integrando strumenti digitali e software CAD per la ricostruzione tecnica degli eventi. Attraverso metodologie forensi, soluzioni innovative e approcci tecnici personalizzati, sviluppo analisi e ricostruzioni finalizzate al supporto di studi legali, periti assicurativi e pubbliche amministrazioni, garantendo un supporto tecnico qualificato e professionale."
                },
                {
                    photo: require("../assets/Andrea-Guidotti_rid.jpg"),
                    name: "Andrea Guidotti",
                    skill: "Disegnatore Tecnico 3D",
                    title: "Ideatore del metodo MARC (Metodo Analitico di Ricostruzione e Compatibilità)",
                    info: "Specializzato nell’uso di software 3D per ricostruire sinistri stradali e realizzare simulazioni dinamiche, trasformando dati tecnici complessi in visualizzazioni chiare, attendibili e di immediata comprensione. Come pilota APR certificato, unisco la visione aerea alla modellazione digitale per ottenere prospettive uniche e dettagliate. Con un approccio proattivo e una tenace determinazione, affronto ogni progetto con rigore metodologico, valorizzando ogni minimo particolare. Questa combinazione di precisione tecnica, esperienza di volo e inventiva mi permette di offrire analisi approfondite e soluzioni su misura, supportando con professionalità le decisioni tecniche e giuridiche nel settore infortunistico."
                }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
#bg__about {

    .ratio {

        img {
            position: absolute;
            left: 0;
            top: 0;
            transform: translate(-50%,-50%);
            width: 160px;
            height: 160px;
            object-fit: cover;
            object-position: top;
            image-rendering: -webkit-optimize-contrast;

            @media screen and (max-width: 991px) {
                left: 50%;
                width: 150px;
                height: 150px;
            }
        }
    }
}
</style>