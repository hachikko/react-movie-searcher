import React from 'react';
import SwitchRouter from './RouteComponent';
import MoreInfo from './MoreInfoComponent';
import { Route, Switch, Redirect } from 'react-router-dom';

class Main extends React.Component {
    render() {
        return (
            <Switch>
                <Route exact path="/id/:id" component={MoreInfo} />
                <Route path="/" component={SwitchRouter} />
            </Switch>
        );
    }
}

export default Main;