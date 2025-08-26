import './globals.css';
import type { Metadata } from 'next';
import { ThemeProvider } from '@/components/theme-provider';
import { Header } from '@/components/layout/header';
import { UtilityBar } from '@/components/layout/utility-bar';
import { Footer } from '@/components/layout/footer';
import { WhatsAppButton } from '@/components/ui/whatsapp-button';
import { Chatbot } from '@/components/ui/chatbot';

export const metadata: Metadata = {
  metadataBase: new URL('https://portiojurelegal.com'),
  title: 'Portio Jure Legal Partners | Trusted Legal Excellence in Cameroon',
  description: 'Premier law firm in Cameroon offering corporate law, family law, real estate, criminal defense, and more. Modern legal solutions with traditional values.',
  keywords: 'law firm cameroon, legal services buea, corporate law, family law, real estate law, criminal defense',
  authors: [{ name: 'Portio Jure Legal Partners' }],
  icons: {
    icon: '/Micarelawv.png',
    shortcut: '/Micarelawv.png',
    apple: '/Micarelawv.png',
  },
  openGraph: {
    title: 'Portio Jure Legal Partners | Trusted Legal Excellence in Cameroon',
    description: 'Premier law firm in Cameroon offering corporate law, family law, real estate, criminal defense, and more.',
    type: 'website',
    url: 'https://portiojurelegal.com',
    images: [
      {
        url: '/Micarelawv.png',
        width: 1200,
        height: 630,
        alt: 'Portio Jure Legal Partners Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Portio Jure Legal Partners | Trusted Legal Excellence in Cameroon',
    description: 'Premier law firm in Cameroon offering corporate law, family law, real estate, criminal defense, and more.',
    images: ['/Micarelawv.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#C7A008" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Portio Jure" />
        <link rel="apple-touch-icon" href="/Micarelawv.png" />
      </head>
      <body className="min-h-screen bg-background">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <UtilityBar />
          <Header />
          <main>{children}</main>
          <Footer />
          <WhatsAppButton />
          <Chatbot />
        </ThemeProvider>
      </body>
    </html>
  );
}