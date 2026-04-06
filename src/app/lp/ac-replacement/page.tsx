import type { Metadata } from 'next';
import Image from 'next/image';
import {
  Phone,
  Shield,
  Award,
  Clock,
  Star,
  ArrowRight,
  Zap,
  Leaf,
  DollarSign,
  CheckCircle,
  BadgeCheck,
  MapPin,
  ThermometerSun,
  Gauge,
} from 'lucide-react';
import { siteConfig } from '@/lib/config';
import { LandingForm } from '@/components/landing/LandingForm';
import { HCPScheduler } from '@/components/landing/HCPScheduler';
import { FAQAccordion } from '@/components/sections/FAQAccordion';
import { ScrollToTopLink } from '@/components/landing/ScrollToTopLink';

export const metadata: Metadata = {
  title: 'AC Replacement Phoenix | New Air Conditioning Installation',
  description:
    'Expert AC replacement and new air conditioning installation in Phoenix, Chandler, Gilbert & Mesa. Licensed ROC #323699. Free estimates. Call (480) 689-5167.',
};

/* ------------------------------------------------------------------ */
/*  DATA                                                               */
/* ------------------------------------------------------------------ */

const trustStats = [
  { icon: Shield, value: `ROC #${siteConfig.rocLicense}`, label: 'Licensed & Insured' },
  { icon: Award, value: 'Since 2016', label: 'Family-Owned' },
  { icon: Star, value: `${siteConfig.averageRating}-Star`, label: `${siteConfig.reviewCount}+ Reviews` },
  { icon: Clock, value: 'Free', label: 'In-Home Estimates' },
];

const benefits = [
  {
    icon: ThermometerSun,
    title: 'Arizona-Sized Systems',
    description:
      'We size every system specifically for your home, factoring in square footage, insulation, ductwork, and the extreme Phoenix heat. No guesswork — just the right fit.',
  },
  {
    icon: Leaf,
    title: 'Energy-Efficient Options',
    description:
      'Modern high-SEER systems can cut your cooling costs by 30-50% compared to older units. We help you find the right balance of efficiency and budget.',
  },
  {
    icon: DollarSign,
    title: 'Financing Available',
    description:
      'A new AC is an investment. We offer flexible financing options so you can get the comfort you need now and pay over time with manageable payments.',
  },
  {
    icon: BadgeCheck,
    title: 'Licensed Installation',
    description:
      'Every installation is performed by our licensed team (ROC #323699), pulled to code with proper permits, and inspected for safety and performance.',
  },
  {
    icon: Zap,
    title: 'All Major Brands',
    description:
      'We install Trane, Carrier, Lennox, Goodman, Rheem, and more. We recommend based on your needs and budget — not based on sales incentives.',
  },
  {
    icon: Gauge,
    title: 'Performance Guarantee',
    description:
      'Every installation is backed by manufacturer warranties plus our own workmanship guarantee. We stand behind every system we install.',
  },
];

const signsYouNeedReplacement = [
  'Your AC is 15+ years old',
  'Repair costs exceeding $2,000 or more',
  'System uses R-22 (Freon) refrigerant — now discontinued',
  'Cooling bills have been climbing year over year',
  'Some rooms in your home are always too hot or too cold',
  'Your AC needs frequent repairs (2+ per year)',
  'System runs constantly but never reaches the set temperature',
  'Excessive humidity inside the home despite AC running',
];

const decisionMatrix = {
  repair: {
    title: 'When to Repair',
    items: [
      'System is under 10 years old',
      'Repair cost is less than half the cost of replacement',
      'First major breakdown (no pattern of failures)',
      'Uses current R-410A refrigerant',
    ],
  },
  replace: {
    title: 'When to Replace',
    items: [
      'System is 15+ years old and losing efficiency',
      'Repair cost exceeds 50% of new system cost',
      'Uses discontinued R-22 refrigerant',
      'Multiple breakdowns in the past 2 years',
    ],
  },
};

const serviceAreas = {
  eastValley: {
    label: 'East Valley',
    cities: ['Chandler', 'Gilbert', 'Mesa', 'Queen Creek', 'Apache Junction'],
  },
  westPhoenix: {
    label: 'Phoenix Metro',
    cities: ['Phoenix', 'Scottsdale', 'Tempe', 'Ahwatukee'],
  },
};

const processSteps = [
  {
    step: '1',
    title: 'Free In-Home Estimate',
    description:
      'We visit your home, assess your current system and ductwork, measure your space, and recommend the right-sized system for your needs and budget.',
  },
  {
    step: '2',
    title: 'Choose Your System',
    description:
      'We present clear options at different price points — good, better, best — so you can make an informed decision. No pressure, no upselling.',
  },
  {
    step: '3',
    title: 'Professional Installation',
    description:
      'Our licensed crew installs your new system, typically in one day. We handle permits, testing, and walk you through everything before we leave.',
  },
];

// Real Google Business Profile reviews (4.9 stars, 358+ reviews)
const reviews = [
  {
    text: 'I had ordered my A/C on line and Viking was contracted to do the install, Nino and Albert showed up they were very courteous and got right to work mind you it\'s 108 degrees out and they were working up on the roof. They got the job done in a timely manner and cleaned up after they were done. My wife and I appreciate the job they did and would recommend Viking Heating and Air-conditioning to everyone.',
    author: 'Charles Marshall',
    location: 'Google Review',
  },
  {
    text: 'You are all the best ever!! I have had several different heating and a/c services in the past and none have been as professional and knowledgeable as your professionals! Thanks for the service!!',
    author: 'Charlotte Christian',
    location: 'Google Review',
  },
  {
    text: 'I can\'t recommend Viking Heating and Air enough! They have taken care of me and my family members several times over and I know they are a company full of integrity and great service.',
    author: 'Viking HVAC Customer',
    location: 'Google Review',
  },
];

const faqs = [
  {
    question: 'How much does a new AC system cost in Phoenix?',
    answer:
      'A new central air conditioning system typically ranges from several thousand dollars for a basic system to significantly more for high-efficiency or variable-speed systems. The exact cost depends on your home size, ductwork condition, efficiency rating, and brand. We provide free in-home estimates with clear, itemized pricing.',
  },
  {
    question: 'How long does AC installation take?',
    answer:
      'Most standard AC replacements are completed in a single day — usually 4 to 8 hours. If your project requires ductwork modifications or a system conversion (like switching from a standard AC to a heat pump), it may take an additional day.',
  },
  {
    question: 'What size AC do I need for my home?',
    answer:
      'AC sizing depends on square footage, ceiling height, insulation levels, window exposure, ductwork, and local climate. In the Phoenix heat, proper sizing is critical — an undersized unit will run nonstop and an oversized unit will short-cycle and waste energy. We perform a load calculation during your free estimate to determine the right size.',
  },
  {
    question: 'What SEER rating should I get?',
    answer:
      'In Arizona, the minimum SEER2 rating is 15. We typically recommend 16-18 SEER2 for the best balance of efficiency and cost. Higher ratings (20+) offer the best energy savings but come at a premium. During your estimate, we show you the cost difference vs. energy savings so you can decide what makes sense.',
  },
  {
    question: 'Do you offer financing?',
    answer:
      'Yes. We offer flexible financing options through trusted partners so you can get a new system now and pay over time. Ask about available plans during your free estimate.',
  },
  {
    question: 'Should I replace my AC and furnace at the same time?',
    answer:
      'If your furnace is older or you are upgrading to a higher-efficiency AC, replacing both at the same time is often the better value. Matched systems perform more efficiently and reliably. We will advise you honestly during the estimate based on the condition and age of your existing equipment.',
  },
  {
    question: 'What brands do you install?',
    answer:
      'We install all major brands including Trane, Carrier, Lennox, Goodman, Rheem, Ruud, Bryant, Amana, and Daikin. We recommend based on your needs, budget, and the best warranty options — not based on dealer incentives.',
  },
  {
    question: 'What happens to my old AC unit?',
    answer:
      'We remove and properly dispose of your old system as part of every installation. This includes safe recovery of any remaining refrigerant per EPA regulations. You do not need to arrange anything separately.',
  },
];

/* ------------------------------------------------------------------ */
/*  PAGE COMPONENT                                                     */
/* ------------------------------------------------------------------ */

export default function ACReplacementLP() {
  return (
    <>
      {/* ==================== HERO ==================== */}
      <section className="relative bg-viking-navy text-white overflow-hidden min-h-[600px] flex items-center">
        <Image
          src="/images/viking-hero-bg.jpg"
          alt="Viking HVAC technician installing air conditioning system"
          fill
          priority
          className="object-cover"
          quality={80}
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-viking-navy/95 via-viking-navy/80 to-viking-navy/50" />

        <div className="relative container-narrow section-padding w-full">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Left — Copy */}
            <div className="max-w-xl">
              <span className="inline-block bg-viking-red text-white text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
                New AC Installation &bull; Phoenix Metro Valley
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-extrabold leading-tight mb-4">
                Time for a New AC?{' '}
                <span className="text-viking-red">Get a Free Estimate.</span>
              </h1>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Upgrade to a modern, energy-efficient air conditioning system built for
                the Phoenix heat. Viking HVAC provides expert installation with honest
                pricing, financing options, and systems sized right for your home.
              </p>

              {/* Phone CTA */}
              <a
                href={siteConfig.phoneHref}
                className="inline-flex items-center gap-2 bg-viking-red hover:bg-viking-red-dark text-white font-bold text-lg px-6 py-3 rounded-lg transition-colors"
              >
                <Phone className="w-5 h-5" />
                {siteConfig.phone}
              </a>
            </div>

            {/* Right — Form */}
            <div className="w-full max-w-md mx-auto lg:mx-0 lg:ml-auto">
              <LandingForm
                serviceLabel="AC Replacement"
                messagePlaceholder="Tell us about your current system (age, brand, issues)"
                leadSource="lp-ac-replacement"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ==================== TRUST BAR ==================== */}
      <section className="bg-viking-navy-light py-6">
        <div className="container-narrow">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {trustStats.map((stat) => (
              <div key={stat.label} className="flex flex-col items-center gap-1">
                <stat.icon className="w-6 h-6 text-white/70 mb-1" />
                <span className="text-white font-bold text-lg">{stat.value}</span>
                <span className="text-white/70 text-sm">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== BENEFITS ==================== */}
      <section className="section-padding bg-white">
        <div className="container-narrow">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-dark mb-4">
              Why Replace Your AC with Viking?
            </h2>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              A new air conditioning system is one of the biggest investments you will make
              for your home. Here is why Phoenix homeowners trust Viking to get it right.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="bg-light rounded-xl p-6 border border-viking-navy-light/30 hover:border-viking-navy-light/60 hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 bg-viking-navy/10 rounded-lg flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-viking-navy" />
                </div>
                <h3 className="text-lg font-bold text-dark mb-2">{benefit.title}</h3>
                <p className="text-muted text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== SIGNS YOU NEED REPLACEMENT ==================== */}
      <section className="section-padding bg-accent">
        <div className="container-narrow">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-dark mb-4">
                Signs It&apos;s Time for a New AC
              </h2>
              <p className="text-muted mb-8">
                Not sure if you need a repair or a full replacement? If two or more of these
                apply to your situation, a new system is likely the smarter investment.
              </p>
              <ul className="space-y-3">
                {signsYouNeedReplacement.map((sign) => (
                  <li key={sign} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-viking-red shrink-0 mt-0.5" />
                    <span className="text-dark">{sign}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <ScrollToTopLink className="btn-primary">
                  Get a Free Estimate
                  <ArrowRight className="w-4 h-4 ml-2" />
                </ScrollToTopLink>
              </div>
            </div>

            {/* Right side — savings callout */}
            <div className="bg-viking-navy rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-extrabold text-white mb-4">
                How Much Can You Save?
              </h3>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Older AC systems (10+ years) typically have SEER ratings of 10-13. Modern
                systems start at SEER2 15 and go up to 24+. For a Phoenix home running AC
                8+ months per year, the energy savings add up fast.
              </p>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Many homeowners see their summer electric bills drop by $80-$150 per month
                after upgrading. Over the life of the system, that efficiency pays for
                itself — and then some.
              </p>
              <a
                href={siteConfig.phoneHref}
                className="btn-primary text-lg w-full justify-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                Get Your Free Estimate
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== REPAIR VS REPLACE ==================== */}
      <section className="section-padding bg-white">
        <div className="container-narrow">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-dark mb-4">
              Repair vs. Replace: A Simple Guide
            </h2>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              Not sure which route makes sense? Here are the factors we look at when
              advising homeowners — and we will always give you an honest recommendation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-light rounded-xl p-8 border-2 border-viking-navy/20">
              <h3 className="text-xl font-bold text-viking-navy mb-4">
                {decisionMatrix.repair.title}
              </h3>
              <ul className="space-y-3">
                {decisionMatrix.repair.items.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <ArrowRight className="w-4 h-4 text-viking-navy shrink-0 mt-1" />
                    <span className="text-dark text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-viking-red/5 rounded-xl p-8 border-2 border-viking-red/20">
              <h3 className="text-xl font-bold text-viking-red mb-4">
                {decisionMatrix.replace.title}
              </h3>
              <ul className="space-y-3">
                {decisionMatrix.replace.items.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <ArrowRight className="w-4 h-4 text-viking-red shrink-0 mt-1" />
                    <span className="text-dark text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p className="text-center text-muted mt-8">
            Not sure where you fall? Our technician will evaluate your system during a
            free in-home estimate and give you a straight answer.
          </p>
        </div>
      </section>

      {/* ==================== DEEP CONTENT (image left, text right) ==================== */}
      <section className="section-padding bg-accent">
        <div className="container-narrow">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3]">
              <Image
                src="/images/ac-unit.jpg"
                alt="New air conditioning unit installed by Viking HVAC"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="text-right">
              <h2 className="text-3xl md:text-4xl font-extrabold text-dark mb-6">
                AC Replacement in Phoenix: What to Expect
              </h2>
              <div className="text-muted space-y-4 leading-relaxed">
                <p>
                  Replacing an air conditioning system in Phoenix is not the same as replacing
                  one in Seattle or Chicago. The extreme desert heat demands systems that are
                  properly sized, correctly installed, and rated for sustained high-temperature
                  operation.
                </p>
                <p>
                  Proper sizing is the single most important factor in a successful AC
                  replacement. An undersized system will run constantly and never keep up on
                  the hottest days. An oversized system will short-cycle — wasting energy and
                  shortening the equipment lifespan. We perform a Manual J load calculation
                  on every installation to ensure the system matches your home.
                </p>
                <p>
                  Viking has been installing AC systems across the Phoenix Metro Valley since
                  2016. We are not a volume shop pushing one brand — we install the system
                  that fits your home, your budget, and your goals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== SERVICE AREAS ==================== */}
      <section className="section-padding bg-white">
        <div className="container-narrow">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-dark mb-4">
              Serving the Phoenix Metro Valley
            </h2>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              Expert AC replacement and installation across the East Valley and greater
              Phoenix area. Free in-home estimates — no obligation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {Object.values(serviceAreas).map((area) => (
              <div key={area.label} className="bg-light rounded-xl p-6 border border-gray-100">
                <h3 className="text-lg font-bold text-viking-navy mb-3 flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  {area.label}
                </h3>
                <ul className="space-y-2">
                  {area.cities.map((city) => (
                    <li key={city} className="flex items-center gap-2 text-dark text-sm">
                      <CheckCircle className="w-4 h-4 text-viking-navy-light" />
                      {city}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== 3-STEP PROCESS (with bg image) ==================== */}
      <section className="relative section-padding text-white overflow-hidden">
        <Image
          src="/images/viking-team.jpg"
          alt="Viking HVAC installation team"
          fill
          className="object-cover"
          style={{ objectPosition: '50% 32%' }}
          quality={75}
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-viking-navy/95 via-viking-navy/90 to-viking-navy-light/85" />

        <div className="relative container-narrow">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
              How It Works
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              From your free estimate to a brand-new system — our process is transparent,
              professional, and designed around your schedule.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {processSteps.map((step) => (
              <div key={step.step} className="text-center">
                <div className="w-14 h-14 bg-viking-red rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">{step.step}</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== REVIEWS (real GBP reviews) ==================== */}
      <section className="section-padding bg-white">
        <div className="container-narrow">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-dark mb-4">
              What Our Customers Say
            </h2>
            <div className="flex items-center justify-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <p className="text-muted">
              {siteConfig.averageRating}-star average across {siteConfig.reviewCount}+ Google reviews
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review) => (
              <div
                key={review.author}
                className="bg-light rounded-xl p-6 border border-gray-100"
              >
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-dark text-sm leading-relaxed mb-4 italic">
                  &ldquo;{review.text}&rdquo;
                </p>
                <div>
                  <p className="font-bold text-dark text-sm">{review.author}</p>
                  <p className="text-muted text-xs">{review.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== HCP SCHEDULER ==================== */}
      <HCPScheduler attribution="lp-ac-replacement" />

      {/* ==================== FAQ ==================== */}
      <FAQAccordion faqs={faqs} title="AC Replacement FAQs" />

      {/* ==================== FINAL CTA (white background) ==================== */}
      <section className="section-padding bg-white">
        <div className="container-narrow text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-dark mb-4">
            Ready for a New AC System?
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto mb-6">
            Get a free, no-obligation in-home estimate. We will assess your home, recommend
            the right system, and give you clear pricing — no pressure, no surprises.
          </p>

          <a
            href={siteConfig.phoneHref}
            className="inline-flex items-center gap-2 font-bold text-2xl md:text-3xl text-viking-red hover:text-viking-red-dark transition-colors mb-8"
          >
            <Phone className="h-6 w-6 md:h-7 md:w-7" />
            {siteConfig.phone}
          </a>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <ScrollToTopLink className="btn-primary text-base px-8 py-3.5">
              Get My Free Estimate
            </ScrollToTopLink>
            <a
              href={siteConfig.phoneHref}
              className="btn-navy text-base px-8 py-3.5"
            >
              Call Now
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
