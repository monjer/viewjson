import React from 'react';
import { Loader2 } from 'lucide-react';

type LoadingSize = 'sm' | 'md' | 'lg';
type LoadingVariant = 'spinner' | 'dots' | 'pulse';
enum LoadingVariants {
  Spinner = 'spinner',
  Dots = 'dots',
  Pulse = 'pulse',
}

interface SpinnerProps {
  variant?: LoadingVariant;
  size?: LoadingSize;
  text?: string;
  fullScreen?: boolean;
}

const SizeClassOfLoadingVariants = {
  [LoadingVariants.Spinner]: {
    sm: 'w-2 h-2',
    md: 'w-6 h-6',
    lg: 'w-8 h-8',
  },
  [LoadingVariants.Dots]: {
    sm: 'w-2 h-2',
    md: 'w-2 h-2',
    lg: 'w-6 h-6',
  },
  [LoadingVariants.Pulse]: {
    sm: 'w-2 h-2',
    md: 'w-4 h-4',
    lg: 'w-6 h-6',
  },
};

const Spinner: React.FC<SpinnerProps> = ({
  variant = 'dots',
  size = 'md',
  text = 'Loading...',
  fullScreen = false,
}) => {
  const containerClasses = fullScreen
    ? 'fixed inset-0 bg-gray-900/50 backdrop-blur-sm'
    : 'w-full';

  const renderLoadingIndicator = () => {
    switch (variant) {
      case 'dots':
        return (
          <div className="flex space-x-2">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className={`${SizeClassOfLoadingVariants[LoadingVariants.Dots][size]} rounded-full bg-slate-600 animate-[bounce_1s_ease-in-out_infinite] dark:bg-slate-100`}
                style={{ animationDelay: `${i * 0.2}s` }}
              />
            ))}
          </div>
        );
      case 'pulse':
        return (
          <div className={`${SizeClassOfLoadingVariants[LoadingVariants.Pulse][size]} relative`}>
            <div className="absolute inset-0 rounded-full bg-slate-600 animate-ping opacity-75 dark:bg-slate-100" />
            <div className="relative rounded-full bg-slate-600 dark:bg-slate-100" />
          </div>
        );
      default:
        return (
          <Loader2
            className={`${SizeClassOfLoadingVariants[LoadingVariants.Spinner][size]} text-slate-600 animate-spin dark:text-white`}
          />
        );
    }
  };

  return (
    <div className={`${containerClasses} flex items-center justify-center`}>
      <div className="flex flex-col items-center space-y-4 p-6">
        {renderLoadingIndicator()}
        {text && (
          <span className={`text-${size === 'sm' ? 'sm' : 'base'} text-gray-700 dark:text-gray-200`}>
            {text}
          </span>
        )}
      </div>
    </div>
  );
};

export default Spinner;