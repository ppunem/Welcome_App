// Write your code here
import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {subscribed: true}

  changeState = () => {
    const {subscribed} = this.state
    this.setState(prevState => {
      if (subscribed === true) {
        return {subscribed: false}
        return <button type="button">Subscribe</button>
      }
      return {subscribed: true}
      return <button type="button">Subscribed</button>
    })
  }

  render() {
    const {Subscribed} = this.state
    return (
      <div className="bg">
        <h1>Welcome</h1>
        <p>Thank you! Happy Learning</p>
        {this.changeState()}
      </div>
    )
  }
}

export default Welcome
