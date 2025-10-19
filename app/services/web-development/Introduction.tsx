"use client";

import Image from "next/image";

export default function Introduction() {
  return (
    <section className="py-16 sm:py-20">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        <div className="cursor-target">
          <div className="mb-6">
            <div className="overflow-hidden">
              <h2 className="text-3xl font-bold animate-slide-in-up">
                From Concept to Reality
              </h2>
            </div>
          </div>
          <div className="overflow-hidden">
            <p className="text-lg text-text-secondary animate-slide-in-up animation-delay-200">
              At TechSolutions, we believe a website is more than just code.
              It's the digital face of your brand and a powerful tool for
              growth. Our team of expert developers and designers work
              collaboratively to build web experiences that are not only
              visually stunning but also fast, secure, and user-friendly.
            </p>
          </div>
        </div>
        <div className="cursor-target relative aspect-video rounded-xl overflow-hidden shadow-lg animate-fade-in-up animation-delay-200">
          <Image
            src="https://picsum.photos/seed/webdev/1200/800"
            alt="Web Development Process"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
