import React, { Component } from 'react';
import FormTokenDetails from './FormTokenDetails';
import DisplayLPToken from './DisplayLPToken';
import LPTokenValue from './LPTokenValue';

export class UserForm extends Component {

    state = {
        step: 1,
        tokenContract: '',
        LPToken: '',
    };

    // Next step
    nextStep = () => {
        const { step } = this.state;
        this.setState({
            step: step + 1,
        });
    };

    // Previous step
    prevStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1
        });
    };

    // Handle field change
    handleChange = input => e => {
        this.setState({ [input]: e.target.value });
    };

    render() {
        const { step } = this.state;
        const { tokenContract } = this.state;

        const values = { tokenContract, LPTokenValue }; // Contract & LPToken Adress variables

        switch (step) {
            case 1:
                return (
                    <FormTokenDetails
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                );
            case 2:
                return (
                    <DisplayLPToken
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values}
                    />

                );
        }
    }
}


export default UserForm
