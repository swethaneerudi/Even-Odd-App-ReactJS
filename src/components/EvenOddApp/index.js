import {Component} from 'react'

import './index.css'

class EvenOddApp extends Component {
  state = {
    countValue: 0,
  }

  getRandomNumber = () => Math.ceil(Math.random() * 100)

  onIncrement = () => {
    const randomValue = this.getRandomNumber()
    this.setState(prevState => ({
      countValue: prevState.countValue + randomValue,
    }))
  }

  render() {
    const {countValue} = this.state
    const displayText = countValue % 2 === 0 ? 'Even' : 'Odd'
    return (
      <div className="even-odd-app-container">
        <div className="even-odd-bg-container">
          <h1 className="count">Count {countValue}</h1>
          <p className="text">Count is {displayText}</p>
          <button
            type="button"
            className="increment-button"
            onClick={this.onIncrement}
          >
            Increment
          </button>
          <p className="note">*Increase By Random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
