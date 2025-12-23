import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlogCard from "@/components/BlogCard";
import { posts } from "@/data/posts";

const Blog = () => {
  const categories = [...new Set(posts.map(post => post.category))];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Page Header */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-6">
            <div className="max-w-2xl animate-fade-up">
              <h1 className="font-heading text-4xl md:text-5xl font-semibold text-foreground mb-4">
                All Articles
              </h1>
              <p className="font-body text-lg text-muted-foreground">
                Explore all my writings on design, creativity, technology, and more.
              </p>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="pb-8">
          <div className="container mx-auto px-6">
            <div className="flex flex-wrap gap-3 animate-fade-up" style={{ animationDelay: '0.1s' }}>
              <button className="px-4 py-2 bg-primary text-primary-foreground font-body text-sm font-medium rounded-full transition-colors">
                All
              </button>
              {categories.map(category => (
                <button 
                  key={category}
                  className="px-4 py-2 bg-secondary text-secondary-foreground font-body text-sm font-medium rounded-full hover:bg-secondary/80 transition-colors"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Posts Grid */}
        <section className="py-8 pb-20">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post, index) => (
                <div 
                  key={post.id}
                  className="animate-fade-up"
                  style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                >
                  <BlogCard {...post} />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
