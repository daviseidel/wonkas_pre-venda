// /app/compra/CounterContext.tsx
import React, { createContext, useState, ReactNode } from 'react';

interface CounterContextProps {
  total: number;
  updateTotal: (value: number) => void;
}

export const CounterContext = createContext<CounterContextProps>({ total: 0, updateTotal: () => {} });

interface CounterProviderProps {
  children: ReactNode;
}

export const CounterProvider = ({ children }: CounterProviderProps) => {
  const [total, updateTotal] = useState(0);

  //const updateTotal = (value: number) => {
  //  setTotal(prevTotal => prevTotal + value);
  //};

  return (
    <CounterContext.Provider value={{ total, updateTotal }}>
      {children}
    </CounterContext.Provider>
  );
};
