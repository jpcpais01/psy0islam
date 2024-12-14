import { useEffect, useState } from 'react';

const SplashScreen = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isRemoved, setIsRemoved] = useState(false);

  useEffect(() => {
    const fadeOutTimer = setTimeout(() => {
      setIsVisible(false);
    }, 1200);

    const removeTimer = setTimeout(() => {
      setIsRemoved(true);
    }, 1500);

    return () => {
      clearTimeout(fadeOutTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (isRemoved) return null;

  return (
    <div 
      className={`
        fixed top-0 left-0 w-screen h-screen 
        bg-gradient-to-br from-neutral-900 to-neutral-700
        flex items-center justify-center
        z-[9999]
        transition-all duration-[1200ms] ease-out
        ${isVisible 
          ? 'opacity-100 scale-100' 
          : 'opacity-0 scale-110 pointer-events-none'}
      `}
    >
      <div 
        className="
          text-6xl font-bold text-white 
          tracking-widest uppercase
          drop-shadow-[0_0_20px_rgba(255,255,255,0.5)]
          animate-pulse
        "
      >
        "السَّلامُ عَلَيْكُمْ"
      </div>
    </div>
  );
};

export default SplashScreen;
