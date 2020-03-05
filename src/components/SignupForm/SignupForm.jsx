import React, { Component} from 'react';

import styles from './SignupForm.module.css';

import userService from '../../utils/userService';

class SignupForm extends Component  {

    state = this.getInitialState();


    getInitialState() {
        return {
            name: '',
            email: '',
            password: '',
            passwordConfirmation: '',
            error: ''
        };
    }

    isFormValid = () => {
        return (
            this.state.name && 
            this.state.email && 
            this.state.password &&
            this.state.password === this.state.passwordConfirmation
        );
    }



   handleChange = e => {
       this.setState({
           [e.target.name]: e.target.value
       });
    }

    handleSubmit = async e => {
        e.preventDefault();
        if(!this.isFormValid()) return;
       
        try {
            const { name, email, password } = this.state;
            await userService.signup({ name, email, password });
            this.setState(this.getInitialState(),() =>{
               this.props.handleSignupOrLogin();
                this.props.history.push('/');

            });
           
       } catch (error) {
           this.setState({
                name: '',
                email: '',
                password: '',
                passwordConfirmation: '',
                error: error.message
           });
       }
        
    }   

   

    render () {
        return (
            <section className={styles.section}>
                {
                    this.state.error && <p>{this.state.error}</p>
                }
            <form onSubmit={this.handleSubmit} >  
                <fieldset> 
                    <legend>Sign Up</legend>
                        <label htmlFor="name">Full Name</label>
                        <input 
                            id="name" 
                            name="name" 
                            type="text" 
                            value={this.state.name}
                            onChange={this.handleChange}
                        />

                        <label htmlFor="email">Email</label>
                        <input 
                            id="email" 
                            name="email" 
                            type="email" 
                            value={this.state.email} 
                            onChange={this.handleChange}
                        />

                        <label htmlFor="password">Password</label>
                        <input 
                            name="password"     
                            type="password" 
                            value={this.state.password} 
                            onChange={this.handleChange}                        />

                        <label htmlFor="passwordConfirmation">Confirm Password</label>
                        <input 
                            name="passwordConfirmation" 
                            type="password" 
                            value={this.state.passwordConfirmation} 
                            onChange={this.handleChange}
                        />

                    <button  disabled={!this.isFormValid()} type="submit">Submit</button>
                </fieldset>
            </form>
        </section>
        );
    }
}

export default SignupForm;