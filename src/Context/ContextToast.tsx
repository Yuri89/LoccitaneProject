import React, { ReactNode, createContext, useContext } from 'react';
import { SnackbarProvider, useSnackbar, VariantType, SnackbarKey } from 'notistack';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

interface ToastContextProps {
  showToast: (message: string, variant: VariantType) => void;
}

const ToastContext = createContext<ToastContextProps | undefined>(undefined);

export const ToastProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const showToast = (message: string, variant: VariantType) => {
    enqueueSnackbar(message, {
      variant,
      autoHideDuration: 4000,
      action: (key: SnackbarKey) => (
        <IconButton onClick={() => closeSnackbar(key)}>
          <CloseIcon />
        </IconButton>
      ),
    });
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
    </ToastContext.Provider>
  );
};

export const useToasts = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToasts must be used within a ToastProvider');
  }
  return context;
};

// Wrapper component to provide SnackbarProvider and ToastProvider
export const ToastWrapper: React.FC<{ children: ReactNode }> = ({ children }) => (
  <SnackbarProvider maxSnack={3} anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
    <ToastProvider>{children}</ToastProvider>
  </SnackbarProvider>
);
