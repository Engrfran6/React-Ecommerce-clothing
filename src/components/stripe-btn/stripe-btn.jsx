import {useSelector} from 'react-redux';
import StripeCheckout from 'react-stripe-checkout';
import {cartSelectors} from '../../redux/features/cartSlice/cartSlice';

export const StripeBtn = ({price}) => {
  const cartTotalPrice = useSelector(cartSelectors.selectedTotalItemsPrice);

  const publishableKey =
    'pk_test_51OG5iFHGmRljXsA7Iw4Jn5BR2g7I8mBYCZt1NiAZGH2nNfPHieoF1S0ZwFaZcof8gta3PF1VNclw1UqkP2OYRh0000tJiHRkqf';
  const stripePrice = cartTotalPrice * 100;

  const onToken = (token) => {
    console.log(token);
    alert('payment successful');
  };
  return (
    <div>
      <StripeCheckout
        label="Pay Now"
        amount={stripePrice}
        name="DeuLo Clothing Ltd."
        billingAddress
        shippingAddress
        description={`Your total payment is ${cartTotalPrice}`}
        panelLabel="Pay Now"
        stripeKey={publishableKey}
        token={onToken}
      />
    </div>
  );
};
