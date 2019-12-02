import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import Users from './Users/index';
import  Menu from './Menu';
import  Tasks from './Tasks';
import Publications from './Publications';

const  App = (props)=> (
<BrowserRouter>
<Menu/>

<Route exact path="/" component={ Users }/>
<Route exact path="/tasks" component={ Tasks }/>
<Route exact path="/publications/:key" component={ Publications }/>

</BrowserRouter>
)

export default App;
