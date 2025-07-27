import { useState, useEffect } from 'react';

const LoadingScreen = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(interval);
          setIsLoading(false);
          // Add a small delay before hiding the loading screen
          setTimeout(() => {
            onLoadingComplete();
          }, 500);
          return 100;
        }
        return prevProgress + 1;
      });
    }, 50); // Adjust speed as needed

    return () => clearInterval(interval);
  }, [onLoadingComplete]);

  if (!isLoading) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
      <div className="text-center">
        <div className="text-white text-6xl font-mono font-bold tracking-wider">
          {progress.toString().padStart(3, '0')}
        </div>
        <div className="text-white text-lg mt-4 opacity-70">
          Loading Portfolio...
        </div>
        <div className="w-64 h-1 bg-gray-800 mt-6 mx-auto rounded-full overflow-hidden">
          <div 
            className="h-full bg-white transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen; 