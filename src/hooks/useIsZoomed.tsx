import { useState, useEffect } from 'react';

function useIsZoomed() {
  const isMobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  const isRetina = /Mac OS X/i.test(navigator.userAgent);
  const [isZoomed, setIsZoomed] = useState(() => !isRetina && !isMobileDevice && Math.round(window.devicePixelRatio * 100) > 100);

  useEffect(() => {
    const origDpiRatio = Math.round(window.devicePixelRatio * 100);

    const calculateZoom = () => {
      const curDpiRatio = Math.round(window.devicePixelRatio * 100);

      if (isMobileDevice) {
        setIsZoomed(false);
        return;
      }

      if (curDpiRatio > origDpiRatio) {
        setIsZoomed(true);
      } else {
        setIsZoomed(false);
      }
    };

    window.addEventListener('resize', calculateZoom);

    return () => {
      window.removeEventListener('resize', calculateZoom);
    };
  }, [isMobileDevice]);

  return isZoomed;
}

export default useIsZoomed;
