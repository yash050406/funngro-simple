export const metadata = {
  title: "Hire Students for Projects",
  description:
    "Hire skilled students for social media, design, research, and more. Funngro offers flexible and affordable student hiring.",
};


export default function ForCompaniesPage() {
  return (
    <main className="px-8 py-16 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">
        Hire skilled students for your projects
      </h1>

      <p className="text-gray-600 text-lg mb-10">
        Funngro helps startups and businesses get work done by motivated
        students. You get fresh talent, faster turnaround, and flexible
        hiring—without the cost and complexity of traditional hiring.
      </p>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">
          Why companies use Funngro
        </h2>

        <ul className="space-y-3 text-gray-700">
          <li>• Affordable talent for project-based work</li>
          <li>• Quick hiring without long-term commitments</li>
          <li>• Fresh ideas and high energy from students</li>
          <li>• Verified profiles and monitored projects</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">
          What kind of work can students help with?
        </h2>

        <p className="text-gray-700 mb-4">
          Companies typically use Funngro for practical, execution-focused
          tasks that don’t require senior-level roles.
        </p>

        <ul className="grid grid-cols-2 gap-3 text-gray-700">
          <li>• Social media & content creation</li>
          <li>• Graphic design & video editing</li>
          <li>• Market research & data collection</li>
          <li>• App & website testing</li>
          <li>• Operations support</li>
          <li>• Lead research & outreach</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">
          How hiring on Funngro works
        </h2>

        <ul className="space-y-3 text-gray-700">
          <li>1. Post a project with your requirements</li>
          <li>2. Review student profiles and select candidates</li>
          <li>3. Track progress and release payment securely</li>
        </ul>
      </section>

      <section className="bg-gray-50 p-8 rounded">
        <h2 className="text-2xl font-semibold mb-4">
          Start hiring with confidence
        </h2>

        <p className="text-gray-600 mb-6">
          Whether you’re a startup, agency, or growing business, Funngro gives
          you access to young talent without long hiring cycles or overhead.
        </p>

        <a
          href="/"
          className="inline-block px-6 py-3 bg-black text-white rounded"
        >
          Post a Project
        </a>
      </section>
    </main>
  );
}
