import { blogs } from "@/blogs";

type BlogPageParam = {
  blog: string;
};

function getBlog(blog: string) {
  return blogs.find((theBlog) => theBlog.slug === blog);
}

export default function BlogPage({ params }: { params: BlogPageParam }) {
  const blog = getBlog(params.blog);
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
      {/* <p>{blog?.descript}</p> */}
    </div>
  );
}
