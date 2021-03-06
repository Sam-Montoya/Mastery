import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Main from './Components/Main/Main';
import Axios from './Components/Axios/Axios';
import Redux from './Components/Redux/Redux';
import Props from './Components/Props/Props';

export default (
	<Switch>
		<Route exact path='/' component={Main} />
		<Route path='/axios' component={Axios} test='test'/>
		<Route path='/redux' component={Redux} />
		<Route path='/props/:name' component={Props} />
	</Switch>
);
