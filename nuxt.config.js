export default {
    mode: 'universal',
    target: 'static',
    /*
    ** Headers of the page
    */
    head: {
        htmlAttrs: {
            lang: 'pt-br',
        },
        title: 'Giphy App',
        meta: [
            {charset: 'utf-8'},
            {name: 'msapplication-TileColor', content: '#da532c'},
            {name: 'theme-color', content: '#000000'},
            {name: 'viewport', content: 'width=device-width, initial-scale=1, shrink-to-fit=no'},
            {hid: 'description', name: 'description', content: 'App personalizado do Giphy, onde você pode pesquisar seus gifs e montar sua própria coleção.'},
            {hid: 'keywords', name: 'description', content: 'Giphy, Giphy API'},
            {hid: 'og:title', property: 'og:title', content: 'Giphy App'},
            {hid: 'og:description', property: 'og:description', content: 'App personalizado do Giphy, onde você pode pesquisar seus gifs e montar sua própria coleção.'},
            {hid: 'twitter:description', property: 'twitter:description', content: 'App personalizado do Giphy, onde você pode pesquisar seus gifs e montar sua própria coleção.'},
            {hid: 'og:type', property: 'og:type', content: 'website'},
            {hid: 'og:url', property: 'og:url', content: 'https://giphyapp.henriquevargas.com.br'},
            {hid: 'og:image', property: 'og:image', content: 'http://giphyapp.henriquevargas.com.br/compartilhamento.png'},
            {hid: 'twitter:image', property: 'twitter:image', content: 'http://giphyapp.henriquevargas.com.br/compartilhamento.png'},
        ],
        link: [
            {rel: 'canonical', href: 'https://giphyapp.henriquevargas.com.br'},
            {rel: 'apple-touch-icon', href: '/apple-touch-icon.png'},
            {rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png'},
            {rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png'},
            {rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#5bbad5'},
            {rel: 'manifest', href: '/site.webmanifest'},
            {rel: 'stylesheet', media: 'screen', href: 'https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700;800&display=swap'},
        ],
    },
    /*
    ** Customize the progress-bar color
    */
    loading: {color: '#45f542'},
    /*
    ** Global CSS
    */
    css: [
        // SCSS file in the project
        '~/assets/sass/main.scss',
        // CSS file in the project
    ],
    /*
    ** Plugins to load before mounting the App
    */
    plugins: [
        
    ],
    /*
    ** Nuxt.js dev-modules
    */
    buildModules: [
      ['@nuxtjs/gtm', {id: 'GTM-XXXXXX', dev: false}],
    ],
    /*
    *   * Nuxt.js modules
    */
    modules: [
        '@nuxtjs/axios',
        ['@nuxtjs/robots', {
            UserAgent: '*',
            Allow: '/'
        }],
        ['@nuxtjs/sitemap', {
            "hostname": "https://giphyapp.henriquevargas.com.br",
            exclude: [
                '/404'
            ]
        }],
    ],
    build: {
        extractCSS: true,
        optimization: {
            splitChunks: {
                cacheGroups: {
                    styles: {
                        name: 'styles',
                        test: /\.(css|vue)$/,
                        chunks: 'async',
                        enforce: false
                    }
                }
            }
        },
        /**
         * add external plugins
         */
        vendor: [],
        plugins: [],
        env: {
            baseUrl: process.env.BASE_URL || 'http://localhost:3000'
        }
    },
}
