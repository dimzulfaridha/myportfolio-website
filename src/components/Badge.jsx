import React from 'react';

export function Badge({ children, variant = 'default' }) {
  const variants = {
    default: "bg-slate-800/50 text-slate-300 border-slate-700/50",
    primary: "bg-blue-950/40 text-blue-400 border-blue-900/50",
    accent: "bg-sky-950/40 text-sky-400 border-sky-900/50",
  };

  return (
    <span className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium tracking-wide ${variants[variant]}`}>
      {children}
    </span>
  );
}
