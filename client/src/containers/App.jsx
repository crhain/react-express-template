import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

//import other components here
import Header from './Header';
import Landing from '../components/Landing';
import Main from '../components/Main';
import SampleNew from '../components/sample/SampleNew';

class App extends Component {
    componentDidMount() {
        //this fetches information about the current_user whenever the app opens
        this.props.fetchUser();
    }
    render() {
        return (
            <div>                
                <BrowserRouter>
                    <div>
                        <Header />
                        <Route exact path="/" component={Landing} />
                        <Route exact path="/main" component={Main} />
                        <Route exact path="/sample/new" component={SampleNew} />
                    </div>
                </BrowserRouter>
            </div>                        
        );
    }

}

export default connect(null, actions)(App);
