import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPhonesData, selectPhone, deselectPhone } from '../../../actions/phones';
import PhoneListComponent from '../../../components/phones/list/PhoneListComponent';

function mapStateToProps(state) {
  return {
    phones: state.phones.list,
    activePhone: state.phones.activePhone
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchPhonesData, selectPhone, deselectPhone }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PhoneListComponent);
