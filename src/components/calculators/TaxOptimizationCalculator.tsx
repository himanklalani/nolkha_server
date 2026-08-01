'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Eyebrow } from '../ui/Eyebrow';

export function TaxOptimizationCalculator() {
  const [revenue, setRevenue] = useState<number>(50000000); // 5 Crore default
  const [margin, setMargin] = useState<number>(20); // 20% Net Profit Margin

  const netProfit = revenue * (margin / 100);

  // --- STANDARD TAX REGIME LOGIC ---
  const standardBaseRate = revenue <= 4000000000 ? 0.25 : 0.30;
  
  let standardTaxBeforeCess = netProfit * standardBaseRate;

  if (netProfit > 100000000) { // > 10 Cr
    const taxOn10Cr = 100000000 * standardBaseRate * 1.07;
    const computedTax = (netProfit * standardBaseRate) * 1.12;
    const extraIncome = netProfit - 100000000;
    // Marginal Relief check
    if (computedTax - taxOn10Cr > extraIncome) {
      standardTaxBeforeCess = taxOn10Cr + extraIncome;
    } else {
      standardTaxBeforeCess = computedTax;
    }
  } else if (netProfit > 10000000) { // > 1 Cr
    const taxOn1Cr = 10000000 * standardBaseRate;
    const computedTax = (netProfit * standardBaseRate) * 1.07;
    const extraIncome = netProfit - 10000000;
    // Marginal Relief check
    if (computedTax - taxOn1Cr > extraIncome) {
      standardTaxBeforeCess = taxOn1Cr + extraIncome;
    } else {
      standardTaxBeforeCess = computedTax;
    }
  }
  
  const standardCess = standardTaxBeforeCess * 0.04;
  const estimatedTax = standardTaxBeforeCess + standardCess;

  // --- CONCESSIONAL REGIME LOGIC (Sec 115BAA) ---
  // Effective rate is exactly 25.168% (22% Base + 10% Flat Surcharge + 4% Cess)
  const optimizedTax = netProfit * 0.25168;

  const savings = Math.max(0, estimatedTax - optimizedTax);

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(val);
  };

  return (
    <div className="w-full bg-black/5 rounded-3xl p-8 md:p-12 border border-black/5 relative overflow-hidden">
      <Eyebrow align="left" color="primary" className="mb-8">Diagnostic Tool</Eyebrow>
      <h3 className="text-3xl font-serif text-secondary tracking-tight mb-8">Corporate Tax Optimization Estimator (Sec 115BAA)</h3>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Input Section */}
        <div className="flex flex-col gap-8">
          <label className="flex flex-col gap-3">
            <div className="flex justify-between items-center">
              <span className="text-sm font-bold uppercase tracking-widest text-muted">Annual Turnover</span>
              <span className="text-xl font-serif text-secondary">{formatCurrency(revenue)}</span>
            </div>
            <input 
              type="range" 
              min="10000000" // 1 Cr
              max="5000000000" // 500 Cr
              step="10000000"
              value={revenue} 
              onChange={(e) => setRevenue(Number(e.target.value))}
              className="w-full accent-primary"
            />
          </label>

          <label className="flex flex-col gap-3">
            <div className="flex justify-between items-center">
              <span className="text-sm font-bold uppercase tracking-widest text-muted">Net Profit Margin</span>
              <span className="text-xl font-serif text-secondary">{margin}%</span>
            </div>
            <input 
              type="range" 
              min="5" 
              max="50" 
              step="1"
              value={margin} 
              onChange={(e) => setMargin(Number(e.target.value))}
              className="w-full accent-primary"
            />
          </label>

          <p className="text-xs text-muted/70 leading-relaxed max-w-sm">
            * Computation strictly compares Standard Corporate Tax Regime (tiered surcharge) vs Concessional Regime (Sec 115BAA - flat 25.168%). This ignores specific MAT credits, Chapter VI-A deductions, and brought-forward losses.
          </p>
        </div>

        {/* Output Section */}
        <div className="bg-white rounded-2xl p-8 shadow-sm flex flex-col gap-6">
          <div className="flex justify-between items-end border-b border-black/5 pb-4">
            <span className="text-xs font-bold uppercase tracking-widest text-muted">Standard Regime Liability</span>
            <span className="text-xl font-mono text-secondary opacity-50">{formatCurrency(estimatedTax)}</span>
          </div>
          
          <div className="flex justify-between items-end border-b border-black/5 pb-4">
            <span className="text-xs font-bold uppercase tracking-widest text-primary">Sec 115BAA Opt-In Liability</span>
            <span className="text-2xl font-mono text-secondary">{formatCurrency(optimizedTax)}</span>
          </div>

          <motion.div 
            key={savings}
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="mt-4 bg-accent/10 rounded-xl p-6 text-center border border-accent/20"
          >
            <span className="block text-[10px] font-bold uppercase tracking-widest text-accent mb-2">Capital Preserved (Annually)</span>
            <span className="block text-4xl font-serif text-accent tracking-tighter">{formatCurrency(savings)}</span>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
