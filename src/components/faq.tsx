import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

type FAQItem = {
  question: string;
  answer: React.ReactNode;
};

const faqs: FAQItem[] = [
  {
    question: 'What exactly is Celery?',
    answer: (
      <div className="space-y-2">
        <p>
          Celery is a visual development platform backed by a marketplace of real React components and full-site templates.
        </p>
        <p>
          You can buy components, drag them around visually, connect logic, and export clean React/Next.js code whenever you want. It&apos;s a builder that doesn’t try to trap you.
        </p>
      </div>
    ),
  },
  {
    question: 'Who is Celery actually for?',
    answer: (
      <ul className="list-disc space-y-2 pl-5">
        <li>
          <strong>Developers who want to sell components</strong>
          {' '}
          and stop building the same thing 35 times.
        </li>
        <li>
          <strong>Designers who want real components</strong>
          {' '}
          instead of whatever hacky &quot;widgets&quot; most builders force on them.
        </li>
        <li>
          <strong>Business owners</strong>
          {' '}
          who want a polished site without paying agency prices or getting stuck in proprietary crap.
        </li>
      </ul>
    ),
  },
  {
    question: 'How is this different from Framer, Webflow, or WordPress?',
    answer: (
      <div className="space-y-4">
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong>Framer</strong>
            : Great for visuals, weak for logic + messy code export.
          </li>
          <li>
            <strong>Webflow</strong>
            : Power comes with complexity + lock-in.
          </li>
          <li>
            <strong>WordPress</strong>
            : Old ecosystem, plugin hell, PHP, security headaches.
          </li>
        </ul>
        <p>
          <strong>Celery is React-native from day one.</strong>
          {' '}
          You can always export the code and leave. No platform jail.
        </p>
      </div>
    ),
  },
  {
    question: 'Do I need to know React to use Celery?',
    answer: (
      <div className="space-y-2">
        <p>No. You can drag pre-made components and templates like LEGO.</p>
        <p>
          But if you
          <em>do</em>
          {' '}
          know React, everything is transparent—no mystery black box.
        </p>
      </div>
    ),
  },
  {
    question: 'Can I import my own components?',
    answer: (
      <p>
        Yes. And unlike most platforms, Celery doesn’t butcher your code or wrap it in nonsense. Your component’s props become visual controls automatically.
      </p>
    ),
  },
  {
    question: 'Can I export the code and self-host?',
    answer: (
      <div className="space-y-2">
        <p>Yes. That&apos;s the entire point.</p>
        <p>
          You can export a clean React/Next.js project and deploy it anywhere: Vercel, Netlify, AWS, your cousin’s Raspberry Pi—whatever.
        </p>
      </div>
    ),
  },
  {
    question: 'What can I build with Celery?',
    answer: (
      <div className="space-y-2">
        <p>Anything React-based:</p>
        <ul className="list-disc space-y-1 pl-5">
          <li>Marketing sites</li>
          <li>Landing pages</li>
          <li>Dashboards</li>
          <li>SaaS frontends</li>
          <li>E-commerce fronts</li>
          <li>Custom UI kits</li>
        </ul>
        <p>If it&apos;s React, it fits.</p>
      </div>
    ),
  },
];

export function FAQ() {
  return (
    <section className="mx-auto max-w-2xl px-4 py-20">
      <h2 className="mb-4 text-center font-serif text-4xl text-gray-900 md:text-5xl">
        Frequently asked
        {' '}
        <br />
        {' '}
        questions
      </h2>
      <p className="mb-12 text-center text-muted-foreground">
        Everything you need to know about the Soonix template. Find
        {' '}
        <br className="hidden md:block" />
        answers to the most common questions below.
      </p>

      <Accordion type="single" collapsible className="w-full space-y-4">
        {faqs.map((faq, index) => (
          <AccordionItem
            key={index}
            value={`item-${index}`}
            className="rounded-2xl bg-[#F3F4F6] px-6 border-none"
          >
            <AccordionTrigger className="text-lg font-medium text-gray-900 hover:no-underline text-left">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-base text-gray-600">
              <div className="text-base text-gray-600">{faq.answer}</div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
