import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withNavigation } from 'react-navigation' 
import {
  ActivityIndicator,
  View,
  Text,
  StyleSheet
} from 'react-native'
import { appIsReady } from '../../../Domain/Actions/UIActions';

class AuthLoadingScreen extends Component {
  
  static getDerivedStateFromProps(props){
    console.log(props)
    const { isLogged, ui } = props
    if (ui) {
       this.props.navigation.navigate(isLogged ? 'App' : 'Auth')
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator color="black" size="small" />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

const mapStateToProps = (state) => {
  if (state.ui) {
    if (state.ui.appIsReady) {
      return {
        isLogged: state.login.loginSuccessful
      }
    }
  }
  return state
}

export default connect(mapStateToProps)(withNavigation(AuthLoadingScreen))