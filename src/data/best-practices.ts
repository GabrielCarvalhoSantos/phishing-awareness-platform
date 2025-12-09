export interface BestPractice {
  id: string;
  category: string;
  title: string;
  description: string;
  tips: string[];
  icon: string;
}

export const bestPractices: BestPractice[] = [
  {
    id: 'bp-01',
    category: 'Identificação de E-mails',
    title: 'Verificando Remetentes',
    description: 'Como identificar se um e-mail vem de uma fonte legítima.',
    tips: [
      'Verifique o domínio completo do remetente (após o @)',
      'Desconfie de domínios similares ao oficial (ex: empresa-br.com vs empresa.com.br)',
      'Passe o mouse sobre o nome do remetente para ver o e-mail real',
      'E-mails internos devem vir do domínio oficial da empresa'
    ],
    icon: 'mail'
  },
  {
    id: 'bp-02',
    category: 'Identificação de E-mails',
    title: 'Analisando Links',
    description: 'Como verificar links antes de clicar.',
    tips: [
      'Passe o mouse sobre o link para ver a URL real (sem clicar)',
      'Verifique se o domínio corresponde à empresa mencionada',
      'Desconfie de URLs encurtadas (bit.ly, tinyurl, etc.)',
      'Prefira digitar o endereço diretamente no navegador'
    ],
    icon: 'link'
  },
  {
    id: 'bp-03',
    category: 'Identificação de E-mails',
    title: 'Sinais de Alerta',
    description: 'Elementos comuns em e-mails de phishing.',
    tips: [
      'Urgência excessiva ("imediatamente", "sua conta será bloqueada")',
      'Erros de português ou formatação estranha',
      'Saudações genéricas ("Prezado cliente" em vez do seu nome)',
      'Solicitação de dados sensíveis (senhas, cartões)',
      'Anexos não solicitados, especialmente .exe, .zip ou extensões duplas'
    ],
    icon: 'alert-triangle'
  },
  {
    id: 'bp-04',
    category: 'SMS e WhatsApp',
    title: 'Mensagens de Bancos',
    description: 'Como identificar comunicações bancárias legítimas.',
    tips: [
      'Bancos usam shortcodes (números curtos), não celulares comuns',
      'Bancos NUNCA pedem senha ou dados completos do cartão',
      'Bancos não enviam links para cancelar compras',
      'Em caso de dúvida, use o app oficial ou ligue para a central'
    ],
    icon: 'smartphone'
  },
  {
    id: 'bp-05',
    category: 'SMS e WhatsApp',
    title: 'Golpe do Novo Número',
    description: 'Como se proteger do golpe de WhatsApp.',
    tips: [
      'Sempre ligue para o número antigo antes de salvar um novo',
      'Nunca faça PIX/transferências baseado apenas em mensagens',
      'Desconfie de pedidos urgentes que impedem verificação',
      'Confirme pessoalmente solicitações financeiras de conhecidos'
    ],
    icon: 'message-circle'
  },
  {
    id: 'bp-06',
    category: 'Boas Práticas Gerais',
    title: 'Verificação em Dois Canais',
    description: 'A importância de confirmar por outro meio.',
    tips: [
      'Recebeu e-mail suspeito? Ligue para confirmar',
      'Recebeu ligação pedindo dados? Desligue e ligue você para o número oficial',
      'Desconfie de solicitações que pedem sigilo ("não comente com ninguém")',
      'Use canais oficiais para qualquer confirmação'
    ],
    icon: 'shield'
  },
  {
    id: 'bp-07',
    category: 'Boas Práticas Gerais',
    title: 'Proteção de Senhas',
    description: 'Cuidados essenciais com suas credenciais.',
    tips: [
      'Nunca compartilhe senhas, nem com TI (eles não precisam)',
      'Use senhas diferentes para cada serviço',
      'Ative autenticação de dois fatores sempre que possível',
      'Nunca digite senhas em links recebidos por e-mail'
    ],
    icon: 'lock'
  },
  {
    id: 'bp-08',
    category: 'Boas Práticas Gerais',
    title: 'O Que Fazer Se Cair em Golpe',
    description: 'Passos imediatos após identificar um comprometimento.',
    tips: [
      'Troque imediatamente as senhas comprometidas',
      'Informe o setor de TI/Segurança da empresa',
      'Monitore suas contas bancárias por movimentações suspeitas',
      'Registre Boletim de Ocorrência se houver prejuízo financeiro',
      'Não se culpe - golpistas são profissionais em manipulação'
    ],
    icon: 'life-buoy'
  }
];
