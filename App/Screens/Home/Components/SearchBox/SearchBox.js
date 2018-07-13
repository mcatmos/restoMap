import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Keyboard,
  ActivityIndicator
} from 'react-native'
import Icon from 'react-native-vector-icons/Feather'
import { NavigationActions, withNavigation } from 'react-navigation'
import { 
  requestSearch, 
  requestAutocompleteSearch, 
  resetAutocompleteSearch,
  requestSearchDetails 
} from '../../../../Domain/Actions/SearchActions'
import { showResultCards } from '../../../../Domain/Actions/UIActions'
import { getCurrentLocation } from '../../../../Domain/Selectors/Location'
import { getAutocompleteResults } from '../../../../Domain/Selectors/Search'
import PredictiveList from './PredictiveList/PredictiveList'



const navigateAction = NavigationActions.navigate({
  routeName: 'Detail',

  params: {},

  action: NavigationActions.navigate({ routeName: 'Detail' }),
})
 
class SearchBox extends Component {
  state = {
    query: ''
  }

  handleOnSearch = () => {
    const { requestSearch, location } = this.props
    const { query } = this.state
    requestSearch(query, location)
    this.setState({ query: '' })
  }

  handleOnChangeText = ({ text }) => {
    const { 
      requestAutocompleteSearch, 
      location, 
      resetAutocompleteSearch 
    } = this.props
    const { query } = this.state
    this.setState({ query: text })

    if (query.length > 4) {
      requestAutocompleteSearch(query, location)
    }

    if (query.length === 1 || query.length === 0) {
      resetAutocompleteSearch()
    }
  }

  handleOnPress = (placeId) => {
    const { requestSearchDetails } = this.props
    //requestSearchDetails(placeId)
    //this.props.navigation.dispatch(navigateAction)
  }

  render() {
    const { showResultCards, autocompleteResults, isFetching } = this.props
    const searchIcon = isFetching ? 
      <ActivityIndicator size="small" style={[styles.icon, {paddingRight: 20}]}/> 
      : <Icon name={'search'} size={30} style={styles.icon} /> 
    return (
      <View style={styles.fullContainer}>
        <View style={styles.container}>
          <View style={styles.searchContainer}>
            {searchIcon}
            <TextInput
              style={styles.textInput}
              value={this.state.query}
              placeholder={'Search by name'}
              onBlur={Keyboard.dismiss}
              onSubmitEditing={this.handleOnSearch}
              onChangeText={(text) => this.handleOnChangeText({ text })}
            />
          </View>
          <TouchableOpacity onPress={showResultCards}>
            <Icon name={'list'} size={30} style={styles.icon} />
          </TouchableOpacity>
        </View>
        {autocompleteResults && <PredictiveList results={autocompleteResults} onPress={this.handleOnPress}/>}
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    location: getCurrentLocation(state),
    isFetching: state.search.fetching,
    autocompleteResults: getAutocompleteResults(state)
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
  requestAutocompleteSearch,
  showResultCards,
  resetAutocompleteSearch,
  requestSearchDetails
})(withNavigation(SearchBox))