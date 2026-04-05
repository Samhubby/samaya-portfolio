import { blogs } from "@/data/profile";

const Blog = () => (
  <section id="blog" className="py-24 px-6">
    <div className="max-w-5xl mx-auto space-y-10">
      <h2 className="text-2xl font-bold text-foreground">Blog</h2>

      <div className="grid gap-6 md:grid-cols-2">
        {blogs.map((b, i) => (
          <a
            key={i}
            href={b.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-lg border border-border bg-card p-6 space-y-3 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
          >
            <h3 className="text-base font-semibold text-foreground">{b.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{b.description}</p>
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default Blog;
