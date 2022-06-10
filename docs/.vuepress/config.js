const {defaultTheme} = require('@vuepress/theme-default')

module.exports = {
    lang: 'de-DE',
    title: 'Mobile Videography',
    description: 'Das Smartphone zur Kinokamera machen ...',
    themeConfig: {
    },
    theme: defaultTheme({
        logo: '/images/website/logoDark.png',
        contributors: false,
        tip: 'Tipp',
        logoDark: '/images/website/logo.png',
        sidebar: ['/examples', '/shooting-advice', '/camera-usage', '/hands-on', '/postproduction'],
        navbar: ['/', '/terms', '/links']
    }),
}
