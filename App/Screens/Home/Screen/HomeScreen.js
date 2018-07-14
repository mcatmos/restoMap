import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'
import { connect } from 'react-redux'
import Map from '../../../Components/Map/Map'
import ScrollItems from '../../../Components/ScrollItems/ScrollItems'
import SearchBox from '../Components/SearchBox/SearchBox'
import { addMarker } from '../../../Domain/Actions/MarkerActions'
import { getSearchResults } from '../../../Domain/Selectors/Search'
import { hideResultCards } from '../../../Domain/Actions/UIActions/'
import Modal from '../../../Components/Modal/Modal'

class HomeScreen extends Component {
  handleAddMarker = (item) => {
    this.props.addMarker(item)
    this.props.hideResultCards()
  }

  render() {
    const { showResults, results } = this.props
    const showScrollView = showResults && results
    return (
      <View style={styles.container}>       
        <Map />
        <SearchBox />
        <View style={styles.resultsContainer}>
          {showScrollView && <ScrollItems 
            items={results} 
            onPress={(item) => this.handleAddMarker(item)} 
          />}
        </View>
        <Modal />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between'
  },
  resultsContainer: {
    justifyContent: 'flex-end'
  }
})

const mapStateToProps = (state) => {
  return {
    showResults: state.ui.showResultCards,
    results: getSearchResults(state)
  }
}

export default connect(mapStateToProps, {
  addMarker,
  hideResultCards
})(HomeScreen)