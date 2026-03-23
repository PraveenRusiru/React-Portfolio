import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react';

export type NotificationType = 'loading' | 'success' | 'info' | 'error' | 'link';

export interface Notification {
  id: string;
  type: NotificationType;
  message: string;
  icon?: 'download' | 'clipboard' | 'plane' | 'link' | 'check' | 'spinner';
  duration?: number;
}

interface NotificationContextType {
  notification: Notification | null;
  triggerNotification: (notification: Omit<Notification, 'id'>) => void;
  clearNotification: () => void;
}

const NotificationContext = createContext<NotificationContextType | undefined>(undefined);

export const NotificationProvider = ({ children }: { children: ReactNode }) => {
  const [notification, setNotification] = useState<Notification | null>(null);

  const triggerNotification = useCallback((notif: Omit<Notification, 'id'>) => {
    const id = Math.random().toString(36).substring(7);
    setNotification({ ...notif, id });

    // Auto-clear after duration (default 2.5s for success/info, 5s for loading)
    const duration = notif.duration ?? (notif.type === 'loading' ? 5000 : 2500);
    
    if (notif.type !== 'loading') {
      setTimeout(() => {
        setNotification((current) => (current?.id === id ? null : current));
      }, duration);
    }
  }, []);

  const clearNotification = useCallback(() => {
    setNotification(null);
  }, []);

  return (
    <NotificationContext.Provider value={{ notification, triggerNotification, clearNotification }}>
      {children}
    </NotificationContext.Provider>
  );
};

export const useNotification = () => {
  const context = useContext(NotificationContext);
  if (context === undefined) {
    throw new Error('useNotification must be used within a NotificationProvider');
  }
  return context;
};
