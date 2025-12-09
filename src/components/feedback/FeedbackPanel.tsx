'use client';

import { Scenario, ScenarioClassification } from '@/types';
import { Card, CardContent, Badge, Button } from '@/components/ui';
import { cn } from '@/lib/utils';

interface FeedbackPanelProps {
  scenario: Scenario;
  userAnswer: ScenarioClassification;
  onContinue: () => void;
  onBackToList: () => void;
}

export function FeedbackPanel({ scenario, userAnswer, onContinue, onBackToList }: FeedbackPanelProps) {
  const isCorrect = userAnswer === scenario.classification;
  const isPhishing = scenario.classification === 'phishing';

  return (
    <div className="space-y-6">
      {/* Result Banner */}
      <div className={cn(
        "rounded-xl p-6 text-center",
        isCorrect 
          ? "bg-green-50 border-2 border-green-200" 
          : "bg-red-50 border-2 border-red-200"
      )}>
        <div className={cn(
          "w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center",
          isCorrect ? "bg-green-100" : "bg-red-100"
        )}>
          {isCorrect ? (
            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          ) : (
            <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          )}
        </div>
        
        <h2 className={cn(
          "text-2xl font-bold mb-2",
          isCorrect ? "text-green-800" : "text-red-800"
        )}>
          {isCorrect ? "Parabéns! Você acertou!" : "Ops! Você errou."}
        </h2>
        
        <p className={cn(
          "text-lg",
          isCorrect ? "text-green-700" : "text-red-700"
        )}>
          Esta mensagem {isPhishing ? "era" : "não era"} uma tentativa de phishing.
        </p>
      </div>

      {/* Classification */}
      <Card>
        <CardContent>
          <div className="flex items-center justify-between">
            <span className="text-gray-700 font-medium">Classificação Real:</span>
            <Badge variant={isPhishing ? "danger" : "success"} size="md">
              {isPhishing ? "🎣 PHISHING" : "✓ LEGÍTIMO"}
            </Badge>
          </div>
        </CardContent>
      </Card>

      {/* Indicators Analysis */}
      <Card>
        <CardContent>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            {isPhishing ? "🔍 Indicadores de Phishing Identificados" : "✅ Indicadores de Legitimidade"}
          </h3>
          
          <div className="space-y-3">
            {scenario.indicators.map((indicator) => (
              <div 
                key={indicator.id}
                className={cn(
                  "p-4 rounded-lg border-l-4",
                  isPhishing 
                    ? "bg-red-50 border-red-400" 
                    : "bg-green-50 border-green-400"
                )}
              >
                <p className={cn(
                  "font-semibold mb-1",
                  isPhishing ? "text-red-800" : "text-green-800"
                )}>
                  {indicator.label}
                </p>
                <p className="text-gray-700 text-sm">
                  {indicator.description}
                </p>
                {indicator.highlight && (
                  <p className="mt-2 text-xs">
                    <span className="text-gray-500">Trecho: </span>
                    <code className="bg-yellow-100 px-1 rounded text-gray-800">
                      {indicator.highlight}
                    </code>
                  </p>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Theoretical Foundation */}
      <Card>
        <CardContent>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            📚 Fundamentação Teórica
          </h3>
          
          <div className="space-y-4">
            {scenario.theoreticalFoundation.map((foundation, index) => (
              <div key={index} className="bg-blue-50 p-4 rounded-lg">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-blue-900">{foundation.concept}</p>
                    <p className="text-sm text-blue-700 mb-2">{foundation.author}</p>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      "{foundation.explanation}"
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Preventive Tip */}
      <Card className="bg-amber-50 border-amber-200">
        <CardContent>
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
              <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-amber-900 mb-2">💡 Dica Preventiva</h3>
              <p className="text-amber-800 leading-relaxed">
                {scenario.preventiveTip}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Actions */}
      <div className="flex flex-col sm:flex-row gap-3 pt-4">
        <Button 
          variant="primary" 
          size="lg" 
          className="flex-1"
          onClick={onContinue}
        >
          Próximo Cenário
        </Button>
        <Button 
          variant="secondary" 
          size="lg"
          onClick={onBackToList}
        >
          Voltar à Lista
        </Button>
      </div>
    </div>
  );
}
