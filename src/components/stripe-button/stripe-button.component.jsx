import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
	const priceForStripe = price * 100;
	const publishableKey =
		'pk_test_51JYsHzEftksLH0mPsz6ePZJfjz7LxEW7VEyZ9EBdMudv3OHYpMB26DGz5dBMT9ti8c3ybkYX5WjN2KFuwT7F9AJZ00h3zC7S77';
	const onToken = token => {
		console.log(token);
		alert('Payment Succesfull');
	};
	return (
		<StripeCheckout
			label='Pay Now 💳'
			name='CRWN Clothing'
			billingAddress
			shippingAddress
			image='https://svgshare.com/i/CUz.svg'
			description={`Your total is ${price}$`}
			amount={priceForStripe}
			panelLabel='Pay now'
			token={onToken}
			stripeKey={publishableKey}
		/>
	);
};

export default StripeCheckoutButton;
