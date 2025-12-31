import Link from 'next/link';
import { Button, Card, CardContent } from '@/components/ui';

export default function HomePage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-100 dark:bg-blue-900/30 rounded-full mb-6">
          <svg className="w-10 h-10 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold text-[var(--foreground)] mb-4">
          Aprenda a identificar
          <span className="text-blue-600 dark:text-blue-400"> ataques de phishing</span>
        </h1>
        
        <p className="text-xl text-[var(--text-muted)] max-w-2xl mx-auto mb-8">
          Plataforma interativa de conscientização sobre phishing em ambientes corporativos. 
          Pratique com simulações realistas e aprenda a proteger você e sua organização.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/modulos">
            <Button size="lg" className="w-full sm:w-auto">
              Começar Treinamento
            </Button>
          </Link>
          <Link href="/guia">
            <Button variant="secondary" size="lg" className="w-full sm:w-auto">
              Ver Guia de Boas Práticas
            </Button>
          </Link>
        </div>
      </section>

      {/* How it works */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-[var(--foreground)] text-center mb-8">
          Como funciona?
        </h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="text-center">
            <CardContent>
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-blue-600 dark:text-blue-400">1</span>
              </div>
              <h3 className="font-semibold text-[var(--foreground)] mb-2">Escolha um módulo</h3>
              <p className="text-[var(--text-muted)] text-sm">
                Selecione entre E-mail Corporativo ou SMS/WhatsApp para iniciar seu treinamento.
              </p>
            </CardContent>
          </Card>
          
          <Card className="text-center">
            <CardContent>
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-blue-600 dark:text-blue-400">2</span>
              </div>
              <h3 className="font-semibold text-[var(--foreground)] mb-2">Analise a simulação</h3>
              <p className="text-[var(--text-muted)] text-sm">
                Examine mensagens realistas e decida se são tentativas de phishing ou comunicações legítimas.
              </p>
            </CardContent>
          </Card>
          
          <Card className="text-center">
            <CardContent>
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-blue-600 dark:text-blue-400">3</span>
              </div>
              <h3 className="font-semibold text-[var(--foreground)] mb-2">Aprenda com o feedback</h3>
              <p className="text-[var(--text-muted)] text-sm">
                Receba análise detalhada dos indicadores e fundamentação teórica para cada cenário.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-blue-600 rounded-2xl p-8 mb-16 text-white">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div>
            <p className="text-4xl font-bold mb-2">40%</p>
            <p className="text-blue-100">
              dos ataques de engenharia social são phishing
            </p>
          </div>
          <div>
            <p className="text-4xl font-bold mb-2">91%</p>
            <p className="text-blue-100">
              dos ataques cibernéticos começam com phishing
            </p>
          </div>
          <div>
            <p className="text-4xl font-bold mb-2">R$ 4.7M</p>
            <p className="text-blue-100">
              custo médio de uma violação de dados no Brasil
            </p>
          </div>
        </div>
      </section>

      {/* Why it matters */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-[var(--foreground)] text-center mb-8">
          Por que isso importa?
        </h2>
        
        <Card variant="elevated" padding="lg">
          <CardContent>
            <blockquote className="text-lg text-[var(--text-muted)] italic text-center max-w-3xl mx-auto">
              "Todos os firewalls e protocolos de criptografia do mundo nunca serão suficientes 
              para deter um hacker decidido a atacar um banco de dados corporativo ou um empregado 
              determinado a prejudicar um sistema."
            </blockquote>
            <p className="text-center mt-4 text-[var(--text-secondary)]">
              — Kevin Mitnick, "A Arte de Enganar" (2003)
            </p>
          </CardContent>
        </Card>
      </section>

      {/* CTA */}
      <section className="text-center">
        <h2 className="text-2xl font-bold text-[var(--foreground)] mb-4">
          Pronto para começar?
        </h2>
        <p className="text-[var(--text-muted)] mb-6">
          Desenvolva habilidades práticas de identificação de phishing em um ambiente seguro.
        </p>
        <Link href="/modulos">
          <Button size="lg">
            Iniciar Treinamento Agora
          </Button>
        </Link>
      </section>
    </div>
  );
}