import './custom-button.scss';

export const CustomButton = ({text, isGoogle, ...otherButtonProps}) => {
  return (
    <button className={`custom_btn ${isGoogle ? 'custom_btn-google' : ''}`} {...otherButtonProps}>
      {text}
    </button>
  );
};
