import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          <Link 
            to="/" 
            className="font-heading text-2xl font-semibold text-foreground hover:text-primary transition-colors"
          >
            The Journal
          </Link>
          
          <div className="flex items-center gap-8">
            <Link 
              to="/" 
              className="font-body text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Home
            </Link>
            <Link 
              to="/blog" 
              className="font-body text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Articles
            </Link>
            <Link 
              to="/about" 
              className="font-body text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              About
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
