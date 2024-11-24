import { SitemapStream, streamToPromise } from 'sitemap'
import { createWriteStream } from 'fs'

// URL's van jouw site
const links = [
  { url: '/', changefreq: 'daily', priority: 1.0 }, // Homepage
  { url: '/images', changefreq: 'weekly', priority: 0.8 }, // images pagina
  // Voeg hier extra routes toe!
]

;(async () => {
  // Maak een sitemap stream
  const stream = new SitemapStream({ hostname: 'https://huisvandeglimlach.nl' })

  // Schrijf de sitemap naar een bestand
  const writeStream = createWriteStream('./public/sitemap.xml')
  stream.pipe(writeStream)

  // Voeg links toe aan de sitemap
  links.forEach((link) => stream.write(link))

  // Sluit de stream
  stream.end()

  // Wacht tot de stream voltooid is
  await streamToPromise(stream)

  console.log('Sitemap gegenereerd: ./public/sitemap.xml')
})()
