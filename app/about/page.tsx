import { type Metadata } from "next";
import Image from "next/image";
import { FaBullseye, FaHandshake, FaLightbulb, FaUsers } from "react-icons/fa";
import Bubbles from "../../components/content/bubbles";

export const metadata: Metadata = {
  title: "About Us | TechSolutions",
  description:
    "Learn about the mission, vision, and team behind TechSolutions.",
};

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
];

export default function AboutPage() {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-teal-900 to-background-secondary py-20 md:py-28 overflow-hidden">
        <Bubbles />
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-primary mb-4 animate-fade-in-up">
            We Are TechSolutions
          </h1>
          <p className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto animate-fade-in-up animation-delay-200">
            A passionate team of innovators, problem-solvers, and technology
            enthusiasts dedicated to empowering businesses through digital
            transformation.
          </p>
        </div>
      </section>

      {/* Mission and Vision Section */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg">
            <Image
              src="https://picsum.photos/seed/mission/1200/800"
              alt="Our Mission"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-text-primary mb-4 flex items-center gap-3">
              <FaBullseye className="text-primary" /> Our Mission
            </h2>
            <p className="text-text-secondary text-lg">
              To provide innovative, reliable, and scalable technology solutions
              that help our clients achieve their business goals and stay ahead
              in a competitive digital landscape.
            </p>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-background-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-text-primary mb-12">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-glass p-8 rounded-xl border border-border-color shadow-lg transition-all duration-300 hover:border-primary hover:scale-105 glow-on-hover"
              >
                <value.icon className="text-primary h-12 w-12 mx-auto mb-6" />
                <h3 className="text-2xl font-semibold text-text-primary mb-2">
                  {value.title}
                </h3>
                <p className="text-text-secondary">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the Team Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-t from-teal-900/50 to-background-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-text-primary mb-12">
            Meet Our Leadership
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, i) => (
              <div
                key={member.name}
                className="text-center bg-glass p-8 rounded-xl border border-border-color shadow-lg transition-all duration-300 hover:border-primary hover:scale-105 glow-on-hover"
              >
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
                <p className="text-primary font-semibold mb-2">{member.role}</p>
                <p className="text-text-secondary">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
