const {defaultTheme} = require('@vuepress/theme-default')

module.exports = {
    lang: 'en-US',
    title: 'Mobile Videography',
    description: 'Das Smartphone zur Kinokamera machen ...',
    themeConfig: {},
    theme: defaultTheme({
        logo: '/images/logoDark.png',
        contributors: false,
        tip: 'Tipp',
        logoDark: '/images/logo.png',
        sidebar: ['/examples', '/shooting-advice', '/camera-usage', '/hands-on', '/postproduction'],
        navbar: ['/', '/terms', '/links']
    }),
}
