const FooterSection = () => (
  <footer className="py-8 bg-warm-dark border-t border-foreground/10">
    <div className="container text-center">
      <p className="font-body text-sm text-primary-foreground/50">
        &copy; {new Date().getFullYear()} Clara Badini &mdash; Balloon Cake. Todos os direitos reservados. Desenvolvido por Espiral Filmes
      </p>
    </div>
  </footer>
);

export default FooterSection;
