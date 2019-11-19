import React from 'react';

import Router from './components/Router';

import routes, { routePath } from './routes';

const App = props => <Router routes={routes} />

export default App;