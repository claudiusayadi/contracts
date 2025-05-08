import React from 'react';
import Section from '../Section';

interface ScopeOfDeliveryProps {
  title: string;
  content: {
    type: string;
    introduction?: string;
    categories: {
      name: string;
      items: string[];
    }[];
  };
}

export default function ScopeOfDelivery({ title, content }: ScopeOfDeliveryProps) {
  return (
    <Section title={title}>
      {content.introduction && (
        <p className="text-foreground-muted mb-6">{content.introduction}</p>
      )}
      
      <div className="space-y-8">
        {content.categories.map((category, index) => (
          <div key={index}>
            <h3 className="font-medium text-foreground mb-3">{category.name}</h3>
            <ul className="list-disc pl-5 space-y-2 text-foreground-muted">
              {category.items.map((item, itemIndex) => (
                <li key={itemIndex}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
