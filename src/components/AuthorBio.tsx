import { siteConfig } from '@/lib/config';

export default function AuthorBio() {
  return (
    <div className="mt-10 p-6 bg-gray-50 rounded-lg border border-gray-200">
      <div className="flex items-start gap-4">
        <div className="w-16 h-16 bg-viking-navy rounded-full flex items-center justify-center flex-shrink-0">
          <span className="text-white font-bold text-xl">V</span>
        </div>
        <div>
          <h3 className="font-bold text-viking-navy text-lg">
            {siteConfig.name}
          </h3>
          <p className="text-sm text-gray-500 mb-2">
            Family-Owned HVAC Contractor &bull; Chandler, AZ &bull; Since {siteConfig.foundedYear}
          </p>
          <p className="text-gray-700 text-sm leading-relaxed">
            Viking Heating &amp; Air Conditioning is a family-owned and operated HVAC contractor
            serving the Phoenix Metro Valley with over 40 years of combined team experience.
            We service all brands and provide 24/7 emergency repairs across Chandler, Gilbert,
            Mesa, Phoenix, Scottsdale, and surrounding communities. ROC License #{siteConfig.rocLicense}.
          </p>
          <div className="mt-3 flex gap-4 text-sm">
            <a
              href={siteConfig.mainSiteUrl}
              className="text-viking-navy hover:text-viking-red transition-colors font-medium"
              target="_blank"
              rel="noopener"
            >
              Visit Our Website
            </a>
            <a
              href={siteConfig.social.google}
              className="text-viking-navy hover:text-viking-red transition-colors font-medium"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Reviews
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
