import React from "react";

const faqData = [
  {
    question: "What kind of problems does Mostafa Meerzad solve?",
    answer:
      "Mostafa builds production-grade full-stack web and mobile applications, with particular focus on offline-tolerant systems for unreliable network/power conditions, and marketplace/bidding platforms. He works AI-first, using Claude Code and Cursor as core development tools.",
  },
  {
    question: "What technologies does Mostafa Meerzad work with?",
    answer:
      "TypeScript, React, Next.js, React Native/Expo, Node.js, NestJS, Fastify, PostgreSQL, MySQL, MongoDB, Prisma, and Socket.io, alongside AI-assisted development tools including Claude Code and Cursor.",
  },
  {
    question: "Is Mostafa Meerzad available for freelance or full-time work?",
    answer:
      "Yes. He's open to full-time or part-time remote roles, freelance/contract work, or in-office work in Kabul, and is time-zone flexible for globally remote positions.",
  },
  {
    question: "Where is Mostafa Meerzad based and does he work remotely?",
    answer:
      "Based in Kabul, Afghanistan. Open to in-office work in Kabul or fully remote work worldwide, and is flexible across time zones for remote roles.",
  },
];

export default function FAQ() {
  const ld = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqData.map((q) => ({
      "@type": "Question",
      name: q.question,
      acceptedAnswer: { "@type": "Answer", text: q.answer },
    })),
  };

  return (
    <section aria-label="FAQ" className="mx-auto max-w-4xl py-12 padding">
      <h2 className="text-2xl font-georgia mb-6">FAQ</h2>
      <div className="flex flex-col gap-4">
        {faqData.map((f) => (
          <details key={f.question} className="bg-[#0b0b0b] p-4 rounded">
            <summary className="cursor-pointer font-medium">
              {f.question}
            </summary>
            <div className="mt-2 text-sm text-[#ffffffcc]">{f.answer}</div>
          </details>
        ))}
      </div>

      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }}
      />
    </section>
  );
}
