import type { MetadataRoute } from 'next'

export const manifest: MetadataRoute.Manifest = {
  name: 'Punching Palace Boxing Club',
  short_name: 'Punching Palace',
  description: 'Punching Palace Boxing Club - Unleash the Champion Within',
  start_url: '/',
  display: 'standalone',
  background_color: '#000000',
  theme_color: '#FF0000',
  icons: [
    {
      src: '/android-chrome-192x192.png',
      sizes: '192x192',
      type: 'image/png',
    },
    {
      src: '/android-chrome-512x512.png',
      sizes: '512x512',
      type: 'image/png',
    },
    {
      src: '/android-chrome-512x512.png',
      sizes: '512x512',
      type: 'image/png',
      purpose: "maskable"
    },
  ],
};