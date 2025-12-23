import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto">
              <div className="animate-fade-up">
                <span className="font-body text-sm font-medium uppercase tracking-widest text-primary mb-6 block">
                  About
                </span>
                <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-8 leading-tight">
                  Hello, I'm the Writer Behind The Journal
                </h1>
              </div>

              <div className="grid md:grid-cols-3 gap-12 mb-16">
                <div className="md:col-span-1 animate-fade-up" style={{ animationDelay: '0.1s' }}>
                  <div className="aspect-[3/4] rounded-lg overflow-hidden shadow-elevated">
                    <img 
                      src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&auto=format&fit=crop&q=60"
                      alt="Author portrait"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                
                <div className="md:col-span-2 animate-fade-up" style={{ animationDelay: '0.2s' }}>
                  <p className="font-body text-lg text-foreground/90 leading-relaxed mb-6">
                    I'm a writer, designer, and creative explorer based in New York. For the past decade, I've been fascinated by the intersection of design, technology, and human experience.
                  </p>
                  <p className="font-body text-lg text-foreground/90 leading-relaxed mb-6">
                    The Journal is my space to share ideas, stories, and reflections on the creative process. I believe that great work comes from deep thinking, deliberate practice, and the courage to embrace uncertainty.
                  </p>
                  <p className="font-body text-lg text-foreground/90 leading-relaxed mb-8">
                    When I'm not writing, you can find me exploring museums, drinking too much coffee, or getting lost in a good book. I'm always open to conversations about design, creativity, and life.
                  </p>
                  
                  <div className="flex flex-wrap gap-4">
                    <a 
                      href="#" 
                      className="px-5 py-2.5 bg-primary text-primary-foreground font-body font-medium rounded-lg hover:bg-primary/90 transition-colors"
                    >
                      Get in Touch
                    </a>
                    <Link 
                      to="/blog"
                      className="px-5 py-2.5 bg-secondary text-secondary-foreground font-body font-medium rounded-lg hover:bg-secondary/80 transition-colors"
                    >
                      Read Articles
                    </Link>
                  </div>
                </div>
              </div>

              {/* Values Section */}
              <div className="border-t border-border pt-16 animate-fade-up" style={{ animationDelay: '0.3s' }}>
                <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-8">
                  What I Believe
                </h2>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="p-6 bg-card rounded-lg shadow-soft">
                    <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                      Simplicity is Power
                    </h3>
                    <p className="font-body text-muted-foreground leading-relaxed">
                      The most effective ideas are often the simplest. I strive to strip away the unnecessary and focus on what truly matters.
                    </p>
                  </div>
                  
                  <div className="p-6 bg-card rounded-lg shadow-soft">
                    <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                      Show Up Daily
                    </h3>
                    <p className="font-body text-muted-foreground leading-relaxed">
                      Creativity isn't about waiting for inspiration. It's about building habits that allow your best work to emerge over time.
                    </p>
                  </div>
                  
                  <div className="p-6 bg-card rounded-lg shadow-soft">
                    <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                      Embrace Uncertainty
                    </h3>
                    <p className="font-body text-muted-foreground leading-relaxed">
                      The creative process is inherently uncertain. Learning to be comfortable with not knowing is essential to breakthrough work.
                    </p>
                  </div>
                  
                  <div className="p-6 bg-card rounded-lg shadow-soft">
                    <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                      Connect Deeply
                    </h3>
                    <p className="font-body text-muted-foreground leading-relaxed">
                      In a world of shallow engagement, I believe in the power of deep, meaningful connection—both with ideas and with people.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
