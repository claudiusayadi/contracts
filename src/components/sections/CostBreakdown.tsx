import React from 'react';
import Section from '../Section';

interface CostBreakdownProps {
  title: string;
  content: {
    type: string;
    introduction?: string;
    columns: string[];
    rows: {
      item: string;
      cost: string;
      description: string;
    }[];
    footer: {
      totalEstimate: string;
      totalNotes: string;
      payableTotal: string;
      payableTotalNotes: string;
    };
  };
}

export default function CostBreakdown({ title, content }: CostBreakdownProps) {
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
                <td className="py-3 text-foreground-muted">{row.item}</td>
                <td className="py-3 text-right text-foreground-muted">{row.cost}</td>
                <td className="py-3 pl-6 text-foreground-muted hidden md:table-cell">{row.description}</td>
              </tr>
            ))}
            <tr className="border-b border-border font-medium">
              <td className="py-3">Total</td>
              <td className="py-3 text-right">{content.footer.totalEstimate}</td>
              <td className="py-3 pl-6 text-foreground-muted hidden md:table-cell">{content.footer.totalNotes}</td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <div className="mt-4 text-foreground-muted">
        <p><strong>Payable Total:</strong> {content.footer.payableTotal} ({content.footer.payableTotalNotes})</p>
      </div>
    </Section>
  );
}
