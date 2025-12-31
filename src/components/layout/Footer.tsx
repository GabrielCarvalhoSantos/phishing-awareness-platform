export function Footer() {
  return (
    <footer className="bg-[var(--background)] border-t border-[var(--card-border)] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <p className="text-sm text-[var(--text-muted)]">
              © 2025 <strong>PhishGuard</strong> — TCC Gabriel Carvalho Santos | IFS Campus Lagarto
            </p>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-xs text-[var(--text-secondary)]">
              Fundamentado nos conceitos de Mitnick e Simon (2003), Mann (2011), Hadnagy (2011)
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}