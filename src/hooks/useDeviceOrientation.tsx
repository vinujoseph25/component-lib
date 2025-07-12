import { useState, useEffect } from 'react';

export type orient = 'portrait' | 'landscape';
const useDeviceOrientation: () => [boolean, orient] = () => {
  const orientationChange = () => {
    if (window.matchMedia('(orientation: portrait)').matches) {
      setOrientation('portrait');
    } else if (window.matchMedia('(orientation: landscape)').matches) {
      setOrientation('landscape');
    }
  };
  const isMobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  const [orientation, setOrientation] = useState<orient>('landscape'); // Default desktop

  useEffect(() => {
    if (isMobileDevice) {
      orientationChange();
      window.addEventListener('orientationchange', orientationChange, false);
      return () => {
        window.removeEventListener('orientationchange', orientationChange);
      };
    }
    // eslint-disable-next-line
  }, []);

  return [isMobileDevice, orientation];
};

export default useDeviceOrientation;
