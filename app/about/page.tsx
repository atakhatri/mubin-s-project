"use client";
import { type Metadata } from "next";
import Image from "next/image";
import { FaBullseye, FaHandshake, FaLightbulb, FaUsers } from "react-icons/fa";
import Bubbles from "../../components/content/bubbles";
import { FaRocket } from "react-icons/fa";
import TargetCursor from "../../components/ui/targetcursor";
import { useState } from "react";
import AnimateOnScroll from "../../components/providers/AnimateOnScroll";

const teamMembers = [
  {
    name: "Mubin Ansari",
    role: "Founder & CEO",
    image: "https://picsum.photos/seed/mubin/400/400",
    bio: "Mubin is a visionary leader with over 15 years of experience in the tech industry, passionate about creating innovative solutions that drive business success.",
  },
  {
    name: "Jane Doe",
    role: "Chief Technology Officer",
    image: "https://picsum.photos/seed/jane/400/400",
    bio: "Jane leads our technology strategy, ensuring we leverage the most advanced and secure technologies to deliver robust solutions for our clients.",
  },
  {
    name: "John Smith",
    role: "Head of Operations",
    image: "https://picsum.photos/seed/john/400/400",
    bio: "John oversees our daily operations, ensuring projects are delivered on time and within budget, with a focus on client satisfaction.",
  },
];

const values = [
  {
    icon: FaLightbulb,
    title: "Innovation",
    description:
      "We constantly seek out and embrace new technologies and ideas to stay ahead of the curve.",
  },
  {
    icon: FaHandshake,
    title: "Partnership",
    description:
      "We believe in building strong, collaborative relationships with our clients to achieve shared success.",
  },
  {
    icon: FaUsers,
    title: "Integrity",
    description:
      "We operate with transparency and honesty, earning the trust of our clients and partners.",
  },
  {
    icon: FaBullseye,
    title: "Vision",
    description:
      "We are committed to a forward-thinking approach that anticipates future challenges and opportunities.",
  },
];

const missionItems = [
  {
    icon: FaBullseye,
    title: "Our Mission",
    description:
      "To provide innovative, reliable, and scalable technology solutions that help our clients achieve their business goals and stay ahead in a competitive digital landscape.",
    image: "/mission.svg",
  },
  {
    icon: FaHandshake,
    title: "Our Vision",
    description:
      "To be a global leader in technology services, recognized for our commitment to excellence, innovation, and customer success.",
    image: "/vision.svg",
  },
  {
    icon: FaUsers,
    title: "Our People",
    description:
      "Our team is our greatest asset. We foster a culture of collaboration, continuous learning, and mutual respect to empower our people to deliver their best work.",
    image: "/people.svg",
  },
];

const timelineEvents = [
  {
    year: "2015",
    title: "The Genesis",
    description:
      "TechSolutions was founded with a mission to provide cutting-edge IT solutions for small and medium-sized businesses.",
  },
  {
    year: "2017",
    title: "First Major Project",
    description:
      "Landed our first enterprise-level client, successfully overhauling their entire digital infrastructure.",
  },
  {
    year: "2019",
    title: "Expanding Horizons",
    description:
      "Opened our second office and expanded our service offerings to include cloud computing and cybersecurity.",
  },
  {
    year: "2023",
    title: "Going Global",
    description:
      "Established a global presence, serving clients across three continents and continuing to grow our team.",
  },
];

export default function AboutPage() {
  const [activeMissionIndex, setActiveMissionIndex] = useState(0);
  const [flippedTeamMember, setFlippedTeamMember] = useState<string | null>(
    null
  );

  return (
    <div className="bg-background">
      <TargetCursor />
      {/* Hero Section */}
      <Bubbles />
      <AnimateOnScroll animationClass="animate-fade-in-up">
        <div className="container mx-auto px-4 text-center">
          {/* <h1 className="text-4xl md:text-6xl font-bold text-primary mb-4 animate-fade-in-up">
            We Are TechSolutions
          </h1> */}
          <h1 className="text-4xl md:text-6xl font-bold mt-5 mb-4 animate-fade-in-up bg-gradient-to-tl from-teal-700 via-green-200 to-teal-300 bg-clip-text text-transparent">
            We Are TechSolutions
          </h1>
          <p className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto animate-fade-in-up animation-delay-200">
            A passionate team of innovators, problem-solvers, and technology
            enthusiasts dedicated to empowering businesses through digital
            transformation.
          </p>
        </div>
      </AnimateOnScroll>

      {/* Mission and Vision Section */}
      <section className="py-16 sm:py-20 lg:py-24">
        <AnimateOnScroll animationClass="animate-fade-in-up">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-center">
            <div className="relative h-96 animate-fade-in animation-delay-600">
              {missionItems.map((item, index) => (
                <Image
                  key={item.title}
                  src={item.image}
                  alt={item.title}
                  width={500}
                  height={400}
                  className={`absolute inset-0 w-full h-full object-contain transition-all duration-500 ease-in-out ${
                    activeMissionIndex === index
                      ? "opacity-100 scale-100"
                      : "opacity-0 scale-95"
                  }`}
                  priority={index === 0}
                />
              ))}
            </div>
            <div className="space-y-4">
              {missionItems.map((item, index) => (
                <div
                  key={item.title}
                  className={`cursor-target p-6 rounded-lg cursor-pointer transition-all duration-300 border-2 ${
                    activeMissionIndex === index
                      ? "bg-background border-primary shadow-lg"
                      : "border-transparent hover:bg-background/50"
                  }`}
                  onClick={() => setActiveMissionIndex(index)}
                  onMouseEnter={() => setActiveMissionIndex(index)}
                >
                  <div className="flex items-center gap-4">
                    <item.icon
                      className={`w-8 h-8 transition-colors ${
                        activeMissionIndex === index
                          ? "text-primary"
                          : "text-text-secondary"
                      }`}
                    />
                    <h3 className="font-semibold text-xl text-text-primary">
                      {item.title}
                    </h3>
                  </div>
                  {activeMissionIndex === index && (
                    <p className="text-text-secondary mt-3 pl-12 animate-fade-in-up">
                      {item.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </AnimateOnScroll>
      </section>

      {/* Company Timeline Section */}
      <section className="hidden md:block py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-4">
          <AnimateOnScroll animationClass="animate-fade-in-up">
            <h2 className="text-3xl font-bold text-center text-text-primary mb-16">
              Our Journey Through Time
            </h2>
          </AnimateOnScroll>
          <div className="relative">
            {/* The vertical line */}
            <div className="absolute left-1/2 top-0 -translate-x-1/2 h-full w-0.5 bg-border-color"></div>

            {timelineEvents.map((event, index) => (
              <AnimateOnScroll
                key={index}
                animationClass="animate-fade-in-up"
                className="mb-12"
              >
                <div
                  className={`flex items-center w-full ${
                    index % 2 === 0 ? "flex-row-reverse" : ""
                  }`}
                >
                  <div className="w-1/2 px-8"></div>
                  <div
                    className={`w-1/2 px-8 ${
                      index % 2 === 0 ? "text-left" : "text-right"
                    }`}
                  >
                    <div className="relative bg-glass p-6 rounded-lg border border-border-color shadow-lg timeline-item-content right">
                      <div className="text-primary font-bold text-xl mb-2">
                        {event.year}
                      </div>
                      <h3 className="text-xl font-semibold mb-2">
                        {event.title}
                      </h3>
                      <p className="text-text-secondary">{event.description}</p>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-background-secondary bg-dot-pattern">
        <div className="container mx-auto px-4">
          <AnimateOnScroll animationClass="animate-fade-in-up">
            <h2 className="text-3xl font-bold text-center text-text-primary mb-12">
              Our Core Values
            </h2>
          </AnimateOnScroll>

          <AnimateOnScroll animationClass="animate-fade-in-up">
            <div className="group grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              {values.map((value) => (
                <div
                  key={value.title}
                  className="cursor-target bg-glass p-8 rounded-xl border border-border-color shadow-lg transition-all duration-300 group-hover:opacity-60 hover:!opacity-100 hover:scale-105 hover:border-primary"
                >
                  <value.icon className="text-primary h-12 w-12 mx-auto mb-6" />
                  <h3 className="text-2xl font-semibold text-text-primary mb-2">
                    {value.title}
                  </h3>
                  <p className="text-text-secondary">{value.description}</p>
                </div>
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Meet the Team Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-t from-teal-900/50 to-background-secondary">
        <div className="container mx-auto px-4">
          <AnimateOnScroll animationClass="animate-fade-in-up">
            <h2 className="text-3xl font-bold text-center text-text-primary mb-12">
              Meet Our Leadership
            </h2>
          </AnimateOnScroll>
          <AnimateOnScroll animationClass="animate-fade-in-up">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {teamMembers.map((member, i) => (
                <div
                  key={member.name}
                  className="cursor-target group h-[380px] sm:h-[420px] [perspective:1000px]"
                  onClick={() =>
                    setFlippedTeamMember(
                      flippedTeamMember === member.name ? null : member.name
                    )
                  }
                >
                  <div
                    className={`relative h-full w-full rounded-xl shadow-xl transition-all duration-500 preserve-3d ${
                      flippedTeamMember === member.name
                        ? "[transform:rotateY(180deg)]"
                        : ""
                    } group-hover:[transform:rotateY(180deg)]`}
                  >
                    {/* Front Face */}
                    <div className="absolute inset-0 backface-hidden">
                      <div className="h-full w-full text-center bg-glass p-8 rounded-xl border border-border-color shadow-lg flex flex-col items-center justify-center">
                        <Image
                          src={member.image}
                          alt={member.name}
                          width={150}
                          height={150}
                          className="rounded-full mx-auto mb-4 border-4 border-primary"
                        />
                        <h3 className="text-2xl font-bold text-text-primary">
                          {member.name}
                        </h3>
                        <p className="text-primary font-semibold">
                          {member.role}
                        </p>
                      </div>
                    </div>
                    {/* Back Face */}
                    <div className="absolute inset-0 backface-hidden [transform:rotateY(180deg)]">
                      <div className="h-full w-full text-center bg-glass p-8 rounded-xl border border-primary shadow-lg flex flex-col items-center justify-center">
                        <h3 className="text-2xl font-bold text-text-primary">
                          {member.name}
                        </h3>
                        <p className="text-primary font-semibold mb-4">
                          {member.role}
                        </p>
                        <p className="text-text-secondary text-sm">
                          {member.bio}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </div>
  );
}
