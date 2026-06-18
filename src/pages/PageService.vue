<template>
    <div>
        <section id="jumbotron__services">
            <gsap-reveal children=".row" :y="35" :stagger="0.12">
                <div class="jumbotron jumbotron-fluid bg-dark bg-opacity-75">
                    <div class="container-xxl px-3 px-lg-4 py-5">
                        <div class="row g-4 align-items-center py-lg-5">
                            <div class="col-lg-8 text-start">
                                <span class="badge bg-warning text-dark rounded-pill px-3 py-2 mb-3">Servizi AMG Lab</span>
                                <h1 class="display-4 text-white fw-bold mb-3">Soluzioni tecniche per l'infortunistica stradale</h1>
                                <p class="lead text-white-50 mb-4">
                                    Dal primo sopralluogo alla relazione finale: analisi, rilievi, aerofotogrammetria,
                                    modellazione e supporto tecnico per periti, consulenti, studi legali e professionisti.
                                </p>
                                <gsap-reveal>
                                    <div class="d-flex flex-wrap gap-4">
                                        <router-link class="btn btn-primary px-3 py-2 rounded-1 border-2 text-decoration-none text-white" to="/preventivi">Richiedi un preventivo</router-link>
                                        <router-link class="px-3 py-2 rounded-1 border border-1 text-decoration-none text-white" to="/consulenze">Prenota una consulenza</router-link>
                                    </div>
                                </gsap-reveal>
                            </div>
                            <div class="col-lg-4 text-start">
                                <div class="row row-cols-2 g-3">
                                    <div v-for="jumbo in jumboItems" :key="jumbo" class="col">
                                        <div class="border border-light border-opacity-25 bg-dark bg-opacity-75 rounded-4 p-3 h-100">
                                            <div class="fs-3 text-warning mb-2"><i :class="jumbo.icon"></i></div>
                                            <div class="text-white fw-semibold">{{ jumbo.title }}</div>
                                            <div class="small text-white-50">{{ jumbo.desc }}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </gsap-reveal>
        </section>
<!-- SERVIZI NEL DETTAGLIO ALTERNATIVO -->
        <section id="servizi" class="py-5 bg-light">
            <div class="container-xxl px-3 px-lg-4">
                <div class="text-center mb-4 mb-lg-5">
                    <span class="text-warning fw-bold text-uppercase small">Cosa possiamo fare</span>
                    <h2 class="display-6 fw-bold mt-2 mb-3">Scegli il servizio più adatto al caso</h2>
                </div>
                <gsap-reveal children=".row" :y="35" :stagger="0.12">
                    <div class="row row-cols-1 row-cols-md-2 row-cols-xl-3 g-4">
                        <div v-for="item in items" :key="item.id" class="col">
                            <article class="card h-100 border-0 shadow-sm rounded-4 text-start">
                                <div class="card-body d-flex flex-column justify-content-between p-4">
                                    <div>
                                        <span :class="item.icon" class="fs-2 text-warning"></span>
                                        <h3 class="h5 fw-bold mt-2">{{ item.head }}</h3>
                                        <p class="text-secondary">{{ item.title }}</p>
                                        <ul :id="item.idName" class="list-unstyled small text-secondary mb-4">
                                            <li class="d-inline-flex mb-2"><i class="far fa-check-circle text-warning me-2 align-self-center"></i><p class="m-0">{{ item.desc[0].top }}</p></li>
                                            <li class="d-inline-flex mb-2"><i class="far fa-check-circle text-warning me-2 align-self-center"></i><p class="m-0">{{ item.desc[1].mid }}</p></li>
                                            <li class="d-inline-flex mb-2"><i class="far fa-check-circle text-warning me-2 align-self-center"></i><p class="m-0">{{ item.desc[2].bottom }}</p></li>
                                        </ul>
                                    </div>
                                    <div>
                                        <router-link class="px-3 py-2 rounded-1 border border-1 border-warning text-decoration-none text-warning" to="/#contattaci">Richiedi informazioni</router-link>
                                    </div>
                                </div>
                            </article>
                        </div>
                        <div class="col">
                            <article class="card h-100 border-0 shadow-sm rounded-4 bg-dark text-white text-start">
                                <div class="card-body d-flex flex-column justify-content-between p-4">
                                    <div>
                                        <div class="fs-2 text-warning"><i class="bi bi-arrow-repeat"></i></div>
                                        <h3 class="h5 fw-bold mt-2">Revisione casi archiviati</h3>
                                        <p class="text-white-50">Rilettura tecnica di pratiche chiuse, con verifica di criticità, incongruenze e possibili elementi trascurati.</p>
                                        <ul class="list-unstyled small text-white-50 mb-4">
                                            <li class="mb-2"><i class="bi bi-check-circle text-warning me-2"></i>Riesame documentale</li>
                                            <li class="mb-2"><i class="bi bi-check-circle text-warning me-2"></i>Controllo della coerenza tecnica</li>
                                            <li><i class="bi bi-check-circle text-warning me-2"></i>Ipotesi di approfondimento</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <a href="#archiviati" class="px-3 py-2 rounded-1 border border-1 border-warning text-decoration-none text-warning">Approfondisci</a>
                                    </div>
                                </div>
                            </article>
                        </div>
                    </div>
                </gsap-reveal>
            </div>
        </section>
<!-- METODO DI LAVORO -->
        <section class="py-5">
            <gsap-reveal children=".card" :y="35" :stagger="0.12">
                <div class="container-xxl px-3 px-lg-4 mb-5">
                    <div class="row g-4 align-items-center text-start">
                        <div class="col-lg-5">
                            <span class="text-warning fw-bold text-uppercase small">Metodo di lavoro</span>
                            <h2 class="display-6 fw-bold mt-2 mb-3">Fasi del nostro intervento</h2>
                            <!-- <p class="text-secondary mb-4">
                                L'infografica centrale della versione attuale può essere sostituita da una timeline più leggibile,
                                responsive e più facile da aggiornare senza immagini complesse.
                            </p> -->
                            <router-link class="btn btn-primary px-3 py-2 rounded-1 border-2 text-decoration-none text-white" to="/consulenze">Avvia una consulenza</router-link>
                        </div>
                        <div class="col-lg-7">
                            <div class="row row-cols-1 row-cols-md-2 g-3">
                                <div v-for="phase in phaseItems" :key="phase.id" class="col">
                                    <div class="card h-100 border-0 shadow-sm rounded-4">
                                        <div class="card-body p-4">
                                            <div class="display-6 fw-bold text-warning mb-2">{{ phase.number }}</div>
                                            <h3 class="h5 fw-bold">{{ phase.head }}</h3>
                                            <p class="text-secondary mb-0">{{ phase.desc }}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </gsap-reveal>
        </section>
<!-- REVISIONE CASI ARCHIVIATI -->
        <section class="archive position-relative my-5 py-5" id="archiviati">
            <gsap-reveal children=".row" :y="35" :stagger="0.12">
                <div class="container py-0 py-md-5 py-lg-5">
                    <div class="row">
                        <div class="col-12 text-start">
                            <span class="badge bg-warning text-dark rounded-pill px-3 py-2 mb-3">Servizio dedicato</span>
                            <h2 class="mb-4 display-6 fs-2" style="color: #008CFF;">Hai un caso archiviato da rivedere?</h2>
                            <p class="text-white" style="font-size: 1.1rem;">Sei convinto che la relazione finale non racconti tutte le sfumature dell’evento? Con il nostro <strong>Servizio di Revisione</strong> puoi riaprire un dossier già archiviato e ottenere una <strong>relazione aggiornata</strong>. Rielaboriamo documenti, integriamo informazioni emerse successivamente e ristrutturiamo ogni aspetto tecnico per restituirti un fascicolo aggiornato e pienamente rispondente alle tue esigenze. <br>Con un approccio focalizzato sulla <strong>chiarezza espositiva</strong> e la <strong>coerenza dei contenuti</strong>, elaboriamo una nuova versione della relazione originale, arricchendola con osservazioni mirate e, se necessario, inserendo grafici o schemi rielaborati. In questo modo potrai contare su un documento che riflette con precisione le dinamiche del tuo caso, pronto per ogni ulteriore necessità di valutazione o contenzioso. <br><strong>Riscopri il valore delle tue pratiche:</strong> affidati alla nostra expertise per una revisione che fa la differenza.</p>
                            <gsap-reveal>
                                <div class="d-block mt-5">
                                    <router-link @click.native="ScrollToTop" class="btn btn-block btn-primary px-3 py-2 rounded-1 border-0" to="/revisioni">Richiedi una revisione</router-link>
                                </div>
                            </gsap-reveal>
                        </div>
                    </div>
                </div>
            </gsap-reveal>
        </section>
<!-- FALSI INCIDENTI -->
        <section class="mb-5 bg-white">
            <gsap-reveal children=".border" :y="35" :stagger="0.12">
                <div class="container-xxl px-3 px-lg-4">
                    <div class="row g-4 align-items-center">
                        <div class="col-lg-6 text-start">
                            <span class="text-warning fw-bold text-uppercase small">Approfondimento</span>
                            <h2 class="display-6 fw-bold mt-2 mb-3">Incidenti da blacklist: come smascherare la truffa</h2>
                            <p class="text-secondary">
                                I falsi incidenti possono essere costruiti con dinamiche apparentemente credibili.
                                AMG Lab interviene con analisi tecnica, confronto dei dati, verifica delle compatibilità e ricostruzioni
                                per individuare elementi non coerenti.
                            </p>
                            <div class="row row-cols-1 row-cols-sm-3 g-3 mt-3">
                                <div v-for="stage in stagedItems" :key="stage" class="col">
                                    <div class="border rounded-4 p-3 h-100 bg-light">
                                        <div class="text-warning fs-4 mb-2"><i :class="stage.icon"></i></div>
                                        <div class="fw-semibold small">{{ stage.head }}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class=" overflow-hidden">
                                <img src="../assets/falsi-incidenti-stradali.png" alt="car-incident" class="img-fluid">
                            </div>
                        </div>
                    </div>
                </div>
            </gsap-reveal>
        </section>
<!-- ANTIFRODE -->
        <section class="py-5 bg-light">
            <gsap-reveal children=".card" :y="35" :stagger="0.12">
                <div class="container-xxl px-3 px-lg-4">
                    <div class="text-center mb-4">
                        <span class="text-warning fw-bold text-uppercase small">Metodo antifrode</span>
                        <h2 class="display-6 fw-bold mt-2">Come li individuiamo</h2>
                    </div>
                    <div class="row row-cols-1 row-cols-md-3 g-4">
                        <div v-for="fraud in fraudItems" :key="fraud.id" class="col">
                            <div class="card h-100 border-0 shadow-sm rounded-4 text-center">
                                <div class="card-body p-4">
                                    <div class="fs-2 text-warning mb-3"><i :class="fraud.icon"></i></div>
                                    <h3 class="h5 fw-bold">{{ fraud.head }}</h3>
                                    <p class="text-secondary mb-0">{{ fraud.desc }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </gsap-reveal>
        </section>
<!-- FAQ -->
        <section class="py-5 bg-white" id="faqServizi">
            <gsap-reveal children=".accordion" :y="35" :stagger="0.12">
                <div class="container-xxl px-3 px-lg-4">
                    <div class="row g-4 text-start">
                        <div class="col-lg-4">
                            <span class="text-warning fw-bold text-uppercase small">FAQ</span>
                            <h2 class="display-6 fw-bold mt-2 mb-3">Domande frequenti</h2>
                            <p class="text-secondary">Consulenze, perizie e non solo</p>
                        </div>
                        <div class="col-lg-8">
                            <div class="accordion">
                                <gsap-reveal children=".accordion-item" :y="35" :stagger="0.12">
                                    <div class="accordion-item border-0 shadow-sm rounded-4 mb-3" v-for="faq in faqItems" :key="faq.id">
                                        <h2 class="accordion-header" :id="'heading-' + faq.id">
                                            <button class="accordion-button collapsed rounded-4" type="button" data-bs-toggle="collapse" :data-bs-target="'#collapse-' + faq.id" aria-expanded="false" :aria-controls="'collapse-' + faq.id">
                                                {{ faq.quest }}
                                            </button>
                                        </h2>
                                        <div :id="'collapse-' + faq.id" class="accordion-collapse collapse" :aria-labelledby="'heading-' + faq.id" data-bs-parent="#faqServizi">
                                            <div class="accordion-body text-secondary">
                                                <p v-html="faq.answer"></p>
                                            </div>
                                        </div>
                                    </div>
                                </gsap-reveal>
                            </div>
                        </div>
                    </div>
<!-- CTA -->
                    <gsap-reveal>
                        <div id="preventivo" class="card border-0 shadow-sm rounded-4 mt-5">
                            <div class="card-body p-4 p-lg-5">
                                <div class="row g-4 align-items-center text-start">
                                    <div class="col-lg-8">
                                        <h2 class="h3 fw-bold mb-2">Vuoi capire quale servizio è adatto al tuo caso?</h2>
                                        <p class="text-secondary mb-0">
                                            Invia una richiesta con una breve descrizione: ti aiuteremo a individuare il percorso tecnico più corretto.
                                        </p>
                                    </div>
                                    <div class="col-lg-4 text-lg-end">
                                        <router-link class="btn btn-lg btn-block btn-primary px-3 py-2 rounded-1 border-0" to="/preventivi">Richiedi un preventivo</router-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </gsap-reveal>
                </div>
            </gsap-reveal>
        </section>
    </div>
</template>

<script>
import gsap from 'gsap'
import { ScrollToPlugin } from 'gsap/all';
import GsapReveal from '../components/GsapReveal.vue';

gsap.registerPlugin(ScrollToPlugin);

export default {
    name: 'PageService',
    components: {
        GsapReveal
    },
    metaInfo() {
        const path = this.$route.path
        const canonicalURL = `https://amglablecce.it${path}`
        return {
            title: 'Servizi',
            titleTemplate: '%s | AMG Lab',
            link: [
                { rel: 'canonical', href: canonicalURL }
            ],
            meta: [
                { name: 'description', content: 'Scopri i nostri servizi, confronta le soluzioni e richiedi un preventivo personalizzato.' }
            ]
        }
    },
    data() {
        return {
            itemActive: 0,
            isOpen: 0,
            activeFaq: 0,
            jumboItems: [
                {
                    icon: 'bi bi-search',
                    title: 'Verifica dati',
                    desc: 'Raccolta e lettura tecnica'
                },
                 {
                    icon: 'bi bi-download',
                    title: 'Rilievi',
                    desc: 'Sopralluoghi e documentazione'
                },
                 {
                    icon: 'bi bi-bounding-box',
                    title: '2D / 3D',
                    desc: 'Modelli e ricostruzioni'
                },
                 {
                    icon: 'bi bi-file-earmark-text',
                    title: 'Relazioni',
                    desc: 'Report chiari e motivati'
                }
            ],
            items: [
                { 
                    id: 0, 
                    idName: 'consulenza',
                    icon: 'bi bi-clipboard-check',
                    head: "Consulenza Tecnica Preliminare", 
                    title: "Raccolta e Verifica",
                    desc: [
                        {
                            top: "Analizziamo dati, documenti e criticità del caso per valutarne la fattibilità tecnica"
                        },
                        {
                            mid: "Verifichiamo misurazioni, incongruenze e punti critici da approfondire"
                        },
                        {
                            bottom: "Definiamo una strategia operativa chiara, pratica e sostenibile"
                        }
                    ],
                },
                { 
                    id: 1,
                    icon: 'bi bi-pencil-square',
                    head: "Supporto alla redazione del consulente", 
                    title: "Raccolta e Organizzazione Dati",
                    desc: [ 
                        {
                            top: "Acquisizione di tutti i documenti utili (clinici, fotografici, amministrativi)"
                        },
                        {
                            mid: "Verifica di completezza e conformità normativa"
                        },
                        {
                            bottom: "Analisi del testo peritale, utilizzo di schemi e modelli standardizzati e controllo qualità per ridurre margini di errore"
                        }
                    ],
                },
                { 
                    id: 2,
                    idName: 'rilievo',
                    icon: 'bi bi-geo-alt',
                    head: "Sopralluogo e rilievo", 
                    title: "Rilievi sul Luogo dell’Incidente",
                    desc: [
                        {
                            top: "Effettuiamo rilievi con odometro digitale, distanziometro laser e droni, anche in aree difficili da raggiungere"
                        },
                        {
                            mid: "Acquisiamo misurazioni rapide e precise per ricostruire dinamica e condizioni del luogo dell’incidente",
                        },
                        {
                            bottom: "Operiamo in sicurezza e nel rispetto delle normative, fornendo dati affidabili per analisi tecniche e legali"
                        }
                    ],
                },
                { 
                    id: 3,
                    idName: 'fotogrammetria',
                    icon: 'bi bi-send',
                    head: "Aerofotogrammetria", 
                    title: "Analisi Aeree per Incidenti Complessi",
                    desc: [
                        {
                            top: "Il servizio è ideale per rilievi su vaste aree, incidenti complessi e sopralluoghi edilizi, con tempi e costi ottimizzati"
                        },
                        {
                            mid: "Gestiamo tutto il processo: pianificazione del volo, acquisizione immagini, elaborazione tecnica e consegna degli elaborati"
                        },
                        {
                            bottom: "Forniamo ortofoto georeferenziate, modelli 3D e ricostruzioni metriche precise, pronte per analisi tecniche, legali e assicurative"
                        }
                    ],
                },
                { 
                    id: 4,
                    idName: 'ricostruzione',
                    icon: 'bi bi-box',
                    head: "Riproduzione grafica 2D e 3D", 
                    title: "Disegni Tecnici e Ricostruzioni 3D",
                    desc: [ 
                        {
                            top: "Realizziamo planimetrie, sezioni e rappresentazioni 2D aderenti alle misure reali"
                        },
                        {
                            mid: "Sviluppiamo modelli 3D per visualizzare il caso e analizzare geometrie complesse"
                        },
                        {
                            bottom: "Produciamo elaborati chiari, utili per spiegare dinamiche, traiettorie, punti d’urto e compatibilità geometriche"
                        }
                    ],
                }
            ],
            phaseItems: [
                {
                    id: 0,
                    number: '01',
                    head: 'Raccolta e verifica dati',
                    desc: 'Acquisiamo documentazione, immagini, verbali e informazioni disponibili.',
                },
                {
                    id: 1,
                    number: '02',
                    head: 'Analisi tecnica',
                    desc: 'Interpretiamo i dati e individuiamo criticità, coerenze e incongruenze.',
                },
                {
                    id: 2,
                    number: '03',
                    head: 'Ricostruzione',
                    desc: 'Realizziamo elaborati, schemi e modelli per rendere più chiara la dinamica.',
                },
                {
                    id: 3,
                    number: '04',
                    head: 'Parere motivato',
                    desc: 'Consegniamo un documento tecnico chiaro, ordinato e utilizzabile.',
                }
            ],
            stagedItems: [
                {
                    id: 0,
                    icon: 'bi bi-eye',
                    head: 'Osservazione della scena',
                },
                {
                    id: 1,
                    icon: 'bi bi-car-front',
                    head: 'Confronto danni',
                },
                {
                    id: 2,
                    icon: 'bi bi-clock-history',
                    head: 'Analisi temporale',
                }
            ],
            fraudItems: [
                {
                    id: 0,
                    icon: 'bi bi-search',
                    head: 'Osservazione della scena',
                    desc: 'Identifichiamo anomalie nella posizione dei veicoli, nelle tracce e nei danni.',
                },
                {
                    id: 1,
                    icon: 'bi bi-bounding-box-circles',
                    head: 'Ricostruzione tecnica',
                    desc: 'Usiamo rilievi, immagini e modelli per verificare la plausibilità del sinistro.',
                },
                {
                    id: 2,
                    icon: 'bi bi-bar-chart',
                    head: 'Analisi dei dati',
                    desc: 'Confrontiamo dichiarazioni, registrazioni, tempi e compatibilità spaziali.',
                }
            ],
            faqItems: [
                {
                    id: 0,
                    quest: 'Che cos’è la consulenza tecnica di AMG Lab e in cosa consiste?',
                    answer: 'La consulenza tecnica di AMG Lab è un servizio multidisciplinare che integra rilievi in loco, analisi dati e redazione di analisi dettagliate. Dal sopralluogo iniziale alla consegna del fascicolo tecnico, il nostro team guida il cliente in ogni fase, fornendo report strutturati e immediatamente utilizzabili sia in ambito legale che amministrativo.',
                },
                {
                    id: 1,
                    quest: 'Quanto tempo richiede una ricostruzione grafica standard?',
                    answer: 'I tempi variano in base alla complessità del caso e alle dimensioni dell’area da esaminare, ma in generale un\'analisi completa viene consegnata entro 2-4 settimane dal sopralluogo. Se necessario, ci impegniamo a offrire formule di consegna accelerata concordando scadenze dedicate',

                },
                {
                    id: 2,
                    quest: 'Come procedete per individuare i falsi incidenti stradali?',
                    answer: 'Applichiamo tecniche di rilievo e ricostruzione tridimensionale, valutazioni cinematiche e analisi incrociata di video, dati telematici e parametri ambientali. In questo modo evidenziamo qualsiasi incongruenza rispetto alla dinamica dichiarata, trasformando i sospetti in prove concrete',
                },
                {
                    id: 3,
                    quest: 'Quali documenti devo fornire per avviare un\'analisi tecnica?',
                    answer: 'Generalmente sono richiesti: modulistica assicurativa, schizzo di campagna, fotografie preliminari, eventuali video o registrazioni, e planimetrie se disponibili. In sede di sopralluogo il nostro team verificherà l’elenco completo e potrà richiedere eventuali integrazioni.',
                },
                {
                    id: 4,
                    quest: 'Come posso richiedere un preventivo o informazioni aggiuntive?',
                    answer: 'Puoi compilare il form nella pagina <b>Contatti</b>, inviare una mail a <b>amglab.info@gmail.com</b> o chiamarci direttamente al numero <b>389 6821133</b>. Ti ricontatteremo entro 24 ore per fissare un appuntamento',
                }
            ]
        }
    },
    methods: {
        ScrollToTop() {
            gsap.to(window, { scrollTo: { x: 0, y : 0 }, duration: 1.0, ease: 'power2.out'});
        },
        setActive(id) {
            this.itemActive = id
        },
        handleToggle(index) {
            const currentIndex = this.isOpen;
            const newDetails = this.$refs.details[index];
            const newContent = this.$refs.content[index];

            if (currentIndex === index) {
                this.animateClose(newContent, newDetails);
                this.isOpen = null;
            } else {
            if (currentIndex !== null) {
                const currentContent = this.$refs.content[currentIndex];
                const currentDetails = this.$refs.details[currentIndex];
                this.animateClose(currentContent, currentDetails);
            }
                this.animateOpen(newContent, newDetails);
                this.isOpen = index;
            }
        },
        animateOpen(content, details) {
            details.open = true;
            gsap.killTweensOf(content);
            content.style.height = 'auto';
            const fullHeight = content.scrollHeight;
            content.style.height = '0px';

            gsap.to(content, {
                height: fullHeight,
                duration: 0.5,
                ease: 'power2.out',
                onComplete: () => {
                    content.style.height = 'auto';
                }
            });
        },
        animateClose(content, details) {
            gsap.killTweensOf(content);
            const currentHeight = content.scrollHeight;

            gsap.fromTo(
                content,
                { height: currentHeight },
                {
                    height: 0,
                    duration: 0.4,
                    ease: 'power2.in',
                    onComplete: () => {
                        details.open = false;
                    }
                }
            );
        },
    }
}
</script>

<style lang="scss" scoped>
#jumbotron__services {
    background-image: url(../assets/vector-abstract.jpg);
    background-size: cover;

    @media screen and (max-width: 575px) {
        background-position-x: 50%;
    }
}

.archive {
    background-image: url(../assets/BG_Bar.svg);
    background-size: cover;
}
</style>