<template>
    <div class="container-fluid d-flex flex-column align-items-center p-0" style="font-family: 'Inter';">
        <section class="py-5 bg-white">
            <gsap-reveal children=".col" :y="35" :stagger="0.12">
                <div class="container-xxl px-3 px-lg-4 text-start">
                    <div class="row g-4 g-lg-5 align-items-center">
                        <div class="col-lg-6">
                            <span class="badge bg-primary rounded-pill px-3 py-2 mb-3">Consulenza tecnica CTU/CTP</span>
                            <h1 class="display-4 fw-bold mb-3">Prenota una consulenza tecnica mirata</h1>
                            <p class="lead text-secondary mb-4">
                                Un primo confronto per analizzare il caso, individuare criticità e definire il supporto tecnico più utile
                                nelle diverse fasi del procedimento.
                            </p>
                            <div class="row row-cols-1 row-cols-sm-3 g-3 mb-4">
                                <div v-for="(feature, index) in features" :key="index" class="col">
                                    <div class="border rounded-4 p-3 h-100">
                                        <div class="fs-3 text-primary mb-2"><i :class="feature.icon"></i></div>
                                        <div class="fw-semibold">{{ feature.title }}</div>
                                        <div class="small text-secondary">{{ feature.desc }}</div>
                                    </div>
                                </div>
                            </div>
                            <gsap-reveal>
                                <div class="alert alert-primary rounded-4 mb-0" role="alert">
                                    <div class="fw-semibold mb-1">A chi è rivolta</div>
                                    A CTU, CTP, studi peritali e legali che necessitano di un supporto tecnico chiaro.
                                </div>
                            </gsap-reveal>
                        </div>

                        <div class="col-lg-6">
                            <gsap-reveal children=".card" :y="35" :stagger="0.12">
                                <div id="form-consulenza" class="card border-0 shadow-lg rounded-4">
                                    <div class="card-body p-4 p-lg-5">
                                        <h2 class="h3 fw-bold mb-2">Richiedi il primo contatto</h2>
                                        <p class="text-secondary mb-4">Compila i dati essenziali: ti ricontatteremo per definire la consulenza.</p>

                                        <gsap-reveal children=".row" :y="35" :stagger="0.12">
                                            <form ref="consult" class="card-body needs-validation" novalidate @submit.prevent="sendConsultancy" enctype="multipart/form-data">
                                                <div class="row g-3">
                                                    <input type="hidden" name="form_type" value="Consulenza tecnica">
                                                    <div class="col-md-6">
<!-- NOME -->
                                                        <div class="form-floating">
                                                            <input type="text" class="form-control rounded-2 border border-1" :class="{'is-invalid': errors.nome}" id="nome" name="nome" placeholder="Nome" v-model="consult.nome" required>
                                                            <label for="nome"><small>Nome *</small></label>
                                                            <div class="invalid-feedback">
                                                                {{ errors.nome }}
                                                            </div>
                                                        </div>
                                                    </div>
<!-- COGNOME -->
                                                    <div class="col-md-6">
                                                        <div class="form-floating">
                                                            <input type="text" class="form-control rounded-2 border border-1" :class="{'is-invalid': errors.cognome}" id="cognome" name="cognome" placeholder="cognome" v-model="consult.cognome" required>
                                                            <label for="cognome"><small>Cognome *</small></label>
                                                            <div class="invalid-feedback">
                                                                {{ errors.cognome }}
                                                            </div>
                                                        </div>
                                                    </div>
<!-- EMAIL -->
                                                    <div class="col-md-6">
                                                        <div class="form-floating">
                                                            <input type="email" class="form-control rounded-2 border border-1" :class="{'is-invalid': errors.email}" id="email" name="email" placeholder="Email" v-model="consult.email" required>
                                                            <label for="email" class="form-label"><small>Email *</small></label>
                                                            <div class="invalid-feedback">
                                                                {{ errors.email }}
                                                            </div>
                                                        </div>
                                                    </div>
<!-- CELLULARE -->
                                                    <div class="col-md-6">
                                                        <div class="form-floating">
                                                            <input type="tel" class="form-control rounded-2 border border-1" id="cellulare" name="cellulare" placeholder="Cellulare" v-model="consult.cellulare" @input="consult.cellulare = consult.cellulare.replace(/\D/g, '')">
                                                            <label for="cellulare" class="form-label me-1"><small>Cellulare</small></label>
                                                        </div>
                                                    </div>
<!-- LISTA -->
                                                    <div class="col-12">
                                                        <div class="form-floating small">
                                                            <select class="form-select" :class="{'is-invalid': errors.profilo}" id="profilo" name="profilo" v-model="consult.profilo" required>
                                                                <option class="small" selected disabled>Seleziona</option>
                                                                <option value="Ctu">CTU</option>
                                                                <option value="Ctp">CTP</option>
                                                                <option value="Studio peritale">Studio peritale</option>
                                                                <option value="Avvocato">Studio legale</option>
                                                                <option value="Altro">Altro</option>
                                                            </select>
                                                            <label for="profilo">Profilo professionale *</label>
                                                            <div class="invalid-feedback">
                                                                {{ errors.profilo }}
                                                            </div>
                                                        </div>
                                                    </div>
<!-- ALLEGA FILE -->
                                                    <div class="col-12">
                                                        <div class="form-floating">
                                                            <input type="file" class="form-control rounded-2 border border-1" id="file" name="file" ref="file" disabled>
                                                            <label for="file" class="form-label text-secondary fst-italic"><small>Al momento non è possibile allegare file dal modulo</small></label>
                                                            <div class="invalid-feedback">
                                                                {{ errors.file }}
                                                            </div>
                                                        </div>
                                                    </div>
<!-- MESSAGGIO -->
                                                    <div class="col-12">
                                                        <div class="form-floating">
                                                            <textarea class="form-control rounded-2 border border-1" :class="{'is-invalid': errors.messaggio}" id="messaggio" name="messaggio" placeholder="Messaggio" rows="2" v-model="consult.messaggio" required></textarea>
                                                            <label for="messaggio" class="form-label"><small>Descrivi brevemente il caso *</small></label>
                                                            <div class="invalid-feedback">
                                                                {{ errors.messaggio }}
                                                            </div>
                                                        </div>
                                                    </div>
<!-- PRIVACY POLICY -->
                                                    <div class="col-12">
                                                        <div class="form-check">
                                                            <input class="form-check-input" id="privacy" type="checkbox" :class="{'is-invalid': errors.privacy}" v-model="consult.privacy">
                                                            <label for="privacy" class="form-check-label text-dark"><small>Acconsento al trattamento dei miei dati personali, come descritto nella Privacy Policy, esclusivamente per ricevere una risposta al mio messaggio. *</small></label>
                                                            <div class="invalid-feedback">
                                                                {{ errors.privacy }}
                                                            </div>
                                                        </div>
                                                    </div>
<!-- PULSANTE -->
                                                    <div class="col-12 d-grid">
                                                        <button type="submit" class="btn btn-primary btn-lg px-3 py-2 rounded-1 border-0">
                                                            Prenota consulenza
                                                        </button>
                                                    </div>
                                                </div>
                                            </form>
                                        </gsap-reveal>
                                    </div>
                                </div>
                            </gsap-reveal>
                        </div>
                    </div>
                </div>
            </gsap-reveal>
        </section>
<!-- PERCORSI DI CONSULENZA -->
        <section class="container-fluid py-5 bg-light">
            <gsap-reveal children=".card" :y="35" :stagger="0.12">
                <div class="container px-3 px-lg-4">
                    <div class="text-center mb-4 mb-lg-5">
                        <span class="text-primary fw-bold text-uppercase small">Percorsi disponibili</span>
                        <h2 class="display-6 fw-bold mt-2 mb-3">Scegli il tipo di supporto</h2>
                    </div>
                    
                    <div class="row row-cols-1 row-cols-lg-3 g-4 text-start">
                        <div v-for="(item, index) in support" :key="index" class="col">
                            <article :class="item.border" class="card h-100 shadow-sm rounded-4">
                                <div :class="item.cardHeader" class="card-header text-white border-0 rounded-top">
                                    <span :class="item.labelColor" class="badge rounded-pill mb-2">{{ item.label }}</span>
                                    <h3 class="h5 fw-bold mb-0">{{ item.titleSpecial }}</h3>
                                </div>
                                <div class="card-body p-4">
                                    <div class="d-flex align-items-center gap-3 mb-3">
                                        <div class="fs-2 text-primary"><i :class="item.icon"></i></div>
                                        <h3 class="h5 fw-bold mb-0">{{ item.title }}</h3>
                                    </div>
                                    <p class="text-secondary">{{ item.desc }}</p>
                                    <ul v-for="(listItem, index) in item.list" :key="index" class="list-unstyled text-secondary small mb-0">
                                        <li class="mb-2"><i class="bi bi-check-circle text-primary me-2"></i>{{ listItem.text }}</li>
                                    </ul>
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
            </gsap-reveal>
        </section>
<!-- TIMELINE ORIZZONTALE -->
        <section class="py-5 bg-white">
            <gsap-reveal children=".col" :y="35" :stagger="0.12">
                <div class="container-xxl px-3 px-lg-4 py-5">
                    <div class="row g-4 align-items-center text-start">
                        <div class="col-lg-4">
                            <span class="text-primary fw-bold text-uppercase small">Metodo</span>
                            <h2 class="display-6 fw-bold mt-2 mb-3">Dal primo contatto al parere tecnico</h2>
                        </div>

                        <div class="col-lg-8">
                            <div class="row row-cols-1 row-cols-md-4 g-3">
                                <div v-for="(line, index) in timeline" :key="index" class="col">
                                    <div class="border rounded-4 p-3 h-100 bg-light">
                                        <div class="display-6 fw-bold text-primary">{{ line.number }}</div>
                                        <div class="fw-semibold mb-2">{{ line.title }}</div>
                                        <p class="small text-secondary mb-0">{{ line.desc }}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </gsap-reveal>
        </section>
<!-- CTA FINALE -->
        <section class="container-fluid py-5 bg-dark text-white">
            <gsap-reveal>
                <div class="container px-3 px-lg-4">
                    <div class="row g-4 align-items-center text-start">
                        <div class="col-lg-8">
                            <span class="badge bg-primary rounded-pill px-3 py-2 mb-3">Primo contatto</span>
                            <h2 class="display-6 fw-bold mb-3">Hai già documenti, foto o relazioni da far valutare?</h2>
                            <p class="text-white-50 mb-0">
                                Anche senza allegare file dal modulo, puoi descrivere il materiale disponibile e indicare la fase del procedimento.
                            </p>
                        </div>
                        <div class="col-lg-4 text-lg-end">
                            <a href="#form-consulenza" class="btn btn-primary btn-lg px-3 py-2 rounded-1 border-0">Vai al modulo</a>
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
            title: 'Consulenze',
            titleTemplate: '%s | AMG Lab',
            link: [
                { rel: 'canonical', href: canonicalURL }
            ],
            meta: [
                { name: 'description', content: 'Offriamo consulenze per aiutarti a raggiungere i tuoi obiettivi. Scopri come il nostro team può supportarti nel tuo percorso.' }
            ]
        };
    },
    data() {
        return {
            features: [
                { icon: 'bi bi-search', title: 'Analisi', desc: 'Dati e documenti' },
                { icon: 'bi bi-diagram-3', title: 'Strategia', desc: 'Obiettivi e vincoli' },
                { icon: 'bi bi-file-earmark-text', title: 'Parere', desc: 'Supporto motivato' }
            ],
            support: [
                { 
                    border: 'border-0',
                    cardHeader: 'bg-white',
                    icon: 'bi bi-clipboard-check',
                    title: 'Consulenza preliminare', 
                    desc: 'Prima valutazione del caso, dei documenti disponibili e delle criticità tecniche.', 
                    list: [ 
                        { text: 'Fattibilità tecnica' }, 
                        { text: 'Criticità documentali' }, 
                        { text: 'Indicazioni operative' }
                    ]
                },
                { 
                    border: 'border border-primary',
                    cardHeader: 'bg-primary p-4',
                    label: 'Consigliata',
                    labelColor: 'text-primary bg-light',
                    titleSpecial: 'Supporto al procedimento', 
                    desc: 'Affiancamento tecnico durante analisi, confronto e definizione della linea operativa.',
                    list: [ 
                        { text: 'Briefing tecnico' }, 
                        { text: 'Analisi dati e misure' }, 
                        { text: 'Supporto alla relazione' }
                    ]
                },
                { 
                    border: 'border-0',
                    cardHeader: 'bg-white',
                    icon: 'bi bi-arrow-repeat',
                    title: 'Revisione tecnica', 
                    desc: 'Rilettura di relazioni, elaborati e documentazione già prodotta.',
                    list: [ 
                        { text: 'Verifica coerenza' }, 
                        { text: 'Controllo incongruenze' }, 
                        { text: 'Osservazioni tecniche' }
                    ]
                },
            ],
            timeline: [
                { number: '01', title: 'Richiesta', desc: 'Invio dei dati essenziali.'},
                { number: '02', title: 'Briefing', desc: 'Definizione di obiettivi e criticità.'},
                { number: '03', title: 'Analisi', desc: 'Esame di documenti, dati e misure.'},
                { number: '04', title: 'Riscontro', desc: 'Indicazioni tecniche e prossimi passi.'},
            ],
            consult: {
                nome: '',
                cognome: '',
                cellulare: '',
                email: '',
                profilo: '',
                messaggio: '',
                privacy: false
            },
            errors: {}
        }
    },
    methods: {
        sendConsultancy(event) {
            if (this.showAlert()) {
                event.preventDefault();
                emailjs.sendForm('service_o1g30x9', 'template_9tykh0u', this.$refs.consult, 'AEfAAYssR5PXoPmif')
                .then(() => {
                    Swal.fire({ icon : 'success', title : 'Successo!', text : 'Richiesta inviata! Ti contatteremo al più presto per fissare un appuntamento.', confirmButtonColor : '#3085d6'});
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

            if (!this.consult.nome) {
                this.errors.nome = 'Non hai inserito il tuo nome';
                valid = false;
            }
            if (!this.consult.cognome) {
                this.errors.cognome = 'Non hai inserito il tuo cognome';
                valid = false;
            }
            if (!this.consult.email) {
                this.errors.email = 'Non hai inserito la tua email';
                valid = false;
            } else if (!this.consult.email.includes('@')) {
                this.errors.email = 'Non hai inserito la @ alla tua email';
                valid = false;
            } else if (!this.consult.email.includes('.')) {
                this.errors.email = 'La tua email deve contenere un punto (.)';
                valid = false;
            }
            if (!this.consult.profilo) {
                this.errors.profilo = 'Non hai selezionato un profilo professionale';
                valid = false;
            }
            if (!this.consult.messaggio) {
                this.errors.messaggio = 'Non hai inserito il tuo messaggio';
                valid = false;
            }
            if (!this.consult.privacy) {
                this.errors.privacy = 'Devi accettare la privacy policy';
                valid = false;
            }

            return valid;
        },
        resetForm() {
            this.consult = { nome : '', cognome : '', email : '', cellulare : '', messaggio : '', privacy: false};
            this.errors = {};
            this.$refs.consult.reset();
        }
    },
    mounted() {
        // chiave specifica per PageContacts
        const key = 'fileAlertShown_ConsultancyForm';
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