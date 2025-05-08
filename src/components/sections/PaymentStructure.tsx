import React from 'react';
import Section from '../Section';

interface PaymentStructureProps {
  title: string;
  content: {
    type: string;
    introduction?: string;
    columns: string[];
    rows: {
      milestone: string;
      payment: string;
      description: string;
    }[];
    footer: {
      total: string;
    };
    paymentMethods?: string[];
  };
}

export default function PaymentStructure({ title, content }: PaymentStructureProps) {
  return (
    <Section title={title}>
      {content.introduction && (
        <p className="text-foreground-muted mb-6">{content.introduction}</p>
      )}
      
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left py-2 font-medium text-foreground">{content.columns[0]}</th>
              <th className="text-right py-2 font-medium text-foreground">{content.columns[1]}</th>
              <th className="text-left py-2 pl-6 font-medium text-foreground hidden md:table-cell">{content.columns[2]}</th>
            </tr>
          </thead>
          <tbody>
            {content.rows.map((row, index) => (
              <tr key={index} className="border-b border-border">
                <td className="py-3 text-foreground-muted">{row.milestone}</td>
                <td className="py-3 text-right text-foreground-muted">{row.payment}</td>
                <td className="py-3 pl-6 text-foreground-muted hidden md:table-cell">{row.description}</td>
              </tr>
            ))}
            <tr className="border-b border-border font-medium">
              <td className="py-3">Total</td>
              <td className="py-3 text-right">{content.footer.total}</td>
              <td className="py-3 pl-6 hidden md:table-cell"></td>
            </tr>
          </tbody>
        </table>
      </div>
      
      {content.paymentMethods && (
        <div className="mt-6">
          <h3 className="font-medium text-foreground mb-2">Payment Methods</h3>
          <ul className="list-disc pl-5 space-y-1 text-foreground-muted">
            {content.paymentMethods.map((method, index) => (
              <li key={index}>{method}</li>
            ))}
          </ul>
        </div>
      )}
    </Section>
  );
}
