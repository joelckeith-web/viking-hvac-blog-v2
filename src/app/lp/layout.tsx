import Image from 'next/image';
import Link from 'next/link';
import { siteConfig } from '@/lib/config';

export default function LandingPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* LP header — logo links to blog home */}
      <header className="bg-viking-navy py-3">
        <div className="container-narrow flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/images/viking-bug.png"
              alt="Viking HVAC"
              width={40}
              height={40}
              className="h-10 w-10 brightness-0 invert"
            />
            <span className="text-white font-bold text-xl tracking-tight">
              Viking HVAC
            </span>
          </Link>
          <a
            href={siteConfig.phoneHref}
            className="bg-viking-red hover:bg-viking-red-dark text-white px-5 py-2.5 rounded-lg font-bold text-sm transition-colors"
          >
            {siteConfig.phone}
          </a>
        </div>
      </header>

      <main>{children}</main>

      {/* Full LP footer */}
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
                <a href={siteConfig.phoneHref} className="hover:text-white">
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
          </div>
        </div>
      </footer>
    </>
  );
}
