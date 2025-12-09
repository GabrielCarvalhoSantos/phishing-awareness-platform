// Tipos para os cenários de phishing

export type ModuleType = 'email' | 'sms';

export type ScenarioClassification = 'phishing' | 'legitimate';

export interface Indicator {
  id: string;
  label: string;
  description: string;
  highlight?: string; // texto específico a destacar na simulação
}

export interface TheoreticalFoundation {
  concept: string;
  author: string;
  explanation: string;
}

export interface EmailContent {
  from: string;
  to?: string;
  subject: string;
  body: string;
  attachment?: {
    name: string;
    type: string;
  };
  timestamp?: string;
}

export interface SmsContent {
  sender: string;
  message: string;
  timestamp?: string;
  isWhatsApp?: boolean;
  profileImage?: string;
}

export interface Scenario {
  id: string;
  module: ModuleType;
  title: string;
  description: string;
  classification: ScenarioClassification;
  content: EmailContent | SmsContent;
  indicators: Indicator[];
  theoreticalFoundation: TheoreticalFoundation[];
  preventiveTip: string;
  difficulty: 'easy' | 'medium' | 'hard';
}

export interface UserAnswer {
  scenarioId: string;
  answer: ScenarioClassification;
  isCorrect: boolean;
  timestamp: Date;
}

export interface SessionProgress {
  completedScenarios: string[];
  correctAnswers: number;
  totalAnswered: number;
}
