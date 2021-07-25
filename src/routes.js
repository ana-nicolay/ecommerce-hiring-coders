import React from 'react';
import cliente from './views/Forms/cliente.js';
import produto  from './views/Forms/produto.js';
import Home from './views/Home';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

export default function Routes() {
	return(
		<BrowserRouter>
			<Switch>
				<Route path= '/' exact component={Home} />
				<Route path= '/forms/cliente' component={cliente} />
				<Route path= '/forms/produto' component={produto} />
			</Switch>
		</BrowserRouter>
	)
};