export const metadata = {
  title: "Earn Money Online for Students | Funngro",
  description:
    "Funngro helps students earn money online by working on real projects from trusted companies. Safe, simple, and skill-based.",
};

export default function ForTeensPage() {
  return (
    <main className="px-8 py-16 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">
        Earn money online as a student
      </h1>

      <p className="text-gray-600 text-lg mb-10">
        Funngro is a platform where students work on real projects from genuine
        companies. You don’t need years of experience. You learn by doing,
        earn your own money, and build confidence along the way.
      </p>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">
          How Funngro works for students
        </h2>

        <ul className="space-y-3 text-gray-700">
          <li>1. Create a free student profile</li>
          <li>2. Apply to projects that match your skills</li>
          <li>3. Complete the work and get paid securely</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">
          What kind of work can students do?
        </h2>

        <p className="text-gray-700 mb-4">
          Most projects are simple, practical, and skill-based. You don’t need
          advanced degrees to get started.
        </p>

        <ul className="grid grid-cols-2 gap-3 text-gray-700">
          <li>• Social media management</li>
          <li>• Content writing</li>
          <li>• Graphic design</li>
          <li>• Video editing</li>
          <li>• Research and data tasks</li>
          <li>• App or website testing</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">
          Is Funngro safe for students?
        </h2>

        <p className="text-gray-700 leading-relaxed">
          Yes. Safety is taken seriously. Companies are verified, payments are
          handled securely, and projects are monitored. Students can focus on
          learning and earning without unnecessary risk.
        </p>
      </section>

      <section className="bg-gray-50 p-8 rounded">
        <h2 className="text-2xl font-semibold mb-4">
          Start your journey as a student
        </h2>

        <p className="text-gray-600 mb-6">
          Many students use Funngro as their first step into the professional
          world. You can start small and grow at your own pace.
        </p>

        <a
          href="/"
          className="inline-block px-6 py-3 bg-black text-white rounded"
        >
          Create Free Profile
        </a>
      </section>
    </main>
  );
}
