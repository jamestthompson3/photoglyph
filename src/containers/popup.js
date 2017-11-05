import React, { Component } from 'react'
import ReactDOM from 'react-dom'

const modalRoot = document.getElementById('modal-root')
const modal = document.createElement('div')

class Popup extends Component {
  componentDidMount() {
    modalRoot.appendChild(modal)
  }

  componentWillUnmount() {
    modalRoot.removeChild(modal)
  }

  render() {
    return ReactDOM.createPortal(
      this.props.children,
      modal
    )
  }
}


export default Popup
