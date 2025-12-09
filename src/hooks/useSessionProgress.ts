'use client';

import { useState, useEffect, useCallback } from 'react';
import { SessionProgress, UserAnswer, ScenarioClassification } from '@/types';

const STORAGE_KEY = 'phishing-awareness-progress';

const initialProgress: SessionProgress = {
  completedScenarios: [],
  correctAnswers: 0,
  totalAnswered: 0,
};

export function useSessionProgress() {
  const [progress, setProgress] = useState<SessionProgress>(initialProgress);
  const [isLoaded, setIsLoaded] = useState(false);

  // Carregar progresso do localStorage na montagem
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        try {
          setProgress(JSON.parse(saved));
        } catch {
          setProgress(initialProgress);
        }
      }
      setIsLoaded(true);
    }
  }, []);

  // Salvar progresso no localStorage quando mudar
  useEffect(() => {
    if (isLoaded && typeof window !== 'undefined') {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
    }
  }, [progress, isLoaded]);

  const recordAnswer = useCallback((
    scenarioId: string,
    userAnswer: ScenarioClassification,
    correctAnswer: ScenarioClassification
  ): UserAnswer => {
    const isCorrect = userAnswer === correctAnswer;
    
    const answer: UserAnswer = {
      scenarioId,
      answer: userAnswer,
      isCorrect,
      timestamp: new Date(),
    };

    setProgress(prev => ({
      completedScenarios: prev.completedScenarios.includes(scenarioId)
        ? prev.completedScenarios
        : [...prev.completedScenarios, scenarioId],
      correctAnswers: prev.correctAnswers + (isCorrect ? 1 : 0),
      totalAnswered: prev.totalAnswered + 1,
    }));

    return answer;
  }, []);

  const isScenarioCompleted = useCallback((scenarioId: string): boolean => {
    return progress.completedScenarios.includes(scenarioId);
  }, [progress.completedScenarios]);

  const resetProgress = useCallback(() => {
    setProgress(initialProgress);
    if (typeof window !== 'undefined') {
      localStorage.removeItem(STORAGE_KEY);
    }
  }, []);

  const getCompletionPercentage = useCallback((moduleScenarioIds: string[]): number => {
    const completed = moduleScenarioIds.filter(id => 
      progress.completedScenarios.includes(id)
    ).length;
    return Math.round((completed / moduleScenarioIds.length) * 100);
  }, [progress.completedScenarios]);

  return {
    progress,
    isLoaded,
    recordAnswer,
    isScenarioCompleted,
    resetProgress,
    getCompletionPercentage,
  };
}
