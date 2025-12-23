import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-secondary/50 border-t border-border mt-20">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-heading text-xl font-semibold text-foreground mb-4">
              The Journal
            </h3>
            <p className="font-body text-muted-foreground text-sm leading-relaxed">
              Thoughts, stories, and ideas about design, technology, and the creative process.
            </p>
          </div>
          
          <div>
            <h4 className="font-heading text-lg font-medium text-foreground mb-4">
              Navigate
            </h4>
            <div className="flex flex-col gap-2">
              <Link to="/" className="font-body text-sm text-muted-foreground hover:text-primary transition-colors">
                Home
              </Link>
              <Link to="/blog" className="font-body text-sm text-muted-foreground hover:text-primary transition-colors">
                Articles
              </Link>
              <Link to="/about" className="font-body text-sm text-muted-foreground hover:text-primary transition-colors">
                About
              </Link>
            </div>
          </div>
          
          <div>
            <h4 className="font-heading text-lg font-medium text-foreground mb-4">
              Connect
            </h4>
            <div className="flex flex-col gap-2">
              <a href="#" className="font-body text-sm text-muted-foreground hover:text-primary transition-colors">
                Twitter
              </a>
              <a href="#" className="font-body text-sm text-muted-foreground hover:text-primary transition-colors">
                LinkedIn
              </a>
              <a href="#" className="font-body text-sm text-muted-foreground hover:text-primary transition-colors">
                Newsletter
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="font-body text-sm text-muted-foreground">
            © {new Date().getFullYear()} The Journal. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
