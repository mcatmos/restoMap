import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity
} from 'react-native'
import { connect } from 'react-redux'
import { requestLogin } from '../../../Domain/Actions/LoginActions'

class LoginScreen extends Component {
  state = {
    password: '',
    mail: ''
  }

  renderMailInput = () => {
    return (
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputBox}
          placeholder='Type your Email'
          placeholderTextColor='grey'
          value={this.state.mail}
          onChangeText={(text) => { this.setState({ mail: text}) }}
        />
      </View>
    )
  }

  renderPasswordInput = () => {
    return (
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputBox}
          placeholder='Type your Password'
          placeholderTextColor='grey'
          value={this.state.password}
          onChangeText={(text) => { this.setState({ password: text}) }}
        />
      </View>
    )
  }

  submitLogIn = () => {
    const { mail, password } = this.state
    this.props.requestLogin(mail, password)
  }

  renderSubmit = () => {
    return (
      <TouchableOpacity 
        style={styles.button}
        onPress={() => this.submitLogIn()}
      >
        <Text style={styles.buttonText}>Log In</Text>
      </TouchableOpacity>
    ) 
  }


  render() {
    return (
      <View style={styles.container}>
        {this.renderMailInput()}
        {this.renderPasswordInput()}
        {this.renderSubmit()}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 100,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  inputBox: {
    height: 60,
    width: 300,
    fontSize: 20,
    fontWeight: 'bold'
  },
  inputContainer: {
    borderBottomColor: 'black',
    borderBottomWidth: 3
  },
  button: {
    marginTop: 40,
    paddingHorizontal: 40,
    paddingVertical: 20,
    backgroundColor: 'black',
    width: 300,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold'
  }
})

const mapStateToProps = (state) => {
  return {
    isFetching: state.login.isFetching
  }
}

export default connect(mapStateToProps, {
  requestLogin
})(LoginScreen)