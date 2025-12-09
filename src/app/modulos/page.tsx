import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, Badge } from '@/components/ui';
import { emailScenarios, smsScenarios } from '@/data';

export default function ModulosPage() {
  const modules = [
    {
      id: 'email',
      title: 'E-mail Corporativo',
      description: 'Aprenda a identificar e-mails de phishing no ambiente de trabalho. O vetor de ataque mais comum em ambientes corporativos.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      scenarioCount: emailScenarios.length,
      color: 'blue',
      stats: '40% dos ataques',
    },
    {
      id: 'sms',
      title: 'SMS / WhatsApp',
      description: 'Reconheça tentativas de smishing e golpes via mensagens instantâneas, cada vez mais comuns no contexto brasileiro.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      scenarioCount: smsScenarios.length,
      color: 'green',
      stats: 'Em crescimento no BR',
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Escolha um Módulo
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Selecione o tipo de ataque que deseja aprender a identificar. 
          Cada módulo contém cenários realistas baseados em casos documentados.
        </p>
      </div>

      {/* Modules Grid */}
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        {modules.map((module) => (
          <Link key={module.id} href={`/modulos/${module.id}`}>
            <Card 
              variant="elevated" 
              className="h-full hover:shadow-xl transition-shadow duration-300 cursor-pointer group"
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className={`
                    w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0
                    ${module.color === 'blue' ? 'bg-blue-100 text-blue-600' : 'bg-green-100 text-green-600'}
                    group-hover:scale-110 transition-transform duration-300
                  `}>
                    {module.icon}
                  </div>
                  
                  <div className="flex-1">
                    <CardHeader className="p-0 mb-0">
                      <div className="flex items-center gap-2 mb-2">
                        <CardTitle>{module.title}</CardTitle>
                        <Badge variant="info" size="sm">{module.scenarioCount} cenários</Badge>
                      </div>
                      <CardDescription>{module.description}</CardDescription>
                    </CardHeader>
                    
                    <div className="mt-4 flex items-center justify-between">
                      <span className="text-sm text-gray-500">{module.stats}</span>
                      <span className={`
                        text-sm font-medium flex items-center gap-1
                        ${module.color === 'blue' ? 'text-blue-600' : 'text-green-600'}
                      `}>
                        Iniciar
                        <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      {/* Info Section */}
      <Card className="bg-amber-50 border-amber-200">
        <CardContent className="p-6">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
              <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-amber-900 mb-1">Dica</h3>
              <p className="text-amber-800 text-sm">
                Você pode fazer os módulos em qualquer ordem. Cada cenário inclui análise detalhada 
                conectando a experiência prática com os conceitos teóricos de engenharia social.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
