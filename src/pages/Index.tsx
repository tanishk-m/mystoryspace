import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import BlogCard from "@/components/BlogCard";
import { posts } from "@/data/posts";

const Index = () => {
  const featuredPost = posts[0];
  const recentPosts = posts.slice(1, 5);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        <Hero />
        
        {/* Featured Post */}
        <section className="py-12">
          <div className="container mx-auto px-6">
            <div className="flex items-center gap-4 mb-8">
              <h2 className="font-heading text-2xl font-semibold text-foreground">
                Featured
              </h2>
              <div className="flex-1 h-px bg-border"></div>
            </div>
            
            <div className="animate-fade-up" style={{ animationDelay: '0.2s' }}>
              <BlogCard {...featuredPost} featured />
            </div>
          </div>
        </section>

        {/* Recent Posts */}
        <section className="py-12">
          <div className="container mx-auto px-6">
            <div className="flex items-center gap-4 mb-8">
              <h2 className="font-heading text-2xl font-semibold text-foreground">
                Recent Articles
              </h2>
              <div className="flex-1 h-px bg-border"></div>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {recentPosts.map((post, index) => (
                <div 
                  key={post.id} 
                  className="animate-fade-up"
                  style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                >
                  <BlogCard {...post} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-6">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-4">
                Stay in the Loop
              </h2>
              <p className="font-body text-muted-foreground mb-8">
                Subscribe to receive new articles directly in your inbox. No spam, just thoughtful content.
              </p>
              <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg border border-border bg-background font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                />
                <button 
                  type="submit"
                  className="px-6 py-3 bg-primary text-primary-foreground font-body font-medium rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
