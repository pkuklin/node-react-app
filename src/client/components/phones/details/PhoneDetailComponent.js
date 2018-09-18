import React from 'react';
import './PhoneDetailComponent.css';
import PropTypes from 'prop-types';

const PhoneDetailComponent = (props) => {
  const { phone } = props;
  return (
    <div className="details-content">
      <img className="phone-details-img" src={phone.imgUrl} alt={phone.name} />
      <div className="details-table">
        <div className="cell">
          <div>Name:</div>
          <div>{phone.name}</div>
        </div>
        <div className="cell">
          <div>Description:</div>
          <div>{phone.description}</div>
        </div>
        <div className="cell">
          <div>Screen size:</div>
          <div>{phone.screen}</div>
        </div>
        <div className="cell">
          <div>Resolution:</div>
          <div>{phone.resolution}</div>
        </div>
        <div className="cell">
          <div>Storage:</div>
          <div>{phone.storage}</div>
        </div>
        <div className="cell">
          <div>Ram:</div>
          <div>{phone.ram}</div>
        </div>
      </div>
    </div>
  );
};

PhoneDetailComponent.defaultProps = {
  phone: null
};


PhoneDetailComponent.propTypes = {
  phone: PropTypes.shape({})
};

export default PhoneDetailComponent;
