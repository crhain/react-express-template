//an example of a functional component
import React from 'react';
import { Link } from 'react-router-dom';
import SampleList from '../containers/sample/SampleList';

const Main = ()  => {
    return (
        <div style={{ textAlign: 'center' }}>
            <h3>Posts</h3>
            <SampleList />
            <Link to="/sample/new">
                New Sample
            </Link>
        </div>
    );
}

export default Main;