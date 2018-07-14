import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator
} from 'react-native'
import ModalComponent from "react-native-modal"
import { hideModal } from '../../Domain/Actions/UIActions'
import AddItemButton from '../AddItemButton/AddItemButton'
import { addMarker } from '../../Domain/Actions/MarkerActions'
import { requestSearchDetails, requestSearchDetailsReset } from '../../Domain/Actions/SearchActions'

class Modal extends Component {

  onPress = (details) => {
    const { addMarker, hideModal } = this.props
    addMarker(details)
    hideModal()
  }

  renderDetails = () => {
    const { details } = this.props
    const openNow = details.opening_hours.open_now ? `Yeah` : `Nope`
    return(
      <View>
        <Text style={styles.title}>{details.name}</Text>
        <Text>{details.website}</Text>
        <Text>{details.formatted_address}</Text>
        <Text>Open now: {openNow}</Text>
        <Text style={styles.title}>{details.rating}</Text>
        <View style={styles.addItem}>
          <AddItemButton onPress={() => this.onPress(details)}/>
        </View>
      </View>
    )
  }

  render() {
    const { 
      showModal, 
      hideModal,
      isFetching,
      details,
      requestSearchDetails,
      requestSearchDetailsReset,
      placeId
    } = this.props
    return (
      <ModalComponent
        style={styles.modal}
        hideModalContentWhileAnimating
        useNativeDriver
        hideModalContentWhileAnimating
        isVisible={showModal}
        onModalShow={() => requestSearchDetails(placeId)}
        onModalHide={() => requestSearchDetailsReset()}
        onBackdropPress={() => hideModal()}
        onBackButtonPress={() => hideModal()}>
        <View style={styles.container}>
          {isFetching && <ActivityIndicator />}
          {details && this.renderDetails()}
        </View>
      </ModalComponent>
    )
  }
}

const styles = StyleSheet.create({
  modal: {
    justifyContent: 'flex-end'
  },
  container: {
    backgroundColor: 'white',
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    padding: 10
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    paddingBottom: 10
  },
  addItem: {
    alignItems: 'flex-end'
  }
})

const mapStateToProps = (state) => {
  return {
    showModal: state.ui.modal.showModal,
    placeId: state.ui.modal.placeId,
    details: state.search.details,
    isFetching: state.search.fetching
  }
}

export default connect(mapStateToProps, {
  hideModal,
  requestSearchDetails,
  requestSearchDetailsReset,
  addMarker
})(Modal)