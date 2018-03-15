import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSample } from '../../actions';

class SampleList extends Component {
    // componentDidMount(){
    //     this.props.fetchSample();
    // }
    componentWillMount(){
        this.props.fetchSample();
    }
    renderSample(){
        return this.props.sample.map( item => {
            return (
                <div key={item._id}>
                    <p>{item.title}</p>                   
                    <p>Posted by {item.author} on <span>{new Date(item.postDate).toLocaleDateString()}</span></p>
                    <p>{item.text}</p> 
                    <hr />                   
                </div>
            );
        });
    }
    render(){
        return (
            <div>               
                {this.renderSample()}
            </div>
        );
    }
}

function mapStateToProps( { sample } ){
    return { sample };
}

export default connect(mapStateToProps, { fetchSample })(SampleList);