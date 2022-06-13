const {defaultTheme} = require('@vuepress/theme-default')
const {searchPlugin} = require('@vuepress/plugin-search')


module.exports = {

    plugins: [
        searchPlugin({
            // options
        }),
    ],
    lang: 'de-DE',
    title: 'Mobile Videography',
    description: 'Das Smartphone zur Kinokamera machen ...',
    themeConfig: {},
    theme: defaultTheme({
        themePlugins: {
            activeHeaderLinks: false,
                searchPlugin:true
        },
        colorMode: 'dark',
        colorModeSwitch: false,
        logo: '/images/website/logoDark.png',
        contributors: false,
        tip: 'Tipp',
        logoDark: '/images/website/logo.png',
        sidebar: ['/general','/examples', '/shooting-advice', '/camera-usage', '/hands-on', '/postproduction', '/resume'],
        navbar: ['/', '/terms', '/links']
    }),
}
