import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Header extends Component {
    renderContent(){
        switch(this.props.auth){
            case null:
                return;
            case false:
                return <span key="1"><a href="/users/auth/google">Login With Google</a></span>;
            default:
                return [                                        
                    <span key="2" style={{marginLeft: '20px'}}>
                        {this.props.auth.displayName}
                    </span>,
                    <span key="3" style={{marginLeft: '20px'}}>
                        <a href="/users/current/logout">Logout</a>
                    </span>
                ];
        }
    }
    render(){
        return (
            <nav>
                {this.renderContent()}
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