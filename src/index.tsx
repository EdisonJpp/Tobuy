import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Index from './components/index/index';
import Login from './components/login/index';
// import Axios from './config/axios' ;
import CreateUser from './components/createUser/index';
import NewPublication from './components/user/newPublication';
import User from './components/user';
import PublicationById from './components/publications/publicationsById';
import {Provider} from 'react-redux'; 
import ShoppingCart from './components/shoppingCart';
import SellerProfile from './components/seller'; 

import store from './redux/store';
import ReactDOM from 'react-dom';

const App = (
  
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={Index} />
            <Route exact path='/search/:text' component={Index} />
            <Route exact path='/category/:categoryId' component={Index} />
            <Route exact path='/create-publication' component={NewPublication} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/createUser' component={CreateUser} />
            <Route exact path='/user' component={User} />
            <Route exact path='/user/:edit' component={User} />
            <Route exact path='/user/delete/:delete' component={User} />
            <Route exact path='/user/password/:editP' component={User} />
            <Route exact path='/publications/:id' component={PublicationById} />
            <Route exact path='/your-shoppingcart' component={ShoppingCart} />
            {/* <Route exact path='/seller-profile' component={SellerProfile} /> */}
            <Route exact path='/seller-profile/:sellerId' component={SellerProfile} />
            {/* <Route exact path='/seller-profile/:sellerId/:' component={SellerProfile} /> */}
          </Switch>
        </BrowserRouter>
      </Provider>
);

ReactDOM.render(App, document.getElementById('root'));

export default App;
