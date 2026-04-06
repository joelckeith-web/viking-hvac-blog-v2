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
  ThermometerSun,
  Wrench,
  CheckCircle,
  BadgeCheck,
  MapPin,
} from 'lucide-react';
import { siteConfig } from '@/lib/config';
import { LandingForm } from '@/components/landing/LandingForm';
import { HCPScheduler } from '@/components/landing/HCPScheduler';
import { FAQAccordion } from '@/components/sections/FAQAccordion';
import { ScrollToTopLink } from '@/components/landing/ScrollToTopLink';

export const metadata: Metadata = {
  title: 'AC Repair Phoenix | Same-Day Air Conditioning Repair',
  description:
    'Fast, reliable AC repair in Phoenix, Chandler, Gilbert & Mesa. Licensed ROC #323699. Same-day service available. Call (480) 689-5167 for a free estimate.',
};

/* ------------------------------------------------------------------ */
/*  DATA                                                               */
/* ------------------------------------------------------------------ */

const trustStats = [
  { icon: Shield, value: `ROC #${siteConfig.rocLicense}`, label: 'Licensed & Insured' },
  { icon: Award, value: 'Since 2016', label: 'Family-Owned' },
  { icon: Star, value: `${siteConfig.averageRating}-Star`, label: `${siteConfig.reviewCount}+ Reviews` },
  { icon: Clock, value: 'Same-Day', label: 'Emergency Service' },
];

const benefits = [
  {
    icon: Zap,
    title: 'Same-Day AC Repair',
    description:
      'When your AC stops working in the Arizona heat, you need help fast. We offer same-day and next-day repair service across the Phoenix Metro Valley.',
  },
  {
    icon: ThermometerSun,
    title: 'All Brands & Systems',
    description:
      'From Trane and Carrier to Lennox and Goodman — our technicians are trained on every major AC brand and system type, including heat pumps and mini-splits.',
  },
  {
    icon: Wrench,
    title: 'Honest Diagnostics',
    description:
      'We diagnose the actual problem and explain your options clearly — no upselling, no pressure. You decide what makes sense for your home and budget.',
  },
  {
    icon: BadgeCheck,
    title: 'Licensed & Insured',
    description:
      'Fully licensed (ROC #323699), bonded, and insured. Every repair is performed to code with manufacturer-grade parts and a workmanship guarantee.',
  },
  {
    icon: Shield,
    title: 'Upfront Pricing',
    description:
      'You get a clear price before any work begins. No hidden fees, no surprise charges. The price we quote is the price you pay.',
  },
  {
    icon: Clock,
    title: '24/7 Emergency Service',
    description:
      'AC emergencies don\'t wait for business hours — and neither do we. Call any time for emergency cooling repair, day or night.',
  },
];

const commonProblems = [
  'AC running but not cooling the house',
  'Air conditioner blowing warm or hot air',
  'AC unit making unusual noises (grinding, squealing, clicking)',
  'System cycling on and off repeatedly (short cycling)',
  'Frozen evaporator coil or ice on the AC unit',
  'Thermostat not responding or showing incorrect readings',
  'Water leaking around the indoor unit',
  'Higher-than-normal electric bills',
  'Weak airflow from vents',
  'AC won\'t turn on at all',
];

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
    title: 'Call or Request Service',
    description:
      'Call us or fill out the form above. We\'ll ask a few questions about your AC issue and schedule a technician — often the same day.',
  },
  {
    step: '2',
    title: 'Diagnosis & Estimate',
    description:
      'Our licensed tech arrives on time, diagnoses the problem, and gives you an upfront price. No work starts until you approve.',
  },
  {
    step: '3',
    title: 'Fast, Reliable Repair',
    description:
      'We fix it right the first time with quality parts. Your home is cool again, backed by our repair guarantee.',
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
    question: 'How quickly can you get to my home for an AC repair?',
    answer:
      'In most cases, we offer same-day service for AC repairs. If you call in the morning, we can typically have a technician at your home by the afternoon. For emergencies, we prioritize getting to you as fast as possible.',
  },
  {
    question: 'How much does AC repair cost in the Phoenix area?',
    answer:
      'AC repair costs vary depending on the problem. Common fixes like a capacitor replacement or refrigerant recharge are significantly less than compressor or coil replacements. We provide a firm, upfront estimate after diagnosis — before any work begins — so there are no surprises.',
  },
  {
    question: 'My AC is running but not cooling. What could be wrong?',
    answer:
      'The most common causes are low refrigerant (from a leak), a dirty or frozen evaporator coil, a failing compressor, or a malfunctioning thermostat. Our tech will diagnose the exact issue and explain your options.',
  },
  {
    question: 'Should I repair or replace my AC unit?',
    answer:
      'Generally, if your system is under 10 years old and the repair cost is less than half the cost of a new unit, repair makes sense. If your AC is 15+ years old, uses R-22 refrigerant, or needs a major component like a compressor, replacement may be the better investment. We will give you honest advice either way.',
  },
  {
    question: 'Do you work on all AC brands?',
    answer:
      'Yes. Our technicians are trained and equipped to repair all major brands including Trane, Carrier, Lennox, Goodman, Rheem, Ruud, Bryant, Amana, Daikin, and more. We also service heat pumps and ductless mini-split systems.',
  },
  {
    question: 'What areas do you serve?',
    answer:
      'We serve the entire Phoenix Metro Valley including Chandler, Gilbert, Mesa, Phoenix, Scottsdale, Tempe, Queen Creek, Apache Junction, and Ahwatukee. If you are nearby but not listed, give us a call — we likely cover your area.',
  },
  {
    question: 'Do you offer financing for AC repairs?',
    answer:
      'We can discuss payment options for larger repairs. Our goal is to make sure a broken AC does not turn into a financial emergency. Ask about available options when your technician provides your estimate.',
  },
  {
    question: 'Is your work guaranteed?',
    answer:
      'Yes. All repairs are backed by our workmanship guarantee. We use manufacturer-grade parts and stand behind every repair we perform. If something is not right, we make it right.',
  },
];

/* ------------------------------------------------------------------ */
/*  PAGE COMPONENT                                                     */
/* ------------------------------------------------------------------ */

export default function ACRepairLP() {
  return (
    <>
      {/* ==================== HERO ==================== */}
      <section className="relative bg-viking-navy text-white overflow-hidden min-h-[600px] flex items-center">
        <Image
          src="/images/viking-hero-bg.jpg"
          alt="Viking HVAC technician working on air conditioning"
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
                Fast AC Repair &bull; Phoenix Metro Valley
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-extrabold leading-tight mb-4">
                AC Broken?{' '}
                <span className="text-viking-red">Get Same-Day Repair.</span>
              </h1>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Don&apos;t sweat it. Viking HVAC provides fast, honest air conditioning repair
                across Chandler, Gilbert, Mesa, Phoenix, and the entire East Valley.
                Licensed. Insured. Family-owned since 2016.
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
                serviceLabel="AC Repair"
                messagePlaceholder="Describe your AC issue (e.g., not cooling, making noise, won't turn on)"
                leadSource="lp-ac-repair"
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
              Why Phoenix Homeowners Choose Viking for AC Repair
            </h2>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              When your air conditioning breaks down in the Arizona heat, you need a team
              you can trust to show up fast and fix it right.
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

      {/* ==================== COMMON AC PROBLEMS ==================== */}
      <section className="section-padding bg-accent">
        <div className="container-narrow">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-dark mb-4">
                Common AC Problems We Fix
              </h2>
              <p className="text-muted mb-8">
                If any of these sound familiar, our licensed technicians can diagnose and
                repair the issue — usually the same day you call.
              </p>
              <ul className="space-y-3">
                {commonProblems.map((problem) => (
                  <li key={problem} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-viking-navy shrink-0 mt-0.5" />
                    <span className="text-dark">{problem}</span>
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

            {/* Right side — emergency callout box */}
            <div className="bg-viking-navy rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-extrabold text-white mb-4">
                AC Emergency?
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Arizona summers are no joke. When your air conditioning fails,
                every hour without cooling puts your family&apos;s comfort and health at
                risk. We treat every repair call with urgency — because we live here too.
              </p>
              <a
                href={siteConfig.phoneHref}
                className="btn-primary text-lg w-full justify-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now: {siteConfig.phone}
              </a>
              <p className="text-center text-white/60 text-sm mt-3">
                Available 24/7 for emergency AC service
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== DEEP CONTENT (image left, text right) ==================== */}
      <section className="section-padding bg-white">
        <div className="container-narrow">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3]">
              <Image
                src="/images/viking-tech-march.jpg"
                alt="Viking HVAC technician performing AC repair"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="text-right">
              <h2 className="text-3xl md:text-4xl font-extrabold text-dark mb-6">
                AC Repair in Phoenix: What Homeowners Need to Know
              </h2>
              <div className="text-muted space-y-4 leading-relaxed">
                <p>
                  Phoenix is one of the most demanding environments for air conditioning
                  systems in the country. With summer temperatures routinely exceeding 110
                  degrees, your AC runs harder and longer than systems in most other climates.
                  That kind of sustained load accelerates wear on every component.
                </p>
                <p>
                  The most common AC failures we see in the Valley are refrigerant leaks,
                  failed capacitors, clogged condensate drains, and worn-out compressors.
                  Many of these issues are straightforward repairs when caught early, but
                  they can cascade into expensive problems if ignored.
                </p>
                <p>
                  That is why we recommend addressing AC problems as soon as you notice them.
                  Strange noises, weak airflow, warm air from the vents, or higher-than-normal
                  electric bills are all signs that something needs attention. The sooner we
                  diagnose it, the less it typically costs to fix.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== SERVICE AREAS ==================== */}
      <section className="section-padding bg-accent">
        <div className="container-narrow">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-dark mb-4">
              Serving the Phoenix Metro Valley
            </h2>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              Fast AC repair service across the East Valley and greater Phoenix area.
              Most calls receive same-day or next-day service.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {Object.values(serviceAreas).map((area) => (
              <div key={area.label} className="bg-white rounded-xl p-6 shadow-sm">
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
          src="/images/viking-van.jpg"
          alt="Viking HVAC service van"
          fill
          className="object-cover"
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
              From your first call to a cool home — our process is fast, transparent,
              and built around getting your AC running again.
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
      <HCPScheduler attribution="lp-ac-repair" />

      {/* ==================== FAQ ==================== */}
      <FAQAccordion faqs={faqs} title="AC Repair FAQs" />

      {/* ==================== FINAL CTA (white background) ==================== */}
      <section className="section-padding bg-white">
        <div className="container-narrow text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-dark mb-4">
            Ready to Get Your AC Fixed?
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto mb-6">
            Call now for fast, honest AC repair. Same-day service available across the
            Phoenix Metro Valley. No hidden fees, no pressure — just reliable cooling.
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
