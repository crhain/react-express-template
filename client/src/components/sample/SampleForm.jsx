// SurveyForm shows a form for a user to add input
import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { Link, withRouter } from 'react-router-dom';
import { submitSample } from '../../actions';
import SampleFormField from './SampleFormField';
import sampleFields from './sampleFields';



class SampleForm extends Component {
    renderFields(){        
        return _.map(sampleFields, ({ label, name }) => {
            return (
                    <Field 
                        component={SampleFormField}                     
                        type="text" 
                        key={name}
                        label={label} 
                        name={name} 
                    />
            );
        });
    }
    //onSubmit={ () => this.props.submitSample(this.props.formValues, this.props.history) }
    render(){
        const { handleSubmit, history } = this.props;
        return (
            <div>
                <form 
                    onSubmit={ handleSubmit((values, dispatch) => {                                                
                        //must use dispatch with redux-form or it does not fire action handler
                        dispatch(submitSample(values, history));                                                  
                    }) }              
                >
                    { this.renderFields(this.props.onSubmit) }
                    
                    <Link to="/main" style={{ marginRight: '10px' }}>
                        Cancel                        
                    </Link>
                    <button 
                        type="submit"                        
                    >
                        Next                        
                    </button>                    
                </form>
            </div>
        );
    }
}

//form validation function
function validate(values){
    const errors = {};    
    _.each(sampleFields, ({ name }) => {
        if(!values[name]){
            errors[name] = "You must provide a value";
        }
    });
    return errors;    
}

//wire up redux Form to component using reduxForm 
//reducer provided by reddux-form
export default reduxForm({
    validate,
    form: 'sampleForm'
})(connect(null, { submitSample })(withRouter(SampleForm)));