import React, {Component} from 'react';
import {FormInput} from '../form-input/form-input';
import {CustomButton} from '../custom-button/custom-button';
import './sign-in.scss';
import {signInWithGoogle} from '../../firebase/firebase.utils';

export default class SignIn extends Component {
  constructor() {
    super();

    this.state = {
      formValue: {email: '', password: ''},
    };
  }

  handleChange = (e) => {
    const {name, value} = e.target;

    this.setState((prevState) => ({
      formValue: {...prevState.formValue, [name]: value},
    }));
  };

  handleSubmit = (e) => {
    e.preventDefault();

    console.log('Form submitted:', this.state.formValue);
  };

  render() {
    return (
      <div className="signIn_form">
        <h2 className="signIn_title">Already have an account ?</h2>
        <span>Sign in with your email and password</span>
        <form className="form_group" autoComplete="true" onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="email"
            value={this.state.formValue.email}
            handleChange={this.handleChange}
            label="Email"
            required
          />
          <FormInput
            type="text"
            name="password"
            value={this.state.formValue.password}
            handleChange={this.handleChange}
            label="Password"
            required
          />

          <div className="buttons_group">
            <CustomButton type="submit" text="Sign In" />

            <CustomButton
              type="button"
              text="Login With Google"
              otherSignUpMethod="google"
              onClick={signInWithGoogle}
            />
          </div>
        </form>
      </div>
    );
  }
}
