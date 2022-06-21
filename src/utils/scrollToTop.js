import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

export const WrapperScroll = ({children}) => {
    const location = useLocation();
    
    useEffect(() => {
      window.scrollTo({ top: 0 });
    }, [ location ]);
    return children
} 