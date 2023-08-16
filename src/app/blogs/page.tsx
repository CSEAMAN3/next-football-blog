import { blogs } from "@/blogs";

type Blog = {
  title: string;
  description: string;
};

export default function page() {
  return (
    <div>
      {blogs.map((blog) => {
        return (
          <div key={blog.title}>
            <h2>{blog.title}</h2>
            <p>{blog.description}</p>
          </div>
        );
      })}
    </div>
  );
}
