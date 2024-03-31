// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: {enabled: true},
    modules: [
        'nuxt-primevue'
    ],
    primevue: {
        usePrimeVue: true
    },
    css: [
        'primevue/resources/themes/aura-dark-blue/theme.css',
        'primeicons/primeicons.css',
        'primeflex/primeflex.css',
        '~/assets/scss/main.scss'
    ],
})
