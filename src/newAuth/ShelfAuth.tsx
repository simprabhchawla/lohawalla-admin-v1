import  { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const SelfAuth = ({ children }:any) => {
  const navigate = useNavigate();

  const isAuthenticated = true;

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
    }
  }, [navigate, isAuthenticated]);

  return isAuthenticated ? <>{children}</> : null;
};

export default SelfAuth;
