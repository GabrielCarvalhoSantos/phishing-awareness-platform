export function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <p className="text-sm text-gray-600">
              <strong>PhishGuard</strong> — Plataforma de Conscientização sobre Phishing
            </p>
            <p className="text-xs text-gray-500 mt-1">
              Trabalho de Conclusão de Curso — Sistemas de Informação — IFS Campus Lagarto
            </p>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-xs text-gray-500">
              Desenvolvido por Gabriel Carvalho Santos
            </p>
            <p className="text-xs text-gray-500">
              Orientador: Prof. Dr. Claudio Cleverson de Lima
            </p>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-gray-200">
          <p className="text-xs text-gray-400 text-center">
            Fundamentado nos conceitos de engenharia social de Mitnick e Simon (2003), 
            Mann (2011), Hadnagy (2011) e outros autores.
          </p>
        </div>
      </div>
    </footer>
  );
}
