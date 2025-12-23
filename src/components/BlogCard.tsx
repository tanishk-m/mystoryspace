import { Link } from "react-router-dom";

interface BlogCardProps {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  featured?: boolean;
}

const BlogCard = ({ id, title, excerpt, category, date, readTime, image, featured = false }: BlogCardProps) => {
  if (featured) {
    return (
      <Link to={`/blog/${id}`} className="group block">
        <article className="grid md:grid-cols-2 gap-8 bg-card rounded-lg overflow-hidden shadow-soft hover-lift">
          <div className="aspect-[4/3] overflow-hidden">
            <img 
              src={image} 
              alt={title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="flex flex-col justify-center p-6 md:p-8 md:pl-0">
            <span className="font-body text-xs font-medium uppercase tracking-widest text-primary mb-3">
              {category}
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-4 group-hover:text-primary transition-colors leading-tight">
              {title}
            </h2>
            <p className="font-body text-muted-foreground leading-relaxed mb-6 line-clamp-3">
              {excerpt}
            </p>
            <div className="flex items-center gap-4 font-body text-sm text-muted-foreground">
              <span>{date}</span>
              <span className="w-1 h-1 rounded-full bg-muted-foreground"></span>
              <span>{readTime}</span>
            </div>
          </div>
        </article>
      </Link>
    );
  }

  return (
    <Link to={`/blog/${id}`} className="group block">
      <article className="bg-card rounded-lg overflow-hidden shadow-soft hover-lift h-full">
        <div className="aspect-[16/10] overflow-hidden">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div className="p-6">
          <span className="font-body text-xs font-medium uppercase tracking-widest text-primary mb-2 block">
            {category}
          </span>
          <h3 className="font-heading text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors leading-snug">
            {title}
          </h3>
          <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-2">
            {excerpt}
          </p>
          <div className="flex items-center gap-3 font-body text-xs text-muted-foreground">
            <span>{date}</span>
            <span className="w-1 h-1 rounded-full bg-muted-foreground"></span>
            <span>{readTime}</span>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default BlogCard;
