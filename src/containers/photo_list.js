import React, {Component} from 'react'
import {connect} from 'react-redux'
import request from 'superagent'
import styled from 'styled-components'
import Downshift from 'downshift'

const imageStyles = {
  // maxWidth: '350px',
  margin: '1rem'
}

function CategoryDownshift({
  items,
  onRemoveItem,
  onToggleMenu,
  addSelectedItem,
  ...rest
}) {
  return (
  <Downshift {...rest}>
    {({
        getRootProps,
        getInputProps,
        getButtonProps,
        getItemProps,
        isOpen,
        toggleMenu,
        clearSelection,
        selectedItem,
        inputValue,
        highlightedIndex,
      }) =>
        <div {...getRootProps()} style={{margin:'auto'}}>
          <Select {...getButtonProps({onClick: onToggleMenu})}>
              {
                selectedItem
                ? selectedItem.label
                : 'select a category   🔍'
              }
          </Select>
          {!isOpen
            ? null
            : <div>
                {items.map((item, index) =>
                  <Category
                    key={item.label}
                    {...getItemProps({
                      item,
                      index,
                      isActive: highlightedIndex === index,
                      isSelected: selectedItem === item
                    })}
                  >
                    {item.label}
                  </Category>,
                )}
              </div>}
        </div>}
    </Downshift>
)}
const ImageContainer = styled.div`
  height: 100%;
  width: 100%;
`
const Category = styled.div`
  padding: 8px;
  font-size: 14px;
  border: 1px solid;
  border-radius: 5px;
  text-align: center;
  margin: auto;
  display: flex;
  flex-direction: row;
  background: ${({isActive}) => isActive ? '#6d6d6d' : 'transparent'};
  &: hover {
    background: #6d6d6d;
  }
`
const CategoryContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: auto;
  width: 85%;
`
const Select = styled.button`
  border: 1px solid #c1c1c1;
  border-radius: 5px;
  text-align: center;
  font-size: 14px;
  padding: 8px;
  margin: auto;
  background: #717171;
  &: active {
    outline: none;
  }
  &: focus {
    outline: none;
  }
`
const options = [
  { label: '🌍 Earth', value: 'earthporn' },
  { label: '🏛 Architecture', value: 'architectureporn' },
  { label: '🚀 Space', value: 'spaceporn' },
  { label: '😳 Random', value: 'random' }
]


class PhotoList extends Component {

  state = {
    photos: [],
    loading: true,
    selectedItem: null,
    isOpen: false
  }


  fetchPictures = (category) => {
    category === 'random'
    ? this.fetchRandom()
    : request.get(`https://www.reddit.com/r/${category}/new.json`)
      .then(({ body: {data: {children}} }) =>
        this.setState({photos: children.map(({data}) => data), loading: false})
  )}

  fetchRandom = () => {
    const { randomList } = this.props
    const choice = randomList[Math.floor(Math.random()*randomList.length)]
    this.fetchPictures(choice)
  }

  handleChange = (selectedItem, downshiftState) => {
    if (!selectedItem) {
      this.removeItem(selectedItem);
    } else {
      this.addSelectedItem(selectedItem);
    }
  }

  addSelectedItem(item) {
    this.setState({selectedItem: item, isOpen: false})
    this.fetchPictures(item.value)
  }

  handleToggleMenu = () => {
    this.setState(({isOpen}) => ({isOpen: !isOpen}))
  }

  render(){
    const { loading, photos, selectedItem, isOpen } = this.state
    return (
      <ImageContainer>
        <h1>Welcome to Photoglyph!</h1>
        <CategoryContainer>
        <CategoryDownshift
          items={options}
          onChange={this.handleChange}
          selectedItem={selectedItem}
          isOpen={isOpen}
          onToggleMenu={this.handleToggleMenu}
        />
        </CategoryContainer>
        {
          loading
          ? null
          : photos.map(photo =>
              <img
              key={photo.id}
              alt={photo.title}
              src={photo.thumbnail}
              style={imageStyles}
            />
          )
        }
      </ImageContainer>
    )
  }
}

const mapStateToProps = state => {
  return {
    randomList: state.randomList,
  }
}

export default connect(mapStateToProps)(PhotoList)
