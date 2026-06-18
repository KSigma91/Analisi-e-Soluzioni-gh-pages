<template>
    <div class="container-fluid px-0" style="font-family: 'Inter';">
<!-- HERO -->
        <section class="bg-dark bg-gradient text-white">
            <gsap-reveal :y="40">
                <div class="container-xxl px-3 px-lg-4 py-5">
                    <div class="row g-4 align-items-center py-lg-5 text-start">
                        <div class="col-lg-7">
                            <span class="badge bg-warning text-dark rounded-pill px-3 py-2 mb-3">Revisione casi archiviati</span>
                            <h1 class="display-4 fw-bold mb-3">Pronto per una revisione?</h1>
                            <p class="lead text-white-50 mb-4">
                                Riapriamo la lettura tecnica del tuo caso archiviato con un'analisi ordinata di perizie,
                                documenti, rilievi e possibili incongruenze.
                            </p>
                            <gsap-reveal>
                                <div class="d-flex flex-wrap gap-4">
                                    <a href="#form-revisione" class="btn btn-warning text-white px-3 py-2 rounded-1 border-0">Richiedi revisione</a>
                                    <a href="#come-funziona" class="btn btn-outline-light px-3 py-2 rounded-1 border-0">Come funziona</a>
                                </div>
                            </gsap-reveal>
                        </div>
                        <div class="col-lg-5">
                            <div class="card border-0 shadow-lg rounded-4">
                                <div class="card-body p-4">
                                    <h2 class="h5 fw-bold text-dark mb-3">Cosa verifichiamo</h2>
                                    <div v-for="(feature, index) in features" :key="index" class="d-flex gap-3 mb-3">
                                        <div class="fs-4 text-warning"><i :class="feature.icon"></i></div>
                                        <div>
                                            <div class="fw-semibold text-dark">{{ feature.title }}</div>
                                            <div class="small text-secondary">{{ feature.desc }}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </gsap-reveal>
        </section>
<!-- PERCHE' SCEGLIERE -->
        <section class="py-5 bg-white">
            <gsap-reveal children=".card" :y="35" :stagger="0.12">
                <div class="container-xxl px-3 px-lg-4">
                    <div class="text-center mb-4 mb-lg-5">
                        <span class="text-warning fw-bold text-uppercase small">Perché scegliere la revisione</span>
                        <h2 class="display-6 fw-bold mt-2 mb-3">Una seconda lettura può cambiare la prospettiva</h2>
                    </div>

                    <div class="row row-cols-1 row-cols-md-3 g-4">
                        <div v-for="(list, index) in lists" :key="index" class="col">
                            <article class="card h-100 border-0 shadow-sm rounded-4 text-center">
                                <div class="card-body p-4">
                                    <div class="fs-2 text-warning mb-3"><i :class="list.icon"></i></div>
                                    <h3 class="h5 fw-bold">{{ list.title }}</h3>
                                    <p class="text-secondary mb-0">{{ list.desc }}</p>
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
            </gsap-reveal>
        </section>
<!-- TIMELINE -->
        <section id="come-funziona" class="py-5 bg-light">
            <gsap-reveal children=".card" :y="35" :stagger="0.12">
                <div class="container-xxl px-3 px-lg-4">
                    <div class="row g-4 align-items-stretch text-start">
                        <div class="col-lg-5">
                            <div class="h-100 d-flex flex-column justify-content-center">
                                <span class="text-warning fw-bold text-uppercase small">Metodo</span>
                                <h2 class="display-6 fw-bold mt-2 mb-3">Come funziona la revisione</h2>
                                <div class="alert alert-warning mb-0 rounded-4" role="alert">
                                    <div class="fw-semibold mb-1">Prima valutazione</div>
                                    Puoi inviare una descrizione del caso anche se non hai ancora tutti i documenti organizzati.
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-7">
                            <div class="row row-cols-1 row-cols-md-2 g-3">
                                <div v-for="(step, index) in steps" :key="index" class="col">
                                    <div class="card h-100 border-0 shadow-sm rounded-4">
                                        <div class="card-body p-4">
                                            <div class="display-6 fw-bold text-warning mb-2">{{ step.number }}</div>
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
<!-- MATERIALE UTILE -->
        <section class="py-5 bg-white">
            <gsap-reveal children=".col" :y="35" :stagger="0.12">
                <div class="container-xxl px-3 px-lg-4">
                    <div class="row g-4 align-items-center text-start">
                        <div class="col-lg-5">
                            <span class="text-warning fw-bold text-uppercase small">Materiale utile</span>
                            <h2 class="display-6 fw-bold mt-2 mb-3">Cosa puoi indicare nella richiesta</h2>
                            <p class="text-secondary mb-0">
                                Anche senza allegare file dal modulo, è utile sapere quali documenti sono disponibili
                                per capire la complessità della revisione.
                            </p>
                        </div>

                        <div class="col-lg-7">
                            <div class="row row-cols-1 row-cols-md-2 g-3">
                                <div v-for="(material, index) in materials" :key="index" class="col">
                                    <div class="border rounded-4 p-4 h-100 bg-light">
                                        <div class="fs-3 text-warning mb-2"><i :class="material.icon"></i></div>
                                        <div class="fw-semibold mb-1">{{ material.title }}</div>
                                        <div class="small text-secondary">{{ material.desc }}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </gsap-reveal>
        </section>

        <section id="form-revisione" class="py-5 bg-light">
            <gsap-reveal children=".row" :y="35" :stagger="0.12">
                <div class="container-xxl px-3 px-lg-4">
                    <div class="row justify-content-center text-start">
                        <div class="col-xl-10">
                            <div class="card border-0 shadow-lg rounded-4">
                                <div class="card-body p-4 p-lg-5">
                                    <div class="row g-4">
                                        <div class="col-lg-4">
                                            <span class="text-warning fw-bold text-uppercase small">Richiesta revisione</span>
                                            <h2 class="display-6 fw-bold mt-2 mb-3">Descrivi il caso archiviato</h2>
                                            <div class="alert alert-warning rounded-4 mb-0" role="alert">
                                                <div class="fw-semibold mb-1">Allegati</div>
                                                Momentaneamente puoi descrivere i file disponibili nel messaggio.
                                            </div>
                                        </div>

                                        <div class="col-lg-8">
                                            <gsap-reveal :y="35">
                                                <form ref="cases" class="needs-validation" novalidate @submit.prevent="sendCase" enctype="multipart/form-data">
                                                    <div class="row g-3">
                                                        <input type="hidden" name="form_type" value="Revisione Casi">
<!-- NOME -->
                                                        <div class="col-md-6">
                                                            <div class="form-floating">
                                                                <input type="text" class="form-control rounded-2 border border-1" :class="{'is-invalid': errors.nome}" id="nome" name="nome" placeholder="Nome" v-model="cases.nome" required>
                                                                <label for="nome">Nome *</label>
                                                                <div class="invalid-feedback">
                                                                    {{ errors.nome }}
                                                                </div>
                                                            </div>
                                                        </div>
<!-- COGNOME -->
                                                        <div class="col-md-6">
                                                            <div class="form-floating">
                                                                <input type="text" class="form-control rounded-2 border border-1" :class="{'is-invalid': errors.cognome}" id="cognome" name="cognome" placeholder="cognome" v-model="cases.cognome" required>
                                                                <label for="cognome"><small>Cognome *</small></label>
                                                                <div class="invalid-feedback">
                                                                    {{ errors.cognome }}
                                                                </div>
                                                            </div>
                                                        </div>
<!-- EMAIL -->
                                                        <div class="col-md-6">
                                                            <div class="form-floating">
                                                                <input type="email" class="form-control rounded-2 border border-1" :class="{'is-invalid': errors.email}" id="email" name="email" placeholder="Email" v-model="cases.email" required>
                                                                <label for="email">Email *</label>
                                                                <div class="invalid-feedback">Inserisci una email valida.</div>
                                                            </div>
                                                        </div>
<!-- CELLULARE -->
                                                        <div class="col-md-6">
                                                            <div class="form-floating">
                                                                <input type="tel" class="form-control rounded-2 border border-1" id="cellulare" name="cellulare" placeholder="Cellulare" v-model="cases.cellulare" @input="cases.cellulare = cases.cellulare.replace(/\D/g, '')">
                                                                <label for="cellulare">Cellulare</label>
                                                            </div>
                                                        </div>
<!-- TIPOLOGIA PRATICA -->
                                                        <div class="col-md-6">
                                                            <div class="form-floating">
                                                                <select class="form-select" :class="{'is-invalid': errors.statoPratica}" id="statoPratica" name="statoPratica" v-model="cases.statoPratica" required>
                                                                    <option class="small" selected disabled>Seleziona</option>
                                                                    <option value="Archiviata">Pratica archiviata</option>
                                                                    <option value="Contestata">Pratica contestata</option>
                                                                    <option value="Da rivedere">Da rivedere</option>
                                                                </select>
                                                                <label for="statoPratica">Stato della pratica *</label>
                                                                <div class="invalid-feedback">
                                                                    {{ errors.statoPratica }}
                                                                </div>
                                                            </div>
                                                        </div>
<!-- TIPOLOGIA MATERIALE -->
                                                        <div class="col-md-6">
                                                            <div class="form-floating">
                                                                <select class="form-select" :class="{'is-invalid': errors.documenti}" id="documenti" name="documenti" v-model="cases.documenti" required>
                                                                    <option class="small" selected disabled>Seleziona</option>
                                                                    <option value="Perizia o Relazione">Perizia o relazione</option>
                                                                    <option value="Foto e Rilievi">Foto e rilievi</option>
                                                                    <option value="Verbale o Denuncia">Verbale o denuncia</option>
                                                                    <option value="Più documenti">Più documenti disponibili</option>
                                                                </select>
                                                                <label for="documenti">Documenti disponibili *</label>
                                                                <div class="invalid-feedback">
                                                                    {{ errors.documenti }}
                                                                </div>
                                                            </div>
                                                        </div>
<!-- MESSAGGIO -->
                                                        <div class="col-12">
                                                            <div class="form-floating">
                                                                <textarea class="form-control rounded-2 border border-1" :class="{'is-invalid': errors.messaggio}" id="messaggio" name="messaggio" placeholder="Messaggio" rows="2" v-model="cases.messaggio" required></textarea>
                                                                <label for="messaggio" class="form-label"><small>Descrizione del caso *</small></label>
                                                                <div class="invalid-feedback">
                                                                    {{ errors.messaggio }}
                                                                </div>
                                                            </div>
                                                        </div>
<!-- PRIVACY POLICY -->
                                                        <div class="col-12">
                                                            <div class="form-check">
                                                                <input class="form-check-input" id="privacy" type="checkbox" :class="{'is-invalid': errors.privacy}" v-model="cases.privacy">
                                                                <label for="privacy" class="form-check-label text-dark"><small>Acconsento al trattamento dei miei dati personali al fine di ricevere una risposta al mio messaggio, come indicato nella Privacy Policy. *</small></label>
                                                                <div class="invalid-feedback">
                                                                    {{ errors.privacy }}
                                                                </div>
                                                            </div>
                                                        </div>
<!-- PULSANTE -->
                                                        <div class="col-12 d-grid d-sm-flex justify-content-sm-end">
                                                            <button class="btn btn-block btn-warning text-white px-3 py-2 rounded-1 border-0" type="submit" style="font-family: 'Inter';" @click="showAlert">Richiedi Revisione</button>
                                                        </div>
                                                    </div>
                                                </form>
                                            </gsap-reveal>
                                        </div>
                                    </div>
                                </div>
                            </div>
<!-- NOTE -->
                            <p class="text-center text-secondary small mt-4 mb-0">
                                La richiesta non comporta l'accettazione automatica dell'incarico: seguirà una prima valutazione interna.
                            </p>
                        </div>
                    </div>
                </div>
            </gsap-reveal>
        </section>
    </div>
</template>

<script>
import emailjs from '@emailjs/browser'; 
import Swal from 'sweetalert2';
import GsapReveal from '../components/GsapReveal.vue';

export default {
    name: 'CaseForm',
    components: { GsapReveal },
    metaInfo() {
        const path = this.$route.path;
        const canonicalURL = `https://amglablecce.it${path}`;
        return {
            title: 'Revisione casi',
            titleTemplate: '%s | AMG Lab',
            link: [
                { rel: 'canonical', href: canonicalURL }
            ],
            meta: [
                { name: 'description', content: 'Hai un caso di infortunistica stradale archiviato? Affidati al nostro servizio di revisione per una nuova valutazione professionale.' }
            ]
        };
    },
    data() {
        return {
            features: [
                { icon: 'bi bi-folder2-open', title: 'Documentazione passata', desc: 'Perizie, verbali, fotografie e relazioni già prodotte.' },
                { icon: 'bi bi-exclamation-triangle', title: 'Punti critici', desc: 'Incongruenze, lacune e passaggi poco chiari.' },
                { icon: 'bi bi-file-earmark-bar-graph', title: 'Report di revisione', desc: 'Sintesi tecnica dei rilievi e delle possibili azioni.' }
            ],
            lists: [
                { icon: 'bi bi-search', title: 'Analisi storica', desc: 'Rivalutiamo perizie, documenti e passaggi tecnici già presenti nel fascicolo.' },
                { icon: 'bi bi-cpu', title: 'Verifica tecnica', desc: 'Controlliamo coerenza dei dati, compatibilità delle misure e possibili gap informativi.' },
                { icon: 'bi bi-graph-up-arrow', title: 'Report avanzato', desc: 'Consegniamo un quadro chiaro dei punti da approfondire e delle criticità emerse.' },
            ],
            steps: [
                { number:'01', title: 'Invio Dati',        desc: 'Descrivi il caso e indica quali perizie o documenti sono disponibili.' },
                { number:'02', title: 'Analisi Preliminare', desc: 'Verifichiamo coerenza, lacune e possibili punti deboli della pratica.' },
                { number:'03', title: 'Ricalcolo Dinamico', desc: 'Quando necessario, ricostruiamo aspetti tecnici e compatibilità del sinistro.' },
                { number:'04', title: 'Consegna Report',   desc: 'Ricevi un documento chiaro con esiti, criticità e indicazioni di approfondimento.' }
            ],
            materials: [
                { icon: 'bi bi-file-earmark-text', title: 'Perizie e relazioni', desc: 'Documenti tecnici già prodotti o ricevuti.' },
                { icon: 'bi bi-camera', title: 'Foto e rilievi', desc: 'Immagini dei luoghi, dei veicoli e dei danni.' },
                { icon: 'bi bi-geo-alt', title: 'Luogo e dinamica', desc: 'Indicazioni sul punto d\'urto, traiettorie e posizioni.' },
                { icon: 'bi bi-clock-history', title: 'Stato della pratica', desc: 'Archiviata, contestata, in revisione o da riaprire.' }
            ],
            cases: {
                nome: '',
                cognome: '',
                cellulare: '',
                email: '',
                statoPratica: '',
                documenti: '',
                messaggio: '',
            },
            errors: {}
        }
    },
    methods: {
        sendCase(event) {
            if (this.showAlert()) {
                event.preventDefault();
                emailjs.sendForm('service_o1g30x9', 'template_9tykh0u', this.$refs.cases, 'AEfAAYssR5PXoPmif')
                .then(() => {
                    Swal.fire({ icon : 'success', title : 'Successo!', text : 'La tua richiesta di revisione è stata inoltrata. Ti ricontatteremo al più presto.', confirmButtonColor : '#3085d6'});
                    this.resetForm();
                })
                .catch(() => {
                    Swal.fire({ icon : 'error', title : 'Si è verificato un errore', text : 'C\'è stato un problema durante l\'invio della richiesta', confirmButtonColor : '#3085d6'});
                });
            } else {
                Swal.fire({ icon : 'error', title : 'Si è verificato un errore', text : 'Controlla i campi inseriti', confirmButtonColor : '#3085d6'});
            }
        },
        showAlert() {
            this.errors = {};
            let valid = true;

            if (!this.cases.nome) {
                this.errors.nome = 'Non hai inserito il tuo nome';
                valid = false;
            }
            if (!this.cases.cognome) {
                this.errors.cognome = 'Non hai inserito il tuo cognome';
                valid = false;
            }
            if (!this.cases.email) {
                this.errors.email = 'Non hai inserito la tua email';
                valid = false;
            } else if (!this.cases.email.includes('@')) {
                this.errors.email = 'Non hai inserito la @ alla tua email';
                valid = false;
            } else if (!this.cases.email.includes('.')) {
                this.errors.email = 'La tua email deve contenere un punto (.)';
                valid = false;
            }
            if (!this.cases.statoPratica) {
                this.errors.statoPratica = 'Seleziona lo stato della pratica';
                valid = false;
            }
            if (!this.cases.documenti) {
                this.errors.documenti = 'Seleziona i documenti disponibili';
                valid = false;
            }
            if (!this.cases.messaggio) {
                this.errors.messaggio = 'Descrivi il caso archiviato';
                valid = false;
            }
            if (!this.cases.privacy) {
                this.errors.privacy = 'Devi accettare la privacy policy';
                valid = false;
            }

            return valid;
        },
        resetForm() {
            this.cases = { nome : '', cognome : '', email : '', cellulare : '', statoPratica: '', documenti: '', messaggio : '', privacy: false };
            this.errors = {};
            this.$refs.cases.reset();
        },
        closeModal() {
            if (this._bsModal) {
                this._bsModal.hide();
            }
        }
    },
    mounted() {
        // chiave specifica per PageContacts
        const key = 'fileAlertShown_CaseForm';
        if (!sessionStorage.getItem(key)) {
            Swal.fire({
                title: 'Avviso Importante',
                icon: 'info',
                html: `
                <p>Al momento non è possibile allegare file. Stiamo lavorando per ripristinare la funzionalità il prima possibile.</p>
                <p>Se desideri comunque inviarci documenti, scrivici a
                    <a href="mailto:amglab.info@gmail.com">amglab.info@gmail.com</a>.
                </p>`,
                confirmButtonText: 'Ho capito',
                confirmButtonColor: '#3085d6',  // verde rassicurante
                allowOutsideClick: false,
                allowEscapeKey: false,
                backdrop: true
            });
            sessionStorage.setItem(key, 'true');
        }
    }
};
</script>