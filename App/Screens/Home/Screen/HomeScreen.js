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
import { addNewMarker } from '../../../Domain/Actions/MarkerActions'
import { getSearchResults } from '../../../Domain/Selectors/Search'
import { getUserMarkers } from '../../../Domain/Selectors/Markers'
import { hideResultCards } from '../../../Domain/Actions/UIActions/'
import Modal from '../../../Components/Modal/Modal'

class HomeScreen extends Component {
  handleAddMarker = (item) => {
    this.props.addNewMarker(item)
    this.props.hideResultCards()
  }

  handleAnimateToRegion = (coords) => {
    const location = {
      longitude: coords.lng,
      latitude: coords.lat,
      latitudeDelta: 0.025,
      longitudeDelta: 0.025
    }

    this.map.map.animateToRegion(location)
  }

  render() {
    const { showResults, results, markers } = this.props
    const showScrollView = showResults && results

    return (
      <View style={styles.container}> 
        <SearchBox />
        <Map onRef={ref => (this.map = ref)}/>
        <View style={styles.scrollContainer}>
          <ScrollItems items={markers} animateToRegion={this.handleAnimateToRegion}/>
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
  scrollContainer: {
    justifyContent: 'flex-end'
  }
})

const mapStateToProps = (state) => {
  return {
    showResults: state.ui.showResultCards,
    results: getSearchResults(state),
    markers: getUserMarkers(state)
  }
}

export default connect(mapStateToProps, {
  addNewMarker,
  hideResultCards
})(HomeScreen)