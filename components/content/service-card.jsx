import Link from "next/link";
import Bubbles from "./bubbles";

export default function ServiceCard({ title, description, href }) {
  return (
    <>
      <Link
        href={href}
        className="glow-on-hover block bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-primary transition-all"
      >
        <Bubbles />
        <h3 className="text-xl font-bold mb-2 text-primary">{title}</h3>
        <p className="text-gray-300">{description}</p>
      </Link>
    </>
  );
}
