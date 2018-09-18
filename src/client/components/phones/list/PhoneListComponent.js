import React, { Component } from 'react';
import './PhoneListComponent.css';
import PropTypes from 'prop-types';
import PhonesApi from '../../../api/phones';
import logo from '../../../logo.svg';
import PhoneDetailComponent from '../details/PhoneDetailComponent';

class PhoneListComponent extends Component {
  componentDidMount() {
    const { fetchPhonesData } = this.props;
    PhonesApi.getPhones().then((response) => {
      fetchPhonesData(response);
    });
  }

  render() {
    const {
      phones, activePhone, selectPhone, deselectPhone
    } = this.props;

    if (!phones.length) {
      return (
        <div className="loader-container">
          <img src={logo} className="spinner" alt="logo" />
        </div>);
    }

    if (activePhone) {
      return (
        <div className="details">
          <div
            className="back"
            onClick={() => deselectPhone()}
            onKeyPress={() => {}}
            role="button"
            tabIndex="0"
          >
            Go back
          </div>
          <PhoneDetailComponent phone={activePhone} />
        </div>
      );
    }

    return (
      <div className="phones">
        {
          phones.map((phone, index) => (
            <div className="phone" key={phone.id}>
              <img className="phone-img" src={phone.imgUrl} alt={phone.name} />
              <div
                className="details-btn"
                onClick={() => selectPhone(phone)}
                onKeyPress={() => {}}
                role="button"
                tabIndex={index}
              >
                {phone.name}
              </div>
            </div>
          ))
        }
      </div>
    );
  }
}

PhoneListComponent.defaultProps = {
  phones: [],
  activePhone: null,
  fetchPhonesData: null,
  selectPhone: null,
  deselectPhone: null
};


PhoneListComponent.propTypes = {
  phones: PropTypes.arrayOf(PropTypes.shape({})),
  activePhone: PropTypes.shape({}),
  fetchPhonesData: PropTypes.func,
  selectPhone: PropTypes.func,
  deselectPhone: PropTypes.func,
};

export default PhoneListComponent;
