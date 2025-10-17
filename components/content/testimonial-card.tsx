import type { FC } from 'react';

interface TestimonialProps {
  text: string;
  author: string;
  company: string;
}

const Testimonial: FC<TestimonialProps> = ({ text, author, company }) => {
  return (
    <div className="bg-background-secondary p-6 rounded-lg border border-border-color">
      <p className="text-text-secondary italic mb-4">"{text}"</p>
      <p className="font-semibold text-primary">{author}, <span className="font-normal text-text-secondary">{company}</span></p>
    </div>
  );
};

export default Testimonial;