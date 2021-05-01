import { Home } from 'src/views';
import { RouteProps } from 'react-router-dom';

export type RouteConfig = RouteProps & {
  path: string;
  routes?: RouteConfig[];
};

export const routes: RouteConfig[] = [{ path: '/', component: Home }];
