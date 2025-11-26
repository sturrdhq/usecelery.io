import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is Celery?",
    answer:
      "Celery is a component-driven visual development platform that bridges the gap between design speed and engineering quality. Users build complex sites by dragging and dropping functional (logic-based) and UI components. The platform then compiles the visual design into clean, standard MDX and React source code, ensuring users maintain 100% code ownership and freedom from vendor lock-in.",
  },
  {
    question: "Can I bring my own React components?",
    answer:
      "Yes, you can import your own React components and use them within the Celery platform.",
  },
  {
    question: "Will I be locked into your platform?",
    answer:
      "No, Celery exports standard React code that you can host anywhere. You own your code.",
  },
  {
    question: "How much will it cost?",
    answer:
      "We are currently in early access. Pricing will be announced soon.",
  },
  {
    question: "How much will this cost?",
    answer:
      "Duplicate question for visual balance in the design.",
  },
];

export function FAQ() {
  return (
    <section className="mx-auto max-w-2xl px-4 py-20">
      <h2 className="mb-4 text-center font-serif text-4xl text-gray-900 md:text-5xl">
        Frequently asked <br /> questions
      </h2>
      <p className="mb-12 text-center text-muted-foreground">
        Everything you need to know about the Soonix template. Find <br className="hidden md:block" />
        answers to the most common questions below.
      </p>

      <Accordion type="single" collapsible className="w-full space-y-4">
        {faqs.map((faq, index) => (
          <AccordionItem
            key={index}
            value={`item-${index}`}
            className="rounded-2xl bg-[#F3F4F6] px-6 border-none"
          >
            <AccordionTrigger className="text-lg font-medium text-gray-900 hover:no-underline">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-base text-gray-600">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
