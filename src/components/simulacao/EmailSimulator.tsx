'use client';

import { EmailContent } from '@/types';
import { cn } from '@/lib/utils';

interface EmailSimulatorProps {
  content: EmailContent;
  highlights?: string[];
  showHighlights?: boolean;
}

export function EmailSimulator({ content, highlights = [], showHighlights = false }: EmailSimulatorProps) {
  const highlightText = (text: string) => {
    if (!showHighlights || highlights.length === 0) return text;
    
    let result = text;
    highlights.forEach(highlight => {
      const regex = new RegExp(`(${highlight.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
      result = result.replace(regex, '[[HIGHLIGHT]]$1[[/HIGHLIGHT]]');
    });
    
    return result;
  };

  const renderHighlightedText = (text: string) => {
    const parts = highlightText(text).split(/\[\[HIGHLIGHT\]\]|\[\[\/HIGHLIGHT\]\]/);
    let isHighlight = false;
    
    return parts.map((part, index) => {
      if (index > 0) isHighlight = !isHighlight;
      if (isHighlight) {
        return (
          <mark key={index} className="bg-yellow-200 px-0.5 rounded">
            {part}
          </mark>
        );
      }
      return part;
    });
  };

  return (
    <div className="bg-white rounded-lg border border-gray-300 shadow-sm overflow-hidden max-w-2xl mx-auto">
      {/* Email Header - simula interface de email */}
      <div className="bg-gray-100 border-b border-gray-300 px-4 py-3">
        <div className="flex items-center gap-2 mb-2">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-400"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
            <div className="w-3 h-3 rounded-full bg-green-400"></div>
          </div>
          <span className="text-xs text-gray-500 ml-2">Caixa de Entrada</span>
        </div>
      </div>

      {/* Email Content */}
      <div className="p-4">
        {/* From */}
        <div className="flex items-start gap-3 mb-3">
          <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
            <span className="text-white font-semibold text-sm">
              {content.from.charAt(0).toUpperCase()}
            </span>
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="font-medium text-gray-900">
                {renderHighlightedText(content.from.split('@')[0])}
              </span>
              <span className="text-sm text-gray-500">
                &lt;{renderHighlightedText(content.from)}&gt;
              </span>
            </div>
            {content.timestamp && (
              <span className="text-xs text-gray-400">{content.timestamp}</span>
            )}
          </div>
        </div>

        {/* Subject */}
        <h2 className="text-lg font-semibold text-gray-900 mb-4 pb-3 border-b border-gray-200">
          {renderHighlightedText(content.subject)}
        </h2>

        {/* Body */}
        <div className="text-gray-700 whitespace-pre-wrap leading-relaxed">
          {renderHighlightedText(content.body)}
        </div>

        {/* Attachment */}
        {content.attachment && (
          <div className="mt-4 pt-4 border-t border-gray-200">
            <p className="text-xs text-gray-500 mb-2">Anexo:</p>
            <div className={cn(
              "inline-flex items-center gap-2 px-3 py-2 rounded-lg border",
              showHighlights && highlights.some(h => content.attachment?.name.includes(h))
                ? "bg-yellow-50 border-yellow-300"
                : "bg-gray-50 border-gray-200"
            )}>
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
              </svg>
              <span className="text-sm">
                {renderHighlightedText(content.attachment.name)}
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
