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
      {/* Minimal LP header — logo links to blog home */}
      <header className="bg-viking-navy py-3">
        <div className="container-narrow flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/images/viking-bug.png"
              alt="Viking HVAC"
              width={40}
              height={40}
              className="w-10 h-10"
            />
            <Image
              src="/images/viking-wordmark-white.png"
              alt="Viking Heating and Air Conditioning"
              width={141}
              height={57}
              className="h-8 w-auto"
            />
          </Link>
          <a
            href={siteConfig.phoneHref}
            className="bg-viking-red hover:bg-viking-red-dark text-white px-4 py-2 rounded-lg font-semibold text-sm transition-colors"
          >
            {siteConfig.phone}
          </a>
        </div>
      </header>

      <main>{children}</main>

      <footer className="bg-viking-navy text-white border-t border-white/10">
        <div className="container-narrow py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p className="text-gray-500 text-xs">
            &copy; {currentYear} {siteConfig.name}. All rights reserved. ROC #{siteConfig.rocLicense}
          </p>
          <a
            href={siteConfig.phoneHref}
            className="text-gray-400 hover:text-white transition-colors text-xs"
          >
            {siteConfig.phone}
          </a>
        </div>
      </footer>
    </>
  );
}
