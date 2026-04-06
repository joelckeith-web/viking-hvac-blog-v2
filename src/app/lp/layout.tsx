import Image from 'next/image';
import Link from 'next/link';
import { siteConfig } from '@/lib/config';

export default function LandingPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentYear = new Date().getFullYear();

  return (
    <>
      {/* LP header — logo links to blog home */}
      <header className="bg-viking-navy py-3">
        <div className="container-narrow flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/viking-logo-full.png"
              alt="Viking Heating and Air Conditioning"
              width={200}
              height={89}
              className="h-12 w-auto"
            />
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

      {/* Minimal LP footer */}
      <footer className="bg-viking-navy text-gray-500 py-6">
        <div className="container-narrow text-center text-xs">
          &copy; {currentYear} {siteConfig.name}. All rights reserved. ROC #{siteConfig.rocLicense}.
          &nbsp;&bull;&nbsp;
          <a href={siteConfig.phoneHref} className="text-gray-400 hover:text-white transition-colors">
            {siteConfig.phone}
          </a>
        </div>
      </footer>
    </>
  );
}
