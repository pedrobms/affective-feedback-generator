
import React from 'react';

interface FeedbackDisplayProps {
  feedback: string;
}

interface FeedbackSectionProps {
  title: string;
  content: string;
  icon?: string;
  titleColor?: string;
  borderColor?: string;
}

const FeedbackSection: React.FC<FeedbackSectionProps> = ({ title, content, icon, titleColor = "text-slate-100", borderColor = "border-slate-700" }) => {
  // Clean the title for display: remove icon (if passed as part of title string) and colon
  const cleanedTitle = title.replace(icon || '', '').replace(':', '').trim();

  return (
    <div className={`bg-slate-800 p-6 rounded-xl shadow-lg ring-1 ring-slate-700 border-l-4 ${borderColor}`}>
      <h3 className={`text-2xl font-semibold ${titleColor} mb-4 flex items-center`}>
        {icon && <span className="mr-3 text-3xl">{icon}</span>}
        {cleanedTitle}
      </h3>
      <pre className="whitespace-pre-wrap text-slate-300 leading-relaxed text-base font-sans">{content}</pre>
    </div>
  );
};

export const FeedbackDisplay: React.FC<FeedbackDisplayProps> = ({ feedback }) => {
  const technicalMarker = "✅ Feedback Técnico:";
  const affectiveMarker = "❤️ Feedback Afetivo:";

  let technicalContent: string | null = null;
  let affectiveContent: string | null = null;
  let remainingText = feedback;

  const techMarkerIndex = remainingText.indexOf(technicalMarker);
  const affMarkerIndex = remainingText.indexOf(affectiveMarker);

  if (techMarkerIndex !== -1 && affMarkerIndex !== -1) {
    if (techMarkerIndex < affMarkerIndex) {
      technicalContent = remainingText.substring(techMarkerIndex + technicalMarker.length, affMarkerIndex).trim();
      affectiveContent = remainingText.substring(affMarkerIndex + affectiveMarker.length).trim();
    } else { // Affective marker appears before technical
      affectiveContent = remainingText.substring(affMarkerIndex + affectiveMarker.length, techMarkerIndex).trim();
      technicalContent = remainingText.substring(techMarkerIndex + technicalMarker.length).trim();
    }
  } else if (techMarkerIndex !== -1) {
    technicalContent = remainingText.substring(techMarkerIndex + technicalMarker.length).trim();
  } else if (affMarkerIndex !== -1) {
    affectiveContent = remainingText.substring(affMarkerIndex + affectiveMarker.length).trim();
  }

  if (!technicalContent && !affectiveContent) { // No markers found, display raw feedback
    return <FeedbackSection title="Feedback Recebido:" content={feedback} borderColor="border-sky-500" />;
  }

  return (
    <div className="space-y-8">
      {technicalContent && (
        <FeedbackSection 
          title="Feedback Técnico" 
          content={technicalContent} 
          icon="✅" 
          titleColor="text-sky-400"
          borderColor="border-sky-500"
        />
      )}
      {affectiveContent && (
        <FeedbackSection 
          title="Feedback Afetivo" 
          content={affectiveContent} 
          icon="❤️" 
          titleColor="text-pink-400"
          borderColor="border-pink-500"
        />
      )}
    </div>
  );
};
