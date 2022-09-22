import React from 'react';
import Button from '../Button/Button';
import './Card.css';

const Card = (props) => {

  return <div className="card">
    <div className="card__header">
        <h4>{props.years}</h4>
        <h3 className="md-heading">{props.pricing}</h3>
    </div>
    <div className="card_content text-center">
        { props.pricingInfo && props.pricingInfo.map((info, index) => (
            <li key={index}>{info}</li>
        )) }
    </div>
    <div className='mt-3'>
        <Button buttonText="Get Started" classNames="border-radius-5" />
    </div>
  </div>
}

export default Card;
