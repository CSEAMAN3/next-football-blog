import { notFound } from "next/navigation";
import { getBlogsByCategory, getBlogs } from "@/lib/blogs";
import Link from "next/link";

type CategoryPageParam = {
  catslug: string;
};

export function generateStaticParams() {
  const blogs = getBlogs();
  return blogs.map((blog) => ({ category: blog.category }));
}

export default function CategoryPage({ params }: { params: CategoryPageParam }) {
  const blogs = getBlogsByCategory(params.catslug);
  console.log(blogs);

  if (!blogs) {
    notFound();
  }

  return (
    <div>
      {blogs.map((blog) => {
        return (
          <div key={blog.slug}>
            <Link href={`/blogs/${blog.slug}`}>
              <h3>{blog.title}</h3>
            </Link>
            <p>{blog.blurb}</p>
          </div>
        );
      })}
    </div>
  );
}
