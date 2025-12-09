import { Scenario } from '@/types';

export const smsScenarios: Scenario[] = [
  {
    id: 'sms-01',
    module: 'sms',
    title: 'Alerta do Banco',
    description: 'SMS alertando sobre tentativa de compra suspeita no cartão.',
    classification: 'phishing',
    difficulty: 'easy',
    content: {
      sender: '+55 11 99999-0000',
      message: `BRADESC0: Detectamos uma tentativa de compra no valor de R$ 4.750,00. Caso NAO reconheca, acesse: bradesco.confirma-compra.com para cancelar. Expira em 30min`,
      timestamp: '10:32',
      isWhatsApp: false
    },
    indicators: [
      {
        id: 'ind-1',
        label: 'Nome alterado (typosquatting)',
        description: '"BRADESC0" com zero no lugar da letra O é técnica de falsificação',
        highlight: 'BRADESC0'
      },
      {
        id: 'ind-2',
        label: 'Número de celular comum',
        description: 'Bancos usam shortcodes (números curtos), não números celulares',
        highlight: '+55 11 99999-0000'
      },
      {
        id: 'ind-3',
        label: 'Domínio externo falso',
        description: '"confirma-compra.com" não é domínio oficial do banco',
        highlight: 'bradesco.confirma-compra.com'
      },
      {
        id: 'ind-4',
        label: 'Urgência extrema',
        description: '30 minutos para forçar ação imediata sem verificação',
        highlight: '30min'
      }
    ],
    theoreticalFoundation: [
      {
        concept: 'Medo de perda financeira',
        author: 'Fornasier, Knebel e Silva (2020)',
        explanation: 'O sucesso dessas ações se dá pela capacidade dos criminosos de criar cenários que despertam urgência e medo, especialmente relacionados a perdas financeiras.'
      },
      {
        concept: 'Typosquatting',
        author: 'Hadnagy (2011)',
        explanation: 'A alteração sutil de caracteres (0 por O) é uma técnica conhecida para criar domínios e nomes que parecem legítimos à primeira vista.'
      },
      {
        concept: 'Credulidade',
        author: 'Mann (2011)',
        explanation: 'A credulidade das pessoas tende a aumentar quanto maior a ameaça de perda, fazendo-as agir impulsivamente para "proteger" seus recursos.'
      }
    ],
    preventiveTip: 'Bancos nunca enviam links por SMS para cancelar compras. Em caso de dúvida, acesse o app oficial do banco ou ligue para a central de atendimento usando o número no verso do cartão.'
  },
  {
    id: 'sms-02',
    module: 'sms',
    title: 'Código de Verificação',
    description: 'SMS com código de autenticação de dois fatores.',
    classification: 'legitimate',
    difficulty: 'medium',
    content: {
      sender: '32665 (Microsoft)',
      message: `Seu código de verificação Microsoft é: 847293. Não compartilhe este código com ninguém. Se você não solicitou, ignore esta mensagem.`,
      timestamp: '08:15',
      isWhatsApp: false
    },
    indicators: [
      {
        id: 'ind-1',
        label: 'Shortcode oficial',
        description: '32665 é shortcode conhecido e verificável da Microsoft',
        highlight: '32665'
      },
      {
        id: 'ind-2',
        label: 'Sem links',
        description: 'Apenas informa o código, não solicita cliques em links',
        highlight: '847293'
      },
      {
        id: 'ind-3',
        label: 'Alerta de segurança',
        description: 'Orienta a não compartilhar e ignorar se não solicitou',
        highlight: 'Não compartilhe este código'
      },
      {
        id: 'ind-4',
        label: 'Contexto esperado',
        description: 'Código chega imediatamente após tentativa de login ou recuperação de conta',
        highlight: 'código de verificação'
      }
    ],
    theoreticalFoundation: [
      {
        concept: 'Autenticação Multifator (MFA)',
        author: 'ISO/IEC 27002 (2013)',
        explanation: 'A autenticação multifator é controle de segurança recomendado pelas normas internacionais. Este cenário demonstra uma comunicação legítima de MFA.'
      }
    ],
    preventiveTip: 'Códigos de verificação legítimos vêm de shortcodes oficiais, não pedem que você clique em links e sempre alertam para não compartilhar. Só use o código se você realmente iniciou uma ação que o requer.'
  },
  {
    id: 'sms-03',
    module: 'sms',
    title: 'Entrega Taxada',
    description: 'SMS dos Correios informando encomenda taxada pela Receita Federal.',
    classification: 'phishing',
    difficulty: 'medium',
    content: {
      sender: '+55 21 98888-7777',
      message: `CORREIOS: Sua encomenda foi TAXADA pela Receita Federal. Valor: R$ 87,50. Pague ate hoje para liberar: correios.rastreio-encomenda.com/pgto`,
      timestamp: '14:58',
      isWhatsApp: false
    },
    indicators: [
      {
        id: 'ind-1',
        label: 'Número de celular',
        description: 'Correios não enviam SMS de número de celular comum',
        highlight: '+55 21 98888-7777'
      },
      {
        id: 'ind-2',
        label: 'URL falsa',
        description: 'Domínio oficial é correios.com.br, não "rastreio-encomenda.com"',
        highlight: 'correios.rastreio-encomenda.com'
      },
      {
        id: 'ind-3',
        label: 'Pressão de prazo',
        description: '"até hoje" cria urgência artificial para impedir verificação',
        highlight: 'ate hoje'
      },
      {
        id: 'ind-4',
        label: 'Sem código de rastreio',
        description: 'Comunicações legítimas dos Correios sempre incluem o código de rastreio',
        highlight: 'Sua encomenda'
      }
    ],
    theoreticalFoundation: [
      {
        concept: 'Padrões sazonais',
        author: 'Mascarenhas, Menck e Silva (2025)',
        explanation: 'Ataques de phishing seguem padrões sazonais específicos relacionados a datas comerciais. Golpes de falsa taxação aumentam em períodos de alta no e-commerce (Black Friday, Natal).'
      },
      {
        concept: 'Autoridade institucional combinada',
        author: 'Fornasier, Knebel e Silva (2020)',
        explanation: 'O cenário explora a autoridade institucional dupla (Correios + Receita Federal) combinada com medo de perda (encomenda retida).'
      }
    ],
    preventiveTip: 'Os Correios notificam taxações pelo app oficial ou carta física. Sempre verifique no site oficial (correios.com.br) usando o código de rastreio. Nunca pague por links recebidos por SMS.'
  },
  {
    id: 'sms-04',
    module: 'sms',
    title: 'WhatsApp do Chefe',
    description: 'Mensagem no WhatsApp de suposto gerente pedindo transferência urgente.',
    classification: 'phishing',
    difficulty: 'hard',
    content: {
      sender: '+55 11 97777-6666',
      message: `Oi, troquei de numero. Salva ai. Preciso de um favor urgente, to em reuniao e nao consigo acessar o app do banco. Pode fazer um pix pra mim? Te pago assim que sair. É urgente`,
      timestamp: '15:23',
      isWhatsApp: true,
      profileImage: '/images/fake-profile.jpg'
    },
    indicators: [
      {
        id: 'ind-1',
        label: 'Número novo não verificado',
        description: 'Alegação de troca de número é pretexto clássico do golpe',
        highlight: 'troquei de numero'
      },
      {
        id: 'ind-2',
        label: 'Solicitação financeira',
        description: 'Pedido de PIX é o objetivo real do golpe',
        highlight: 'fazer um pix'
      },
      {
        id: 'ind-3',
        label: 'Impedimento conveniente',
        description: '"em reunião" evita que a vítima ligue para verificar',
        highlight: 'to em reuniao'
      },
      {
        id: 'ind-4',
        label: 'Urgência + informalidade',
        description: 'Mistura pressão temporal com tom casual para parecer autêntico',
        highlight: 'É urgente'
      }
    ],
    theoreticalFoundation: [
      {
        concept: 'Desejo de ser prestativo',
        author: 'Mann (2011)',
        explanation: 'Um dos principais incentivos aos funcionários é ser prestativo aos colegas. Um engenheiro social manipula facilmente essa característica para obter o que deseja.'
      },
      {
        concept: 'Uso de dados de redes sociais',
        author: 'Fornasier, Knebel e Silva (2020)',
        explanation: 'O uso de dados reais, muitas vezes obtidos em redes sociais, fortalece esse tipo de golpe. A foto de perfil e o conhecimento do nome do gerente podem ter sido obtidos no LinkedIn.'
      },
      {
        concept: 'Pretexting',
        author: 'Hadnagy (2011)',
        explanation: 'A criação de um cenário fictício (reunião importante, problema com app) é uma forma de pretexting para justificar o pedido incomum.'
      }
    ],
    preventiveTip: 'Nunca faça transferências baseado apenas em mensagens, mesmo que pareçam vir de conhecidos. Sempre ligue para o número antigo salvo em sua agenda ou confirme presencialmente antes de qualquer envio de dinheiro.'
  }
];
