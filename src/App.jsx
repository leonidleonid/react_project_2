import React from "react";
import {BrowserRouter, Route, Redirect, Switch} from "react-router-dom";
import { connect } from 'react-redux';

import css from "./App.module.css";
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import Skills from "./components/Skills/Skills";
import Experience from "./components/Experience/Experience";
import Portfolio from "./components/Portfolio/Portfolio";

class App extends React.Component {
	render() {

		return (
			<BrowserRouter>
				<div className={css.container + ' app_container'}>
					<Header/>
					<div className={css.backTitle + ' app_backTitle'}>{this.props.backTitle}</div>
					<div className={css.content + ' app_content'}>
						<Switch>
							<Route exact path="/" render={() => <Redirect to="/profile"/>}/>
							<Route path="/profile" component={Profile}/>
							<Route path="/skills" component={Skills}/>
							<Route path="/experience" component={Experience}/>
							<Route path="/portfolio" component={Portfolio}/>
						</Switch>
					</div>
				</div>
			</BrowserRouter>
		);
	}
}

export default connect(
	state => ({
		backTitle: state.backTitle
	})
)(App);
