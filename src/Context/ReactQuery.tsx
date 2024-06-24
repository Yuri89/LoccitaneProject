import React, { PropsWithChildren, createContext } from 'react';
import { useQuery, QueryClient, QueryClientProvider } from '@tanstack/react-query';

interface ReactQueryContextType {
  queryClient: QueryClient;
  useCustomQuery: typeof useQuery;
}

const ReactQueryContext = createContext<ReactQueryContextType | undefined>(undefined);
const queryClient = new QueryClient();

export const ReactQueryProvider = ({ children }:PropsWithChildren) => {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryContext.Provider value={{ queryClient, useCustomQuery: useQuery }}>
        {children}
      </ReactQueryContext.Provider>
    </QueryClientProvider>
  );
};

export const useReactQuery = (): ReactQueryContextType => {
    const context = React.useContext(ReactQueryContext);
    if (!context) {
      throw new Error('useReactQuery must be used within a ReactQueryProvider');
    }
    return context;
  };
  