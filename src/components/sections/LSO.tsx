import React from 'react';
import Section from '../Section';

interface LSOProps {
  title: string;
  content: {
    type: string;
    introduction?: string;
    cost: string;
    benefits: string[];
    note?: string;
  };
}

export default function LSO({ title, content }: LSOProps) {
  return (
    <Section title={title}>
      {content.introduction && (
        <p className="text-foreground-muted mb-6">{content.introduction}</p>
      )}
      
      <div className="bg-primary-light p-6 rounded-md">
        <h3 className="font-medium text-foreground mb-4">
          Package Cost: <span className="text-primary-dark">{content.cost}</span>
        </h3>
        
        <h4 className="font-medium text-foreground mb-2">Package Includes:</h4>
        <ul className="list-disc pl-5 space-y-2 text-foreground-muted">
          {content.benefits.map((benefit, index) => (
            <li key={index}>{benefit}</li>
          ))}
        </ul>
        
        {content.note && (
          <p className="mt-4 text-foreground-muted text-sm italic">
            * {content.note}
          </p>
        )}
      </div>
    </Section>
  );
}
