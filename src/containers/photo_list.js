import React, {Component} from 'react';
import {connect} from 'react-redux';
class PhotoList extends Component {
  renderPhotos(photoData) {
    return (
    console.log("photo data bieng passed by props",photoData.photos)
    <img href=`https://farm${photoData.photos.photo.farm}.staticflickr.com/${photoData.photos.photo.server}/${data.id}_${photoData.photos.photo.secret}_z.jpg`>
  </img>
  );
  }
  render(){
    return (
      <div>
        {this.props.photos.map(this.renderPhotos)}
      </div>
    )
  }
}
function mapStateToProps({photos}) {
  return {photos};
}
export default connect(mapStateToProps)(PhotoList);
