import {Component} from 'react'
import SuggestionItem from '../SuggestionItem'

import './index.css'

class GoogleSuggestions extends Component {
  render() {
    const {suggestionsList} = this.props
    return (
      <div className="container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          alt="google logo"
          className="logo"
        />
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
          alt="search icon"
          className="search-icon"
        />
        <input
          type="search"
          placeholder="Search Google"
          onChange={this.onChangeInput}
          className="search-input"
        />
        <ul>
          {suggestionsList.map(each => (
            <SuggestionItem key={each.id} suggestionsList={each} />
          ))}
        </ul>
      </div>
    )
  }
}
export default GoogleSuggestions
