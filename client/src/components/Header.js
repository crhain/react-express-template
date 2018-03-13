import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Header extends Component {
    render(){
        return (
            <nav>
                User ID: {this.props.auth ? this.props.auth._id : "..."}
                <Link
                    to={'/'}
                    style={{marginLeft: "5px"}}                    
                >
                    Landing
                </Link>
                <Link
                    to={'/main'}
                    style={{marginLeft: "5px"}}
                >
                    Main
                </Link>
            </nav>
        );
    }
}

function mapStateToProps({ auth }){
    return { auth };
}

export default connect(mapStateToProps)(Header);