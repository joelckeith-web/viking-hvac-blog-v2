import { siteConfig } from '@/lib/config';

export default function LandingPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentYear = new Date().getFullYear();

  return (
    <>
      {/* No Header — LP is standalone */}
      <main>{children}</main>

      <footer className="bg-viking-navy text-white border-t border-white/10">
        <div className="container-narrow py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p className="text-gray-500 text-xs">
            &copy; {currentYear} {siteConfig.name}. All rights reserved. ROC #{siteConfig.rocLicense}
          </p>

          <nav className="flex flex-wrap items-center justify-center gap-4 text-xs">
            <a
              href={siteConfig.mainSiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Visit {siteConfig.shortName}
            </a>
            <a
              href={siteConfig.phoneHref}
              className="text-gray-400 hover:text-white transition-colors"
            >
              {siteConfig.phone}
            </a>
          </nav>
        </div>
      </footer>
    </>
  );
}
