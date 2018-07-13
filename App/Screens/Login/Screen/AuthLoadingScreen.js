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
  
   componentDidMount(){
    const { isLogged } = this.props
    this.props.navigation.navigate(isLogged ? 'App' : 'Auth')
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
  return {
    isLogged: state.login.loginSuccessful
  }
}

export default connect(mapStateToProps)(withNavigation(AuthLoadingScreen))