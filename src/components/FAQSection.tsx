'use client';

import { useState } from 'react';
import type { FAQ } from '@/lib/blog';

interface FAQSectionProps {
  faqs: FAQ[];
}

export default function FAQSection({ faqs }: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  if (!faqs || faqs.length === 0) return null;

  return (
    <section className="my-12 border-t-2 border-viking-navy pt-8">
      <h2 className="text-2xl font-bold text-viking-navy mb-6">
        Frequently Asked Questions
      </h2>
      <div className="space-y-3">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-lg overflow-hidden"
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full flex justify-between items-center p-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors"
              aria-expanded={openIndex === index}
            >
              <span className="font-semibold text-viking-navy pr-4">
                {faq.q}
              </span>
              <span className="text-viking-red text-xl flex-shrink-0">
                {openIndex === index ? '−' : '+'}
              </span>
            </button>
            {openIndex === index && (
              <div className="p-4 bg-white text-gray-700 leading-relaxed">
                {faq.a}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
