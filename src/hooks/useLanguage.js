import { useLocation, useNavigate } from 'react-router-dom';
import { useCallback, useMemo } from 'react';

// Language determined by trailing /en on pathname (except root which becomes /en)
// Vietnamese default: no /en suffix.

export function useLanguage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { pathname, search, hash } = location;

  const isEnglish = useMemo(() => /(^|\/)[a-z-]+\/en$/.test(pathname) || pathname === '/en', [pathname]);
  const lang = isEnglish ? 'en' : 'vi';

  const basePath = useMemo(() => {
    if (pathname === '/en') return '/';
    return pathname.replace(/\/en$/, '');
  }, [pathname]);

  const buildPath = useCallback((p) => {
    if (lang === 'en') {
      if (p === '/') return '/en';
      return p.replace(/\/$/, '') + '/en';
    }
    return p;
  }, [lang]);

  const toggleLanguage = useCallback(() => {
    if (lang === 'en') {
      // Remove /en
      const target = basePath === '' ? '/' : basePath;
      navigate(target + search + hash);
    } else {
      // Add /en
      if (pathname === '/') navigate('/en' + search + hash);
      else navigate(pathname.replace(/\/$/, '') + '/en' + search + hash);
    }
  }, [lang, basePath, pathname, search, hash, navigate]);

  return { lang, isEnglish, toggleLanguage, buildPath, basePath };
}

export default useLanguage;