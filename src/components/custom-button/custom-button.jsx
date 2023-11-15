import './custom-button.scss';

export const CustomButton = ({text, ...otherButtonProps}) => {
  return (
    <button
      className={`custom_btn ${
        otherButtonProps.otherSignUpMethod === 'google' ? 'custom_btn-google' : ''
      }`}
      {...otherButtonProps}>
      {text}
    </button>
  );
};
