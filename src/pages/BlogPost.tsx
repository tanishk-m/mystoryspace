import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getPost, posts } from "@/data/posts";
import { ArrowLeft } from "lucide-react";

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  const post = getPost(id || "");
  
  const relatedPosts = posts.filter(p => p.id !== id).slice(0, 3);

  if (!post) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="py-20">
          <div className="container mx-auto px-6 text-center">
            <h1 className="font-heading text-4xl font-semibold text-foreground mb-4">
              Article Not Found
            </h1>
            <p className="font-body text-muted-foreground mb-8">
              The article you're looking for doesn't exist.
            </p>
            <Link 
              to="/blog"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to articles
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Article Header */}
        <article className="py-12 md:py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto">
              {/* Back Link */}
              <Link 
                to="/blog"
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8 font-body text-sm"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to articles
              </Link>

              {/* Meta */}
              <div className="animate-fade-up">
                <span className="font-body text-xs font-medium uppercase tracking-widest text-primary mb-4 block">
                  {post.category}
                </span>
                
                <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-6 leading-tight">
                  {post.title}
                </h1>
                
                <div className="flex items-center gap-4 font-body text-muted-foreground mb-8">
                  <span>{post.date}</span>
                  <span className="w-1 h-1 rounded-full bg-muted-foreground"></span>
                  <span>{post.readTime}</span>
                </div>
              </div>

              {/* Featured Image */}
              <div className="aspect-[16/9] rounded-lg overflow-hidden mb-12 animate-fade-up" style={{ animationDelay: '0.1s' }}>
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div 
                className="prose prose-lg max-w-none animate-fade-up"
                style={{ animationDelay: '0.2s' }}
              >
                {post.content.split('\n\n').map((paragraph, index) => {
                  if (paragraph.startsWith('## ')) {
                    return (
                      <h2 key={index} className="font-heading text-2xl md:text-3xl font-semibold text-foreground mt-12 mb-6">
                        {paragraph.replace('## ', '')}
                      </h2>
                    );
                  }
                  return (
                    <p key={index} className="font-body text-foreground/90 leading-relaxed mb-6 text-lg">
                      {paragraph}
                    </p>
                  );
                })}
              </div>
            </div>
          </div>
        </article>

        {/* Related Posts */}
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-6">
            <h2 className="font-heading text-2xl font-semibold text-foreground mb-8 text-center">
              Continue Reading
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {relatedPosts.map((relatedPost, index) => (
                <Link 
                  key={relatedPost.id}
                  to={`/blog/${relatedPost.id}`}
                  className="group block bg-card rounded-lg overflow-hidden shadow-soft hover-lift animate-fade-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="aspect-[16/10] overflow-hidden">
                    <img 
                      src={relatedPost.image} 
                      alt={relatedPost.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5">
                    <span className="font-body text-xs font-medium uppercase tracking-widest text-primary mb-2 block">
                      {relatedPost.category}
                    </span>
                    <h3 className="font-heading text-lg font-semibold text-foreground group-hover:text-primary transition-colors leading-snug">
                      {relatedPost.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default BlogPost;
