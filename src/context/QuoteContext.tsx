import { createContext, useContext, useState, type ReactNode } from 'react';

interface QuoteContextType {
  isOpen: boolean;
  productName?: string;
  openQuote: (productName?: string) => void;
  closeQuote: () => void;
}

const QuoteContext = createContext<QuoteContextType | undefined>(undefined);

export function QuoteProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [productName, setProductName] = useState<string | undefined>();

  const openQuote = (name?: string) => {
    setProductName(name);
    setIsOpen(true);
  };

  const closeQuote = () => {
    setIsOpen(false);
    setTimeout(() => setProductName(undefined), 300); // Clear after animation
  };

  return (
    <QuoteContext.Provider value={{ isOpen, productName, openQuote, closeQuote }}>
      {children}
    </QuoteContext.Provider>
  );
}

export function useQuote() {
  const context = useContext(QuoteContext);
  if (context === undefined) {
    throw new Error('useQuote must be used within a QuoteProvider');
  }
  return context;
}
