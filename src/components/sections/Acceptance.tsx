import React from 'react';
import Section from '../Section';

interface AcceptanceProps {
  title: string;
  content: {
    type: string;
    text: string;
    signatures: {
      role: string;
      name: string;
      email: string;
    }[];
  };
}

export default function Acceptance({ title, content }: AcceptanceProps) {
  return (
    <Section title={title}>
      <p className="text-foreground-muted mb-8 leading-relaxed">
        {content.text}
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {content.signatures.map((signature, index) => (
          <div key={index} className="border border-border rounded-md p-6">
            <h3 className="font-medium text-foreground mb-2">{signature.role}</h3>
            <p className="text-foreground-muted">{signature.name}</p>
            <p className="text-foreground-muted text-sm mb-4">{signature.email}</p>
            
            <div className="mt-6 pt-4 border-t border-border">
              <p className="text-foreground-muted text-sm">Signature: _______________________</p>
              <p className="text-foreground-muted text-sm mt-2">Date: _______________________</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
