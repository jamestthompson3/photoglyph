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
      <div className="center container">
        <h1>Welcome to Photoglyph!</h1>
        <h3><a onClick={this.onClickSend}>Random</a></h3>
      </div>
    );
  }
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchPictures}, dispatch);
}
export default connect(null,mapDispatchToProps)(PhotoDetail);
