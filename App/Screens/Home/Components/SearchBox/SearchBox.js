import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Keyboard
} from 'react-native'
import Icon from 'react-native-vector-icons/Feather'
import { requestSearch } from '../../../../Domain/Actions/SearchActions'
import { showResultCards } from '../../../../Domain/Actions/UIActions'

class SearchBox extends Component {
  state = {
    query: ''
  }

  handleOnSearch = () => {
    const { requestSearch } = this.props
    const { query } = this.state
    requestSearch(query)
    this.setState({ query: '' })
  }

  render() {
    const { showResultCards } = this.props
    return (
      <View style={styles.container}>
        <View style={styles.searchContainer}>
          <Icon name={'search'} size={30} style={styles.icon}/>
          <TextInput
            style={styles.textInput}
            value={this.state.query}
            placeholder={'Search by name'}
            onBlur={Keyboard.dismiss}
            onSubmitEditing={this.handleOnSearch}
            onChangeText={(text) => this.setState({ query: text })}
          />
        </View>
        <TouchableOpacity onPress={showResultCards}>
          <Icon name={'list'} size={30} style={styles.icon} />
        </TouchableOpacity>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    state
  }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    borderBottomWidth: 3,
    borderBottomColor: 'black',
    paddingTop: 20
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 10,
    paddingRight: 10
  },
  textInput: {
    height: 60,
    width: 250,
    paddingLeft: 10,
    fontSize: 20,
    fontWeight: 'bold'
  }
})

export default connect(mapStateToProps, {
  requestSearch,
  showResultCards
})(SearchBox)