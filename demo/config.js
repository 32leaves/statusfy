module.exports = {
  title: 'Statusfy Demo',
  description: 'A marvelous open source Status Page system',
  defaultLocale: 'en',
  locales: [
    { code: 'en', iso: 'en-US', name: 'English' },
    { code: 'es', iso: 'es-ES', name: 'Español' }
  ],
  contentConfig: {
    dir: 'content',
    systems: {
      en: {
        cdn: 'CDN',
        conversions: 'Conversions',
        'site-delivery': 'Site delivery',
        api: 'API'
      },
      es: {
        cdn: 'CDN',
        conversions: 'Conversiones',
        'site-delivery': 'Entrega del Sitio',
        api: 'API'
      }
    }
  }
}
