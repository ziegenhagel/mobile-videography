const {defaultTheme} = require('@vuepress/theme-default')
const {searchPlugin} = require('@vuepress/plugin-search')


module.exports = {
    plugins: [
        searchPlugin({
        }),
    ],
    lang: 'de-DE',
    title: 'Mobile Videography',
    description: 'Das Smartphone zur Kinokamera machen ...',
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
        sidebar: ['/basics', '/film-analyse', '/bildgestaltung', '/kamera', '/dreh', '/schnitt', '/feedback'],
        navbar: ['/', '/lexikon', '/programme']
    }),
}
