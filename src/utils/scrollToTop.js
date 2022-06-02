import { useLocation } from 'react-router-dom';
import { useLayoutEffect } from 'react';

export const WrapperScroll = ({children}) => {
    const location = useLocation();
    useLayoutEffect(() => {
      window.scrollTo({ top: 0 });
    }, [ location ]);
    return children
} 