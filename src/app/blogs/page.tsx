import { blogs } from "@/blogs";
import Image from "next/image";
import Arsenal from "@/../public/images/arsenal.jpg";
import { imageConfigDefault } from "next/dist/shared/lib/image-config";
import Link from "next/link";

type Blog = {
  title: string;
  description: string;
};

export default function page() {
  return (
    <div className="px-8 py-8 grid grid-cols-2 grid-rows-4 gap-4 [&>*:first-child]:row-span-4 [&>*:first-child]:bg-gray-500 [&>*:first-child]:p-8 [&>*:first-child]:text-gray-100 [&>*:first-child]:rounded-[1rem]">
      {blogs.map((blog, idx) => {
        return (
          <div key={blog.title} className="">
            {idx === 0 && <Image className="pb-4" src={Arsenal} alt="football" />}
            <Link href={`/blogs/${blog.slug}`}>
              <h2 className="font-bold mb-2 tracking-wide">{blog.title}</h2>
            </Link>
            <p className="tracking-wide">{blog.blurb}</p>
          </div>
        );
      })}
    </div>
  );
}
