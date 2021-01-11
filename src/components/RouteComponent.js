import React from 'react';
import Nav from './NavComponent';
import MovieWrapper from './WrapperComponent';
import { Route, Switch } from 'react-router-dom';

function SwitchRouter() {
    return (
        <>
            <Nav />
            <Switch>
                <Route exact path="/search/:searchVal" component={MovieWrapper} />
                {/* <Route path="/wishlist" component={WishList} /> */}
            </Switch>
        </>
    );
}

export default SwitchRouter;