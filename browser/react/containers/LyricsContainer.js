import React, {Component} from 'react'
import store from '../../redux/store.js'

export default class LyricsContainer extends Component{
  constructor() {
    super()
    this.state = store.getState()
  }
  componentDidMount() {
    this.unsubscribe = store.subscribe(() => this.setState(store.getState()));
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render () {
    return (<h1>Just a dumb container</h1>)
  }
}
