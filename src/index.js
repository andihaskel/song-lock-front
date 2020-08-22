/*!

=========================================================
* Paper Dashboard React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)

* Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";
import "assets/scss/paper-dashboard.scss?v=1.1.0";
import "assets/demo/demo.css";
import "perfect-scrollbar/css/perfect-scrollbar.css";

import AdminLayout from "layouts/Admin.jsx";
import SongLayout from "layouts/Song.jsx";
import ShareSongLayout from "layouts/ShareSong.jsx";
import MilestoneLayout from "layouts/Milestone.jsx";


import SignIn from './views/signIn/SignIn.jsx';
import Song from './views/song/Song.jsx';
import MilestoneList from './views/song/MilestoneList.jsx';




export const hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/sign-in" component={SignIn} />
      <Route path="/admin" render={props => <AdminLayout {...props} />} />
      <Route path="/create-song" render={props => <SongLayout {...props} />}/>
      <Route path="/share-song" render={props => <ShareSongLayout {...props} />}/>
      <Route path="/song/acontracorriente" render={props => <MilestoneLayout {...props} />}/>

      
      <Redirect to="/admin/orders" />
    </Switch>
  </Router>,
  document.getElementById("root")
);
