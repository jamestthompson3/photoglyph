import React, { Component } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

import * as actions from './actions'
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
  componentDidMount() {
    this.props.setList()
  }
  render(){
    return (
      <Fullpage>
        <PhotoList />
      </Fullpage>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
      setList: () => dispatch(actions.setList())
  }
}

export default connect(null,mapDispatchToProps)(App)
