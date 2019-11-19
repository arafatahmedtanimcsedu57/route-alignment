import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const SimpleRouter = ({ routes, children }) => (
    <Router>
        {children}
        <Switch>
            {routes.map((route, i) => (
                <RouteWithSubRoutes key={i} {...route} />
            ))}
            <Route path="*" render={() => <h1>404! Not Found</h1>} />
        </Switch>
    </Router>
);

const RouteWithSubRoutes = route => (
    <Route
        path={route.path}
        render={props => <route.component {...props} routes={route.routes} />}
    />
);

export default SimpleRouter;