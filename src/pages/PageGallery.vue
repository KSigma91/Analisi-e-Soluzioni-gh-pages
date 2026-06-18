<template>
    <div class="bg-light">
        <div class="container-fluid px-0" style="font-family: 'Inter';">
            <!-- HERO -->
            <section class="bg-dark bg-gradient text-white">
                <GsapReveal children=".row" :y="35" :stagger="0.12">
                    <div class="container-xxl px-3 px-lg-4 py-5">
                        <div class="row g-4 align-items-center py-lg-5 text-start">
                            <div class="col-lg-7">
                                <span class="badge bg-info text-dark rounded-pill px-3 py-2 mb-3">Galleria tecnica</span>
                                <h1 class="display-4 fw-bold mb-3">Elaborati, rilievi e ricostruzioni AMG Lab</h1>
                                <p class="lead text-white-50 mb-4">
                                    Una raccolta ordinata di planimetrie, ricostruzioni 2D/3D, rilievi fotografici e contenuti tecnici realizzati per supportare l'analisi dei sinistri stradali.
                                </p>
                                <gsap-reveal>
                                    <div class="d-flex flex-wrap gap-4">
                                        <a href="#galleria" class="btn btn-outline-light px-3 py-2 rounded-1 border-0">Esplora la galleria</a>
                                    </div>
                                </gsap-reveal>
                            </div>
                            <div class="col-lg-5">
                                <gsap-reveal>
                                    <div class="card border-0 shadow-lg rounded-4">
                                        <div class="card-body p-4">
                                            <h2 class="h5 fw-bold text-dark mb-3">Cosa trovi</h2>
                                            <div v-for="(item, index) in listItem" :key="index" class="d-flex gap-3 mb-3">
                                                <div class="fs-4 text-warning"><i :class="item.icon"></i></div>
                                                <div>
                                                    <div class="fw-semibold text-dark">{{ item.title }}</div>
                                                    <div class="small text-secondary">{{ item.desc }}</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </gsap-reveal>
                            </div>
                        </div>
                    </div>
                </GsapReveal>
            </section>
<!-- FILTRO IMMAGINI -->
            <section id="galleria" class="bg-light">
                <div class="container-fluid px-0">
                    <div class="py-4 bg-white border-bottom">
                        <div class="container-xxl px-3 px-lg-4">
                            <div class="row g-3 align-items-center text-start">
                                <div class="col-lg-4">
                                    <h2 class="h5 fw-bold mb-1">Filtra per tipologia</h2>
                                </div>
                                <div class="col-lg-8">
                                    <ul class="nav nav-pills justify-content-lg-end gap-2" id="galleryTabs" role="tablist">
                                        <li class="nav-item" role="presentation">
                                            <button class="nav-link rounded-pill" :class="{ active: activeTab === 'tutto' }" @click="activeTab = 'tutto'" id="tutto-tab" data-bs-toggle="pill" data-bs-target="#tutto" type="button" role="tab" aria-controls="tutto" aria-selected="true">Tutto</button>
                                        </li>
                                        <li class="nav-item" role="presentation">
                                            <button class="nav-link rounded-pill" :class="{ active: activeTab === 'planimetrie' }" @click="activeTab = 'planimetrie'" id="planimetrie-tab" data-bs-toggle="pill" data-bs-target="#planimetrie" type="button" role="tab" aria-controls="planimetrie" aria-selected="false">Planimetrie</button>
                                        </li>
                                        <li class="nav-item" role="presentation">
                                            <button class="nav-link rounded-pill" :class="{ active: activeTab === 'ricostruzioni' }" @click="activeTab = 'ricostruzioni'" id="ricostruzioni-tab" data-bs-toggle="pill" data-bs-target="#ricostruzioni" type="button" role="tab" aria-controls="ricostruzioni" aria-selected="false">Ricostruzioni</button>
                                        </li>
                                        <li class="nav-item" role="presentation">
                                            <button class="nav-link rounded-pill" :class="{ active: activeTab === 'rilievi' }" @click="activeTab = 'rilievi'" id="rilievi-tab" data-bs-toggle="pill" data-bs-target="#rilievi" type="button" role="tab" aria-controls="rilievi" aria-selected="false">Rilievi</button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
<!-- CONTENITORE IMMAGINI --> 
                    <gsap-reveal children=".row" :y="35" :stagger="0.12">
                        <div class="tab-content py-5" id="galleryTabsContent">
                            <div class="tab-pane fade active show" role="tabpanel" aria-labelledby="tab-tutto" tabindex="0">
                                <div class="container">
                                    <div v-if="filteredList.length">
                                        <div class="row g-3 align-item-stretch">
                                            <CardImage v-for="item in filteredList" :key="item.id" :item="item" @open-preview="openPreview" />
                                        </div>
                                    </div>
                                    <div v-else class="text-center py-5">
                                        <p class="text-muted">Nessun elemento disponibile per questa categoria.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </gsap-reveal>
                </div>
<!-- CONTENITORE MODALI -->
                <div class="modal fade" id="galleryPreviewModal" tabindex="-1" aria-labelledby="galleryPreviewModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-xl modal-dialog-centered">
                        <div class="modal-content rounded-4 border-0">
                            <div class="modal-header">
                                <div class="text-start">
                                    <span v-if="selectedItem" :class="selectedItem.labelColor" class="badge mb-2 text-capitalize">{{ selectedItem.label }}</span>
                                    <h3 class="modal-title h5 fw-bold" id="galleryPreviewModalLabel">{{ selectedItem ? selectedItem.title || 'Progetto tecnico' : 'Anteprima' }}</h3>
                                </div>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
<!-- PULSANTI FULLSCREEN/ZOOM -->
                                <div class="d-flex flex-wrap gap-2 justify-content-end">
                                    <a v-if="selectedItem && selectedItem.photos" :href="selectedItem.photos" target="_blank" rel="noopener" class="text-decoration-none text-secondary px-3 py-2 rounded-1 border-0">
                                        <i class="bi bi-arrows-fullscreen me-2"></i>Apri originale
                                    </a>
                                    <a type="button" class="text-decoration-none text-secondary px-3 py-2 rounded-1 border-0" data-bs-target="#galleryZoomModal" data-bs-toggle="modal">
                                        <i class="bi bi-zoom-in me-2"></i>Zoom
                                    </a>
                                </div>
                                <img v-if="selectedItem && selectedItem.photos" :src="selectedItem.photos" class="img-fluid" :alt="selectedItem.title || 'Media photo'">
                                <p class="text-secondary my-2">{{ selectedItem ? selectedItem.desc || 'Anteprima del progetto selezionato.' : '' }}</p>
<!-- FRECCE PREV/NEXT -->
                                <div class="d-flex justify-content-between align-items-center mb-3">
                                    <button type="button" class="text-decoration-none px-3 py-2 rounded-1 border-0" @click="prevPreview" aria-label="Immagine precedente">
                                    <i class="bi bi-chevron-left"></i> Indietro 
                                    </button>
                                    <div class="small text-secondary">{{ selectedIndex + 1 }} / {{ filteredList.length }}</div>
                                    <button type="button" class="text-decoration-none px-3 py-2 rounded-1 border-0" @click="nextPreview" aria-label="Immagine successiva">
                                        Avanti <i class="bi bi-chevron-right"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
<!-- MODALE ZOOM -->
                <div class="modal fade" id="galleryZoomModal" tabindex="-1" aria-labelledby="galleryZoomModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-fullscreen">
                        <div class="modal-content bg-dark text-white">
                            <div class="modal-header border-secondary">
                                <h3 class="modal-title h5 fw-bold" id="galleryZoomModalLabel">{{ selectedItem ? selectedItem.title || 'Zoom immagine' : 'Zoom immagine' }}</h3>
                                <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body d-flex align-items-center justify-content-center">
                                <img v-if="selectedItem && selectedItem.photos" :src="selectedItem.photos" class="img-fluid" :alt="selectedItem.title || 'Media photo'"> 
                            </div>
                            <div class="modal-footer border-secondary flex-column justify-content-between">
                                <button type="button" class="btn btn-outline-light px-3 py-2 rounded-1 border-0" data-bs-target="#galleryPreviewModal" data-bs-toggle="modal">
                                    Torna all'anteprima
                                </button>
<!-- FRECCE PREV/NEXT -->
                                <div class="w-100 d-flex justify-content-between align-items-center mt-3">
                                    <button type="button" class="text-decoration-none px-3 py-2 rounded-1 border-0" @click="prevPreview" aria-label="Immagine precedente">
                                        <i class="bi bi-chevron-left"></i> Indietro
                                    </button>
                                    <div class="small text-white-50">{{ selectedIndex + 1 }} / {{ filteredList.length }}</div>
                                    <button type="button" class="text-decoration-none px-3 py-2 rounded-1 border-0" @click="nextPreview" aria-label="Immagine successiva">
                                        Avanti <i class="bi bi-chevron-right"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
<!-- CTA -->
            <section class="py-5 bg-dark text-white">
                <gsap-reveal>
                    <div class="container-xxl px-3 px-lg-4">
                        <div class="row g-4 align-items-center text-start">
                            <div class="col-lg-8">
                                <span class="badge bg-info text-dark rounded-pill px-3 py-2 mb-3">Vuoi un elaborato simile?</span>
                                <h2 class="display-6 fw-bold mb-3">Trasforma dati e rilievi in elaborati tecnici chiari</h2>
                                <p class="text-white-50 mb-0">
                                    Possiamo realizzare planimetrie, ricostruzioni 2D/3D e supporti visuali integrabili nella relazione tecnica.
                                </p>
                            </div>
                            <div class="col-lg-4 text-lg-end">
                                <router-link class="btn btn-info text-white btn-lg px-3 py-2 rounded-1 border-0" to="/preventivi">Richiedi un preventivo</router-link>
                            </div>
                        </div>
                    </div>
                </gsap-reveal>
            </section>
        </div>
    </div>
</template>

<script>
import CardImage from '../components/CardImage.vue'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import GsapReveal from '../components/GsapReveal.vue';

gsap.registerPlugin(ScrollTrigger)

export default {
    name: 'PageGallery',
    components: { CardImage, GsapReveal },
    metaInfo() {
        const path = this.$route.path
        const canonicalURL = `https://amglablecce.it${path}`
        return {
            title: 'Elaborati',
            titleTemplate: '%s | AMG Lab',
            link: [
                { rel: 'canonical', href: canonicalURL }
            ],
            meta: [
                { name: 'description', content: 'Casi studio di AMG Lab: ricostruzioni, rilievi, simulazioni per CTU/CTP, documentate e validate tecnicamente.' }
            ]
        }
    },
    data() {
        return {
            listItem: [
                { icon: 'bi bi-map', title: 'Planimetrie', desc: 'Elaborati 2D e tavole tecniche.' },
                { icon: 'bi bi-box', title: 'Ricostruzioni', desc: 'Scene 3D e visualizzazioni dinamiche.' },
                { icon: 'bi bi-camera', title: 'Rilievi', desc: 'Documentazione fotografica e sopralluoghi.' }
            ],
            selectedItem: null,
            selectedIndex: 0,
            activeTab: 'tutto',
            mediaList: [
                { 
                    id: 0, 
                    label: 'planimetria',
                    labelColor: 'text-dark bg-warning',
                    title: 'Planimetria dell’intersezione',
                    desc: 'Elaborato 2D del luogo del sinistro con riferimenti stradali, posizioni e punti utili alla ricostruzione.',
                    type: 'planimetrie', 
                    photos: require('../assets/galleria/1734347331226.jpg'), 
                },
                { 
                    id: 1, 
                    label: 'planimetria',
                    labelColor: 'text-dark bg-warning',
                    title: 'Rilievo planimetrico del tratto stradale',
                    desc: 'Schema tecnico dell’area con misure, margini carreggiata e riferimenti geometrici per l’analisi del caso.',
                    type: 'planimetrie', 
                    photos: require('../assets/galleria/1735986919866.jpg'), 
                },
                { 
                    id: 2, 
                    label: 'planimetria',
                    labelColor: 'text-dark bg-warning',
                    title: 'Inquadramento tecnico del luogo',
                    desc: 'Tavola riepilogativa con orientamento, elementi fissi, punti di riferimento e posizione degli elementi rilevanti.',
                    type: 'planimetrie', 
                    photos: require('../assets/galleria/1736854302082.jpg'), 
                },
                { 
                    id: 3, 
                    label: 'planimetria',
                    labelColor: 'text-dark bg-warning',
                    title: 'Analisi grafica dei danni',
                    desc: 'Confronto illustrato tra profili dei veicoli, aree di contatto e compatibilità dei danni rilevati.',
                    type: 'planimetrie', 
                    photos: require('../assets/galleria/1746640647675.jpg'), 
                },
                { 
                    id: 4, 
                    label: 'planimetria',
                    labelColor: 'text-dark bg-warning',
                    title: 'Compatibilità veicolo-pedone',
                    desc: 'Schema tecnico per valutare ingombri, altezze, posizione del pedone e possibile area di contatto.',
                    type: 'planimetrie', 
                    photos: require('../assets/galleria/1747077414585.jpg'), 
                },
                { 
                    id: 5, 
                    label: 'planimetria',
                    labelColor: 'text-dark bg-warning',
                    title: 'Sequenza ricostruttiva 2D',
                    desc: 'Rappresentazione delle fasi principali del sinistro con posizioni progressive e ipotesi dinamiche a confronto.',
                    type: 'planimetrie', 
                    photos: require('../assets/galleria/1747823728443.jpg'), 
                },
                { 
                    id: 6, 
                    label: 'ricostruzione',
                    labelColor: 'text-white bg-dark',
                    title: 'Ricostruzione 3D della scena',
                    desc: 'Visualizzazione tridimensionale del contesto stradale per chiarire geometrie, ostacoli e posizioni reciproche.',
                    type: 'ricostruzioni', 
                    photos: require('../assets/galleria/1734347463718.jpg'), 
                },
                { 
                    id: 7, 
                    label: 'ricostruzione',
                    labelColor: 'text-white bg-dark',
                    title: 'Scenario dinamico dell’impatto',
                    desc: 'Modello 3D utile a rappresentare le fasi del sinistro, le traiettorie e la posizione dei mezzi coinvolti.',
                    type: 'ricostruzioni', 
                    photos: require('../assets/galleria/1734347463030.jpg'), 
                },
                { 
                    id: 8, 
                    label: 'ricostruzione',
                    labelColor: 'text-white bg-dark',
                    title: 'Vista prospettica del luogo',
                    desc: 'Ricostruzione ambientale con veicoli, sede stradale e riferimenti spaziali per una lettura più immediata del caso.',
                    type: 'ricostruzioni', 
                    photos: require('../assets/galleria/1734347463298.jpg'), 
                },
                { 
                    id: 9, 
                    label: 'ricostruzione',
                    labelColor: 'text-white bg-dark',
                    title: 'Vista dall’alto della dinamica',
                    desc: 'Inquadramento superiore della scena per valutare traiettorie, distanze, visibilità e rapporti spaziali.',
                    type: 'ricostruzioni', 
                    photos: require('../assets/galleria/1734347463747.jpg'), 
                },
                { 
                    id: 10, 
                    label: 'rilievo',
                    labelColor: 'text-white bg-success',
                    title: 'Sopralluogo tecnico su strada',
                    desc: 'Documentazione fotografica delle attività di rilievo, acquisizione misure e verifica dei riferimenti sul posto.',
                    type: 'rilievi', 
                    photos: require('../assets/Cigman/IMG_2198_DxO.jpg'), 
                },
                { 
                    id: 11, 
                   label: 'rilievo',
                    labelColor: 'text-white bg-success',
                    title: 'Documentazione dei veicoli',
                    desc: 'Ripresa fotografica dei mezzi coinvolti per valutare danni, posizioni relative e compatibilità dell’urto.',
                    type: 'rilievi', 
                    photos: require('../assets/Cigman/IMG_2206_DxO.jpg'), 
                },
                { 
                    id: 12, 
                    label: 'rilievo',
                    labelColor: 'text-white bg-success',
                    title: 'Verifica comparativa dei mezzi',
                    desc: 'Confronto visivo tra veicoli per analizzare ingombri, altezze, punti di contatto e coerenza della dinamica.',
                    type: 'rilievi', 
                    photos: require('../assets/Cigman/IMG_2207_DxO.jpg'), 
                },
            ]
        }
    },
    methods: {
        openPreview(item) {
            this.selectedItem = item
            this.selectedIndex = this.filteredList.findIndex(el => el.id === item.id)
        },
        nextPreview() {
            if (!this.filteredList.length) return

            this.selectedIndex =
                this.selectedIndex === this.filteredList.length - 1
                    ? 0
                    : this.selectedIndex + 1

            this.selectedItem = this.filteredList[this.selectedIndex]
        },
        prevPreview() {
            if (!this.filteredList.length) return

                this.selectedIndex =
                    this.selectedIndex === 0
                        ? this.filteredList.length - 1
                        : this.selectedIndex - 1

            this.selectedItem = this.filteredList[this.selectedIndex]
        },
    },
    computed: {
        filteredList() {
            if (this.activeTab === 'tutto') {
                return this.mediaList;
            }
            return this.mediaList.filter(item => item.type === this.activeTab);
        }
    }
}
</script>

<style lang="scss" scoped>
.nav-pills .nav-link {
    cursor: pointer;
}

.nav-pills .nav-link.active {
  background-color: #3B71CA;
}

.reveal {
    opacity: 0;
    transform: translateY(24px);
    transition: opacity 0.6s ease, transform 0.6s ease;
}

.reveal.show {
    opacity: 1;
    transform: translateY(0);
}

@media (prefers-reduced-motion: reduce) {
    .reveal {
        opacity: 1;
        transform: none;
        transition: none;
    }
}
</style>