// CreditCard.js
import React from 'react';
import "./PaymentForm.css"
const CreditCard = ({ cardNumber, cardHolder, expiry, cvv }) => {
  return (
    <div className="credit-card">
      <div className="card-number">{cardNumber}</div>
      <div className="card-holder">{cardHolder}</div>
      <div className="expiry-cvv">
        <div className="expiry">{expiry}</div>
        <div className="cvv">{cvv}</div>
      </div>
    </div>
  );
};

export default CreditCard;
