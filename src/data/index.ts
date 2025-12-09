export { emailScenarios } from './email-scenarios';
export { smsScenarios } from './sms-scenarios';
export { bestPractices } from './best-practices';

import { emailScenarios } from './email-scenarios';
import { smsScenarios } from './sms-scenarios';
import { Scenario } from '@/types';

export const allScenarios: Scenario[] = [...emailScenarios, ...smsScenarios];

export const getScenarioById = (id: string): Scenario | undefined => {
  return allScenarios.find(scenario => scenario.id === id);
};

export const getScenariosByModule = (module: 'email' | 'sms'): Scenario[] => {
  return allScenarios.filter(scenario => scenario.module === module);
};
