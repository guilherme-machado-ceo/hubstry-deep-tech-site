import routesData from './data/routes.json';
import { PageId } from './types';

interface RouteInfo {
  id: PageId;
  path: string;
  title: string;
  description: string;
}

const ROUTES = routesData.routes as RouteInfo[];
const HOME = ROUTES.find((r) => r.id === 'home')!;

// Prefixo de publicação do Vite: '' em hubstry.dev, '/hubstry-deep-tech-site' no espelho.
const BASE = import.meta.env.BASE_URL.replace(/\/$/, '');

export function routeFor(page: PageId): RouteInfo {
  return ROUTES.find((r) => r.id === page) ?? HOME;
}

export function pathFor(page: PageId): string {
  return BASE + routeFor(page).path;
}

export function pageFromLocation(): PageId {
  let path = window.location.pathname;
  if (BASE && path.startsWith(BASE)) path = path.slice(BASE.length);
  path = path.replace(/\.html$/, '').replace(/\/index$/, '').replace(/\/+$/, '') || '/';

  const byPath = ROUTES.find((r) => r.path === path);
  if (byPath) return byPath.id;

  // Compatibilidade com links antigos no formato hubstry.dev/#ilmo
  const hash = window.location.hash.replace('#', '');
  const byHash = ROUTES.find((r) => r.id === hash);
  return byHash ? byHash.id : 'home';
}

function setMeta(selector: string, attr: string, value: string, create: () => HTMLElement) {
  let el = document.head.querySelector(selector) as HTMLElement | null;
  if (!el) {
    el = create();
    document.head.appendChild(el);
  }
  el.setAttribute(attr, value);
}

export function applySeo(page: PageId) {
  const route = routeFor(page);
  const url = routesData.siteUrl + route.path;
  document.title = route.title;
  setMeta('meta[name="description"]', 'content', route.description, () => {
    const m = document.createElement('meta');
    m.setAttribute('name', 'description');
    return m;
  });
  setMeta('link[rel="canonical"]', 'href', url, () => {
    const l = document.createElement('link');
    l.setAttribute('rel', 'canonical');
    return l;
  });
}
