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
  Droplets,
  Wrench,
  CheckCircle,
  BadgeCheck,
  MapPin,
  Wind,
  ThermometerSun,
} from 'lucide-react';
import { siteConfig } from '@/lib/config';
import { LandingForm } from '@/components/landing/LandingForm';
import { HCPScheduler } from '@/components/landing/HCPScheduler';
import { FAQAccordion } from '@/components/sections/FAQAccordion';
import { ScrollToTopLink } from '@/components/landing/ScrollToTopLink';

export const metadata: Metadata = {
  title: 'Swamp Cooler Repair & Service Phoenix | Evaporative Cooling',
  description:
    'Expert swamp cooler repair, maintenance, and installation in Phoenix, Chandler, Gilbert & Mesa. Licensed ROC #323699. Fast service. Call (480) 689-5167.',
};

/* ------------------------------------------------------------------ */
/*  DATA                                                               */
/* ------------------------------------------------------------------ */

const trustStats = [
  { icon: Shield, value: `ROC #${siteConfig.rocLicense}`, label: 'Licensed & Insured' },
  { icon: Award, value: 'Since 2016', label: 'Family-Owned' },
  { icon: Star, value: `${siteConfig.averageRating}-Star`, label: `${siteConfig.reviewCount}+ Reviews` },
  { icon: Clock, value: 'Fast', label: 'Same-Week Service' },
];

const benefits = [
  {
    icon: Droplets,
    title: 'Swamp Cooler Experts',
    description:
      'Evaporative coolers require a different skill set than traditional AC. Our technicians understand pad systems, water distribution, pumps, motors, and the unique demands of desert cooling.',
  },
  {
    icon: Wind,
    title: 'Repair, Service & Install',
    description:
      'Whether your swamp cooler needs a quick fix, seasonal startup, or a full replacement — we handle it all. One call, one team, one solution.',
  },
  {
    icon: Wrench,
    title: 'All Brands & Types',
    description:
      'Roof-mount, window, side-draft, down-draft — we service and repair all evaporative cooler types from every major manufacturer.',
  },
  {
    icon: BadgeCheck,
    title: 'Licensed & Insured',
    description:
      'Fully licensed (ROC #323699), bonded, and insured. Every repair and installation is performed to code with quality parts.',
  },
  {
    icon: ThermometerSun,
    title: 'Seasonal Startups',
    description:
      'Get your swamp cooler ready before the heat hits. Our spring startup service covers pad replacement, pump inspection, belt checks, and full system testing.',
  },
  {
    icon: Zap,
    title: 'Honest & Upfront',
    description:
      'Clear pricing before any work begins. We tell you what the problem is, what it costs, and whether repair or replacement makes more sense for your situation.',
  },
];

const commonProblems = [
  'Swamp cooler not blowing cold air',
  'Weak or reduced airflow from vents',
  'Water leaking from the unit or overflow',
  'Pump not working or not circulating water',
  'Motor making grinding or squealing noises',
  'Musty or stale smell coming from the cooler',
  'Pads are worn, clogged, or not staying wet',
  'Belt is loose, cracked, or broken',
  'Unit won\'t turn on or stops mid-cycle',
  'Cooler running but humidity is too high inside',
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
      'Call us or fill out the form above. Tell us about your swamp cooler issue and we\'ll schedule a technician to come out.',
  },
  {
    step: '2',
    title: 'Diagnosis & Estimate',
    description:
      'Our tech inspects your evaporative cooler, identifies the problem, and gives you a clear price. No work starts without your approval.',
  },
  {
    step: '3',
    title: 'Fast, Quality Repair',
    description:
      'We fix it right with quality parts. Your cooler is running efficiently again — keeping your home comfortable and your water bill in check.',
  },
];

// Real Google Business Profile reviews (4.9 stars, 358+ reviews)
const reviews = [
  {
    text: 'Viking air was rehired to replace my swamp cooler Ryan and crew got the old one off and the new one in, in a very timely way had to come back once to make an electrical repair at no extra charge and now it\'s working like a charm I will be recommending them to anyone who needs A/C work.',
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
    question: 'How much does swamp cooler repair cost?',
    answer:
      'Swamp cooler repairs vary depending on the issue. Common fixes like pad replacement, pump repair, or belt changes are relatively affordable. Motor replacements or major component failures cost more. We provide a firm, upfront estimate after diagnosis — before any work begins.',
  },
  {
    question: 'When should I start up my swamp cooler for the season?',
    answer:
      'In the Phoenix area, most homeowners start their swamp coolers in late March or early April when daytime temperatures begin hitting the 90s. We recommend scheduling a seasonal startup service before the rush to make sure pads, pumps, belts, and motors are all in working order.',
  },
  {
    question: 'Should I repair or replace my swamp cooler?',
    answer:
      'If your evaporative cooler is under 10 years old and the repair cost is reasonable, repair usually makes sense. If it is 15+ years old, has a failing motor, or needs multiple component replacements, a new unit is typically the better investment — especially with improved efficiency in modern models.',
  },
  {
    question: 'Can you convert my swamp cooler to refrigerated AC?',
    answer:
      'Yes. Many Phoenix homeowners switch from evaporative cooling to refrigerated AC for better temperature control and performance during monsoon season when humidity spikes. We can assess your home and provide options for a full system conversion.',
  },
  {
    question: 'Why does my swamp cooler smell bad?',
    answer:
      'Musty or stale odors typically come from old or moldy pads, stagnant water in the reservoir, or mineral buildup. Regular pad replacement, draining the reservoir when not in use, and seasonal cleaning usually solve the problem. Our service includes a full cleaning and pad inspection.',
  },
  {
    question: 'How often should swamp cooler pads be replaced?',
    answer:
      'In the Phoenix area, we recommend replacing evaporative cooler pads at least once per season — ideally during your spring startup. If you run your cooler heavily or have hard water, you may need to replace them mid-season as mineral buildup reduces efficiency.',
  },
  {
    question: 'Do swamp coolers work during monsoon season?',
    answer:
      'Evaporative coolers lose effectiveness when humidity rises above 30-40%. During Phoenix monsoon season (July-September), swamp coolers can struggle. Many homeowners with swamp coolers supplement with portable AC or consider converting to refrigerated air for year-round reliability.',
  },
  {
    question: 'What areas do you serve for swamp cooler service?',
    answer:
      'We serve the entire Phoenix Metro Valley including Chandler, Gilbert, Mesa, Phoenix, Scottsdale, Tempe, Queen Creek, Apache Junction, and Ahwatukee.',
  },
];

/* ------------------------------------------------------------------ */
/*  PAGE COMPONENT                                                     */
/* ------------------------------------------------------------------ */

export default function SwampCoolerLP() {
  return (
    <>
      {/* ==================== HERO ==================== */}
      <section className="relative bg-viking-navy text-white overflow-hidden min-h-[600px] flex items-center">
        <Image
          src="/images/viking-hero-bg.jpg"
          alt="Viking HVAC technician servicing evaporative cooler"
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
                Swamp Cooler Service &bull; Phoenix Metro Valley
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-extrabold leading-tight mb-4">
                Swamp Cooler Problems?{' '}
                <span className="text-viking-red">We Fix It Fast.</span>
              </h1>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Expert evaporative cooler repair, seasonal startups, and new installations
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
                serviceLabel="Swamp Cooler Service"
                messagePlaceholder="Describe your swamp cooler issue (e.g., not cooling, leaking, won't start)"
                leadSource="lp-swamp-cooler"
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
              Why Choose Viking for Swamp Cooler Service
            </h2>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              Evaporative coolers are a different animal than traditional AC. You need a team
              that knows the difference — and knows how to keep yours running right.
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

      {/* ==================== COMMON PROBLEMS ==================== */}
      <section className="section-padding bg-accent">
        <div className="container-narrow">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-dark mb-4">
                Common Swamp Cooler Problems We Fix
              </h2>
              <p className="text-muted mb-8">
                If any of these sound familiar, our licensed technicians can diagnose and
                repair your evaporative cooler — usually within a few days of your call.
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

            {/* Right side — seasonal callout */}
            <div className="bg-viking-navy rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-extrabold text-white mb-4">
                Spring Startup Season
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Don&apos;t wait until the first 100-degree day to find out your swamp
                cooler needs work. Schedule a seasonal startup now — we&apos;ll replace
                pads, check the pump and motor, inspect belts, and make sure everything
                is running before you need it most.
              </p>
              <a
                href={siteConfig.phoneHref}
                className="btn-primary text-lg w-full justify-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now: {siteConfig.phone}
              </a>
              <p className="text-center text-white/60 text-sm mt-3">
                Beat the rush — schedule your startup today
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
                src="/images/viking-van.jpg"
                alt="Viking HVAC service van"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="text-right">
              <h2 className="text-3xl md:text-4xl font-extrabold text-dark mb-6">
                Swamp Cooler Service in Phoenix: What You Should Know
              </h2>
              <div className="text-muted space-y-4 leading-relaxed">
                <p>
                  Evaporative coolers are a popular and energy-efficient cooling option across
                  the Phoenix Metro Valley — especially in the dry months before monsoon
                  season. They use a fraction of the electricity that traditional AC requires,
                  making them an attractive option for budget-conscious homeowners.
                </p>
                <p>
                  But swamp coolers need regular maintenance to run efficiently. Pads clog
                  with mineral deposits from Arizona&apos;s hard water, pumps wear out, belts
                  crack, and motors fail — especially after sitting idle all winter. A
                  seasonal startup service catches these issues before they leave you sweating.
                </p>
                <p>
                  Viking has been servicing evaporative coolers across the Valley since 2016.
                  Whether you need a quick repair, a seasonal tune-up, or a conversation about
                  whether it is time to convert to refrigerated air — we give you honest
                  answers and quality work.
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
              Swamp cooler repair and service across the East Valley and greater Phoenix area.
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
          src="/images/viking-team.jpg"
          alt="Viking HVAC service team"
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
              From your first call to a cooler home — our process is simple and transparent.
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
      <HCPScheduler attribution="lp-swamp-cooler" />

      {/* ==================== FAQ ==================== */}
      <FAQAccordion faqs={faqs} title="Swamp Cooler FAQs" />

      {/* ==================== FINAL CTA (white background) ==================== */}
      <section className="section-padding bg-white">
        <div className="container-narrow text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-dark mb-4">
            Ready to Get Your Swamp Cooler Fixed?
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto mb-6">
            Call now for fast, honest swamp cooler service. Repair, seasonal startups,
            and new installations across the Phoenix Metro Valley.
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
