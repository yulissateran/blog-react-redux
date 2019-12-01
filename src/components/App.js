import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import Users from './Users';
import  Menu from './Menu';
import  Tasks from './Tasks';

const  App = ()=> (
<BrowserRouter>
<Menu/>
<div className="margin">
<Route exact path="/" component={ Users }/>
<Route exact path="/tasks" component={ Tasks }/>
</div>
</BrowserRouter>
)

export default App;
