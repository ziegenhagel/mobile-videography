const {defaultTheme} = require('@vuepress/theme-default')
const {searchPlugin} = require('@vuepress/plugin-search')

module.exports = {
    plugins: [
        searchPlugin({}),
    ],
    lang: 'de-DE',
    title: 'Mobile Videografie',
    description: 'Großes Kino mit dem Smartphone.',
    themeConfig: {},
    theme: defaultTheme({
        themePlugins: {
            activeHeaderLinks: false
        },
        colorModeSwitch: true,
        logo: '/images/website/logoDark.png',
        contributors: false,
        tip: 'Tipp',
        logoDark: '/images/website/logo.png',
        sidebar: ['/basics', '/film-analyse', '/bildgestaltung', '/kamera', '/dreh', '/schnitt', '/offene-fragen'],
        navbar: ['/', '/lexikon', {
            text: 'PDF',
            link: 'https://mobile-videografie.netlify.app/Zusammenfassung.pdf'
        }]
    }),
}
