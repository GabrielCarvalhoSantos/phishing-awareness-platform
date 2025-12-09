import { Scenario } from '@/types';

export const emailScenarios: Scenario[] = [
  {
    id: 'email-01',
    module: 'email',
    title: 'Atualização de Senha Urgente',
    description: 'E-mail do suporte técnico solicitando atualização imediata de senha.',
    classification: 'phishing',
    difficulty: 'easy',
    content: {
      from: 'suporte@ti-empresa.com.br',
      subject: '[URGENTE] Sua senha expira em 2 horas',
      body: `Prezado colaborador,

Identificamos que sua senha corporativa expirará nas próximas 2 horas. Para evitar o bloqueio do seu acesso, atualize imediatamente clicando no link abaixo:

https://ti-empresa.atualiza-senha.net/reset

Atenciosamente,
Equipe de Suporte Técnico`,
      timestamp: '09:47'
    },
    indicators: [
      {
        id: 'ind-1',
        label: 'Domínio suspeito',
        description: '"ti-empresa.com.br" não é o domínio oficial da empresa',
        highlight: 'suporte@ti-empresa.com.br'
      },
      {
        id: 'ind-2',
        label: 'URL externa maliciosa',
        description: '"atualiza-senha.net" é um domínio externo não relacionado à organização',
        highlight: 'https://ti-empresa.atualiza-senha.net/reset'
      },
      {
        id: 'ind-3',
        label: 'Urgência artificial',
        description: 'Prazo de 2 horas força decisão impulsiva sem tempo para verificação',
        highlight: '2 horas'
      },
      {
        id: 'ind-4',
        label: 'Ameaça implícita',
        description: 'A menção ao "bloqueio do acesso" gera medo e pressiona o usuário',
        highlight: 'bloqueio do seu acesso'
      }
    ],
    theoreticalFoundation: [
      {
        concept: 'Urgência e Medo',
        author: 'Fornasier, Knebel e Silva (2020)',
        explanation: 'O sucesso dessas ações se dá, sobretudo, pela capacidade dos criminosos de criar cenários que despertam urgência, medo ou curiosidade, fazendo com que a vítima atue de forma impulsiva.'
      },
      {
        concept: 'Pretexting',
        author: 'Hadnagy (2011)',
        explanation: 'A pretensão de ser o suporte de TI corresponde à técnica de pretexting, onde o atacante assume uma identidade falsa para obter informações.'
      },
      {
        concept: 'Seguir instruções',
        author: 'Mann (2011)',
        explanation: 'Desde a infância, nas escolas, faculdades e trabalhos, o ser humano tende a seguir instruções, especialmente quando parecem vir de figuras de autoridade.'
      }
    ],
    preventiveTip: 'Sempre verifique o domínio do remetente e nunca clique em links de e-mails suspeitos. Em caso de dúvida, acesse o sistema diretamente pelo navegador ou contate o suporte por canais oficiais.'
  },
  {
    id: 'email-02',
    module: 'email',
    title: 'Comunicado do RH',
    description: 'E-mail do setor de Recursos Humanos sobre atualização de benefícios.',
    classification: 'legitimate',
    difficulty: 'medium',
    content: {
      from: 'rh@suaempresa.com.br',
      subject: 'Atualização do Plano de Benefícios 2025',
      body: `Prezado(a) colaborador(a),

Informamos que o período de adesão ao novo plano de benefícios estará aberto de 15/01 a 31/01/2025. Para conhecer as opções disponíveis, acesse o Portal do Colaborador através da intranet.

Em caso de dúvidas, procure o setor de RH presencialmente ou pelo ramal 2500.

Atenciosamente,
Departamento de Recursos Humanos`,
      timestamp: '14:22'
    },
    indicators: [
      {
        id: 'ind-1',
        label: 'Domínio oficial',
        description: '"suaempresa.com.br" corresponde ao domínio corporativo real',
        highlight: 'rh@suaempresa.com.br'
      },
      {
        id: 'ind-2',
        label: 'Sem links externos',
        description: 'Orienta acesso via intranet, não fornece links diretos suspeitos',
        highlight: 'Portal do Colaborador através da intranet'
      },
      {
        id: 'ind-3',
        label: 'Prazo razoável',
        description: '15 dias para adesão, sem pressão ou urgência artificial',
        highlight: '15/01 a 31/01/2025'
      },
      {
        id: 'ind-4',
        label: 'Canal de verificação',
        description: 'Oferece contato presencial e ramal interno para confirmação',
        highlight: 'ramal 2500'
      }
    ],
    theoreticalFoundation: [
      {
        concept: 'Evitar viés de confirmação',
        author: 'Adams e Sasse (1999)',
        explanation: 'Medidas de segurança excessivamente restritivas levam usuários a desenvolver workarounds. O objetivo é desenvolver pensamento crítico equilibrado, não paranoia.'
      }
    ],
    preventiveTip: 'E-mails legítimos geralmente não exigem ação imediata, oferecem canais alternativos de verificação e direcionam para sistemas internos conhecidos.'
  },
  {
    id: 'email-03',
    module: 'email',
    title: 'Nota Fiscal em Anexo',
    description: 'E-mail com suposta nota fiscal eletrônica e boleto para pagamento.',
    classification: 'phishing',
    difficulty: 'medium',
    content: {
      from: 'nfe@nota-fiscal-eletronica.org',
      subject: 'NF-e Pendente - Boleto em anexo',
      body: `Prezado cliente,

Segue em anexo a Nota Fiscal Eletrônica referente à sua última compra, juntamente com o boleto para pagamento.

Em caso de dúvidas, entre em contato.

Atenciosamente`,
      attachment: {
        name: 'NFe_034521.pdf.exe',
        type: 'application/x-msdownload'
      },
      timestamp: '11:03'
    },
    indicators: [
      {
        id: 'ind-1',
        label: 'Remetente genérico',
        description: 'Não identifica a empresa vendedora ou prestadora de serviço',
        highlight: 'nfe@nota-fiscal-eletronica.org'
      },
      {
        id: 'ind-2',
        label: 'Domínio não oficial',
        description: '"nota-fiscal-eletronica.org" não é fonte oficial de NF-e',
        highlight: 'nota-fiscal-eletronica.org'
      },
      {
        id: 'ind-3',
        label: 'Extensão dupla',
        description: '".pdf.exe" é técnica clássica para disfarçar arquivo executável como PDF',
        highlight: 'NFe_034521.pdf.exe'
      },
      {
        id: 'ind-4',
        label: 'Contexto vago',
        description: '"última compra" sem especificar qual produto, valor ou data',
        highlight: 'última compra'
      }
    ],
    theoreticalFoundation: [
      {
        concept: 'Curiosidade',
        author: 'Hadnagy (2011)',
        explanation: 'A curiosidade é uma emoção poderosa que os invasores frequentemente exploram para induzir as vítimas a abrir anexos suspeitos.'
      },
      {
        concept: 'Persuasão e engano',
        author: 'Mitnick e Simon (2003)',
        explanation: 'A engenharia social usa a influência e a persuasão para enganar as pessoas. Boletos e notas fiscais são pretextos comuns no contexto brasileiro.'
      }
    ],
    preventiveTip: 'Desconfie de anexos com extensões duplas (.pdf.exe, .doc.scr). Verifique sempre o remetente e, se não reconhecer a compra, não abra o arquivo. NF-e legítimas podem ser consultadas no portal da Sefaz.'
  },
  {
    id: 'email-04',
    module: 'email',
    title: 'Reunião Confidencial',
    description: 'E-mail do diretor financeiro convocando para reunião urgente.',
    classification: 'phishing',
    difficulty: 'hard',
    content: {
      from: 'diretor.financeiro@empresa-br.com',
      subject: 'Reunião Confidencial - Compareça Imediatamente',
      body: `Preciso falar com você com urgência sobre um assunto confidencial relacionado ao seu departamento.

Não comente com ninguém. Acesse o link abaixo para entrar na sala de reunião virtual:

https://meet.empresa-br.com/sala-diretoria

Aguardo sua presença imediata.`,
      timestamp: '16:45'
    },
    indicators: [
      {
        id: 'ind-1',
        label: 'Falsa autoridade',
        description: 'Usa cargo de diretor para intimidar e gerar obediência',
        highlight: 'diretor.financeiro'
      },
      {
        id: 'ind-2',
        label: 'Domínio similar (typosquatting)',
        description: '"empresa-br.com" imita mas não é o domínio real da empresa',
        highlight: 'empresa-br.com'
      },
      {
        id: 'ind-3',
        label: 'Isolamento da vítima',
        description: '"não comente com ninguém" impede verificação com colegas',
        highlight: 'Não comente com ninguém'
      },
      {
        id: 'ind-4',
        label: 'Pressão temporal extrema',
        description: '"imediatamente" não permite tempo para reflexão ou verificação',
        highlight: 'imediata'
      }
    ],
    theoreticalFoundation: [
      {
        concept: 'Seguir instruções e ignorância',
        author: 'Mann (2011)',
        explanation: 'Desde a infância o ser humano tende a seguir instruções. A maioria das pessoas obedece a instruções quando se sentem ignorantes a respeito da situação.'
      },
      {
        concept: 'Falsa autoridade',
        author: 'Fornasier, Knebel e Silva (2020)',
        explanation: 'Invasores se fazem passar por figuras de autoridade, como representantes de instituições ou executivos, para ganhar a confiança das vítimas.'
      },
      {
        concept: 'Whaling',
        author: 'Hadnagy (2011)',
        explanation: 'Whaling é uma forma de spear phishing direcionada a executivos ou que utiliza pretexto de autoridade organizacional elevada.'
      }
    ],
    preventiveTip: 'Diretores legítimos não pedem sigilo absoluto nem pressionam por ações imediatas via e-mail. Sempre confirme solicitações incomuns por outro canal (telefone, presencialmente).'
  }
];
