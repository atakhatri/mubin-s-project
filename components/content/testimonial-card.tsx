import { FaQuoteLeft } from "react-icons/fa";

interface TestimonialCardProps {
  text: string;
  author: string;
  company: string;
}

export default function TestimonialCard({
  text,
  author,
  company,
}: TestimonialCardProps) {
  return (
    <div className="bg-black p-8 rounded-xl border border-border-color shadow-lg h-full flex flex-col">
      <FaQuoteLeft className="text-primary text-3xl mb-4" />
      <p className="text-text-secondary text-lg italic mb-6 flex-grow">
        "{text}"
      </p>
      <div className="mt-auto">
        <p className="font-bold text-text-primary">{author}</p>
        <p className="text-sm text-text-secondary">{company}</p>
      </div>
    </div>
  );
}
