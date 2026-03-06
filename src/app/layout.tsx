import type { Metadata } from 'next';
import Link from 'next/link';
import { siteConfig } from '@/lib/config';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: `Blog | ${siteConfig.name}`,
    template: `%s | ${siteConfig.shortName}`,
  },
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: siteConfig.name,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-snippet': -1, 'max-image-preview': 'large' },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        {/* Header */}
        <header className="bg-viking-navy text-white">
          <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 bg-viking-red rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">V</span>
              </div>
              <div>
                <span className="font-bold text-lg">Viking HVAC</span>
                <span className="hidden sm:inline text-gray-400 text-sm ml-2">Blog</span>
              </div>
            </Link>
            <nav className="flex items-center gap-6 text-sm">
              <Link href={siteConfig.mainSiteUrl} className="text-gray-300 hover:text-white transition-colors">
                Main Site
              </Link>
              <a
                href={`tel:${siteConfig.phone.replace(/[^0-9]/g, '')}`}
                className="bg-viking-red hover:bg-red-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors"
              >
                {siteConfig.phone}
              </a>
            </nav>
          </div>
        </header>

        {/* Main */}
        <main className="flex-1 bg-white">
          {children}
        </main>

        {/* Footer */}
        <footer className="bg-viking-navy text-gray-400 py-10">
          <div className="max-w-5xl mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h4 className="text-white font-bold mb-3">{siteConfig.name}</h4>
                <p className="text-sm leading-relaxed">
                  Family-owned HVAC contractor serving the Phoenix Metro Valley since {siteConfig.foundedYear}.
                  Licensed, bonded, and insured. ROC #{siteConfig.rocLicense}.
                </p>
              </div>
              <div>
                <h4 className="text-white font-bold mb-3">Service Areas</h4>
                <p className="text-sm">{siteConfig.serviceAreas.join(' · ')}</p>
              </div>
              <div>
                <h4 className="text-white font-bold mb-3">Contact</h4>
                <p className="text-sm">
                  <a href={`tel:${siteConfig.phone.replace(/[^0-9]/g, '')}`} className="hover:text-white">
                    {siteConfig.phone}
                  </a>
                  <br />
                  <a href={`mailto:${siteConfig.email}`} className="hover:text-white">{siteConfig.email}</a>
                  <br />
                  {siteConfig.address.street}, {siteConfig.address.city}, {siteConfig.address.state} {siteConfig.address.zip}
                </p>
              </div>
            </div>
            <div className="border-t border-gray-700 mt-8 pt-6 text-sm text-center">
              &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
              &nbsp;&bull;&nbsp; The Bridge Between You and Comfort
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
