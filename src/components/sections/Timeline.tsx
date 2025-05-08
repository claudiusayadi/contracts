import React from 'react';
import Section from '../Section';

interface TimelineProps {
  title: string;
  content: {
    type: string;
    introduction?: string;
    columns: string[];
    rows: {
      phase: string;
      duration: string;
      description: string;
    }[];
    footer: string;
  };
}

export default function Timeline({ title, content }: TimelineProps) {
  return (
    <Section title={title}>
      {content.introduction && (
        <p className="text-foreground-muted mb-6">{content.introduction}</p>
      )}
      
      <div className="space-y-6">
        {content.rows.map((phase, index) => (
          <div key={index} className="border-l-2 border-primary pl-4">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <h3 className="font-medium text-foreground">{phase.phase}</h3>
              <span className="text-foreground-muted text-sm">{phase.duration}</span>
            </div>
            <p className="text-foreground-muted mt-1">{phase.description}</p>
          </div>
        ))}
      </div>
      
      <div className="mt-8 text-foreground font-medium">
        {content.footer}
      </div>
    </Section>
  );
}
