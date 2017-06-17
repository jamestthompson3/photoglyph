import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchPictures} from '../actions/index';

class PhotoDetail extends Component {
  constructor(props) {
    super(props);
    this.onClickSend = this.onClickSend.bind(this);
  }
  onClickSend(event) {
    this.props.fetchPictures();
  }
  render() {
    return (
      <div>
        <h1><a onClick={this.onClickSend}>hello</a></h1>
      </div>
    );
  }
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchPictures}, dispatch);
}
export default connect(null,mapDispatchToProps)(PhotoDetail);
