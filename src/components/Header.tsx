export default function Header() {
  return (
    <header className="p-8 flex justify-between border-b-2 border-gray-200">
      <h1 className="font-bold">FootieHub</h1>
      <nav>
        <ul className="flex">
          <li className="ml-8 cursor-pointer">Blogs</li>
          <li className="ml-8 cursor-pointer">Newsletters</li>
          <li className="ml-8 cursor-pointer">Videos</li>
          <li className="ml-8 cursor-pointer">Podcasts</li>
          <li className="ml-8 cursor-pointer">Resources</li>
        </ul>
      </nav>
    </header>
  );
}
