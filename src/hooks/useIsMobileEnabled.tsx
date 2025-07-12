import { VIEW_SIZES } from '../constants';
import { useMediaQuery } from 'react-responsive';

const useIsMobileEnabled = (maxWidth: number = VIEW_SIZES.MAX_MOBILE_TABLET) => {
  const isMobile = useMediaQuery({ query: `(max-width: ${maxWidth}px)` });
  return isMobile;
};

export default useIsMobileEnabled;
