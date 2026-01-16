export default function ProjectCard({ title, desc, link }) {
  return (
    <div className="border border-gray-800 rounded-lg p-6 hover:border-green-500 transition">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="mt-3 text-gray-400">{desc}</p>
      <a
        href={link}
        target="_blank"
        className="inline-block mt-4 text-green-500"
      >
        View Project →
      </a>
    </div>
  );
}
