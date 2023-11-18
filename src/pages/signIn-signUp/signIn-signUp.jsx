import './signin-signup.scss';
import SignIn from '../../components/sign-in/sign-in';
import SignUp from '../../components/sign-up/sign-up';

export const SignInAndSignUp = () => {
  return (
    <div className="sign_in-and-sign_up-container">
      <SignIn />
      <SignUp />
    </div>
  );
};
