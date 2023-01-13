import { UrlObject } from 'url';
import { useRouter } from 'next/router';
import { Routes } from '../utils/routes.enum';

export function useRedirect() {
  const router = useRouter();

  return async (path: UrlObject & { pathname: Routes } | Routes, options?: { replace?: boolean }) => {
    if (options?.replace) {
      await router.replace(path);
    } else {
      await router.push(path);
    }
  };
}
