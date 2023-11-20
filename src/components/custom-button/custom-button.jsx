import './custom-button.scss';

export const CustomButton = ({
  text,
  totalPrice,
  isGoogle,
  isFacebook,
  isTwitter,
  isLinkedIn,
  ...otherButtonProps
}) => {
  return (
    <button
      className={`custom_btn ${
        isGoogle
          ? 'custom_btn-google'
          : isFacebook
          ? 'custom_btn-facebook'
          : isTwitter
          ? 'custom_btn-twitter'
          : isLinkedIn
          ? 'custom_btn-linkedin'
          : ''
      }`}
      {...otherButtonProps}>
      {text} <span style={{paddingLeft: '1rem', fontWeight: 'bolder'}}>{totalPrice}</span>
    </button>
  );
};
