import {Component} from 'react';
import {FormInput} from '../form-input/form-input';
import {CustomButton} from '../custom-button/custom-button';
import './sign-up.scss';
import {createUserWithEmailAndPassword} from 'firebase/auth';
import {auth, createUserFromProfileDocument} from '../../firebase/firebase.utils';

export default class SignUp extends Component {
  constructor() {
    super();

    this.state = {
      formValue: {
        displayName: '',
        email: '',
        password: '',
        confirmPassword: '',
      },

      alert: {
        message: '',
      },
    };
  }

  handleChange = (e) => {
    const {name, value} = e.target;

    this.setState((prevState) => ({
      formValue: {...prevState.formValue, [name]: value},
    }));
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const {displayName, email, password, confirmPassword} = this.state.formValue;

    if (password !== confirmPassword) {
      this.setState({alert: {message: 'Password do not match'}});
      return;
    }

    try {
      const {user} = await createUserWithEmailAndPassword(auth, email, password);

      await createUserFromProfileDocument(user, {displayName});

      this.setState({
        formValue: {
          displayName: '',
          email: '',
          password: '',
          confirmPassword: '',
        },
      });
    } catch (error) {
      console.error(error);
    }
  };

  render() {
    return (
      <div className="sign_up-container">
        <h2>Don't have an account?</h2>
        <span>create an account with us</span>
        <form onSubmit={this.handleSubmit} autoComplete="true">
          <FormInput
            type="text"
            name="displayName"
            value={this.state.formValue.displayName}
            handleChange={this.handleChange}
            label="Full Name"
            required
          />
          <FormInput
            type="text"
            name="email"
            value={this.state.formValue.email}
            handleChange={this.handleChange}
            label="Email"
            required
          />
          <FormInput
            type="password"
            name="password"
            value={this.state.formValue.password}
            handleChange={this.handleChange}
            label="Password"
            required
          />
          <FormInput
            type="password"
            name="confirmPassword"
            value={this.state.formValue.confirmPassword}
            handleChange={this.handleChange}
            label="Confirm Password"
            required
          />
          <small>{this.state.alert.message}</small>
          <CustomButton type="submit" text="Sign Up" />
        </form>
      </div>
    );
  }
}
