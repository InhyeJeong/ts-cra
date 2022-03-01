import { ReactElement, Suspense } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { routes } from './routes/config';

export function App(): ReactElement {
  return (
    <Suspense fallback={'loading...'}>
      <BrowserRouter>
        <Switch>
          {routes.map((route) => {
            console.log('route', route);
            return (
              <Route
                key={route.path}
                path={route.path}
                render={(props) => {
                  const componentProps = { ...props, routes: route.routes };
                  return (
                    route.component && <route.component {...componentProps} />
                  );
                }}
              />
            );
          })}
        </Switch>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
