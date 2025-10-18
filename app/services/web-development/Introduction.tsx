"use client";

import Image from "next/image";

export default function Introduction() {
  return (
    <section className="py-16 sm:py-20">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="mb-6">
            <h2 className="typing-heading text-3xl font-bold">
              From Concept to Reality
            </h2>
          </div>
          <div className="typing-paragraph-container">
            <p className="typing-paragraph text-lg text-text-secondary">
              At TechSolutions, we believe a website is more than just code.
              It's the digital face of your brand and a powerful tool for
              growth. Our team of expert developers and designers work
              collaboratively to build web experiences that are not only
              visually stunning but also fast, secure, and user-friendly.
            </p>
          </div>
        </div>
        <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg animate-fade-in-up animation-delay-200">
          <Image
            src="https://picsum.photos/seed/webdev/1200/800"
            alt="Web Development Process"
            fill
            className="object-cover"
          />
        </div>
      </div>

      <style jsx>{`
        .typing-heading,
        .typing-paragraph {
          font-family: monospace;
          white-space: nowrap; /* Keeps content on a single line */
          overflow: hidden;
          border-right: 0.15em solid var(--primary); /* The cursor */
          animation: blink-caret 0.75s step-end infinite;
        }

        .typing-heading {
          width: 24ch; /* Number of characters in the heading */
          animation: typing 2s steps(24, end),
            blink-caret 0.75s step-end infinite;
          animation-fill-mode: forwards;
        }

        .typing-paragraph {
          width: 0;
          white-space: normal;
          animation-fill-mode: forwards;
          animation: reveal-paragraph 2s ease forwards;
        }

        /* The typing effect */
        @keyframes typing {
          from {
            width: 0;
          }
          100% {
            width: 24ch;
          }
        }

        @keyframes reveal-paragraph {
          100% {
            width: 100%;
          }
        }

        /* The cursor blinking effect */
        @keyframes blink-caret {
          from,
          to {
            border-color: transparent;
          }
          50% {
            border-color: var(--primary);
          }
        }
      `}</style>
    </section>
  );
}
