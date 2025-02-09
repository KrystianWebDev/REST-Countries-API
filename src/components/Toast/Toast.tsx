import React from 'react';
import { X } from 'lucide-react';
import './Toast.scss';

type ToastType = 'success' | 'error' | 'warning' | 'info';

interface ToastProps {
  message: string;
  onClose?: () => void;
  type?: ToastType;
  duration?: number | null;
}

export function Toast({
  message,
  onClose,
  type,
  duration = 3000,
}: ToastProps) {
  const [isVisible, setIsVisible] = React.useState(true);

  React.useEffect(() => {
    if (duration !== null) {
      const timer = setTimeout(() => {
        setIsVisible(false);
        onClose?.();
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [duration, onClose]);

  if (!isVisible) return null;

  return (
    <section
      role="alert"
      aria-live="polite"
      className={`toast toast--${type} ${isVisible}? toast--visible : ''`}
    >
      <p className="toast__message">{message}</p>
      <button
        onClick={() => {
          setIsVisible(false);
          onClose?.();
        }}
        className="toast__close-button"
        aria-label="Close Notification "
      >
        <X size={18} />
      </button>
    </section>
  );
}
