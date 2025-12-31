import Link from 'next/link';
import { Card, CardContent, Badge } from '@/components/ui';
import { emailScenarios } from '@/data';

export default function EmailModulePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="mb-8">
        <Link href="/modulos" className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 text-sm flex items-center gap-1 mb-4">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Voltar aos módulos
        </Link>
        
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center">
            <svg className="w-7 h-7 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <div>
            <h1 className="text-2xl font-bold text-[var(--foreground)]">E-mail Corporativo</h1>
            <p className="text-[var(--text-muted)]">{emailScenarios.length} cenários disponíveis</p>
          </div>
        </div>
      </div>

      {/* Description */}
      <Card className="mb-8 bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-700">
        <CardContent className="p-4">
          <p className="text-blue-800 dark:text-blue-300 text-sm">
            O e-mail corporativo é o vetor de ataque mais utilizado em ambientes organizacionais.
            Pratique identificando mensagens suspeitas e aprenda os indicadores que denunciam tentativas de phishing.
          </p>
        </CardContent>
      </Card>

      {/* Scenarios List */}
      <div className="space-y-4">
        {emailScenarios.map((scenario, index) => (
          <Link key={scenario.id} href={`/modulos/email/${scenario.id}`}>
            <Card className="hover:shadow-md transition-shadow cursor-pointer group">
              <CardContent className="p-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-[var(--card-bg)] border border-[var(--card-border)] rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/30 transition-colors">
                    <span className="font-semibold text-[var(--text-muted)] group-hover:text-blue-600 dark:group-hover:text-blue-400">
                      {index + 1}
                    </span>
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-semibold text-[var(--foreground)] truncate">
                        {scenario.title}
                      </h3>
                      <Badge 
                        variant={scenario.difficulty === 'easy' ? 'success' : scenario.difficulty === 'medium' ? 'warning' : 'danger'} 
                        size="sm"
                      >
                        {scenario.difficulty === 'easy' ? 'Fácil' : scenario.difficulty === 'medium' ? 'Médio' : 'Difícil'}
                      </Badge>
                    </div>
                    <p className="text-sm text-[var(--text-muted)] truncate">
                      {scenario.description}
                    </p>
                  </div>
                  
                  <svg className="w-5 h-5 text-[var(--text-secondary)] group-hover:text-blue-600 dark:group-hover:text-blue-400 group-hover:translate-x-1 transition-all flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}