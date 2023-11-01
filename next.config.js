/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["storage.echoar.xyz"],
  },
  i18n: {
    locales: [ 'de', 'en', 'fr', 'hi', 'ja', 'ru'],
    defaultLocale: 'en',
  }
}

module.exports = nextConfig