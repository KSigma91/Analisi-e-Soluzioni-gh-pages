<template>
    <div class="bg-gradient text-dark d-flex flex-column align-items-center" style="font-family: 'Inter';">
        <section class="container-fluid bg-dark bg-gradient">
            <gsap-reveal :y="40">
                <div class="container-xxl text-white py-5">
<!-- HERO -->
                    <div class="row g-4 align-items-center py-lg-5">
                        <div class="col-lg-7 text-start">
                            <span class="badge bg-success rounded-pill px-3 py-2 mb-3">Preventivi AMG Lab</span>
                            <h1 class="display-4 fw-bold mb-3">Richiedi un preventivo personalizzato</h1>
                            <p class="lead text-white-50 mb-4">
                                Descrivici il caso, scegli il livello di supporto tecnico e ricevi una valutazione chiara
                                per analisi, ricostruzione e supporto all'infortunistica stradale.
                            </p>
                            <gsap-reveal>
                                <div class="d-flex flex-wrap gap-4">
                                    <a href="#form-preventivo" class="btn btn-success px-3 py-2 rounded-1 border-0">Compila la richiesta</a>
                                    <a href="#come-funziona" class="btn btn-outline-light px-3 py-2 rounded-1 border-0">Come funziona</a>
                                </div>
                            </gsap-reveal>
                        </div>
                        <div class="col-lg-5">
                            <div class="card border-0 shadow-lg rounded-4">
                                <div class="card-body p-4 text-start">
                                    <h2 class="h5 fw-bold text-dark mb-3">Cosa ricevi</h2>
                                    <div v-for="quote in quoteItems" :key="quote" class="d-flex gap-3 mb-3">
                                        <div class="fs-4 text-success"><i :class="quote.icon"></i></div>
                                        <div>
                                            <div class="fw-semibold text-dark">{{ quote.title }}</div>
                                            <div class="small text-secondary">{{ quote.desc }}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </gsap-reveal>
        </section>
<!-- FEATURES -->
        <section class="py-5 bg-white">
            <gsap-reveal children=".card" :y="35" :stagger="0.12">
                <div class="container-xxl px-3 px-lg-4">
                    <div class="text-center mb-4 mb-lg-5">
                        <span class="text-success fw-bold text-uppercase small">Perché richiederlo</span>
                        <h2 class="display-6 fw-bold mt-2 mb-3">Un preventivo più utile, non solo un prezzo</h2>
                    </div>
                    <div class="row row-cols-1 row-cols-md-3 g-4">
                        <div v-for="(feature, index) in features" :key="index" class="col">
                            <div class="card h-100 border-0 shadow-sm rounded-4 text-center">
                                <div class="card-body p-4">
                                    <div class="fs-2 text-success mb-3"><i :class="feature.icon"></i></div>
                                    <h3 class="h5 fw-bold">{{ feature.title }}</h3>
                                    <p class="text-secondary mb-0">{{ feature.desc }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </gsap-reveal>
        </section>
<!-- STEPS -->
        <section id="come-funziona" class="container-fluid py-5 bg-light">
            <gsap-reveal children=".card" :y="35" :stagger="0.12">
                <div class="container-xxl px-3 px-lg-4">
                    <div class="row g-4 align-items-center text-start">
                        <div class="col-lg-5">
                            <span class="text-success fw-bold text-uppercase small">Processo</span>
                            <h2 class="display-6 fw-bold mt-2 mb-3">Come funziona</h2>
                            <a href="#form-preventivo" class="btn btn-success px-3 py-2 rounded-1 border-0">Inizia ora</a>
                        </div>
                        <div class="col-lg-7">
                            <div class="row row-cols-1 row-cols-md-2 g-3">
                                <div v-for="step in steps" :key="step" class="col">
                                    <div class="card h-100 border-0 shadow-sm rounded-4">
                                        <div class="card-body p-4">
                                            <div class="display-6 fw-bold text-success mb-2">{{ step.number }}</div>
                                            <h3 class="h5 fw-bold">{{ step.title }}</h3>
                                            <p class="text-secondary mb-0">{{ step.desc }}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </gsap-reveal>
        </section>
<!-- BUDGET -->
        <section class="container-fluid px-0">
            <div class="pt-5 bg-white">
                <gsap-reveal children=".card" :y="35" :stagger="0.12">
                    <div class="container-fluid">
                        <div class="text-center mb-5 mb-lg-5">
                            <span class="text-success fw-bold text-uppercase small">Livelli di intervento</span>
                            <h2 class="display-6 fw-bold mt-2 mb-3">Scegli il livello più vicino alla tua esigenza</h2>
                        </div>
                        <form ref="quotes" class="d-flex flex-wrap justify-content-center needs-validation" novalidate @submit.prevent="sendQuote" enctype="multipart/form-data">
                            <input type="hidden" name="form_type" value="Preventivo">
                            <div class="row g-4 justify-content-center text-start">
                                <div v-for="opt in budgetOption" :key="opt.value" class="col-12 col-xl-3 m-2">
                                    <label class="card h-100 border border-1 shadow-sm rounded-4">
                                        <div class="card-header border-0 p-4" :class="opt.headerColor">
                                            <div class="d-flex justify-content-between align-items-center">
                                                <h3 class="h4 fw-bold mb-0" :class="opt.titleColor">{{ opt.title }}</h3>
                                                <span class="badge rounded-pill" :class="opt.labelColor">{{ opt.label }}</span>
                                            </div>
                                        </div>
                                        <div class="card-body p-4">
                                            <p class="text-secondary">{{ opt.desc }}</p>
                                            <ul v-for="(optList, index) in opt.list" :key="index" class="list-unstyled text-secondary mb-4 small">
                                                <li class="d-inline-flex mb-2"><i class="bi bi-check-circle text-success align-self-center me-2"></i>{{ optList.item }}</li>
                                            </ul>
                                        </div>
                                        <div class="form-check ms-4">
                                            <input class="form-check-input me-2 mb-4" :class="{'is-invalid': errors.budget}" :value="opt.value" :id="'budget-' + opt.value" type="radio" name="budget" v-model="quotes.budget" required>
                                            <label class="form-check-label fw-semibold" :for="'budget-' + opt.value">{{ opt.choice }}</label>
                                        </div>
                                    </label>
                                </div>
                                <small class="text-danger">
                                    {{ errors.budget }}
                                </small>
<!-- FORM -->
                                <div id="form-preventivo" class="container-fluid py-5 bg-light">
                                    <gsap-reveal children=".row" :y="35" :stagger="0.12">
                                        <div class="row justify-content-center">
                                            <div class="col-xl-7">
                                                <div class="card border-0 shadow-lg rounded-4">
                                                    <div class="card-body p-4 p-lg-5 text-start">
                                                        <div class="row g-4">
                                                            <div class="col-lg-4">
                                                                <span class="text-success fw-bold text-uppercase small">Invio richiesta</span>
                                                                <h2 class="display-6 fw-bold mt-2 mb-3">Raccontaci il caso</h2>
                                                                <div class="alert alert-success mb-0" role="alert">
                                                                    <div class="fw-semibold mb-1">Suggerimento</div>
                                                                    Specifica se hai già foto, verbali, rilievi, planimetrie o relazioni precedenti.
                                                                </div>
                                                            </div>
                                                            <div class="col-lg-8">
                                                                <gsap-reveal :y="35">
                                                                    <div class="row g-3">
<!-- NOME -->
                                                                        <div class="col-md-6">
                                                                            <div class="form-floating">
                                                                                <input type="text" class="form-control rounded-2 border border-1" :class="{'is-invalid': errors.nome}" id="nome" name="nome" placeholder="Nome" v-model="quotes.nome" required>
                                                                                <label for="nome"><small>Nome *</small></label>
                                                                                <div class="invalid-feedback">
                                                                                    {{ errors.nome }}
                                                                                </div>
                                                                            </div>
                                                                        </div>
<!-- COGNOME -->
                                                                        <div class="col-md-6">
                                                                            <div class="form-floating">
                                                                                <input type="text" class="form-control rounded-2 border border-1" :class="{'is-invalid': errors.cognome}" id="cognome" name="cognome" placeholder="cognome" v-model="quotes.cognome" required>
                                                                                <label for="cognome"><small>Cognome *</small></label>
                                                                                <div class="invalid-feedback">
                                                                                    {{ errors.cognome }}
                                                                                </div>
                                                                            </div>
                                                                        </div>
<!-- EMAIL -->
                                                                        <div class="col-md-6">
                                                                            <div class="form-floating">
                                                                                <input type="email" class="form-control rounded-2 border border-1" :class="{'is-invalid': errors.email}" id="email" name="email" placeholder="Email" v-model="quotes.email" required>
                                                                                <label for="email" class="form-label"><small>Email *</small></label>
                                                                                <div class="invalid-feedback">
                                                                                    {{ errors.email }}
                                                                                </div>
                                                                            </div>
                                                                        </div>
<!-- CELLULARE -->
                                                                        <div class="col-md-6">
                                                                            <div class="form-floating">
                                                                                <input type="tel" class="form-control rounded-2 border border-1" id="cellulare" name="cellulare" placeholder="Cellulare" v-model="quotes.cellulare" @input="quotes.cellulare = quotes.cellulare.replace(/\D/g, '')">
                                                                                <label for="cellulare" class="form-label me-1"><small>Cellulare</small></label>
                                                                            </div>
                                                                        </div>
<!-- MESSAGGIO -->
                                                                        <div class="col-12">
                                                                            <div class="form-floating">
                                                                                <textarea class="form-control rounded-2 border border-1" :class="{'is-invalid': errors.messaggio}" id="messaggio" name="messaggio" placeholder="Messaggio" rows="2" v-model="quotes.messaggio" required></textarea>
                                                                                <label for="messaggio" class="form-label"><small>Come possiamo aiutarti? *</small></label>
                                                                                <div class="invalid-feedback">
                                                                                    {{ errors.messaggio }}
                                                                                </div>
                                                                            </div>
                                                                        </div>
<!-- PRIVACY -->
                                                                        <div class="col-12">
                                                                            <div class="form-check">
                                                                                <input class="form-check-input" id="privacy" type="checkbox" :class="{'is-invalid': errors.privacy}" v-model="quotes.privacy">
                                                                                <label for="privacy" class="form-check-label text-dark"><small>Acconsento al trattamento dei miei dati personali al fine di ricevere una risposta al mio messaggio, come indicato nella Privacy Policy. *</small></label>
                                                                                <div class="invalid-feedback">
                                                                                    {{ errors.privacy }}
                                                                                </div>
                                                                            </div>
                                                                        </div>
<!-- PULSANTE -->
                                                                        <div class="col-12 d-grid d-sm-flex justify-content-sm-end">
                                                                            <button class="btn btn-block btn-success px-3 py-2 rounded-1 border-0" type="submit" style="font-family: 'Inter';" @click="showAlert">Richiedi Preventivo</button>
                                                                        </div>
                                                                    </div>
                                                                </gsap-reveal>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
<!-- NOTE -->
                                            <p class="text-center text-secondary small mt-4 mb-0">
                                                I tempi e le attività indicate sono orientativi e possono variare in base alla complessità del caso.
                                            </p>
                                        </div>
                                    </gsap-reveal>
                                </div>
                            </div>
                        </form>
                    </div>
                </gsap-reveal>
            </div>
        </section>
    </div>
</template>

<script>
import emailjs from '@emailjs/browser'; 
import Swal from 'sweetalert2';
import GsapReveal from '../components/GsapReveal.vue';

export default {
    name: 'PageContacts',
    components: { GsapReveal },
    metaInfo() {
        const path = this.$route.path;
        const canonicalURL = `https://amglablecce.it${path}`;
        return {
            title: 'Preventivi',
            titleTemplate: '%s | AMG Lab',
            link: [
                { rel: 'canonical', href: canonicalURL }
            ],
            meta: [
                { name: 'description', content: 'Richiedi un preventivo personalizzato in pochi clic. Scopri i nostri servizi e ottieni un\'offerta su misura per le tue esigenze.' }
            ]
        };
    },
    data() {
        return {
            quoteItems: [
                { icon: 'bi bi-check-circle',   title: 'Analisi preliminare', desc: 'Valutazione iniziale del materiale disponibile.' },
                { icon: 'bi bi-check-circle', title: 'Stima dei tempi', desc: 'Indicazione realistica sulle fasi di lavoro.' },
                { icon: 'bi bi-check-circle', title: 'Offerta chiara', desc: 'Costi e attività descritti in modo comprensibile.' }
            ],
            features: [
                { icon: 'bi bi-lightning-charge',   title: 'Rapidità', desc: 'Preventivo entro 24/48 ore lavorative' },
                { icon: 'bi bi-list-check', title: 'Trasparenza', desc: 'Costi sempre chiari e dettagliati' },
                { icon: 'bi bi-bullseye', title: 'Precisione', desc: 'Analisi tecnica con margine d’errore minimo' }
            ],
            steps: [
                { number: '01', title: 'Richiesta', desc: 'Compili il modulo e descrivi il tipo di intervento richiesto.' },
                { number: '02', title: 'Documenti', desc: 'Indichi quali materiali hai: foto, verbali, rilievi o relazioni.' },
                { number: '03', title: 'Analisi interna', desc: 'Valutiamo complessità, obiettivi, tempi e attività necessarie.' },
                { number: '04', title: 'Preventivo', desc: 'Ricevi una proposta chiara con attività incluse, tempi e costo stimato.' }
            ],
            quotes: {
                nome: '',
                cognome: '',
                cellulare: '',
                email: '',
                budget: '',
                messaggio: '',
                privacy: false
            },
            errors: {},
            budgetOption: [
                {
                    value: 'base',
                    title: 'Base',
                    titleColor: 'bg-light',
                    headerColor: 'bg-light',
                    desc: 'Per una prima valutazione tecnica e documentale.',
                    label: 'Essenziale',
                    labelColor: 'text-light bg-success',
                    list: [
                        { item: 'Ricostruzione 2D/3D della posizione di quiete dei veicoli coinvolti e punto d\'urto' },
                        { item: 'Report fotografico in formato A3' },
                        { item: 'Tempi di consegna 5-7 giorni lavorativi' }
                    ],
                    choice: 'Seleziona Base'
                },
                {
                    value: 'medio',
                    title: 'Medio',
                    titleColor: 'text-white bg-success',
                    headerColor: 'bg-success',
                    desc: 'Per un\'analisi completa con elaborati grafici e ricostruzione.',
                    label: 'Consigliato',
                    labelColor: 'text-success bg-light',
                    labelTextColor: 'text-success',
                    list: [
                        { item: 'Ricostruzione 2D delle fasi del sinistro' },
                        { item: 'Ricostruzione 3D statica della sequenza del sinistro' },
                        { item: 'Composizione grafica in formato A3' },
                        { item: 'Tempi di consegna 7-10 giorni lavorativi' }
                    ],
                    choice: 'Seleziona Medio'
                },
                {
                    value: 'avanzato',
                    title: 'Avanzato',
                    titleColor: 'text-white',
                    headerColor: 'bg-dark',
                    desc: 'Per casi complessi con ricostruzione dettagliata e tavole tecniche.',
                    label: 'Completo',
                    labelColor: 'text-dark bg-warning',
                    labelTextColor: 'text-dark',
                    list: [
                        { item: 'Ricostruzione 2D dettagliata dello stato dei luoghi' },
                        { item: 'Ricostruzione 3D con simulazione dinamica del sinistro' },
                        { item: 'Restituzione delle clip con la dinamica del sinistro' },
                        { item: 'Tavola tecnica in formato compatibile con plotter' },
                        { item: 'Tempi di consegna 15-20 giorni lavorativi' }
                    ],
                    choice: 'Seleziona Avanzato'
                },
            ]
        }
    },
    methods: {
        sendQuote(event) {
            if (this.showAlert()) {
                event.preventDefault();
                emailjs.sendForm('service_o1g30x9', 'template_9tykh0u', this.$refs.quotes, 'AEfAAYssR5PXoPmif')
                .then(() => {                                                                                        
                    Swal.fire({ icon : 'success', title : 'Successo!', text : 'Preventivo inviato! Ti risponderemo entro 24/48 ore.', confirmButtonColor : '#3085d6'});
                    this.resetForm();
                })
                .catch(() => {
                    Swal.fire({ icon : 'error', title : 'Si è verificato un errore', text : 'C\'è stato un problema durante l\'invio del preventivo', confirmButtonColor : '#3085d6'});
                });
            } else {
                Swal.fire({ icon : 'error', title : 'Si è verificato un errore', text : 'Controlla i campi inseriti', confirmButtonColor : '#3085d6'});
            }
        },
        showAlert() {
            this.errors = {};
            let valid = true;

            if (!this.quotes.nome) {
                this.errors.nome = 'Non hai inserito il tuo nome';
                valid = false;
            }
            if (!this.quotes.cognome) {
                this.errors.cognome = 'Non hai inserito il tuo cognome';
                valid = false;
            }
            if (!this.quotes.email) {
                this.errors.email = 'Non hai inserito la tua email';
                valid = false;
            } else if (!this.quotes.email.includes('@')) {
                this.errors.email = 'Non hai inserito la @ alla tua email';
                valid = false;
            } else if (!this.quotes.email.includes('.')) {
                this.errors.email = 'La tua email deve contenere un punto (.)';
                valid = false;
            }
            if (!this.quotes.budget) {
                this.errors.budget = 'Seleziona un budget',
                valid = false;
            }
            if (!this.quotes.messaggio) {
                this.errors.messaggio = 'Non hai inserito il tuo messaggio';
                valid = false;
            }
            if (!this.quotes.privacy) {
                this.errors.privacy = 'Devi accettare la privacy policy';
                valid = false;
            }

            return valid;
        },
        resetForm() {
            this.quotes = { nome : '', cognome : '', email : '', cellulare : '', budget: '', messaggio : '', privacy: false};
            this.errors = {};
            this.$refs.quotes.reset();
        }
    }
};
</script>