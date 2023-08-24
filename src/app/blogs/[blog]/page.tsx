import { notFound } from "next/navigation";
import { getBlogs, getBlogBySlug } from "@/lib/blogs";
import { kv } from "@vercel/kv";

type BlogPageParam = {
  blog: string;
};

// function getBlog(blog: string) {
//   return blogs.find((theBlog) => theBlog.slug === blog);
// }

// this function will build all the params for all the blog posts when the website is deployed
export function generateStaticParams() {
  const blogs = getBlogs();
  // generateStaticParams expects you to output an array of objects, containing the [blog]
  return blogs.map((blog) => ({ slug: blog.slug }));
}

export default function BlogPage({ params }: { params: BlogPageParam }) {
  const blog = getBlogBySlug(params.blog);

  if (!blog) {
    notFound();
  }

  return (
    <div className="px-8">
      <h2 className="font-bold mt-8 mb-4 text-2xl">{blog?.title}</h2>
      {blog?.content?.map((item) => {
        return (
          <div key="blog.title" className="mb-8">
            <h2 className="font-bold">{item.heading}</h2>
            <p>{item.text}</p>
          </div>
        );
      })}
    </div>
  );
}
