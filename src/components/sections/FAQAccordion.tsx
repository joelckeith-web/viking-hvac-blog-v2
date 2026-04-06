'use client';

import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

interface FAQ {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  faqs: FAQ[];
  title?: string;
}

export function FAQAccordion({ faqs, title = 'Frequently Asked Questions' }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="section-padding bg-accent">
      <div className="container-narrow">
        <div className="max-w-3xl mx-auto">
          {/* Gradient top bar */}
          <div className="h-1 bg-gradient-to-r from-viking-red to-viking-navy-light rounded-t-lg" />

          <div className="bg-white rounded-b-2xl shadow-md overflow-hidden">
            <div className="px-6 py-8 sm:px-8">
              <h2 className="text-3xl md:text-4xl font-extrabold text-dark mb-8 text-center">
                {title}
              </h2>

              <div className="divide-y divide-gray-100">
                {faqs.map((faq, index) => {
                  const isOpen = openIndex === index;
                  return (
                    <div key={index}>
                      <button
                        type="button"
                        onClick={() => setOpenIndex(isOpen ? null : index)}
                        className="w-full flex items-start justify-between gap-4 py-5 text-left group"
                      >
                        <span className="font-bold text-dark group-hover:text-viking-navy-light transition-colors text-base">
                          {faq.question}
                        </span>
                        <span className="shrink-0 mt-0.5">
                          {isOpen ? (
                            <Minus className="w-5 h-5 text-viking-red" />
                          ) : (
                            <Plus className="w-5 h-5 text-muted" />
                          )}
                        </span>
                      </button>
                      <div
                        className={`overflow-hidden transition-all duration-300 ${
                          isOpen ? 'max-h-96 pb-5' : 'max-h-0'
                        }`}
                      >
                        <div className={`pl-0 border-l-2 ${isOpen ? 'border-viking-red' : 'border-transparent'} transition-colors`}>
                          <p className="text-muted text-sm leading-relaxed pl-4">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
