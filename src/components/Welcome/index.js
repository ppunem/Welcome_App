// Write your code here
import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {subscribed: true}

  changeState = () => {
    const {subscribed} = this.state

    this.setState(
      if (subscribed === true) {
        return ({subscribed: false})
      }else{
      return ({subscribed: true})
      }
    )
  }

  renderButton = () => {
    const {subscribed} = this.state

    if (subscribed === true) {
      return (
        <button type="button" onClick={this.changeState}>
          Subscribed
        </button>
      )
    }

    return (
      <button type="button" onClick={this.changeState}>
        Subscribe
      </button>
    )
  }

  render() {
    const {Subscribed} = this.state
    return (
      <div className="bg">
        <h1>Welcome</h1>
        <p>Thank you! Happy Learning</p>
        {this.renderButton()}
      </div>
    )
  }
}

export default Welcome
