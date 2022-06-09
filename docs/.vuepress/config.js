const {defaultTheme} = require('@vuepress/theme-default')

module.exports = {
    lang: 'en-US',
    title: 'Mobile Videography',
    description: 'Das Smartphone zur Kinokamera machen ...',
    themeConfig: {
    },
    theme: defaultTheme({
        logo: '/jfc-logo.png',
        sidebar: ['examples','/shooting-advice', '/camera-usage', 'hands-on', '/postproduction'],
        navbar: ['/shooting-advice', {text: 'Nützliche Links', link: '/links'}]
    }),
}
