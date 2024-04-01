// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: {enabled: true},
    modules: [
        'nuxt-primevue',
        '@pinia/nuxt'
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
    runtimeConfig: {
        public: {
            API_TOKEN: process.env.API_TOKEN,
        }
    }
})
