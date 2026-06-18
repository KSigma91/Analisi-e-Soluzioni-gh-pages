<template>
    <div class="legal-page container py-5 text-start" style="font-family: 'Inter';">
        <h1 class="mb-4">Informative Legali</h1>
<!-- Cookie Policy -->
        <section id="cookie-policy" class="mb-5">
            <h3 class="py-3 fw-bold" style="color: #004f8e;">Cookie Policy</h3>
            <p>
                Conformemente al Provvedimento del Garante dell’8 maggio 2014 e alle Linee Guida del 10 giugno 2021, questo sito utilizza esclusivamente <strong>cookie tecnici</strong>. Tali cookie sono necessari per garantire la corretta trasmissione delle comunicazioni e per consentire all’utente di navigare tra le pagine senza perdita di sessione o malfunzionamenti.
            </p>
<!-- Tipologie di cookie -->
            <h5 class="fw-bold">Tipologie di cookie tecnici utilizzati</h5>
            <ul class="list-unstyled fs-5">
                <li>
                    <strong>Cookie di sessione:</strong> temporanei, eliminati alla chiusura del browser, necessari per mantenere la navigazione e le operazioni richieste.
                </li>
            </ul>
            <p>
                Non sono presenti cookie di profilazione o di terze parti e non viene installato alcun cookie a fini pubblicitari.  
                Non è richiesto alcun consenso preventivo per i cookie utilizzati.
            </p>
        </section>
<!-- Privacy Policy -->
        <section id="privacy-policy">
            <h3 class="py-3 fw-bold" style="color: #004f8e;">Privacy Policy (GDPR)</h3>
            <h5 class="fw-bold">Titolare del trattamento</h5>
            <p>
                AMG Lab - 73100, Lecce (<a href="amglab.info@gmail.com">amglab.info@gmail.com</a>)
            </p>
<!-- Dati raccolti e finalità -->
            <h5 class="fw-bold">Dati raccolti e finalità</h5>
            <p>
                Raccogliamo volontariamente i dati da te forniti tramite i form di contatto o richiesta preventivo:
                <strong>nome, cognome, email, cellulare e messaggio</strong>. Tali dati vengono trattati esclusivamente per rispondere alla tua richiesta, fornirti preventivi, informazioni o supporto tecnico.
            </p>
<!-- Base giuridica -->
            <h5 class="fw-bold">Base giuridica</h5>
            <p>
                Il trattamento si basa sul <strong>consenso esplicito</strong> fornito al momento dell’invio del form, in conformità all’art. 6, comma 1, lett. a) del GDPR.
            </p>
<!-- Durata della conservazione -->
            <h5 class="fw-bold">Durata della conservazione</h5>
            <p>
                I tuoi dati personali saranno conservati per il tempo necessario a gestire la tua richiesta e per eventuali obblighi normativi, salvo tua richiesta di cancellazione o revoca del consenso in anticipo.
            </p>
<!-- Diritti degli interessati -->
            <h5 class="fw-bold">Diritti degli interessati</h5>
            <p>
                Ai sensi degli articoli 15-22 del GDPR, hai il diritto di:
            </p>
            <ul>
                <li>accedere ai tuoi dati personali;</li>
                <li>ottenere la rettifica, cancellazione o limitazione del trattamento;</li>
                <li>opporti al trattamento o chiederne la portabilità;</li>
                <li>revocare il consenso in qualsiasi momento.</li>
            </ul>
            <p>
                Per esercitare tali diritti o per ulteriori questioni relative ai tuoi dati, contatta <a href="amglab.info@gmail.com">amglab.info@gmail.com</a>. Hai inoltre il diritto di proporre reclamo al Garante per la protezione dei dati personali.
            </p>
<!-- Misure di sicurezza adottate -->
            <h5 class="fw-bold">Misure di sicurezza adottate</h5>
            <p>
                Abbiamo implementato misure tecniche e organizzative adeguate, conformemente all’art. 32 del GDPR, per garantire la riservatezza, integrità e disponibilità dei dati. Tali misure comprendono l’uso di protocolli cifrati (HTTPS), backup regolari e controlli di accesso ai dati.
            </p>
<!-- Cookie -->
            <h5 class="fw-bold">Cookie</h5>
            <p>
                        Per informazioni sui cookie utilizzati (tipologie e finalità) consulta la sezione <a href="#cookie-policy">Cookie Policy</a> di questa pagina.
            </p>
<!-- Aggiornamenti alla policy -->
            <h5 class="fw-bold">Aggiornamenti alla policy</h5>
            <p>
                La presente informativa è aggiornata a maggio 2025. Ci riserviamo il diritto di modificarla o integrarla in base a evoluzioni normative o aggiornamenti tecnici. In tal caso, pubblicheremo tempestivamente la versione aggiornata.
            </p>
        </section>
    </div>
</template>

<script>
export default {
  name: 'LegalPage',
  metaInfo() {
        const path = this.$route.path;
        const canonicalURL = `https://amglablecce.it${path}`;
        return {
            title: 'Privacy & cookie',
            titleTemplate: '%s | AMG Lab',
            link: [
                { rel: 'canonical', href: canonicalURL }
            ],
            meta: [
                { name: 'description', content: 'Consulta la nostra Privacy & Cookie Policy per scoprire come raccogliamo e utilizziamo i tuoi dati personali.' }
            ]
        };
    }
};
</script>

<style scoped>
.legal-page a {
    scroll-behavior: smooth;
}
</style>
