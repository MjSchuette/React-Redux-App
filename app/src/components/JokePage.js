import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchJoke } from '../actions/actions';

const JokePage = props => {
    useEffect(() => {
        props.fetchJoke();
    }, [])

    return (
        <div>
            <h1>Tell me a joke</h1>
    
            {props.joke && <h3>"{props.joke}"</h3>}
            <button onClick={props.fetchJoke}>Tell me a joke</button>
        </div>
    );
};

const mapStateToProps = state => {
    return{
        joke: state.joke,
        isLoading: state.isLoading
    };
};

export default connect(
    mapStateToProps,
    { fetchJoke }
)(JokePage);