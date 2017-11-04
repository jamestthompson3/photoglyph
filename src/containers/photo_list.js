import React, {Component} from 'react'
import {connect} from 'react-redux'
import request from 'superagent'
import queryString from 'query-string'
import styled from 'styled-components'

const imageStyles = {
  maxWidth: '350px',
  margin: '1rem'
}

const ImageContainer = styled.div`
  height: 100%;
  width: 100%;
`

class PhotoList extends Component {

  state = {
    photos: [],
    loading: true
  }

  onClickSend = () => {
    this.fetchPictures()
  }

  fetchPictures = () => {
    const query = queryString.stringify({
        method: 'flickr.photosets.getPhotos',
        api_key: "06d880ae1de1bd8027f1c803a4588d79",
        photoset_id: "72157672490359490",
        user_id: "136276171@N05",
        per_page: 100,
        page: 1,
        privacy_filter: [1,2,3,4,5],
        format: 'json',
        media: 'photos',
        nojsoncallback: 1
      })

    request.get(`https://api.flickr.com/services/rest/?${query}`)
        .then(({ body: {photoset} }) => {
          this.setState({photos: photoset.photo, loading: false})
        })
  }

  render(){
    const { loading, photos } = this.state
    return (
      <ImageContainer>
        <h1>Welcome to Photoglyph!</h1>
        <h3><a onClick={this.onClickSend}>Click Here</a></h3>
        {
          loading
          ? null
          : photos.map(photo =>
              <img
              key={photo.id}
              alt='missing'
              src={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_z.jpg`}
              style={imageStyles}
            />
          )
        }
      </ImageContainer>
    )
  }
}
function mapStateToProps({photos}) {
  return {photos}
}

export default connect(mapStateToProps)(PhotoList)
