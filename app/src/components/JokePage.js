import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';
import { fetchJoke } from '../actions/actions';

const JokePage = props => {
    useEffect(() => {
        props.fetchJoke();
    }, [props])

    return (
        <div>
            <h1>Tell me a joke</h1>
            {props.isLoading && (<Loader 
                type="Puff" 
                color="#00BFFF" 
                height={100} 
                width={100}/>)}
            {props.joke && <h3>"{props.joke}"</h3>}
            <button onClick={props.fetchJoke}>Tell me a joke</button>
        </div>
    );
};

const mapStateToProps = state => {
    return{
        joke: state.reducer,
        isLoading: state.reducer
    };
};

export default connect(
    mapStateToProps,
    { fetchJoke }
)(JokePage);