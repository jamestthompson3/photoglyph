import React, { Component } from 'react'
import styled from 'styled-components'

import PhotoList from './containers/photo_list'

const Fullpage = styled.div`
  background: #2d2f33;
  width: 100%;
  height: 100%;
  display: flex;
  color: #dbdbdb;
  overflow-x: hidden;
  position: absolute;
`
class App extends Component {
  render(){
    return (
      <Fullpage>
        <PhotoList />
      </Fullpage>
    )
  }
}

export default App
