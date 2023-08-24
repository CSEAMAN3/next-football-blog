import BlogButtons from "@/components/BlogButtons";

export default function BlogsLayout({ children }: { children: React.ReactNode }) {
  return (
    <section>
      <BlogButtons />
      {children}
    </section>
  );
}
