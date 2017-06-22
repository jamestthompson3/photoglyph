import React, {Component} from 'react';
import {connect} from 'react-redux';
class PhotoList extends Component {
  renderPhotos(photoData) {
    console.log(photoData)
    return (photoData.photoset.photo.map(photo=>
      <div className="center col col-12 sm-col-6 md-col-6 lg-col-12 px2 mb3">
      <img
        key={photo.id}
        src={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_z.jpg`}
        style={{margin:50+"px"}}
        className="modal-content"
      />
    </div>
    )
);
  }
  render(){
    return (
      <div
        className="clearfix">
        {this.props.photos.map(this.renderPhotos)}
      </div>
    )
  }
}
function mapStateToProps({photos}) {
  return {photos};
}
export default connect(mapStateToProps)(PhotoList);
