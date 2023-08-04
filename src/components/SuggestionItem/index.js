import './index.css'

const SuggestionItem = props => {
  const {suggestionsList} = props
  const {id, suggestion} = suggestionsList

  return (
    <li className="list-item">
      <p>{suggestion}</p>
      <button type="button" className="arrow-button">
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
          className="arrow"
        />
      </button>
    </li>
  )
}
export default SuggestionItem
