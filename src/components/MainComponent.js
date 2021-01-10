import React from 'react';
import Nav from './NavComponent';
import MovieWrapper from './WrapperComponent';
import { Route, Switch } from 'react-router-dom';

class Main extends React.Component {
    render() {
        return (
            <>
                  <Nav />
                  <Switch>
                      <Route path="/search/:searchVal" component={MovieWrapper} />
                      {/* <Route path="/wishlist" component={WishList} /> */}
                  </Switch>
              </>
        );
    }
}

export default Main;