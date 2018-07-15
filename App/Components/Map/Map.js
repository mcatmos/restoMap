import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, StyleSheet, Dimensions } from 'react-native'
import MapView, { Marker, Callout, PROVIDER_GOOGLE } from 'react-native-maps'
import MyCustomCalloutView from './Components/CalloutView'
import { addMarker } from '../../Domain/Actions/MarkerActions'
import MapStyle from './Utils/MapStyle'
import { getCurrentLocation } from '../../Domain/Selectors/Location'
import { getFollowingMarkers } from '../../Domain/Selectors/Markers';

const { width, height } = Dimensions.get('window')
const ASPECT_RATIO = width / height
const LATITUDE_DELTA = 0.03
const LONGITUDE_DELTA = 0.03
const initialRegion = {
  latitude: -37.78825,
  longitude: -122.4324,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421,
}

class Map extends Component {
  
  state ={
    ready: false,
    region: null,
    showForm: false
  }

  map = null

  componentDidMount() {
    this.props.onRef(this)
  }

  componentWillUnmount() {
    this.props.onRef(undefined)
  }

  componentDidUpdate(prevProps, prevState) {
    const { ready } = this.state
    const { location } = this.props
    
    let region = {
      latitudeDelta: LATITUDE_DELTA,
      longitudeDelta: LONGITUDE_DELTA
    }

    if (location) {
      region = {
        ...region,
        latitude: location.latitude,
        longitude: location.longitude
      }
    } else {
      region = {
        ...region,
        latitude: 0,
        longitude: 0
      }
    }
    

    if (prevState.ready !== ready) {
      if (ready) {
        setTimeout(() => this.map.animateToRegion(region), 100);
      }
    }
  }

  onMapReady = (e) => {
    if(!this.state.ready) {
      this.setState({ ready: true });
    }
  }

  showForm = (e) => {
    this.setState({ showForm: true })
  }

  hideForm = () => {
    this.setState({ showForm: false })
  }

  handleMarkerOnpress = (e) => {
    const coords = {
      ...e.nativeEvent.coordinate,
      latitudeDelta: LATITUDE_DELTA,
      longitudeDelta: LONGITUDE_DELTA
    }

    console.log(coords)
    this.map.animateToRegion(coords)
  }
  
  render() {
    const { showForm } = this.state
    const { markers, followingMarkers } = this.props

    return (
      <View style={styles.container}>
        <MapView
          provider={ PROVIDER_GOOGLE }
          ref={ map => { this.map = map }}
          style={styles.map}
          loadingEnabled
          onMapReady={this.onMapReady}
          onRegionChange={this.onRegionChange}
          onRegionChangeComplete={this.onRegionChangeComplete}
          showsUserLocation
          showsMyLocationButton
          customMapStyle={MapStyle}
          onLongPress={this.showForm}
          onPress={this.hideForm}
          initialRegion={initialRegion}
        >
       
        {Object.values(markers).length && Object.values(markers).map((item, index) => {
          const latitude = item.geometry.location.lat
          const longitude = item.geometry.location.lng
          
          const location = {
            latitude,
            longitude
          }

          return (
            <Marker 
              key={index} 
              coordinate={location} 
              onPress={this.handleMarkerOnpress}
            >
              <Callout>
                <MyCustomCalloutView />
              </Callout>
            </Marker>
          )
        })}
         
        </MapView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  map: {
    width,
    height: height - 80
  }
})

const mapStateToProps = (state) => {
  return {
    markers: state.markers,
    followingMarkers: getFollowingMarkers(state),
    location: getCurrentLocation(state)
  }
}

export default connect(mapStateToProps, {
  addMarker
})(Map)