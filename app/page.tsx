export default function HomePage() {
  return (
    <main className="px-8 py-16 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">
        A simple way for students to earn.
        <br />
        A smart way for companies to hire.
      </h1>

      <p className="text-gray-600 text-lg mb-8">
        Funngro connects students with real companies. Students learn practical
        skills and earn money. Companies get motivated young talent at an
        affordable cost.
      </p>

      <div className="space-x-4">
        <a
          href="/for-teens"
          className="px-6 py-3 bg-black text-white rounded"
        >
          Start as a Student
        </a>

        <a
          href="/for-companies"
          className="px-6 py-3 border rounded"
        >
          Hire Students
        </a>
      </div>
    </main>
  );
}
