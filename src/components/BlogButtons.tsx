import Link from "next/link";

export default function BlogButtons() {
  return (
    <div className="flex justify-center bg-gray-800 mb-4 py-4 gap-8 font-bold text-white">
      <Link href="/blogs/categories/team">team blogs</Link>
      <Link href="/blogs/categories/player">player blogs</Link>
    </div>
  );
}
