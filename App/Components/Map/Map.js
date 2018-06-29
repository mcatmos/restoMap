import React, { Component } from 'react'
import { View, StyleSheet, Dimensions } from 'react-native'
import MapView, { Marker, Callout } from 'react-native-maps'
import MyCustomCalloutView from './Components/CalloutView'

const { width, height } = Dimensions.get('window')
const LATITUDE_DELTA = 0.01;
const LONGITUDE_DELTA = 0.01;
const initialRegion = {
  latitude: -37.78825,
  longitude: -122.4324,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421,
}

class Map extends Component {
  
  state ={
    ready: false,
    region: null
  }

  map = null

  componentDidMount() {
    this.getCurrentPosition()
  }

  componentDidUpdate(prevProps, prevState) {
    const { ready, region } = this.state
    
    if (prevState.ready !== ready) {
      if (ready) {
        setTimeout(() => this.map.animateToRegion(region), 100);
      }
    }
  }

  getCurrentPosition() {
    navigator.geolocation.getCurrentPosition(
      (position) => {

        const { 
          coords: { 
            latitude, 
            longitude 
          }
        } = position

        const region = {
          latitude,
          longitude,
          latitudeDelta: LATITUDE_DELTA,
          longitudeDelta: LONGITUDE_DELTA,
        }
      this.setState({ region })
    })
  }

  onMapReady = (e) => {
    if(!this.state.ready) {
      this.setState({ ready: true });
    }
  }

  onRegionChange = (region) => {
    console.log('onRegionChange', region);
  };

  onRegionChangeComplete = (region) => {
    console.log('onRegionChangeComplete', region);
  };

  addMarker = (e) => {
    console.log(e.nativeEvent)
  }
  
  render() {
    console.log(this.state)
    return (
      <View style={styles.container}>
        <MapView
          ref={ map => { this.map = map }}
          style={styles.map}
          onMapReady={this.onMapReady}
          onRegionChange={this.onRegionChange}
          onRegionChangeComplete={this.onRegionChangeComplete}
          showsUserLocation
          showsMyLocationButton
          onPress={this.addMarker}
          initialRegion={initialRegion}
        >
          <Marker coordinate={this.state.region}>
            <Callout>
              <MyCustomCalloutView />
            </Callout>
          </Marker>
        </MapView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    flex: 1
  },
  map: {
    width,
    height
  }
})

export default Map