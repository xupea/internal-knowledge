import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import '@/app/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '文章',
  description: 'Generated by create next app',
}

export default function Layout({
  children,
}: {
  children: React.ReactNode,
}) {
  return (
    <html lang="en">
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-98GKF3NHN8" />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', 'G-98GKF3NHN8');
        `}
      </Script>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
