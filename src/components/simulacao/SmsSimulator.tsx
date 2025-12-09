'use client';

import { SmsContent } from '@/types';
import { cn } from '@/lib/utils';

interface SmsSimulatorProps {
  content: SmsContent;
  highlights?: string[];
  showHighlights?: boolean;
}

export function SmsSimulator({ content, highlights = [], showHighlights = false }: SmsSimulatorProps) {
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

  const isWhatsApp = content.isWhatsApp;

  return (
    <div className={cn(
      "rounded-2xl overflow-hidden max-w-sm mx-auto shadow-lg",
      isWhatsApp ? "bg-[#e5ddd5]" : "bg-gray-100"
    )}>
      {/* Phone Header */}
      <div className={cn(
        "px-4 py-3 flex items-center gap-3",
        isWhatsApp ? "bg-[#075e54]" : "bg-gray-800"
      )}>
        {/* Back button */}
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        
        {/* Profile */}
        <div className="w-10 h-10 bg-gray-400 rounded-full flex items-center justify-center">
          {content.profileImage ? (
            <img src={content.profileImage} alt="" className="w-full h-full rounded-full object-cover" />
          ) : (
            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
            </svg>
          )}
        </div>
        
        <div className="flex-1">
          <p className="text-white font-medium text-sm">
            {renderHighlightedText(content.sender)}
          </p>
          {isWhatsApp && (
            <p className="text-green-200 text-xs">online</p>
          )}
        </div>
      </div>

      {/* Message Area */}
      <div className={cn(
        "px-3 py-4 min-h-[200px]",
        isWhatsApp && "bg-[url('/images/whatsapp-bg.png')] bg-repeat"
      )}>
        {/* Message Bubble */}
        <div className={cn(
          "max-w-[85%] rounded-lg px-3 py-2 shadow-sm",
          isWhatsApp 
            ? "bg-white rounded-tl-none" 
            : "bg-blue-500 text-white rounded-tl-none ml-0"
        )}>
          <p className={cn(
            "text-sm leading-relaxed whitespace-pre-wrap",
            isWhatsApp ? "text-gray-800" : "text-white"
          )}>
            {renderHighlightedText(content.message)}
          </p>
          
          {/* Timestamp */}
          <div className="flex justify-end mt-1">
            <span className={cn(
              "text-xs",
              isWhatsApp ? "text-gray-500" : "text-blue-100"
            )}>
              {content.timestamp || '10:30'}
            </span>
          </div>
        </div>
      </div>

      {/* Input Area (visual only) */}
      <div className={cn(
        "px-2 py-2 flex items-center gap-2",
        isWhatsApp ? "bg-[#f0f0f0]" : "bg-gray-200"
      )}>
        {isWhatsApp && (
          <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
        )}
        <div className="flex-1 bg-white rounded-full px-4 py-2">
          <span className="text-gray-400 text-sm">Mensagem</span>
        </div>
        <div className={cn(
          "w-10 h-10 rounded-full flex items-center justify-center",
          isWhatsApp ? "bg-[#075e54]" : "bg-blue-500"
        )}>
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
          </svg>
        </div>
      </div>
    </div>
  );
}
