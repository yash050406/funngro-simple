export const metadata = {
  title: "Trust & Safety",
  description:
    "Learn how Funngro ensures safety, transparency, and trust for students, parents, and companies.",
};

export default function TrustPage() {
  return (
    <main className="px-8 py-16 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">
        Trust, safety, and transparency
      </h1>

      <p className="text-gray-600 text-lg mb-10">
        Funngro is built with trust at its core. We understand that students,
        parents, and companies all need clarity, safety, and accountability.
      </p>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">
          Safety for students
        </h2>
        <p className="text-gray-700 leading-relaxed">
          All companies on Funngro are verified before posting projects.
          Payments are handled securely, and projects are monitored to ensure
          students have a safe and supportive experience.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">
          Peace of mind for parents
        </h2>
        <p className="text-gray-700 leading-relaxed">
          Funngro encourages responsible work opportunities that help students
          learn real-world skills. Projects are designed to be flexible and
          balanced alongside education.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">
          Transparency for companies
        </h2>
        <p className="text-gray-700 leading-relaxed">
          Companies get clear visibility into student profiles, project
          progress, and outcomes. This ensures trust on both sides and
          professional results.
        </p>
      </section>

      <section className="bg-gray-50 p-8 rounded">
        <h2 className="text-2xl font-semibold mb-4">
          Building trust takes time
        </h2>
        <p className="text-gray-600">
          Funngro is committed to long-term relationships built on honesty,
          safety, and meaningful outcomes for everyone involved.
        </p>
      </section>
    </main>
  );
}
