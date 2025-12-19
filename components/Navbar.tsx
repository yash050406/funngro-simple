import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-4 border-b">
      <Link href="/" className="text-xl font-semibold">
        Funngro
      </Link>
      <Link href="/trust" className="hover:underline">
  Trust
</Link>


      <div className="space-x-6 text-sm">
        <Link href="/for-teens" className="hover:underline">
          For Teens
        </Link>
        <Link href="/for-companies" className="hover:underline">
          For Companies
        </Link>
      </div>
    </nav>
  );
}
