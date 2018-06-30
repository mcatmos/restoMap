import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, StyleSheet, Dimensions } from 'react-native'
import MapView, { Marker, Callout, PROVIDER_GOOGLE } from 'react-native-maps'
import MyCustomCalloutView from './Components/CalloutView'
import Form from '../Form/Form'
import { addMarker } from '../../Domain/Actions/MarkerActions'
import MapStyle from './Utils/MapStyle'

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
    region: null,
    showForm: false
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

  showForm = (e) => {
    this.setState({ showForm: true })
  }

  hideForm = () => {
    this.setState({ showForm: false })
  }
  
  render() {
    return (
      <View style={styles.container}>
         {this.state.showForm && <Form />}
        <MapView
          provider={ PROVIDER_GOOGLE }
          ref={ map => { this.map = map }}
          style={styles.map}
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
       
        {this.props.markers.length && this.props.markers.map((item, index) => {
          const location = {
            latitude: item.geometry.location.lat,
            longitude: item.geometry.location.lng
          }
          return (
            <Marker key={index} coordinate={location}>
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
    ...StyleSheet.absoluteFillObject,
    flex: 1
  },
  map: {
    width,
    height
  }
})

const mapStateToProps = (state) => {
  return {
    markers: state.markers
  }
}

export default connect(mapStateToProps, {
  addMarker
})(Map)