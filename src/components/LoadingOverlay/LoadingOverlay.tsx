import { Loader2 } from 'lucide-react';
import './LoadingOverlay.scss';

interface LoadingOverlayProps {
  isLoading: boolean;
  message?: string;
}

export function LoadingOverlay({
  isLoading,
  message = 'Loading...',
}: LoadingOverlayProps) {
  if (!isLoading) return null;

  return (
    <section
      className="loading-overlay"
      role="alert"
      aria-live="polite"
      aria-busy="true"
    >
      <article className="loading-overlay__content">
        <Loader2
          className="loading-overlay__spinner"
          size={48}
          aria-hidden="true"
        />
        <p className="loading-overlay__message">{message}</p>
      </article>
    </section>
  );
}
