<template>
    <header class="sticky-top">
        <nav class="navbar navbar-expand-lg navbar-dark shadow-sm">
            <div class="container-xxl px-3 px-lg-4">
                <router-link class="navbar-brand d-flex align-items-center gap-3 fw-semibold" to="/" @click.native="closeAll">
                    <img src="../assets/1x/amglabweb02.png" alt="AMG Lab testo">
                    <!-- <span class="fs-4" style="font-family: 'Markazi Text';">AMG Lab</span> -->
                </router-link>

                <button class="navbar-toggler" type="button" :aria-expanded="navOpen ? 'true' : 'false'" aria-controls="navbarAMGLab" aria-label="Apri menu di navigazione" @click="toggleNavbar">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div id="navbarAMGLab" class="collapse navbar-collapse" :class="{ show: navOpen }">
                    <ul class="navbar-nav ms-auto align-items-lg-center gap-lg-2 text-start">
                        <li class="nav-item">
                            <router-link class="nav-link" exact-active-class="active" to="/" @click.native="closeAll">Home</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" exact-active-class="active" to="/servizi" @click.native="closeAll">Servizi</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" exact-active-class="active" to="/elaborati" @click.native="closeAll">Elaborati</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" exact-active-class="active" to="/chisiamo" @click.native="closeAll">Chi siamo</router-link>
                        </li>
                        <li class="nav-item dropdown" @click.stop>
                            <button class="nav-link dropdown-toggle bg-transparent border-0" type="button" :class="{ show: supportOpen }" :aria-expanded="supportOpen ? 'true' : 'false'" @click="toggleSupport">Supporto</button>

                            <ul class="dropdown-menu dropdown-menu-lg-end shadow border-0" :class="{ show: supportOpen }">
                                <li>
                                    <router-link class="dropdown-item" :to="{ path: '/', hash: '#contattaci' }" @click.native="closeAll">Contattaci</router-link>
                                </li>
                                <li>
                                    <router-link class="dropdown-item" :to="{ path: '/servizi', hash: '#faqServizi' }" @click.native="closeAll">FAQ</router-link>
                                </li>
                                <li>
                                    <router-link class="dropdown-item" to="/preventivi" @click.native="closeAll">Preventivi</router-link>
                                </li>
                                <li>
                                    <router-link class="dropdown-item" to="/consulenze" @click.native="closeAll">Consulenze</router-link>
                                </li>
                                <li>
                                    <router-link class="dropdown-item" to="/revisioni" @click.native="closeAll">Revisione casi</router-link>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
</template>

<script>
export default {
    name: 'NavbarApp',
    data() {
        return {
            navOpen: false,
            supportOpen: false
        }
    },
    methods: {
        toggleNavbar() {
            this.navOpen = !this.navOpen

            if (!this.navOpen) {
                this.supportOpen = false
            }
        },
        toggleSupport() {
            this.supportOpen = !this.supportOpen
        },
        closeAll() {
            this.navOpen = false
            this.supportOpen = false
        },
        closeSupportFromOutside() {
            this.supportOpen = false
        }
    },
    watch: {
        $route() {
            this.closeAll()
        }
    },
    mounted() {
        document.addEventListener('click', this.closeSupportFromOutside)
    },
    beforeDestroy() {
        document.removeEventListener('click', this.closeSupportFromOutside)
    }
}
</script>

<style lang="scss" scoped>
.navbar {
    background-color: #232f3e;
    font-family: 'Inter';

    img {
        width: auto;
        //height: 40px;
        height: 60px;
    }
}

.navbar-nav {
    a,
    button {
        &:hover {
            color: #f5bc41;
            transition: all .2s linear;
        }

        &:focus {
            color: #f5bc41;
        }
    }

    .nav-link.active {
        color: #f5bc41;
    }
}
</style>