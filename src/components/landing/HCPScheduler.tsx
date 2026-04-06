'use client';

import { Phone, Calendar } from 'lucide-react';
import { siteConfig } from '@/lib/config';

interface HCPSchedulerProps {
  /** Attribution string passed to HCP booking URL (e.g., "lp-ac-repair") */
  attribution: string;
}

export function HCPScheduler({ attribution }: HCPSchedulerProps) {
  const bookingUrl = siteConfig.hcpBookingUrl;

  // When HCP booking URL is configured, show the embed
  if (bookingUrl) {
    const url = `${bookingUrl}${bookingUrl.includes('?') ? '&' : '?'}attribution=${encodeURIComponent(attribution)}`;

    return (
      <section className="section-padding bg-accent">
        <div className="container-narrow">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-extrabold text-dark mb-4">
              Book Your Appointment Online
            </h2>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              Choose a time that works for you. Our team will confirm your appointment right away.
            </p>
          </div>

          <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
            <iframe
              src={url}
              title="Book an appointment with Viking HVAC"
              className="w-full border-0"
              style={{ minHeight: '600px' }}
              allow="payment"
            />
          </div>

          <p className="text-center text-sm text-muted mt-4">
            Prefer to call?{' '}
            <a href={siteConfig.phoneHref} className="text-viking-red font-bold hover:underline">
              {siteConfig.phone}
            </a>
          </p>
        </div>
      </section>
    );
  }

  // Fallback: no HCP booking URL configured yet
  return (
    <section className="section-padding bg-accent">
      <div className="container-narrow">
        <div className="max-w-2xl mx-auto text-center">
          <div className="w-16 h-16 bg-viking-navy/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <Calendar className="w-8 h-8 text-viking-navy" />
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-dark mb-4">
            Schedule Your Service
          </h2>
          <p className="text-muted text-lg mb-8">
            Call us to schedule your appointment. We offer same-day and next-day availability for AC emergencies across the Phoenix Metro Valley.
          </p>
          <a
            href={siteConfig.phoneHref}
            className="btn-primary text-xl px-10 py-4"
          >
            <Phone className="w-6 h-6 mr-3" />
            Call {siteConfig.phone}
          </a>
          <p className="text-sm text-muted mt-4">
            Available 24/7 for emergency service
          </p>
        </div>
      </div>
    </section>
  );
}
