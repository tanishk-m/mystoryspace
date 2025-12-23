const Hero = () => {
  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center animate-fade-up">
          <span className="font-body text-sm font-medium uppercase tracking-widest text-primary mb-6 block">
            Welcome to The Journal
          </span>
          <h1 className="font-heading text-5xl md:text-7xl font-semibold text-foreground mb-6 leading-tight text-balance">
            Stories Worth Telling
          </h1>
          <p className="font-body text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Exploring ideas at the intersection of design, technology, and human experience. 
            Join me on a journey through thoughts that matter.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
