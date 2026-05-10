const Footer = () => {
  return (
    <footer className="container flex items-center justify-center py-6 border-t border-border-base">
      <p className="text-body-sm text-text-secondary">
        &copy; {new Date().getFullYear()} Andrey Lyamkin
      </p>
    </footer>
  );
};

export default Footer;
