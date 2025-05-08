import React from 'react';
import Section from '../Section';

interface TechStackProps {
  title: string;
  content: {
    type: string;
    introduction?: string;
    items: {
      name: string;
      technologies: string[];
    }[];
    note?: string;
  };
}

export default function TechStack({ title, content }: TechStackProps) {
  return (
    <Section title={title}>
      {content.introduction && (
        <p className="text-foreground-muted mb-6 leading-relaxed">
          {content.introduction}
        </p>
      )}
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        {content.items.map((item, index) => (
          <div key={index} className="bg-background-alt p-6 rounded-lg border border-border">
            <h3 className="font-medium text-foreground mb-4">{item.name}</h3>
            <ul className="space-y-3">
              {item.technologies.map((tech, techIndex) => (
                <li key={techIndex} className="text-foreground-muted text-sm">
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      
      {content.note && (
        <p className="mt-6 text-foreground-muted text-sm italic">
          <strong>Note:</strong> {content.note}
        </p>
      )}
    </Section>
  );
}
