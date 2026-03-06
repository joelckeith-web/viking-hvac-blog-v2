import { siteConfig } from '@/lib/config';

interface CTABannerProps {
  variant?: 'emergency' | 'standard' | 'maintenance';
}

export default function CTABanner({ variant = 'standard' }: CTABannerProps) {
  const messages = {
    emergency: {
      heading: 'HVAC Emergency? We\'re Available 24/7.',
      subtext: 'Don\'t wait — call Viking HVAC now for fast, honest service across the Phoenix Metro Valley.',
    },
    standard: {
      heading: 'Need HVAC Help in the Phoenix Valley?',
      subtext: 'Viking Heating & Air Conditioning provides transparent pricing, honest diagnostics, and reliable service. Family-owned since 2016.',
    },
    maintenance: {
      heading: 'Schedule Your HVAC Tune-Up Today',
      subtext: 'Prevent costly breakdowns before Arizona\'s extreme temps hit. Our technicians service all brands.',
    },
  };

  const msg = messages[variant];

  return (
    <div className="my-10 bg-viking-navy rounded-lg p-6 md:p-8 text-center">
      <h3 className="text-white text-xl md:text-2xl font-bold mb-2">
        {msg.heading}
      </h3>
      <p className="text-gray-300 mb-4 max-w-xl mx-auto">
        {msg.subtext}
      </p>
      <a
        href={`tel:${siteConfig.phone.replace(/[^0-9]/g, '')}`}
        className="inline-block bg-viking-red hover:bg-viking-red-dark text-white font-bold py-3 px-8 rounded-lg text-lg transition-colors"
      >
        Call {siteConfig.phone}
      </a>
      <p className="text-gray-400 text-sm mt-3">
        Licensed, Bonded &amp; Insured &bull; ROC #{siteConfig.rocLicense} &bull; 100% Satisfaction Guarantee
      </p>
    </div>
  );
}
